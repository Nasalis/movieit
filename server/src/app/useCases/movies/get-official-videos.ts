import { tmdbAPI } from '../../../infra/config/axios';
import { Video } from '../../schemas/video';

interface IGetOfficialVideosRequest {
  id: string;
}

interface IGetOfficialVideosResponse {
  videos: {
    url: string;
    published_at: string;
  }[];
}

type MovieVideos = {
  results: Video[];
};

export class GetOfficialVideos {
  public async execute(
    request: IGetOfficialVideosRequest,
  ): Promise<IGetOfficialVideosResponse> {
    const { id } = request;

    const { data } = await tmdbAPI.get<MovieVideos>(
      `/movie/${id}/videos?language=en-US`,
    );

    const trailer = data.results.filter(
      (el) => el.official && el.site.toLowerCase() === 'YouTube'.toLowerCase(),
    );

    if (trailer.length === 0) {
      return { videos: [] };
    }
    return { videos: trailer.map(this.turnOnTrailer) };
  }

  private turnOnTrailer(video: Video) {
    return {
      url: `https://www.youtube.com/watch?v=${video.key}`,
      published_at: video.published_at,
    };
  }
}

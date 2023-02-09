import { tmdbAPI } from '../../../infra/config/axios';

interface IGetTopRatedResponse {
  topRatedIds: { id: string }[];
}

type TopRatedMovies = {
  results: { id: string }[];
};

export class GetTopRated {
  async execute(): Promise<IGetTopRatedResponse> {
    const { data } = await tmdbAPI.get<TopRatedMovies>(
      'movie/top_rated?language=en-US',
    );

    return { topRatedIds: data.results };
  }
}

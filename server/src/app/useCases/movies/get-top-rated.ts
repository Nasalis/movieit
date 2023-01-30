import { tmdbAPI } from '../../../infra/config/axios';

interface IGetTopRatedResponse {
  topRatedIds: { id: number }[];
}

type TopRatedMovies = {
  results: { id: number }[];
};

export class GetTopRated {
  async execute(): Promise<IGetTopRatedResponse> {
    const { data } = await tmdbAPI.get<TopRatedMovies>(
      'movie/top_rated?language=en-US',
    );

    return { topRatedIds: data.results };
  }
}

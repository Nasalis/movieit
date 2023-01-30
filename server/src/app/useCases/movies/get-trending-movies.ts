import { tmdbAPI } from '../../../infra/config/axios';

interface IGetTrendingMoviesResponse {
  trendingMoviesIds: { id: number }[];
}

type TrendingMoviesResponse = {
  results: { id: number }[];
};

export class GetTrendingMovies {
  async execute(): Promise<IGetTrendingMoviesResponse> {
    const { data } = await tmdbAPI.get<TrendingMoviesResponse>(
      'trending/movie/day?language=en-US',
    );

    return { trendingMoviesIds: data.results };
  }
}

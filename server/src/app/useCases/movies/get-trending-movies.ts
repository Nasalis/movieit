import { tmdbAPI } from '../../../infra/config/axios';

interface IGetTrendingMoviesResponse {
  trendingMoviesIds: { id: string }[];
}

type TrendingMoviesResponse = {
  results: { id: string }[];
};

export class GetTrendingMovies {
  async execute(): Promise<IGetTrendingMoviesResponse> {
    const { data } = await tmdbAPI.get<TrendingMoviesResponse>(
      'trending/movie/day?language=en-US',
    );

    return { trendingMoviesIds: data.results };
  }
}

import { tmdbAPI } from '../../../infra/config/axios';
import { Recommendation } from '../../schemas/recommendation';

interface IGetMovieRecommendationsRequest {
  id: string;
}

interface IGetMovieRecommendationsResponse {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  results: Recommendation[];
}

type axiosResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Recommendation[];
};

export class GetMovieRecommendations {
  public async execute(
    request: IGetMovieRecommendationsRequest,
  ): Promise<IGetMovieRecommendationsResponse> {
    const { id } = request;

    const { data } = await tmdbAPI.get<axiosResponse>(
      `movie/${id}/recommendations?language=en-US`,
    );

    return {
      results: data.results.map(this.turnOnRecommendationFormat),
      currentPage: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
    };
  }

  private turnOnRecommendationFormat(recommendation: Recommendation) {
    return {
      id: recommendation.id,
      title: recommendation.title,
      poster_path: recommendation.poster_path,
      release_date: recommendation.release_date,
      vote_average: recommendation.vote_average,
    };
  }
}

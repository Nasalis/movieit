import { tmdbAPI } from '../../../infra/config/axios';
import { Review } from '../../schemas/review';

interface IGetMovieReviewsRequest {
  id: string;
}

interface IGetMovieReviewsResponse {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  results: Review[];
}

type axiosResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Review[];
};

export class GetMovieReviews {
  public async execute(
    request: IGetMovieReviewsRequest,
  ): Promise<IGetMovieReviewsResponse> {
    const { id } = request;

    const { data } = await tmdbAPI.get<axiosResponse>(
      `movie/${id}/reviews?language=en-US`,
    );

    return {
      results: data.results.map(this.turnOnReviewFormat),
      currentPage: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
    };
  }

  private turnOnReviewFormat(review: Review) {
    return {
      author_details: {
        username: review.author_details.username,
        avatar_path: review.author_details.avatar_path,
      },
      content: review.content,
      created_at: review.created_at,
      id: review.id,
      url: review.url,
    };
  }
}

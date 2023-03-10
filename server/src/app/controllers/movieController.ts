import { Request, Response } from 'express';

import Controller from '../../utils/controller.decorator';
import { Get } from '../../utils/handlers.decorator';
import { GetMovie } from '../useCases/movies/get-movie';
import { GetMovieAggregateCredits } from '../useCases/movies/get-movie-aggregate-credits';
import { GetMovieRecommendations } from '../useCases/movies/get-movie-recommendations';
import { GetMovieReviews } from '../useCases/movies/get-movie-reviews';
import { GetTopRated } from '../useCases/movies/get-top-rated';
import { GetTrendingMovies } from '../useCases/movies/get-trending-movies';

@Controller('/movie')
export default class MovieController {
  private getMovie: GetMovie;
  private getTrendingMovies: GetTrendingMovies;
  private getTopRatedMovies: GetTopRated;
  private getMovieAggregateCredits: GetMovieAggregateCredits;
  private getMovieRecommendations: GetMovieRecommendations;
  private getMovieReviews: GetMovieReviews;

  constructor() {
    this.getMovie = new GetMovie();
    this.getTrendingMovies = new GetTrendingMovies();
    this.getTopRatedMovies = new GetTopRated();
    this.getMovieAggregateCredits = new GetMovieAggregateCredits();
    this.getMovieRecommendations = new GetMovieRecommendations();
    this.getMovieReviews = new GetMovieReviews();
  }

  @Get('/trending')
  public async trendingMovies(request: Request, response: Response) {
    const { trendingMoviesIds } = await this.getTrendingMovies.execute();
    const trendingMovies = await Promise.all(
      trendingMoviesIds.map(async (el) => {
        const { movie } = await this.getMovie.execute(el);
        return movie;
      }),
    ).then((result) => result);
    response.json(trendingMovies.map((movie) => movie.props));
  }

  @Get('/top-rated')
  public async topRatedMovies(request: Request, response: Response) {
    const { topRatedIds } = await this.getTopRatedMovies.execute();
    const topRatedMovies = await Promise.all(
      topRatedIds.map(async (el) => {
        const { movie } = await this.getMovie.execute(el);
        return movie;
      }),
    ).then((result) => result);
    response.json(topRatedMovies.map((movie) => movie.props));
  }

  @Get('/:id')
  public async index(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.getMovie.execute({ id });
    const cast = await this.getMovieAggregateCredits.execute({ id });
    const recommendations = await this.getMovieRecommendations.execute({
      id,
    });
    const reviews = await this.getMovieReviews.execute({ id });

    response.json({
      info: result.movie,
      credits: cast,
      recommendations: recommendations,
      reviews: reviews,
    });
  }
}

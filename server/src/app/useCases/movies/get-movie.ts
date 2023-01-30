import { JsonToMovie } from '../../../adapter/jsonToMovieProps';
import { tmdbAPI } from '../../../infra/config/axios';
import { Movie } from '../../entities/Movie';

interface IGetMovieRequest {
  id: number;
}

interface IGetMovieResponse {
  movie: Movie;
}

export class GetMovie {
  async execute(request: IGetMovieRequest): Promise<IGetMovieResponse> {
    const { id } = request;

    const { data } = await tmdbAPI.get(`/movie/${id}?language=en-US`);

    const movieConverted = JsonToMovie.toMovie(data);

    return { movie: movieConverted };
  }
}

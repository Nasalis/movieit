import { JsonToMovieProps } from '../../adapter/jsonToMovieProps';
import { tmdbAPI } from '../../infra/config/axios';
import { IMovieProps } from '../entities/Movie';

interface IGetMovieRequest {
  id: number;
}

interface IGetMovieResponse {
  movie: IMovieProps;
}

export class GetMovie {
  async execute(request: IGetMovieRequest): Promise<IGetMovieResponse> {
    const { id } = request;

    const { data } = await tmdbAPI.get(`/movie/${id}?language=en-US`);

    const movieConverted = JsonToMovieProps.toMovieProps(data);
    return { movie: movieConverted };
  }
}

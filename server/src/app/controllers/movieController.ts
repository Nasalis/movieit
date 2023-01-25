import { Request, Response } from 'express';

import Controller from '../../utils/controller.decorator';
import { Get } from '../../utils/handlers.decorator';
import { GetMovie } from '../useCases/get-movie';

@Controller('/movie')
export default class MovieController {
  private getMovie: GetMovie;
  constructor() {
    this.getMovie = new GetMovie();
  }

  @Get('')
  public async index(request: Request, response: Response) {
    const result = await this.getMovie.execute({ id: 1578 });
    response.json(result);
  }
}

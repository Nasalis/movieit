import { tmdbAPI } from '../../../infra/config/axios';
import { Cast } from '../../schemas/cast';

interface IGetMovieAggregateCreditsRequest {
  id: number;
}

interface IGetMovieAggregateCreditsResponse {
  cast: Cast[];
  crew: Cast[];
}

type MovieCast = {
  cast: Cast[];
  crew: Cast[];
};

export class GetMovieAggregateCredits {
  public async execute(
    request: IGetMovieAggregateCreditsRequest,
  ): Promise<IGetMovieAggregateCreditsResponse> {
    const { id } = request;
    const { data } = await tmdbAPI.get<MovieCast>(
      `/movie/${id}/credits?language=en-US`,
    );

    const castList: Cast[] = this.fillArrayCast(data.cast);
    const crewList: Cast[] = this.fillArrayCrew(data.crew);

    return {
      cast: castList,
      crew: crewList,
    };
  }

  private fillArrayCast(array: Cast[]) {
    return array.map((el) => ({
      id: el.id,
      name: el.name,
      profile_path: el.profile_path,
      character: el.character,
    }));
  }

  private fillArrayCrew(array: Cast[]) {
    return array.map((el) => ({
      id: el.id,
      name: el.name,
      profile_path: el.profile_path,
      department: el.department,
      job: el.job,
    }));
  }
}

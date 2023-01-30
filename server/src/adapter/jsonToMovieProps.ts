import { Movie } from '../app/entities/Movie';
import Reception from '../app/objectValues/reception';

export class JsonToMovie {
  public static toMovie(jsonData: any): Movie {
    return new Movie({
      id: jsonData.id,
      backdrop_path: jsonData.backdrop_path,
      budget: jsonData.budget,
      genres: jsonData.genres,
      homepage: jsonData.homepage,
      original_language: jsonData.original_language,
      original_title: jsonData.original_title,
      overview: jsonData.overview,
      poster_path: jsonData.poster_path,
      production_companies: jsonData.production_companies,
      release_date: jsonData.release_date,
      revenue: jsonData.revenue,
      runtime: jsonData.runtime,
      status: jsonData.status,
      tagline: jsonData.tagline,
      title: jsonData.title,
      reception: new Reception().calculateReception(jsonData.vote_average),
    });
  }
}

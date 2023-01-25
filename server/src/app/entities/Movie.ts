import { Genre } from '../schemas/genre';
import { ProductionCompanie } from '../schemas/productionCompanie';

export interface IMovieProps {
  id: number;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: ProductionCompanie[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
}

export class Movie {
  private _props: IMovieProps;

  constructor(props: IMovieProps) {
    this._props = props;
  }

  public get props() {
    return this._props;
  }
}

import { CreateMovieDto } from '../dtos/createMovies.dto';
import { Movies } from '../entities/movie';

export interface IMoviesRepository {
  create(data: CreateMovieDto): Promise<Movies>;
  findByTitle(title: string): Promise<Movies>;
  findAll(): Promise<Movies[]>;
  update(id: string, data: CreateMovieDto): Promise<Movies>;
  getById(id: string): Promise<Movies>;
  delete(id: string): Promise<any>;
}

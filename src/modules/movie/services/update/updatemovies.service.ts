import { Injectable, NotFoundException } from '@nestjs/common';
import { MoviesRepository } from 'src/infra/database/typeorm/repositories/movies/moviesRepository';
import { UpdateMovieDTO } from '../../dtos/updateMovies.dto';
import { Movies } from '../../entities/movie';

@Injectable()
export class UpdateMovieService {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(id: string, data: UpdateMovieDTO): Promise<Movies> {
    const movies = await this.movieRepository.update(id, data);

    if (!movies) {
      throw new NotFoundException(`Filme não encontrado!`);
    }

    return movies;
  }
}

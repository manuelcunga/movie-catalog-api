import { Injectable, NotFoundException } from '@nestjs/common';
import { MoviesRepository } from 'src/infra/database/typeorm/repositories/movies/moviesRepository';
import { Movies } from '../../entities/movie';

@Injectable()
export class DeleteMovie {
  constructor(private movieRepository: MoviesRepository) {}

  async execute(id: string): Promise<Movies> {
    const movies = await this.movieRepository.getById(id);

    if (!movies) {
      throw new NotFoundException('Filme não encontrado.');
    }
    return movies;
  }
}

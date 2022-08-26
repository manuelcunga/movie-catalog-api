import { Injectable } from '@nestjs/common';
import { MoviesRepository } from 'src/infra/database/typeorm/repositories/movies/moviesRepository';

@Injectable()
export class ListAllMoviesService {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute() {
    return await this.moviesRepository.findAll();
  }
}

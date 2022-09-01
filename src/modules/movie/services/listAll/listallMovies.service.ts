import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { MoviesRepository } from 'src/infra/database/typeorm/repositories/movies/moviesRepository';

@Injectable()
export class ListAllMoviesService {
  constructor(
    private moviesRepository: MoviesRepository,
    @Inject(CACHE_MANAGER) private moviesCacheService: Cache,
  ) {}

  async execute() {
    const movies = await this.moviesRepository.findAll();
    return movies;
  }
}

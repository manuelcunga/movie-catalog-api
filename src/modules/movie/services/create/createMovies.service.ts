import { BadRequestException, Injectable } from '@nestjs/common';
import { MoviesRepository } from 'src/infra/database/typeorm/repositories/movies/moviesRepository';
import { CreateMovieDto } from '../../dtos/createMovies.dto';

@Injectable()
export class CreateMovieService {
  constructor(private createMovieRepository: MoviesRepository) {}

  async execute(data: CreateMovieDto) {
    const alreadyMovie = await this.createMovieRepository.findByTitle(
      data.title,
    );

    if (alreadyMovie) {
      throw new BadRequestException('Este filme já existe');
    }

    return await this.createMovieRepository.create(data);
  }
}

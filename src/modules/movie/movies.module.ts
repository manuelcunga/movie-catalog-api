import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from 'src/infra/database/typeorm/repositories/movies/moviesRepository';
import { CreateMoviesController } from './controller/create/createMovie.controller';
import { GetMovieController } from './controller/get/getMovie.controller';
import { ListAllMoviesController } from './controller/listAll/listAllMovie.controller';
import { UpdateMovieController } from './controller/update/updateMovie.controller';
import { Movies } from './entities/movie';
import { CreateMovieService } from './services/create/createMovies.service';
import { GetMovieService } from './services/get/getMovies.service';
import { ListAllMoviesService } from './services/listAll/listallMovies.service';
import { UpdateMovieService } from './services/update/updatemovies.service';

@Module({
  controllers: [
    CreateMoviesController,
    ListAllMoviesController,
    UpdateMovieController,
    GetMovieController,
  ],
  providers: [
    CreateMovieService,
    ListAllMoviesService,
    UpdateMovieService,
    GetMovieService,
    MoviesRepository,
  ],

  imports: [TypeOrmModule.forFeature([Movies])],

  exports: [TypeOrmModule],
})
export class MoviesModule {}

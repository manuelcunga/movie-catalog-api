import { Controller, Get } from '@nestjs/common';
import { ListAllMoviesService } from '../../services/listAll/listallMovies.service';

@Controller('movies')
export class ListAllMoviesController {
  constructor(private readonly moviesService: ListAllMoviesService) {}

  @Get('/')
  async handle() {
    return await this.moviesService.execute();
  }
}

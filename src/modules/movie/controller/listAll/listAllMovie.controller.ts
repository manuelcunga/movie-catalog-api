import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListAllMoviesService } from '../../services/listAll/listallMovies.service';

@UseGuards(AuthGuard('jwt'))
@Controller('movies')
export class ListAllMoviesController {
  constructor(private readonly moviesService: ListAllMoviesService) {}

  @Get('/')
  @UseInterceptors(CacheInterceptor)
  @CacheKey('movies-redis')
  @CacheTTL(30)
  async handle() {
    return await this.moviesService.execute();
  }
}

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMovieDto } from '../../dtos/createMovies.dto';
import { CreateMovieService } from '../../services/create/createMovies.service';

@Controller('movies')
export class CreateMoviesController {
  constructor(private readonly createMovieService: CreateMovieService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateMovieDto) {
    return await this.createMovieService.execute(data);
  }
}

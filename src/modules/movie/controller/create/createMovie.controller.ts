import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateMovieDto } from '../../dtos/createMovies.dto';
import { CreateMovieService } from '../../services/create/createMovies.service';

@UseGuards(AuthGuard('jwt'))
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

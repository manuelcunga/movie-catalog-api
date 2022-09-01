import {
  Body,
  Controller,
  Param,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateMovieDTO } from '../../dtos/updateMovies.dto';
import { UpdateMovieService } from '../../services/update/updatemovies.service';

@UseGuards(AuthGuard('jwt'))
@Controller('movies')
export class UpdateMovieController {
  constructor(private readonly movieService: UpdateMovieService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateMovieDTO) {
    return this.movieService.execute(id, data);
  }
}

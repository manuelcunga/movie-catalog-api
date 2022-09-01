import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Movies } from '../../entities/movie';
import { GetMovieService } from '../../services/get/getMovies.service';

@UseGuards(AuthGuard('jwt'))
@Controller('/movies')
export class GetMovieController {
  constructor(private readonly movieService: GetMovieService) {}

  @Get(':id')
  async handle(@Param('id') id: string): Promise<Movies> {
    return await this.movieService.execute(id);
  }
}

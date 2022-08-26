import { Controller, Get, Param } from '@nestjs/common';
import { Movies } from '../../entities/movie';
import { GetMovieService } from '../../services/get/getMovies.service';

@Controller('/movies')
export class GetMovieController {
  constructor(private readonly movieService: GetMovieService) {}

  @Get(':id')
  async handle(@Param('id') id: string): Promise<Movies> {
    return await this.movieService.execute(id);
  }
}

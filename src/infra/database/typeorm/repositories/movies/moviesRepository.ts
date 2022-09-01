import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IMoviesRepository } from 'src/modules/movie/repositories/ImoviesRepository';
import { CreateMovieDto } from 'src/modules/movie/dtos/createMovies.dto';
import { Movies } from 'src/modules/movie/entities/movie';
import { UpdateMovieDTO } from 'src/modules/movie/dtos/updateMovies.dto';

@Injectable()
export class MoviesRepository implements IMoviesRepository {
  constructor(
    @InjectRepository(Movies)
    private readonly ormRepository: Repository<Movies>,
  ) {}

  public async create(data: CreateMovieDto): Promise<Movies> {
    const movie = this.ormRepository.create(data);
    await this.ormRepository.save(movie);
    return movie;
  }

  public async findByTitle(title: string) {
    return await this.ormRepository.findOne({ title });
  }

  public async findAll(): Promise<Movies[]> {
    const movies = await this.ormRepository.find();
    return movies;
  }

  public async update(id: string, data: UpdateMovieDTO): Promise<Movies> {
    const movie = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(movie);
  }

  public async getById(id: string): Promise<Movies> {
    return await this.ormRepository.findOne({ id });
  }

  public async delete(id: string): Promise<any> {
    return await this.ormRepository.softDelete({ id });
  }
}

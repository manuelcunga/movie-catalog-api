import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  director: string;

  @ApiProperty()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  score: number;
}

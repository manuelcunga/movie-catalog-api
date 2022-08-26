import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class UpdateMovieDTO {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  director?: string;

  @ApiProperty()
  year?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  score?: number;
}

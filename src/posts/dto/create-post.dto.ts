import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: 'Post title' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Post body' })
  @IsString()
  body: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  published_at: Date;
}

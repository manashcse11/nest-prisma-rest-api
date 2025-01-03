import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

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
  @IsBoolean()
  @IsOptional()
  published: boolean;
}

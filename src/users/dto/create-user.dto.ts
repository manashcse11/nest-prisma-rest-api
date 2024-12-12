import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@doe.com' })
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}

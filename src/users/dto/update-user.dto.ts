import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'John doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@doe.com' })
  @IsString()
  email: string;

  @IsString()
  password: string;
}

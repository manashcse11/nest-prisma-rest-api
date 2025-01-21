import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsNotEmpty } from 'class-validator';
import { IsUniqueEmail } from '../decorators/unique-email.decorator';

export class CreateUserDto {
  @ApiProperty({ example: 'John doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@doe.com' })
  @IsEmail()
  @IsNotEmpty()
  @IsUniqueEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, Length } from 'class-validator';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly id!: number | string;

  @ApiProperty()
  @IsNotEmpty()
  readonly name!: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;

  @ApiProperty()
  @Length(6, 20)
  @IsNotEmpty()
  readonly password!: string;

  @ApiProperty()
  @IsDate()
  readonly createdAt?: Date;

  @ApiProperty()
  @IsDate()
  readonly updatedAt?: Date;
}

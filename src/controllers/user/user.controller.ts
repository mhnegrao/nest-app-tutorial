import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  ValidationPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';

import { validate } from 'class-validator';

import { UserDto } from './../../shared/userDto';
import { IUserService } from 'src/shared/user.service.shared.ts';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users') //o parâmetro string define o endpoint
export class UserController {
  constructor(private readonly userService: IUserService) {}

  @Get() //string que define o endpoint pode ser passado aqui
  getUsers(): string {
    return this.userService.getAll();
  }

  @Get(':id') //recebendo parâmetros
  getById(@Param('id') id: string): string {
    return this.userService.getById(id);
  }

  @Post()
  async create(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: 422,
      }),
    )
    user: UserDto,
  ) {
    const errors = await validate(user);
    console.log(errors);
    if (!errors || errors.length <= 0) return this.userService.create(user);
  }
  @Put()
  async update(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: 422,
      }),
    )
    user: UserDto,
  ) {
    const errors = await validate(user);
    if (!errors || errors.length <= 0) return this.userService.update(user);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}

import { Body, Controller, Post } from '@nestjs/common';

import { AuthenticateUserRequestDto } from '../dtos/AuthenticateUser.dto';
import { CreateUserRequestDto } from '../dtos/CreateUser.Dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() createUserDto: CreateUserRequestDto) {
    return {
      message: 'Usuário registrado com sucesso',
      data: createUserDto,
    };
  }

  @Post('login')
  async login(@Body() dto: AuthenticateUserRequestDto) {
    return {
      message: 'Login realizado com sucesso',
      data: dto,
    };
  }
}

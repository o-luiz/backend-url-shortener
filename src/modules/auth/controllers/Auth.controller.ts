import { Body, Controller, Post } from '@nestjs/common';

import { AuthenticateUserRequestDto } from '../dtos/authenticateUser.dto';
import { CreateUserRequestDto } from '../dtos/createUser.dto';

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

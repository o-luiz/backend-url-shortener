import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PASSWORD_REGEX } from '../utils/passwordRegexp';

export class CreateUserRequestDto {
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'E-mail inválido.' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  @MaxLength(32, { message: 'A senha deve ter no máximo 32 caracteres.' })
  @Matches(PASSWORD_REGEX, {
    message:
      'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.',
  })
  password: string;
}

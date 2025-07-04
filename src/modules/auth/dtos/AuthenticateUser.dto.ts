import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthenticateUserRequestDto {
  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email deve ter um formato válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;
}

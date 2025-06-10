import { UseCase } from '@/modules/shared/protocols/useCase.protocol';
import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.repository';

import { PasswordHasher } from '../protocols/passwordHasher.protocol';
import { JwtAdapter } from '../protocols/jwtAdapter.protocol';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from '../entities/user.entity';
import { Email } from '@/modules/auth/value-objects/email.vo';
import { Password } from '@/modules/auth/value-objects/password.vo';
import { UserAlreadyExistsException } from '@/modules/auth/exceptions/userAlreadyExists.exception';
import { PersistenceFailureException } from '@/modules/shared/exceptions/persistenceFailure.exception';

/* - Tarefas feat Criar usuário
  :[x] Criar V.O de email
  :[x] Criar V.O de senha
  :[x] Criar entidade de User
  :[x] Fazer hash da senha
  :[x] Implementar o caso de uso
  :[x] Criar controller
  :[x] Criar repositorio em memoria
  :[x] Tipar o payload de input corretamente
  :[x] Criar entidade user a partir do payload
  :[x] Verificar no banco de dados se o email já existe, caso exista, lançar exceção
  :[x] Verificar se o email e a senha são válidos
  :[x] Gerar o hash da senha e criar o Password.VO
  :[x] Salvar entidade de usuário no repositório
  :[x] Gerar o token de acesso
  :[x] Validar input do usuários.
  :[x] Criar protocolo de criptografia de senha e implementação
  :[x] Criar protocolo para gerar token de acesso
  :[/] Criar testes unitários
  :[x] Alterar a entidade de usuário para permitir a alteração de email;
  :[x] Refatorar repositorio de usuário para retornar objeto criado do banco
  :[] Criar repositório de User com o prisma
  :[] Refatorar repositorio em memória para retornar objeto atualizado do banco	


*/

type CreateUserUseCaseInput = {
  email: string;
  password: string;
};

@Injectable()
export class CreateUserUseCase
  implements UseCase<CreateUserUseCaseInput, { accessToken: string }>
{
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly jwtAdapter: JwtAdapter<JwtPayload>,
  ) {}

  async execute(
    userData: CreateUserUseCaseInput,
  ): Promise<{ accessToken: string }> {
    const email = Email.create(userData.email);
    const password = Password.create(userData.password);

    const userExists = await this.authRepository.findUserByEmail(email);

    if (userExists) {
      throw new UserAlreadyExistsException();
    }

    const hashedPasswordValue = await this.passwordHasher.hash(
      password.getValue(),
    );

    const hashedPassword = Password.restore(hashedPasswordValue);

    const user = User.createFromValidatedProps({
      email,
      password: hashedPassword,
    });

    const createdUser = await this.authRepository.createUser(user);

    if (createdUser?.getId() === null) {
      throw new PersistenceFailureException();
    }

    const accessToken = await this.jwtAdapter.encode({
      sub: createdUser.getId(),
    });

    return { accessToken };
  }
}

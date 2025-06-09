/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseCase } from '@/modules/shared/protocols/useCase.protocol';
import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repositories/auth.repository';

/* - Tarefas feat Criar usuário
  :[] Criar V.O de email
  :[] Criar V.O de senha
  :[] Criar entidade de User
  :[] Fazer hash da senha
  :[] Criar repositório de User
  :[] Implementar o caso de uso
  :[] Criar testes unitários
  :[] Criar testes de integração
  :[x] Criar controller
  :[] Criar repositorio em memoria
*/

type CreateUserUseCaseInput = {
  email: string;
  password: string;
};

@Injectable()
export class CreateUserUseCase
  implements UseCase<CreateUserUseCaseInput, boolean>
{
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(_input): Promise<boolean> {
    throw new Error('Caso de uso não implementado');

    return true;
  }
}

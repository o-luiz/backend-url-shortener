/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseCase } from '@/modules/shared/protocols/UseCase.protocol';

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
*/

export class CreateUserUseCase extends UseCase {
  async execute(_input: any): Promise<any> {
    throw new Error('Caso de uso não implementado');
  }
}

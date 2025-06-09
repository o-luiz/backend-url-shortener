import { UseCase } from '@/modules/shared/protocols/UseCase.protocol';

export class CreateUserUseCase extends UseCase {
  async execute(_input: any): Promise<any> {
    throw new Error('Caso de uso não implementado');
  }
}

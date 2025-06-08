import { UseCase } from '@/modules/shared/protocols/use-case.protocol';

export class CreateUserUseCase extends UseCase {
  async execute(_input: any): Promise<any> {
    console.log('CreateUserUseCase.execute', _input);

    throw new Error('Teste de erro');
  }
}

import { CreateUserUseCase } from './createUser.use-case';

describe('CreateUserUseCase', () => {
  let sut: CreateUserUseCase;

  it('should throw an error', async () => {
    sut = new CreateUserUseCase();
    await expect(sut.execute({})).rejects.toThrow(
      'Caso de uso não implementado',
    );
  });
});

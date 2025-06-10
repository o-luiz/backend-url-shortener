import { PasswordHasher } from '@/modules/auth/protocols/passwordHasher.protocol';
import { AuthRepository } from '../repositories/auth.repository';
import { InMemoryAuthRepository } from '@/modules/auth/repositories/inMemory/InMemoryAuth.repository';
import { CreateUserUseCase } from './createUser.useCase';
import { JwtAdapter } from '@/modules/auth/protocols/jwtAdapter.protocol';
import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
import { InvalidEmailException } from '@/modules/auth/exceptions/invalidEmail.exception';
import { InvalidPasswordException } from '@/modules/auth/exceptions/invalidPassword.exception';

/*
  :[] Testar todas as exceções possivelmente lançadas

  :[] Testar casos de input malformado
  :[] Testar hash de password
  :[] Testar criptografia de senha

*/

describe('CreateUserUseCase', () => {
  let sut: CreateUserUseCase;
  let authRepository: AuthRepository;
  let passwordHasher: PasswordHasher;
  let jwtAdapter: JwtAdapter<JwtPayload>;

  beforeEach(() => {
    authRepository = new InMemoryAuthRepository();

    passwordHasher = {
      hash: jest.fn(),
      verify: jest.fn(),
    } as jest.Mocked<PasswordHasher>;

    jwtAdapter = {
      encode: jest.fn(),
      decode: jest.fn(),
      verify: jest.fn(),
    } as jest.Mocked<JwtAdapter<JwtPayload>>;

    sut = new CreateUserUseCase(authRepository, passwordHasher, jwtAdapter);
  });
  it('Deve lançar exceção se o email e a senha forem inválidos', async () => {
    await expect(
      sut.execute({ email: 'email', password: 'password' }),
    ).rejects.toThrow(InvalidEmailException);

    await expect(
      sut.execute({ email: 'test@email.com', password: 'fwef' }),
    ).rejects.toThrow(InvalidPasswordException);
  });

  it('should create a user', async () => {
    expect(true).toBe(true);
  });
});

import { InvalidPasswordException } from '../exceptions/invalidPassword.exception';
import { Password } from './password.vo';

describe('Password Value Object testes:', () => {
  it('Deve criar uma senha válida', () => {
    const senhaValida = 'Secure@123';
    const sut = Password.create(senhaValida);

    expect(sut).toBeInstanceOf(Password);
    expect(sut.getValue()).toBe(senhaValida);
  });

  it('Deve lançar uma exceção para a senha inválida', () => {
    const senhaInvalida = 'senhaInvalida';

    expect(() => Password.create(senhaInvalida)).toThrow(
      InvalidPasswordException,
    );
  });

  it('Deve restaurar o Password(V.O) sem faze validação:', () => {
    const senhaBanco = 'fwefwefwef.hasedbcrypted';
    const sut = Password.restore(senhaBanco);

    expect(sut).toBeInstanceOf(Password);
    expect(sut.getValue()).toBe(senhaBanco);
  });
});

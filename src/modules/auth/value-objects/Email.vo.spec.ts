import { Email } from './email.vo';
import { InvalidEmailException } from '../exceptions/invalidEmail.exception';

describe('Email Value-Object tests:', () => {
  it('Deve criar uma instância válida para o email:', () => {
    const emailStr = 'test@example.com';
    const sut = Email.create(emailStr);

    expect(sut).toBeInstanceOf(Email);
    expect(sut.getValue()).toBe(emailStr);
  });

  it('Deve lançar uma exceção caso o Email seja inválido', () => {
    const invalidEmail = 'email invalido ###';

    expect(() => Email.create(invalidEmail)).toThrow(InvalidEmailException);
    expect(() => Email.create(invalidEmail)).toThrow(
      `Email inválido: ${invalidEmail}`,
    );
  });

  it('Deve validar os emails:', () => {
    expect(Email.isValidEmail('usuario@gmail.com')).toBe(true);
    expect(Email.isValidEmail('email-invalido')).toBe(false);
    expect(Email.isValidEmail('teste.com')).toBe(false);
    expect(Email.isValidEmail('sem-dominio.com')).toBe(false);
  });
});

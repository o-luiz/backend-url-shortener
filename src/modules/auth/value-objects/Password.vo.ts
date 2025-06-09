import { InvalidPasswordException } from '../exceptions/invalidPassword.exception';
import { PASSWORD_REGEX } from '../utils/passwordRegexp';

export class Password {
  private constructor(private readonly value: string) {}

  static create(value: string): Password {
    if (!this.isValidPassword(value)) {
      throw new InvalidPasswordException();
    }

    return new Password(value);
  }

  static restore(value: string): Password {
    return new Password(value);
  }

  static isValidPassword(password: string): boolean {
    return PASSWORD_REGEX.test(password);
  }

  getValue(): string {
    return this.value;
  }

  equals(password: string): boolean {
    return this.value === password;
  }
}

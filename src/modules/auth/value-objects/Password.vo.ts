import { ValueObject } from '@/modules/shared/protocols/value-object.protocol';
import { InvalidPasswordException } from '../exceptions/invalidPassword.exception';
import { PASSWORD_REGEX } from '../utils/passwordRegexp';

export class Password extends ValueObject<string> {
  private constructor(private readonly _value: string) {
    super(_value);
  }

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

  equals(password: string): boolean {
    return this.value === password;
  }
}

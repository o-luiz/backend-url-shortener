import { InvalidEmailException } from '../exceptions/invalidEmail.exception';

export class Email {
  private constructor(private readonly value: string) {}

  static create(value: string): Email {
    if (!this.isValidEmail(value)) {
      throw new InvalidEmailException(value);
    }

    return new Email(value);
  }

  static restore(value: string): Email {
    return new Email(value);
  }

  static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  equals(email: string): boolean {
    return this.value === email;
  }

  getValue(): string {
    return this.value;
  }
}

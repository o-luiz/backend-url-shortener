import { InvalidEmailException } from '../exceptions/InvalidEmail.exception';

export class Email {
  private constructor(private readonly value: string) {}

  static create(value: string): Email {
    if (!this.isValidEmail(value)) {
      throw new InvalidEmailException(value);
    }

    return new Email(value);
  }

  static isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  getValue(): string {
    return this.value;
  }
}

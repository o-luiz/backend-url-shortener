export class InvalidEmailException extends Error {
  constructor(email: string) {
    super(`Email inválido: ${email}`);
    this.name = 'InvalidEmailException';
    Object.setPrototypeOf(this, InvalidEmailException.prototype);
  }
}

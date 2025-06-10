export class InvalidEmailException extends Error {
  constructor() {
    super(`Email inválido`);
    this.name = 'InvalidEmailException';
    Object.setPrototypeOf(this, InvalidEmailException.prototype);
  }
}

export class InvalidPasswordException extends Error {
  constructor() {
    super('Invalid password format');
    this.name = 'InvalidPasswordException';
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
  }
}

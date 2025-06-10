export class UserAlreadyExistsException extends Error {
  constructor() {
    super(`Usuário já existe`);
    this.name = 'UserAlreadyExistsException';
    Object.setPrototypeOf(this, UserAlreadyExistsException.prototype);
  }
}

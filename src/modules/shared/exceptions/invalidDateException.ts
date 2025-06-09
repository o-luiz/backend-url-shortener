export class InvalidDateException extends Error {
  constructor() {
    super('Invalid date');
    this.name = 'InvalidDateException';
    Object.setPrototypeOf(this, InvalidDateException.prototype);
  }
}

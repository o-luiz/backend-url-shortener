export class WrongInfoException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WrongInfoException';
  }
}

export class PersistenceFailureException extends Error {
  constructor(message?: string) {
    super(message ?? 'Data Persistence failure');
    this.name = 'PersistenceFailureException';
    Object.setPrototypeOf(this, PersistenceFailureException.prototype);
  }
}

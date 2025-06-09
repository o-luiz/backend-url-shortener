export abstract class ValueObject<T> {
  protected constructor(protected readonly value: T) {}

  getValue(): T {
    return this.value;
  }
}

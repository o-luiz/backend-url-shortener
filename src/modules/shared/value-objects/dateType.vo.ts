import { InvalidDateException } from '../exceptions/invalidDateException';
import { isValidDate } from '../utils/date.utils';

export type TDate = Date | string | number;

export class DateType {
  private readonly value: Date;

  private constructor(date: Date) {
    this.value = date;
  }

  static create(input: TDate): DateType {
    if (!isValidDate(input)) {
      throw new InvalidDateException();
    }
    return new DateType(new Date(input));
  }

  static restore(date: Date): DateType {
    return new DateType(date);
  }

  getValue(): Date {
    return this.value;
  }
}

import { InvalidDateException } from '../exceptions/invalidDateException';
import { DateType } from './dateType.vo';

describe('DateType value object testes:', () => {
  it('deve criar uma instância válida a partir de uma string de data', () => {
    const dateType = DateType.create('2023-01-01');
    expect(dateType.getValue()).toEqual(new Date('2023-01-01'));
  });

  it('deve lançar erro ao tentar criar uma data inválida', () => {
    expect(() => DateType.create('data inválida')).toThrow(
      InvalidDateException,
    );
  });

  it('deve restaurar corretamente a partir de uma instância Date', () => {
    const date = new Date('2022-12-12');
    const dateType = DateType.restore(date);
    expect(dateType.getValue()).toEqual(date);
  });

  it('deve criar uma instância a partir de timestamp numérico', () => {
    const timestamp = 1672531200000;
    const dateType = DateType.create(timestamp);
    expect(dateType.getValue().getTime()).toBe(timestamp);
  });
});

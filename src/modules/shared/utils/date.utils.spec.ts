import { isValidDate } from './date.utils';

describe('isValidDate validator teste:', () => {
  it('Deve retornar verdadeiro para a data atual', () => {
    expect(isValidDate(new Date())).toBe(true);
  });

  it('Deve retornar verdadeiro para datas válidas representadas em strings', () => {
    expect(isValidDate('2024-01-01T00:00:00Z')).toBe(true);
    expect(isValidDate('2024-12-31')).toBe(true);
  });

  it('Deve retornar verdadeiro para datas válidas representadas em timestamps', () => {
    expect(isValidDate(1700000000000)).toBe(true);
  });

  it('Deve retornar falso para datas inválidas', () => {
    expect(isValidDate('invalid-date')).toBe(false);
  });

  it('Deve retornar falso para valores nulos ou indefinidos', () => {
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate(undefined)).toBe(false);
  });

  it('Deve retornar falso para outros valores que não sejam datas', () => {
    expect(isValidDate({})).toBe(false);
    expect(isValidDate([])).toBe(false);
    expect(isValidDate(true)).toBe(false);
    expect(isValidDate('')).toBe(false);
    expect(isValidDate(NaN)).toBe(false);
  });
});

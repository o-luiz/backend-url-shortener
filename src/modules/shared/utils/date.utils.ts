/* eslint-disable @typescript-eslint/no-unsafe-argument */

export function isValidDate(input: unknown): boolean {
  const inputType = typeof input;

  if (['string', 'number'].includes(inputType) || input instanceof Date) {
    const date = new Date(input as any);
    return !isNaN(date.getTime());
  }

  return false;
}

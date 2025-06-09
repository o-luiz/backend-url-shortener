export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Optional<T = any> = T | null | undefined;
export type Maybe<T> = T | null | undefined;

export type GenericObject = Record<string | number | symbol, unknown>;

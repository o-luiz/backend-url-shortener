import { Maybe, Prettify } from './helperTypes';

export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Maybe<Date>;
};

export type EntityWithTimestamps<T extends object> = Prettify<T & Timestamps>;

export type OmitTimestamps<T extends object> = Prettify<
  Omit<T, keyof Timestamps>
>;

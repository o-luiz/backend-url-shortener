import { GenericObject } from '@/modules/shared/types/helperTypes';

export abstract class JwtAdapter<T extends GenericObject> {
  abstract encode(payload: Record<string, unknown>): Promise<string>;
  abstract decode(token: string): Promise<T | null>;
  abstract verify(token: string): Promise<T>;
}

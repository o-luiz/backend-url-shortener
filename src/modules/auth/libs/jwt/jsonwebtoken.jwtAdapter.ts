import jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { GenericObject } from '@/modules/shared/types/helperTypes';
import { EnvService } from '@/modules/shared/env/env.service';
import { JwtAdapter } from '@/modules/auth/protocols/jwtAdapter.protocol';
import { InvalidJwtException } from '@/modules/auth/exceptions/invalidJwt.exception';

@Injectable()
export class JsonWebTokenJwtAdapter<
  T extends GenericObject = GenericObject,
> extends JwtAdapter<T> {
  private secret: string;
  private expiresIn: number;
  constructor(private readonly EnvService: EnvService) {
    super();
    this.secret = this.EnvService.get('JWT_SECRET');
    this.expiresIn = this.EnvService.get('JWT_EXPIRES_IN_SECONDS');
  }

  async encode(payload: Record<string, unknown>): Promise<string> {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
  }
  async decode(token: string): Promise<T | null> {
    const payload = jwt.decode(token);
    if (payload) {
      return payload as T;
    }
    return null;
  }

  // Adicionar JS Doc posteriormente..
  async verify(token: string): Promise<T> {
    try {
      return jwt.verify(token, this.secret) as T;
    } catch {
      throw new InvalidJwtException();
    }
  }
}

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PasswordHasher } from '../../protocols/passwordHasher.protocol';

@Injectable()
export class BcryptPasswordHasher extends PasswordHasher {
  private readonly saltRounds: number;

  constructor(saltRounds: number = 10) {
    super();
    this.saltRounds = saltRounds;
  }

  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async verify(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}

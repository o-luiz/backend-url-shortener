import { Maybe } from '@/modules/shared/types/helperTypes';
import { User } from '../entities/user.entity';
import { Password } from '../value-objects/password.vo';
import { Email } from '../value-objects/email.vo';

export abstract class AuthRepository {
  abstract createUser(user: User): Promise<boolean>;
  abstract findUserByEmail(email: Email): Promise<Maybe<User>>;
  abstract findUserById(id: number): Promise<Maybe<User>>;
  abstract updateUserPassword(id: number, password: Password): Promise<boolean>;
  abstract deleteUser(id: number): Promise<boolean>;
}

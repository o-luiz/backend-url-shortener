import { Maybe } from '@/modules/shared/types/helperTypes';
import { User } from '../../entities/user.entity';
import { AuthRepository } from '../auth.repository';
import { Password } from '../../value-objects/password.vo';
import { Email } from '../../value-objects/email.vo';

export class InMemoryAuthRepository extends AuthRepository {
  private users: User[] = [];
  async createUser(user: User): Promise<boolean> {
    this.users.push(user);
    return true;
  }
  async findUserByEmail(email: Email): Promise<Maybe<User>> {
    return this.users.find((user) => user.getEmail().equals(email.getValue()));
  }
  async findUserById(id: number): Promise<Maybe<User>> {
    return this.users.find((user) => user.getId() === id);
  }
  async updateUserPassword(id: number, password: Password): Promise<boolean> {
    const user = this.users.find((user) => user.getId() === id);
    if (!user) {
      return false;
    }
    user.setPassword(password);
    return true;
  }
  async deleteUser(id: number): Promise<boolean> {
    const user = this.users.find((user) => user.getId() === id);
    if (!user) {
      return false;
    }
    this.users = this.users.filter((user) => user.getId() !== id);
    return true;
  }
}

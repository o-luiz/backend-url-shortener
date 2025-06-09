import { AuthRepository } from './auth.repository';

export class InMemoryAuthRepository extends AuthRepository {
  createUser(input: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  findUserByEmail(email: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  findUserById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateUserPassword(id: string, password: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

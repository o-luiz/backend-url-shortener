export abstract class AuthRepository {
  abstract createUser(input: any): Promise<any>;
  abstract findUserByEmail(email: string): Promise<any>;
  abstract findUserById(id: string): Promise<any>;
  abstract updateUserPassword(id: string, password: string): Promise<any>;
  abstract deleteUser(id: string): Promise<void>;
}

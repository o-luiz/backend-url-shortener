export abstract class AuthRepository {
  abstract createUser(input: any): Promise<any>;
}

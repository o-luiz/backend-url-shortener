export abstract class UseCase<Input = any, Output = any> {
  abstract execute(input: Input): Promise<Output>;
}

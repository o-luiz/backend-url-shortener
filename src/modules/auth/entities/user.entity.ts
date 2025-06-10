import { EntityWithTimestamps } from '@/modules/shared/types/entityWithTimeStamps';
import { Email } from '../value-objects/email.vo';
import { Password } from '../value-objects/password.vo';
import { DateType } from '@/modules/shared/value-objects/dateType.vo';
import { Maybe, Optional } from '@/modules/shared/types/helperTypes';
import { InvalidPasswordException } from '../exceptions/invalidPassword.exception';
import { InvalidEmailException } from '@/modules/auth/exceptions/invalidEmail.exception';

type UserProps = EntityWithTimestamps<{
  id?: Maybe<number>;
  email: Email;
  password: Password;
}>;

type CreateUserParams = {
  email: string;
  password: string;
};

type SerializedUser = EntityWithTimestamps<
  { id?: Maybe<number> } & CreateUserParams
>;

type RestoreUserParams = SerializedUser;

export class User {
  private readonly id: Optional<number>;
  private email: Email;
  private password: Password;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt?: Optional<Date>;

  private constructor({
    email,
    password,
    createdAt,
    updatedAt,
    deletedAt,
  }: UserProps) {
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  static create(userData: CreateUserParams) {
    const email = Email.create(userData.email);
    const password = Password.create(userData.password);

    return new User({
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  static createFromValidatedProps(validatedUserProps: {
    email: Email;
    password: Password;
  }) {
    const { email, password } = validatedUserProps;

    if (!(email instanceof Email)) {
      throw new InvalidEmailException();
    }

    if (!(password instanceof Password)) {
      throw new InvalidPasswordException();
    }

    return new User({
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  }

  static restore(userData: RestoreUserParams) {
    const email = Email.restore(userData.email);
    const password = Password.restore(userData.password);
    const createdAt = DateType.create(userData.createdAt).getValue();
    const updatedAt = DateType.create(userData.updatedAt).getValue();
    const deletedAt = userData.deletedAt
      ? DateType.create(userData.deletedAt).getValue()
      : null;

    return new User({
      email,
      password,
      createdAt,
      updatedAt,
      deletedAt,
    });
  }

  getId(): Maybe<number> {
    return this.id;
  }

  getEmail(): Email {
    return this.email;
  }

  getPassword(): Password {
    return this.password;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getDeletedAt(): Maybe<Date> {
    return this.deletedAt;
  }

  toJson(): SerializedUser {
    return {
      id: this.id,
      email: this.email.getValue(),
      password: this.password.getValue(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  setPassword(password: string | Password): void {
    if (password instanceof Password) {
      this.password = password;
    } else if (typeof password === 'string') {
      this.password = Password.create(password);
    } else {
      throw new InvalidPasswordException();
    }
  }
}

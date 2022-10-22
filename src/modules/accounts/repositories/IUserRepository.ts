import { User } from '../entities/User';

interface IUser {
  email: string;
  password: string;
  name: string;
}

interface IUserRepository {
  create({
    email, password, name,
  }: IUser): Promise<void>;
  list(): Promise<User[]>
}

export { IUserRepository, IUser };

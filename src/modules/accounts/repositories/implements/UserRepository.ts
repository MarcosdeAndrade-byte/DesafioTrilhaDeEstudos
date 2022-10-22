import { User } from '../../entities/User';
import { IUser, IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: UserRepository;

  private users: User[];

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }

    return UserRepository.INSTANCE;
  }

  async create({ email, password, name }: IUser): Promise<void> {
    const user = new User(email, password, name);
    Object.assign(user, { email, password, name });
    UserRepository.INSTANCE.users.push(user);
  }

  async list(): Promise<User[]> {
    return UserRepository.INSTANCE.users;
  }
}

export { UserRepository };

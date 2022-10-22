// import { UserRepository } from '../../repositories/implements/UserRepository';

import { UserRepository } from '../../repositories/implements/UserRepository';

interface ICreateUser {
  id?: string,
  email: string,
  password: string,
  name: string
}

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute({
    email,
    password,
    name,
  }: ICreateUser): void {
    try {
      this.userRepository.create({ email, password, name });
    } catch (error) {
      console.error('Erro', error);
    }
  }
}

export { CreateUserUseCase };

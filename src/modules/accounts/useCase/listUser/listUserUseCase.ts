// import { UserRepository } from '../../repositories/implements/UserRepository';

import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/implements/UserRepository';

class ListUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(): Promise<User[]> {
    const listUsersInformation = await this.userRepository.list();

    if (!listUsersInformation) {
      throw new Error('Usuário não encontrado');
    }

    return listUsersInformation;
  }
}

export { ListUserUseCase };

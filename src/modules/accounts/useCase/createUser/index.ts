import { UserRepository } from '../../repositories/implements/UserRepository';
import { CreateUserController } from './createUserController';
import { CreateUserUseCase } from './createUserUseCase';

const userRepository = UserRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };

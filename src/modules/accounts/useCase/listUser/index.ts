import { UserRepository } from '../../repositories/implements/UserRepository';
import { ListUserController } from './listUserController';
import { ListUserUseCase } from './listUserUseCase';

const userRepository = UserRepository.getInstance();
const listUserUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(listUserUseCase);

export { listUserController };

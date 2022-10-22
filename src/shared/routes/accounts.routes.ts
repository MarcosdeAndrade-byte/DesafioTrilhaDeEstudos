import { Router } from 'express';
import { createUserController } from '../../modules/accounts/useCase/createUser';
import { listUserController } from '../../modules/accounts/useCase/listUser';

const accountsRoutes = Router();

//                                             createUserController.handle()  <------------------------- ERRO
accountsRoutes.put('/', (request, response) => createUserController.handle(request, response));
accountsRoutes.get('/', (request, response) => listUserController.handle(request, response));

export { accountsRoutes };

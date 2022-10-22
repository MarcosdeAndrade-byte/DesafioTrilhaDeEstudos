import { Request, Response } from 'express';
import { ListUserUseCase } from './listUserUseCase';

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUsersInformation = await this.listUserUseCase.execute();

      return response.status(200).json(listUsersInformation);
    } catch (error) {
      return response.status(500).json(error).send({ message: error });
    }
  }
}

export { ListUserController };

import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { email, password, name } = request.body;
      this.createUserUseCase.execute({
        email, password, name,
      });

      return response.status(200).send({ message: 'OK' });
    } catch (error) {
      return response.status(500).json(error).send({ message: error });
    }
  }
}

export { CreateUserController };

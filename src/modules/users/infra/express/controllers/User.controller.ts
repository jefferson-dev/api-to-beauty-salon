import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUser.services';
import RemovePassword from '@modules/users/infra/express/mappers/RemovePassword.mapper';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ name, email, password });

    const userWithoutPassword = RemovePassword.toDTO(user);

    return response.json(userWithoutPassword);
  }
}

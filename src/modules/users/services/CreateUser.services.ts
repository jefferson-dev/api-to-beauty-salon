import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUser.dto';
import IUserRepository from '@modules/users/repositories/IUser.repository';
import AppError from '@infra/errors/AppError';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const userExist = await this.userRepository.findbyEmail(email);

    if (userExist) {
      throw new AppError('Email já cadastrado na aplicação.');
    }

    const user = this.userRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

import { injectable, inject } from 'tsyringe';

import AppError from '@infra/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUser.dto';
import IUserRepository from '@modules/users/repositories/IUser.repository';
import IBcrypt from '@modules/users/infra/bcrypt/models/IBcrypt';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,

    @inject('Bcrypt')
    private bcrypt: IBcrypt,
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

    const hashPassword = await this.bcrypt.encrypter(password);

    const user = this.userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return user;
  }
}

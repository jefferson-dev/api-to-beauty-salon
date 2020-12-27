import { container } from 'tsyringe';

import '@modules/users/infra/bcrypt';

import IUserRepository from '@modules/users/repositories/IUser.repository';
import UserRepository from '@modules/users/infra/typeorm/repositories/User.repository';

container.registerSingleton<IUserRepository>('UsersRepository', UserRepository);

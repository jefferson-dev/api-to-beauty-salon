import { container } from 'tsyringe';

import IBcrypt from './models/IBcrypt';
import Bcrypt from './implementations/Bcrypt';

container.registerSingleton<IBcrypt>('Bcrypt', Bcrypt);

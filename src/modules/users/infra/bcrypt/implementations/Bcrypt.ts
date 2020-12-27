import { hash, compare } from 'bcrypt';
import IBcrypt from '../models/IBcrypt';

export default class Bcrypt implements IBcrypt {
  public async encrypter(password: string): Promise<string> {
    const encrypter = await hash(password, 8);

    return encrypter;
  }

  public async decrypter(hashed: string, password: string): Promise<boolean> {
    const decrypter = await compare(password, hashed);

    return decrypter;
  }
}

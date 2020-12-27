import { compare } from 'bcrypt';

export default class Decrypter {
  public async decrypter(hash: string, password: string): Promise<boolean> {
    const decrypter = await compare(password, hash);

    return decrypter;
  }
}

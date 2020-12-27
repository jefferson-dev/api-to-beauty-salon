import { hash } from 'bcrypt';

export default class Encrypter {
  public async encrypter(password: string): Promise<string> {
    const encrypter = await hash(password, 8);

    return encrypter;
  }
}

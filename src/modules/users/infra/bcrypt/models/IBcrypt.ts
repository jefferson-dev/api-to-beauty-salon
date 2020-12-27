export default interface IBcrypt {
  encrypter(password: string): Promise<string>;
  decrypter(hash: string, password: string): Promise<boolean>;
}

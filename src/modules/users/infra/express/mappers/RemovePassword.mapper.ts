import User from '@modules/users/infra/typeorm/entities/User';

export default class RemovePassword {
  public static toDTO(user: User): Omit<User, 'password'> {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}

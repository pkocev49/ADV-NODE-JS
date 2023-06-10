import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'user123',
      password: 'user123',
    },
    {
      id: 2,
      username: 'bob',
      password: 'bob1',
    },
  ];

  async findOne(username: string) {
    const userFound = this.users.find((user) => user.username === username);

    return userFound;
  }
}

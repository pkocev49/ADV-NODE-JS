import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from 'src/interfaces/role.enum';
import { User, UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';

interface UserToSave {
  username: string;
  password: string;
  roles: Role;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(username: string) {
    const foundUser = await this.userRepository.findOne({
      where: { username: username },
    });

    return foundUser;
  }

  async save(userToSave: CreateUserDto) {
    const userEntityInstance = this.userRepository.create(userToSave);

    const userSaved = await this.userRepository.save(userEntityInstance);

    return userSaved;
  }
}

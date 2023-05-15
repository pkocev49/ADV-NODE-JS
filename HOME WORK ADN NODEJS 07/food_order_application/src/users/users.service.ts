import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { Role } from 'src/interfaces/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });

    return user;
  }

  async save(userToSave: CreateUserDto) {
    const user = this.userRepository.create({
      username: userToSave.username,
      password: userToSave.password,
      role: userToSave.role as Role,
    });
    const savedUser = await this.userRepository.save(user);

    return savedUser.id;
  }
}

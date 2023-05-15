import { Role } from 'src/interfaces/role.enum';

export class CreateUserDto {
  username: string;
  password: string;
  role: Role;
}

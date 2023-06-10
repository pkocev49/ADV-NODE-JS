import { Role } from 'src/interfaces/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface User {
  userId: number;
  username: string;
  password: string;
  roles: Role;
}
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  roles: Role;
}

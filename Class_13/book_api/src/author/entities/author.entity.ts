import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from '../interfaces/author.int';
import { Book } from 'src/book/interfaces/book.int';
import { BookEntity } from 'src/book/enitity/book.entity';

@Entity('author')
export class AuthorEntity implements Author {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  birthDate: Date;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity[];
}

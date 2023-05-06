import { Author } from 'src/author/interfaces/author.int';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from '../interfaces/book.int';
import { Publiher } from 'src/publisher/interface/publisher.int';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { PublisheEntity } from 'src/publisher/entity/publisher.entity';
import { PublisherService } from 'src/publisher/publisher.service';

@Entity('book')
export class BookEntity implements Book {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  genre: string;
  @OneToOne(() => AuthorEntity, (author) => author.books, {
    onDelete: 'CASCADE',
  })
  author: AuthorEntity;
  @OneToOne(() => PublisheEntity, (publishEntity) => publishEntity.books)
  publisher: PublisheEntity;
}

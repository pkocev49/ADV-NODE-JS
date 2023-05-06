import { Book } from 'src/book/interfaces/book.int';
import { Publiher } from '../interface/publisher.int';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from 'src/book/enitity/book.entity';

@Entity('publisher')
export class PublisheEntity implements Publiher {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  phoneNumber: string;
  @OneToMany(() => BookEntity, (bookEntity) => bookEntity.publisher)
  books: BookEntity[];
}

import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { Author } from 'src/author/interfaces/author.int';
import { Publiher } from 'src/publisher/interface/publisher.int';
import { OneToMany } from 'typeorm';
export class BookDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  genre: string;
  @OneToMany(() => AuthorEntity, (authorEntity) => authorEntity.books)
  author: AuthorEntity;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrimaryColumnCannotBeNullableError, Repository } from 'typeorm';
import { BookEntity } from 'src/book/enitity/book.entity';
import { v4 as uuid } from 'uuid';
import { PublisheEntity } from 'src/publisher/entity/publisher.entity';
import { AuthorEntity } from 'src/author/entities/author.entity';
@Injectable()
export class BookService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authrorRepo: Repository<AuthorEntity>,
    @InjectRepository(BookEntity)
    private readonly bookRepo: Repository<BookEntity>,
    @InjectRepository(PublisheEntity)
    private readonly publishRepo: Repository<PublisheEntity>,
  ) {}
  getBooks() {
    return this.bookRepo.find({ relations: ['author'] });
  }
  //   async creatAuthor(author: AuthorEntity) {
  //     const newAuthor = this.authrorRepo.create(author);
  //     console.log(newAuthor);
  //     await this.authrorRepo.save(newAuthor);
  //   }
}

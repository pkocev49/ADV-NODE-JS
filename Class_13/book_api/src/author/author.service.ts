import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';
import { PrimaryColumnCannotBeNullableError, Repository } from 'typeorm';
import { BookEntity } from 'src/book/enitity/book.entity';
import { AuthorDto } from './dto/author.dto';
import { v4 as uuid } from 'uuid';
@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authrorRepo: Repository<AuthorEntity>,
    @InjectRepository(BookEntity)
    private readonly bookRepo: Repository<BookEntity>,
  ) {}
  getAuthors() {
    return this.authrorRepo.find({ relations: ['books'] });
  }
  async creatAuthor(author: AuthorEntity) {
    const newAuthor = this.authrorRepo.create(author);
    console.log(newAuthor);
    await this.authrorRepo.save(newAuthor);
  }
}

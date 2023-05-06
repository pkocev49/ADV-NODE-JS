import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { BookEntity } from 'src/book/enitity/book.entity';
import { AuthorEntity } from './entities/author.entity';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  // GET ALL AUTHORS
  @Get()
  getAuthors() {
    const authors = this.authorService.getAuthors();
    return authors;
  }
  @Post()
  async create(@Body() author: AuthorEntity) {
    const createAuthor = this.authorService.creatAuthor(author);
    return createAuthor;
  }
}

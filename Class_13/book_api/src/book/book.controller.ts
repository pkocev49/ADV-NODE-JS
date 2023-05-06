import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks() {
    const books = this.bookService.getBooks();
    return books;
  }
}

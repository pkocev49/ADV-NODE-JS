import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';
import { BookEntity } from 'src/book/enitity/book.entity';
import { BookController } from 'src/book/book.controller';
import { AuthorService } from './author.service';
import { BookService } from 'src/book/book.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [AuthorController, BookController],
  providers: [AuthorService, BookService],
})
export class AuthorModule {}

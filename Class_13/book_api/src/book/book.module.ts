import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './enitity/book.entity';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { PublisheEntity } from 'src/publisher/entity/publisher.entity';
import { AuthorController } from 'src/author/author.controller';
import { BookService } from './book.service';
import { AuthorService } from 'src/author/author.service';
import { PublisherService } from 'src/publisher/publisher.service';
import { PublisherController } from 'src/publisher/publisher.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity, AuthorEntity, PublisheEntity]),
  ],
  controllers: [BookController, AuthorController, PublisherController],
  providers: [BookService, AuthorService, PublisherService],
})
export class BookModule {}

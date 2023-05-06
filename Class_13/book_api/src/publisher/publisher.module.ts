import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisheEntity } from './entity/publisher.entity';
import { BookEntity } from 'src/book/enitity/book.entity';
import { BookController } from 'src/book/book.controller';
import { PublisherService } from './publisher.service';
import { BookService } from 'src/book/book.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublisheEntity, BookEntity])],
  controllers: [PublisherController, BookController],
  providers: [PublisherService, BookService],
})
export class PublisherModule {}

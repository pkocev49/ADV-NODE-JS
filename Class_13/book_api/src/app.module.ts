import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorService } from './author/author.service';
import { AuthorModule } from './author/author.module';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { PublisherService } from './publisher/publisher.service';
import { PublisherModule } from './publisher/publisher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    AuthorModule,
    BookModule,
    PublisherModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'book_api',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

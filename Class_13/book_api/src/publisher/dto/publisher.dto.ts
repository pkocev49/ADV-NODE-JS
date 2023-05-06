import { IsNotEmpty } from 'class-validator';
import { Book } from 'src/book/interfaces/book.int';

export class PublisherDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phoneNumber: string;
}

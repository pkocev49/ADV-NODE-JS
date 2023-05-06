import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Book } from 'src/book/interfaces/book.int';
export class AuthorDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  birthDate: Date;
}

import { Book } from 'src/book/interfaces/book.int';

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
}

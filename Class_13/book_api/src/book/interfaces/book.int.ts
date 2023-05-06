import { Author } from 'src/author/interfaces/author.int';
import { Publiher } from 'src/publisher/interface/publisher.int';

export interface Book {
  id: string;
  title: string;
  description: string;
  genre: string;
}

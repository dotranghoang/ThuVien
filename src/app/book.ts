import {Category} from './category';
import {Publisher} from './publisher';
import {Status} from './status';

export interface Book {
  id: number;
  book: string;
  author: string;
  categoryId: number;
  publisherId: number;
  statusId: number;
  category: Category;
  publisher: Publisher;
  status: Status;
  image: string;
}

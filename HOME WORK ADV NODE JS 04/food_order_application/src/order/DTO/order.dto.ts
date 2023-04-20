import { ArrayNotEmpty, IsNotEmpty } from 'class-validator';
import { Product } from 'src/product/product.interface';

export class OrderDto {
  id: string;
  orderDate: string;
  @IsNotEmpty()
  @ArrayNotEmpty()
  productsOrder: Product[];
}

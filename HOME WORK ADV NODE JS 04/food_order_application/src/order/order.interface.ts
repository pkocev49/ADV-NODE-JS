import { Product } from 'src/product/product.interface';

export interface Order {
  id: string;
  orderDate: Date;
  productsOrder: Product[];
}

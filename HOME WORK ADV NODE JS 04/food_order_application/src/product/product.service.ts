import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  products: Product[] = [
    {
      id: '1',
      productName: 'Intel Core i3',
      productPrice: 112,
    },
    {
      id: '2',
      productName: 'Intel Core i5',
      productPrice: 150,
    },
    {
      id: '3',
      productName: 'Intel Core i7',
      productPrice: 200,
    },
  ];
  getAllProducts() {
    return this.products;
  }
}

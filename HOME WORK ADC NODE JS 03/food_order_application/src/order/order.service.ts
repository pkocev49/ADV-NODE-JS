import { Injectable } from '@nestjs/common';
import { Order } from './order.interface';
import { Product } from 'src/product/product.interface';

@Injectable()
export class OrderService {
  order: Order[] = [
    {
      id: '1',
      orderDate: new Date(),
      productsOrder: [{ id: '1', productName: 'CPU ONE', productPrice: 123 }],
    },
    {
      id: '2',
      orderDate: new Date(),
      productsOrder: [{ id: '2', productName: 'CPU TWO', productPrice: 123 }],
    },
    {
      id: '3',
      orderDate: new Date(),
      productsOrder: [{ id: '3', productName: 'CPU THREE', productPrice: 123 }],
    },
  ];
  getOrders() {
    return this.order;
  }
}

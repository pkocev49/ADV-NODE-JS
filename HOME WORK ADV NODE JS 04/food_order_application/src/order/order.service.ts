import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Order } from './order.interface';
import { Product } from 'src/product/product.interface';
import { v4 as uuid } from 'uuid';
import { OrderDto } from './DTO/order.dto';
import { UpdateOrderDto } from './DTO/updateOrder.dto';
@Injectable()
export class OrderService {
  orders: Order[] = [
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
    return this.orders;
  }
  getById(id: string) {
    const order = this.orders.find((order) => order.id === id);
    return order;
  }
  createOrder(orderDto: OrderDto) {
    const order: Order = {
      ...orderDto,
      id: uuid(),
      orderDate: new Date(),
      productsOrder: orderDto.productsOrder,
    };
    console.log('Order:', order);
    this.orders.push(order);
  }
  updateOrder(id: string, updateDto: UpdateOrderDto) {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index === -1) {
      throw new HttpException(
        `Order with ID:${id} was not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    this.orders[index] = {
      ...this.orders[index],
      ...updateDto,
    };
    return this.orders[index];
  }
  deleteOrder(id: string): void {
    const initialLength = this.orders.length;
    this.orders = this.orders.filter((order) => order.id !== id);
    if (initialLength === this.orders.length) {
      throw new NotFoundException(`Order with ID '${id}' not found`);
    }
    throw new HttpException(
      `Order with id ${id} was deleted.`,
      HttpStatus.ACCEPTED,
    );
  }
}

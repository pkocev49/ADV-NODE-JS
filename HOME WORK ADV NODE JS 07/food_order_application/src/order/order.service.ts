import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { OrderDto } from './DTO/order.dto';
import { UpdateOrderDto } from './DTO/updateOrder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from 'src/product/entities/productEntity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}
  getOrders() {
    return this.orderRepo.find({ relations: ['products'] });
  }
  getById(id: string) {
    const order = this.orderRepo.findOne({
      where: { id: id },
      relations: ['products'],
    });
    return order;
  }
  async createOrder(orderDto: OrderDto, productId: string) {
    const products = await this.productRepo.findOneBy({ id: productId });

    const productEntityInst = this.orderRepo.create({
      id: uuid(),
      ...orderDto,
      orderDate: new Date(),
      products: [products],
    });

    const orderSaved = await this.orderRepo.save(productEntityInst);

    return orderSaved.id;
  }
  // async updateOrder(id: string, updateDto: UpdateOrderDto) {}
  async remove(orderId: string) {
    const deletedOrder = await this.orderRepo.delete(orderId);
    return deletedOrder;
  }
}

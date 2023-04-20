import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service.js';
import { OrderDto } from './DTO/order.dto.js';
import { UpdateOrderDto } from './DTO/updateOrder.dto.js';

interface IdRouteParams {
  id: string;
}
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Get()
  getOrders() {
    const orders = this.orderService.getOrders();
    return orders;
  }
  @Get(':id')
  getById(@Param() params: IdRouteParams) {
    const id: string = params.id;
    const order = this.orderService.getById(id);
    if (order === undefined) {
      throw new HttpException(
        `Order with ID:${id} was not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return order;
  }
  @Post()
  createOrder(@Body() body: OrderDto) {
    const id = this.orderService.createOrder(body);
    return {
      message: 'Order created',
      id: id,
    };
  }
  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }
  @Delete(':id')
  deleteOrder(@Param() params: IdRouteParams): void {
    const id: string = params.id;

    const order = this.orderService.deleteOrder(id);
    return order;
  }
}

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
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service.js';
import { OrderDto } from './DTO/order.dto.js';
import { JwtAuthGuard } from 'src/common/jwt-auth/jwt-auth.guard';

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
  @Post(':productId')
  createOrder(@Body() body: OrderDto, @Param('productId') productId: string) {
    const id = this.orderService.createOrder(body, productId);
    return {
      message: 'Order created',
      id: productId,
    };
  }
  // ZA UPDATE RUTATA NEMAV IDEJA KAKO BI MOZELO DA JA NAPRAVAM AKO MOZE MALKU POMOS =)
  // @Put(':id')
  // updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.updateOrder(id, updateOrderDto);
  // }
  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    await this.orderService.remove(id);
    return {
      message: `Order with id: ${id} was deleted.`,
    };
  }
}

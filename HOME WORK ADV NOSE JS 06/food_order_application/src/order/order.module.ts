import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { ProductEntity } from 'src/product/entities/productEntity';
import { ProductService } from 'src/product/product.service';
import { ProductController } from 'src/product/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity])],
  controllers: [OrderController, ProductController],
  providers: [OrderService, ProductService],
})
export class OrderModule {}

import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/productEntity';
import { OrderModule } from 'src/order/order.module';
import { OrderEntity } from 'src/order/entities/order.entity';

@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forFeature([ProductEntity, OrderEntity]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

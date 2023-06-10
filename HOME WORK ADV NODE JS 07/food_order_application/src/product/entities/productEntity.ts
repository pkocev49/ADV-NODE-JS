import { OrderEntity } from 'src/order/entities/order.entity';
import { Product } from '../product.interface';
import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
@Entity('products')
export class ProductEntity implements Product {
  @PrimaryColumn()
  id: string;
  @Column()
  productName: string;
  @Column()
  productPrice: number;

  @ManyToOne(() => OrderEntity, (order) => order.products, {
    onDelete: 'SET NULL',
  })
  order: OrderEntity;
}

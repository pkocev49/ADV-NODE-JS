import { ProductEntity } from 'src/product/entities/productEntity';
import { Entity, PrimaryColumn, Column, OneToMany, JoinTable } from 'typeorm';
import { Order } from '../order.interface';

@Entity('orders')
export class OrderEntity implements Order {
  @PrimaryColumn()
  id: string;

  @Column()
  orderDate: Date;

  @OneToMany(() => ProductEntity, (product) => product.order, {
    onDelete: 'CASCADE',
  })
  products: ProductEntity[];
}

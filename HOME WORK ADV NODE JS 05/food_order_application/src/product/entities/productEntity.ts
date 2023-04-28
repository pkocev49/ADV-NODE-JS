import { Product } from '../product.interface';
import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('products')
export class ProductEntity implements Product {
  @PrimaryColumn()
  id: string;
  @Column()
  productName: string;
  @Column()
  productPrice: number;
}

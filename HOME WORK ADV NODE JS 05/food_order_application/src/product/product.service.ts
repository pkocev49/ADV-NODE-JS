import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/productEntity';
import { Repository } from 'typeorm';
import { ProductDto } from './DTO/productDto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  products: Product[] = [
    {
      id: '1',
      productName: 'Intel Core i3',
      productPrice: 112,
    },
    {
      id: '2',
      productName: 'Intel Core i5',
      productPrice: 150,
    },
    {
      id: '3',
      productName: 'Intel Core i7',
      productPrice: 200,
    },
  ];
  async getAllProducts() {
    return this.productRepository.find();
  }
  async findOne(id: string) {
    const product = await this.productRepository.findOneBy({ id: id });
    return product;
  }
  async createProduct(productDto: ProductDto) {
    const product: Product = {
      ...productDto,
      id: uuid(),
    };

    const objOfProductEntity = this.productRepository.create(product);
    const productSaved = await this.productRepository.save(objOfProductEntity);
    console.log(productSaved);
    return product.id;
  }
}

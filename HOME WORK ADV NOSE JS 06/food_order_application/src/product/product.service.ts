import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/productEntity';
import { Repository } from 'typeorm';
import { ProductDto, UpdateProductDto } from './DTO/productDto';
import { v4 as uuid } from 'uuid';
import { OrderEntity } from 'src/order/entities/order.entity';
import { UpdateOrderDto } from 'src/order/DTO/updateOrder.dto';
import { NotFoundError } from 'rxjs';
import { table } from 'console';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async getAllProducts() {
    return this.productRepository.find({ relations: ['order'] });
  }
  async findOne(id: string) {
    const product = await this.productRepository.findOne({
      where: { id: id },
      relations: ['order'],
    });
    return product;
  }
  async createProduct(productDto: ProductDto): Promise<string> {
    const productEntityInstance = this.productRepository.create({
      id: uuid(),
      ...productDto,
    });

    const productSaved = await this.productRepository.save(
      productEntityInstance,
    );
    console.log(productSaved);
    return productEntityInstance.id;
  }
  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const updateProduct: Product = {
      id: id,
      ...updateProductDto,
    };
    const product = await this.productRepository.preload({
      id: id,
      ...updateProductDto,
    });
    if (!product) {
      throw new NotFoundException(`Product with id:${id} was not found`);
    }
    await this.productRepository.save(product);
    return product.id;
  }
  async remove(id: string) {
    const removeProduct = await this.productRepository.delete(id);
    return removeProduct;
  }
}

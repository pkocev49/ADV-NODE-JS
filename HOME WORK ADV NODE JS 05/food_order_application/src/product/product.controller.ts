import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './DTO/productDto';
import { Response, Request, response } from 'express';

interface IdRouteParams {
  id: string;
}

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getAllProducts() {
    const products = this.productService.getAllProducts();
    return products;
  }

  @Post()
  async create(@Body() body: ProductDto) {
    const id = await this.productService.createProduct(body);
    return {
      message: 'Product was created',
      id: id,
    };
  }

  @Get(':id')
  async findOne(@Req() request: Request, @Param() params: IdRouteParams) {
    const id: string = params.id;
    const product = await this.productService.findOne(id);
    console.log(product);
    if (product === null) {
      throw new HttpException(
        `Product with id ${id} was not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return product;
  }
}

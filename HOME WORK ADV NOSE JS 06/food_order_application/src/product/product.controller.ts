import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, UpdateProductDto } from './DTO/productDto';
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
  async create(@Body() productDto: ProductDto) {
    const id = await this.productService.createProduct(productDto);
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
  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const productId = await this.productService.updateProduct(
      id,
      updateProductDto,
    );
    return {
      message: 'Product was updated',
      id: productId,
    };
  }
  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    await this.productService.remove(id);
    return {
      message: `Product with id: ${id} was removed.`,
    };
  }
}

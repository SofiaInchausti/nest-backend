import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productServices: ProductsService) {}

  @Get()
  getProducts() {
    return this.productServices.findAll();
  }
  @Get('/filter')
  getProductFilter() {
    return {
      message: 'filter',
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string) {
    return this.productServices.findOne(+productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productServices.create(payload);
  }

  @Put(':id')
  post(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productServices.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productServices.delete(id);
  }
}

import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryServices: CategoriesService) {}
  @Get()
  get() {
    return this.categoryServices.findAll();
  }
  @Get('/:categoryId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('categoryId') categoryId: string) {
    return this.categoryServices.findOne(+categoryId);
  }
}

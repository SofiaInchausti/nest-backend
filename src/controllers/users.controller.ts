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
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dto';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private userServices: UsersService) {}

  @Get()
  get() {
    return this.userServices.findAll();
  }
  @Get('/filter')
  getFilter() {
    return {
      message: 'filter',
    };
  }

  @Get('/:userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('userId') userId: string) {
    return this.userServices.findOne(+userId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.userServices.create(payload);
  }

  @Put(':id')
  post(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
    return this.userServices.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userServices.delete(id);
  }
}

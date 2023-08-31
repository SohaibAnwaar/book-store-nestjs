import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnprocessableEntityException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.userService.create(createUserDto);
    } catch (error) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        error: `There was an error while creating a new user: ${error.meta.cause}`,
      });
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('orders/:id')
  findAllOrders(@Param('id') id: string) {
    return this.userService.findAllOrders(id);
  }
  @Get(':email')
  async findOne(@Param('email') email: string) {
    try {
      await this.userService.findOne(email);
    } catch (error) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: error.name,
      });
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      await this.userService.update(id, updateUserDto);
    } catch (error) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        error: `There was an error while upating user details: ${error.meta.cause}`,
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

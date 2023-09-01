import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const userData = await this.prisma.user.findUniqueOrThrow({
      where: {
        id: createOrderDto.userId,
      },
      select: {
        point: true,
      },
    });
    const orderTotalPoints = createOrderDto.totalPoints;
    if (userData.point < orderTotalPoints) {
      throw new Error('low balance');
    }
    const remainingCredits = userData.point - orderTotalPoints;
    console.log(remainingCredits);
    await this.prisma.user.update({
      where: {
        id: createOrderDto.userId,
      },
      data: {
        point: remainingCredits,
      },
    });
    return this.prisma.order.create({
      data: {
        userId: createOrderDto.userId,
        totalPoints: createOrderDto.totalPoints,
        books: {
          connect: createOrderDto.bookIds.map((bookId) => ({
            id: bookId,
          })),
        },
      },
    });
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}

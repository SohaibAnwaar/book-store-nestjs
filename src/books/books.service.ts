import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({
      data: {
        title: createBookDto.title,
        writer: createBookDto.writer,
        coverImage: createBookDto.coverImage,
        point: createBookDto.point,
        tag: {
          create: createBookDto.tag.map((singleTag) => ({ title: singleTag })),
        },
      },
      include: {
        tag: true,
      },
    });
  }

  findAll() {
    return this.prisma.book.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

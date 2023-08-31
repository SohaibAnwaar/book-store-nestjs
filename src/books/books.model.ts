import { Prisma } from '@prisma/client';

export class Book implements Prisma.BookCreateInput {
  id: string;
  title: string;
  writer: string;
  coverImage: string;
  point: number;
  orderId?: string;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [PrismaModule, BooksModule, UserModule, TagModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

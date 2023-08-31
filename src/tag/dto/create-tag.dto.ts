import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty()
  @IsString()
  bookId: string;
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  orderId?: string;
}

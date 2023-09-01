import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateBookDto } from 'src/books/dto/create-book.dto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class CreateOrderDto {
  @Column()
  @ApiProperty()
  @IsString()
  @IsOptional()
  userId: string;

  @Column()
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  totalPoints: number;

  @Column()
  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  bookIds?: string[];
}

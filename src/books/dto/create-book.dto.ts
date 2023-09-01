import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';
import { Entity, ManyToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CustomTags } from './CustomTags';
const tags = ['fiction', 'non-fiction', 'science', 'essay'] as const;
type Tags = typeof tags[number];
@Entity()
export class CreateBookDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsString()
  writer: string;

  @Column()
  @ApiProperty()
  @IsString()
  title: string;

  @Column()
  @ApiProperty()
  @IsString()
  coverImage: string;

  @Column()
  @ApiProperty()
  @IsNumber()
  point: number;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Validate(CustomTags)
  tag: Tags[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CreateBookDto {
  @PrimaryGeneratedColumn()
  @IsString()
  id: string;

  @Column()
  @ApiProperty()
  @IsString()
  title: string;

  @Column()
  @ApiProperty()
  @IsString()
  writer: string;

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
  @IsString({ each: true })
  tag: string[];

  @Column()
  @ApiProperty()
  @IsOptional()
  orderId?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;
  @IsString()
  writer: string;
  @IsString()
  coverImage: string;
  @IsNumber()
  point: number;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tag: string[];
  @IsOptional()
  orderId?: string;
}

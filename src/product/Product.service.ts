import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/exceptions/exception';
import { Exception } from 'src/exceptions/exception.type';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { ProductEntity } from './entities/ProductEntity';
import { ProductRepository } from './Product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async create(dto: CreateProductDto): Promise<ProductEntity> {
    try {
      const data: ProductEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findById(id: string): Promise<ProductEntity> {
    try {
      return await this.repository.findById(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateProductDto): Promise<ProductEntity> {
    await this.findById(id);
    try {
      const data: Partial<ProductEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<ProductEntity> {
    await this.findById(id);
    try {
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from './entities/ProductEntity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProductEntity): Promise<ProductEntity> {
    return await this.prisma.product.create({ data });
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.prisma.product.findMany();
  }

  async findById(id: string): Promise<ProductEntity> {
    return await this.prisma.product.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<ProductEntity>): Promise<ProductEntity> {
    return await this.prisma.product.update({ where: { id }, data });
  }

  async delete(id: string): Promise<ProductEntity> {
    return await this.prisma.product.delete({ where: { id } });
  }
}

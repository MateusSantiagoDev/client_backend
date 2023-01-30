import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PayEntity } from './entities/PayEntity';


@Injectable()
export class PayRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PayEntity): Promise<PayEntity> {
    return await this.prisma.pay.create({ data });
  }

  async findAll(): Promise<PayEntity[]> {
    return await this.prisma.pay.findMany();
  }

  async findById(id: string): Promise<PayEntity> {
    return await this.prisma.pay.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<PayEntity>): Promise<PayEntity> {
    return await this.prisma.pay.update({ where: { id }, data });
  }

  async delete(id: string): Promise<PayEntity> {
    return await this.prisma.pay.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReceiveEntity } from './entities/ReceiveEntity';

@Injectable()
export class ReceiveRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ReceiveEntity): Promise<ReceiveEntity> {
    return await this.prisma.receive.create({ data });
  }

  async findAll(): Promise<ReceiveEntity[]> {
    return await this.prisma.receive.findMany();
  }

  async findById(id: string): Promise<ReceiveEntity> {
    return await this.prisma.receive.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<ReceiveEntity>): Promise<ReceiveEntity> {
    return await this.prisma.receive.update({ where: { id }, data });
  }

  async delete(id: string): Promise<ReceiveEntity> {
    return await this.prisma.receive.delete({ where: { id } });
  }
}

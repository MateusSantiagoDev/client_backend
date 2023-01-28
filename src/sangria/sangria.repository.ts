import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SangriaEntity } from './entities/SangriaEntity';

@Injectable()
export class SangriaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SangriaEntity): Promise<SangriaEntity> {
    return await this.prisma.sangria.create({ data });
  }

  async findAll(): Promise<SangriaEntity[]> {
    return await this.prisma.sangria.findMany();
  }

  async findById(id: string): Promise<SangriaEntity> {
    return await this.prisma.sangria.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<SangriaEntity>): Promise<SangriaEntity> {
    return await this.prisma.sangria.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SangriaEntity> {
    return await this.prisma.sangria.delete({ where: { id } });
  }
}

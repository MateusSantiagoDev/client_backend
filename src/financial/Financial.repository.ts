import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FinancialEntity } from './entities/financialEntity';
;

@Injectable()
export class FinancialRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: FinancialEntity): Promise<FinancialEntity> {
    return await this.prisma.financial.create({ data });
  }

  async findAll(): Promise<FinancialEntity[]> {
    return await this.prisma.financial.findMany();
  }

  async findById(id: string): Promise<FinancialEntity> {
    return await this.prisma.financial.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<FinancialEntity>): Promise<FinancialEntity> {
    return await this.prisma.financial.update({ where: { id }, data });
  }

  async delete(id: string): Promise<FinancialEntity> {
    return await this.prisma.financial.delete({ where: { id } });
  }
}

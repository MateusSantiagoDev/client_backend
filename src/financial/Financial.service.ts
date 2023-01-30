import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/exceptions/exception';
import { Exception } from 'src/exceptions/exception.type';
import { CreateFinancialDto } from './dto/create-financial-dto';
import { UpdateFinancialDto } from './dto/update-financial-dto';
import { FinancialEntity } from './entities/financialEntity';
import { FinancialRepository } from './Financial.repository';

@Injectable()
export class FinancialService {
  constructor(private readonly repository: FinancialRepository) {}

  async create(dto: CreateFinancialDto): Promise<FinancialEntity> {
    try {
      const data: FinancialEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<FinancialEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findById(id: string): Promise<FinancialEntity> {
    try {
      return await this.repository.findById(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateFinancialDto): Promise<FinancialEntity> {
    await this.findById(id);
    try {
      const data: Partial<FinancialEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<FinancialEntity> {
    await this.findById(id);
    try {
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}

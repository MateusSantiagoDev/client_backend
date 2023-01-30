import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/exceptions/exception';
import { Exception } from 'src/exceptions/exception.type';
import { CreatePayDto } from './dto/create-pay-dto';
import { UpdatePayDto } from './dto/update-pay-dto';
import { PayEntity } from './entities/PayEntity';
import { PayRepository } from './Pay.repository';

@Injectable()
export class PayService {
  constructor(private readonly repository: PayRepository) {}

  async create(dto: CreatePayDto): Promise<PayEntity> {
    try {
      const data: PayEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<PayEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findById(id: string): Promise<PayEntity> {
    try {
      return await this.repository.findById(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdatePayDto): Promise<PayEntity> {
    await this.findById(id);
    try {
      const data: Partial<PayEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<PayEntity> {
    await this.findById(id);
    try {
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/exceptions/exception';
import { Exception } from 'src/exceptions/exception.type';
import { CreateReceiveDto } from './dto/create-receive-dto';
import { UpdateReceiveDto } from './dto/update-receive-dto';
import { ReceiveEntity } from './entities/ReceiveEntity';
import { ReceiveRepository } from './Receive.repository';

@Injectable()
export class ReceiveService {
  constructor(private readonly repository: ReceiveRepository) {}

  async create(dto: CreateReceiveDto): Promise<ReceiveEntity> {
    try {
      const data: ReceiveEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<ReceiveEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findById(id: string): Promise<ReceiveEntity> {
    try {
      return await this.repository.findById(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateReceiveDto): Promise<ReceiveEntity> {
    await this.findById(id);
    try {
      const data: Partial<ReceiveEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<ReceiveEntity> {
    await this.findById(id);
    try {
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}

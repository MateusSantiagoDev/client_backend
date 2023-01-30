import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/exceptions/exception';
import { Exception } from 'src/exceptions/exception.type';
import { CreateSangriaDto } from './dto/create-sangria-dto';
import { UpdateSangriaDto } from './dto/update-sangria-dto';
import { SangriaEntity } from './entities/SangriaEntity';
import { SangriaRepository } from './sangria.repository';

@Injectable()
export class SangriaService {
  constructor(private readonly repository: SangriaRepository) {}

  async create(dto: CreateSangriaDto): Promise<SangriaEntity> {
    try {
      const data: SangriaEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<SangriaEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findById(id: string): Promise<SangriaEntity> {
    try {
      return await this.repository.findById(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateSangriaDto): Promise<SangriaEntity> {
    await this.findById(id);
    try {
      const data: Partial<SangriaEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<SangriaEntity> {
    await this.findById(id);
    try {
      return await this.repository.delete(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}

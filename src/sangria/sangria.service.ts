import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateSangriaDto } from './dto/create-sangria-dto';
import { UpdateSangriaDto } from './dto/update-sangria-dto';
import { SangriaEntity } from './entities/SangriaEntity';

@Injectable()
export class SangriaService {
  constructor(private readonly repository: SangriaEntity) {}

  async create(dto: CreateSangriaDto): Promise<SangriaEntity> {
    const newUser: SangriaEntity = { ...dto, id: randomUUID() };
    if (!newUser) {
      return;
    }
    const result = await this.repository.create(newUser);
    if (!result) {
      return;
    }
    return result;
  }

  async findAll(): Promise<SangriaEntity[]> {
    const result = await this.repository.findAll();
    if (!result) {
      return;
    }
    return result;
  }

  async findById(id: string): Promise<SangriaEntity> {
    if (!id) {
      return;
    }
    const result = await this.repository.findById(id);
    if (!result) {
      return;
    }
    return result;
  }

  async update(id: string, dto: UpdateSangriaDto): Promise<SangriaEntity> {
    await this.findById(id);
    const data: Partial<SangriaEntity> = { ...dto };
    const result = await this.repository.update(id, data);
    if (!result) {
      return;
    }
    return result;
  }

  async delete(id: string): Promise<SangriaEntity> {
    await this.findById(id);
    const result = await this.repository.delete(id);
    if (!result) {
      return;
    }
    return result;
  }
}

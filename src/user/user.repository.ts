import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/entity-user';

@Injectable()
export class UserRepositoty {
  private Select = {
    id: true,
    name: true,
    cpf: false,
    rg: false,
    contact: true,
    role: false,
    password: false,
  }
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    return await this.prisma.user.create({ data, select: this.Select });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany({ select: this.Select });
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.prisma.user.findFirstOrThrow({ where: { id }, select: this.Select });
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    return await this.prisma.user.update({ where: { id }, data, select: this.Select });
  }

  async delete(id: string): Promise<UserEntity> {
    return await this.prisma.user.delete({ where: { id }, select: this.Select });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/entity-user';

@Injectable()
export class UserRepositoty {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    return await this.prisma.user.create({ data });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.prisma.user.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<UserEntity> {
    return await this.prisma.user.delete({ where: { id } });
  }
}

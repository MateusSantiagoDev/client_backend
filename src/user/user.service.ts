import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { hash } from 'bcrypt';
import { Exceptions } from 'src/exceptions/exception';
import { Exception } from 'src/exceptions/exception.type';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserEntity } from './entities/entity-user';
import { UserRepositoty } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepositoty) {}

  async create(dto: CreateUserDto): Promise<UserEntity> {
    try {
      if (dto.password) {
        if (dto.password !== dto.confirmPassword) {
          throw new Exceptions(Exception.InvalidData);
        }
      }
      delete dto.confirmPassword;

      const data: UserEntity = { id: randomUUID(), ...dto, password: await hash(dto.password, 10) };
      return await this.repository.create(data);      
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.repository.findAll();  
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findById(id: string): Promise<UserEntity> {
    try {
      return await this.repository.findById(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    await this.findById(id);
    try {
      if (dto.password) {
        if (dto.password !== dto.confirmPassword) {
          throw new Exceptions(Exception.InvalidData);
        }
      }
      delete dto.confirmPassword;

      const data: Partial<UserEntity> = { ...dto };
      if(data.password) {
        data.password = await hash(data.password, 10);
      }
      return await this.repository.update(id, data);      
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async delete(id: string): Promise<UserEntity> {
    await this.findById(id);
    try {
      return await this.repository.delete(id);      
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}

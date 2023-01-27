import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { UserEntity } from "./entities/entity-user";
import { UserRepositoty } from "./user.repository";

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepositoty) {}

    async create(dto: CreateUserDto): Promise<UserEntity> {
        if(dto.password) {
            if(dto.password !== dto.confirmPassword) {
                return
            }            
        }
        delete dto.confirmPassword;

      const newUser: UserEntity = { ...dto, id: randomUUID() }
      if(!newUser) {
        return
      }
      const result = await this.repository.create(newUser)
      if(!result) {
        return
      }
      return result;
    }

    async findAll(): Promise<UserEntity[]> {
        const result = await this.repository.findAll()
        if(!result) {
            return
        }
        return result;
    }

    async findById(id: string): Promise<UserEntity> {
        if(!id) {
            return
        }
        const result = await this.repository.findById(id)
        if(!result) {
           return 
        }
        return result;
    }

    async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
        await this.findById(id)

        if(dto.password) {
            if(dto.password !== dto.confirmPassword) {
                return
            }            
        }
        delete dto.confirmPassword;
        
        const data: Partial<UserEntity> = { ...dto };
        const result = await this.repository.update(id, data)
        if(!result) {
            return
        }
        return result;
    }

    async delete(id: string): Promise<UserEntity> {
        await this.findById(id)
        const result = await this.repository.delete(id)
        if(!result) {
            return
        }
        return result;
    }
}
import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Exceptions } from "src/exceptions/exception";
import { Exception } from "src/exceptions/exception.type";
import { CreateUserDto } from "./dto/create-user-dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { UserEntity } from "./entities/entity-user";
import { UserRepositoty } from "./user.repository";

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepositoty) {}

    async create(dto: CreateUserDto): Promise<UserEntity> {
        try {

            if(dto.password) {
                if(dto.password !== dto.confirmPassword) {
                    throw new Exceptions(Exception.InvalidData)
                }            
            }
            delete dto.confirmPassword;
    
          const data: UserEntity = { ...dto, id: randomUUID() }         
          const result = await this.repository.create(data)         
          return result;
        } catch (err) {
            throw new Exceptions(Exception.UnprocessableEntityException)
        }
    }

    async findAll(): Promise<UserEntity[]> {
        const result = await this.repository.findAll()
        if(!result) {
            throw new Exceptions(Exception.DatabaseException)
            
        }
        return result;
    }

    async findById(id: string): Promise<UserEntity> {
     try {
         const result = await this.repository.findById(id)        
         return result;
     } catch (err) {
        throw new Exceptions(Exception.NotFoundException)
     }
    }

    async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {        
        await this.findById(id)
        try {            
            if(dto.password) {
                if(dto.password !== dto.confirmPassword) {
                    throw new Exceptions(Exception.InvalidData)
                }            
            }
            delete dto.confirmPassword;
            
            const data: Partial<UserEntity> = { ...dto };
            const result = await this.repository.update(id, data)            
            return result;
        } catch (err) {
            throw new Exceptions(Exception.UnprocessableEntityException)
        }
    }

    async delete(id: string): Promise<UserEntity> {
        await this.findById(id)
       try {
           const result = await this.repository.delete(id)      
           return result;
       } catch (err) {
        throw new Exceptions(Exception.NotFoundException)
       }
    }
}
import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateReceiveDto } from "./dto/create-receive-dto";
import { UpdateReceiveDto } from "./dto/update-receive-dto";
import { ReceiveEntity } from "./entities/ReceiveEntity";



@Injectable()
export class ReceiveService {
    constructor(private readonly repository: ReceiveRepository) {}

    async create(dto: CreateReceiveDto): Promise<ReceiveEntity> {
      const data: ReceiveEntity = { ...dto, id: randomUUID() }
      if(!data) {
        return
      }
      const result = await this.repository.create(data)
      if(!result) {
        return
      }
      return result;
    }

    async findAll(): Promise<ReceiveEntity[]> {
        const result = await this.repository.findAll()
        if(!result) {
            return
        }
        return result;
    }

    async findById(id: string): Promise<ReceiveEntity> {
        if(!id) {
            return
        }
        const result = await this.repository.findById(id)
        if(!result) {
           return 
        }
        return result;
    }

    async update(id: string, dto: UpdateReceiveDto): Promise<ReceiveEntity> {
        await this.findById(id)        
        const data: Partial<ReceiveEntity> = { ...dto };
        const result = await this.repository.update(id, data)
        if(!result) {
            return
        }
        return result;
    }

    async delete(id: string): Promise<ReceiveEntity> {
        await this.findById(id)
        const result = await this.repository.delete(id)
        if(!result) {
            return
        }
        return result;
    }
}
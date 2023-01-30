import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreatePayDto } from "./dto/create-pay-dto";
import { UpdatePayDto } from "./dto/update-pay-dto";
import { PayEntity } from "./entities/PayEntity";
import { PayRepository } from "./Pay.repository";



@Injectable()
export class PayService {
    constructor(private readonly repository: PayRepository) {}

    async create(dto: CreatePayDto): Promise<PayEntity> {
      const data: PayEntity = { ...dto, id: randomUUID() }
      if(!data) {
        return
      }
      const result = await this.repository.create(data)
      if(!result) {
        return
      }
      return result;
    }

    async findAll(): Promise<PayEntity[]> {
        const result = await this.repository.findAll()
        if(!result) {
            return
        }
        return result;
    }

    async findById(id: string): Promise<PayEntity> {
        if(!id) {
            return
        }
        const result = await this.repository.findById(id)
        if(!result) {
           return 
        }
        return result;
    }

    async update(id: string, dto: UpdatePayDto): Promise<PayEntity> {
        await this.findById(id)        
        const data: Partial<PayEntity> = { ...dto };
        const result = await this.repository.update(id, data)
        if(!result) {
            return
        }
        return result;
    }

    async delete(id: string): Promise<PayEntity> {
        await this.findById(id)
        const result = await this.repository.delete(id)
        if(!result) {
            return
        }
        return result;
    }
}
import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateFinancialDto } from "./dto/create-financial-dto";
import { UpdateFinancialDto } from "./dto/update-financial-dto";
import { FinancialEntity } from "./entities/financialEntity";



@Injectable()
export class FinancialService {
    constructor(private readonly repository: FinancialRepository) {}

    async create(dto: CreateFinancialDto): Promise<FinancialEntity> {
      const newUser: FinancialEntity = { ...dto, id: randomUUID() }
      if(!newUser) {
        return
      }
      const result = await this.repository.create(newUser)
      if(!result) {
        return
      }
      return result;
    }

    async findAll(): Promise<FinancialEntity[]> {
        const result = await this.repository.findAll()
        if(!result) {
            return
        }
        return result;
    }

    async findById(id: string): Promise<FinancialEntity> {
        if(!id) {
            return
        }
        const result = await this.repository.findById(id)
        if(!result) {
           return 
        }
        return result;
    }

    async update(id: string, dto: UpdateFinancialDto): Promise<FinancialEntity> {
        await this.findById(id)        
        const data: Partial<FinancialEntity> = { ...dto };
        const result = await this.repository.update(id, data)
        if(!result) {
            return
        }
        return result;
    }

    async delete(id: string): Promise<FinancialEntity> {
        await this.findById(id)
        const result = await this.repository.delete(id)
        if(!result) {
            return
        }
        return result;
    }
}
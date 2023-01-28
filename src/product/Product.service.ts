import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateProductDto } from "./dto/create-product-dto";
import { UpdateProductDto } from "./dto/update-product-dto";
import { ProductEntity } from "./entities/ProductEntity";
import { ProductRepository } from "./Product.repository";


@Injectable()
export class ProductService {
    constructor(private readonly repository: ProductRepository) {}

    async create(dto: CreateProductDto): Promise<ProductEntity> {
      const newUser: ProductEntity = { ...dto, id: randomUUID() }
      if(!newUser) {
        return
      }
      const result = await this.repository.create(newUser)
      if(!result) {
        return
      }
      return result;
    }

    async findAll(): Promise<ProductEntity[]> {
        const result = await this.repository.findAll()
        if(!result) {
            return
        }
        return result;
    }

    async findById(id: string): Promise<ProductEntity> {
        if(!id) {
            return
        }
        const result = await this.repository.findById(id)
        if(!result) {
           return 
        }
        return result;
    }

    async update(id: string, dto: UpdateProductDto): Promise<ProductEntity> {
        await this.findById(id)        
        const data: Partial<ProductEntity> = { ...dto };
        const result = await this.repository.update(id, data)
        if(!result) {
            return
        }
        return result;
    }

    async delete(id: string): Promise<ProductEntity> {
        await this.findById(id)
        const result = await this.repository.delete(id)
        if(!result) {
            return
        }
        return result;
    }
}
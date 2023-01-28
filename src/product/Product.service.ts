import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./Product.repository";

@Injectable()
export class ProductService {
    constructor(private readonly repository: ProductRepository) {}
}
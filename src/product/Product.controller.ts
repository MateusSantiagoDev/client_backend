import { Controller } from "@nestjs/common";
import { ProductService } from "./Product.service";

@Controller()
export class ProductController {
    constructor(private readonly service: ProductService){}
}
import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductController } from "./Product.controller";
import { ProductRepository } from "./Product.repository";
import { ProductService } from "./Product.service";

@Module({
    imports: [PrismaModule],
    controllers: [ProductController],
    providers: [ProductService, ProductRepository],
})
export class ProductModule {}
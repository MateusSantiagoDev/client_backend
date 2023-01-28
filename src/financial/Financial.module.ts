import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { FinancialController } from "./Financial.controller";
import { FinancialRepository } from "./Financial.repository";
import { FinancialService } from "./Financial.service";

@Module({
    imports: [PrismaModule],
    controllers: [FinancialController],
    providers: [FinancialService, FinancialRepository],
})
export class FinancialModule {}
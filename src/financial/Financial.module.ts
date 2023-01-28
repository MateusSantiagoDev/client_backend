import { Module } from "@nestjs/common";
import { FinancialController } from "./Financial.controller";
import { FinancialService } from "./Financial.service";

@Module({
    imports: [],
    controllers: [FinancialController],
    providers: [FinancialService],
})
export class FinancialModule {}
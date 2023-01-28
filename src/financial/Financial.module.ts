import { Module } from "@nestjs/common";
import { FinancialController } from "./Financial.controller";

@Module({
    imports: [],
    controllers: [FinancialController],
    providers: [],
})
export class FinancialModule {}
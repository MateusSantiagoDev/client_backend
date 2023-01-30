import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PayController } from "./Pay.controller";
import { PayRepository } from "./Pay.repository";
import { PayService } from "./Pay.service";

@Module({
    imports: [PrismaModule],
    controllers: [PayController],
    providers: [PayService, PayRepository],
})
export class PayModule {}
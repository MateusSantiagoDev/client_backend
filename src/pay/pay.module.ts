import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PayController } from "./pay.controller";
import { PayService } from "./pay.service";

@Module({
    imports: [PrismaModule],
    controllers: [PayController],
    providers: [PayService],
})
export class PayModule {}
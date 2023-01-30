import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PayController } from "./pay.controller";

@Module({
    imports: [PrismaModule],
    controllers: [PayController],
    providers: [],
})
export class PayModule {}
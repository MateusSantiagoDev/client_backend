import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ReceiveController } from "./Receive.controller";
import { ReceiveService } from "./Receive.service";

@Module({
    imports: [PrismaModule],
    controllers: [ReceiveController],
    providers: [ReceiveService],
})
export class ReceiveModule {}
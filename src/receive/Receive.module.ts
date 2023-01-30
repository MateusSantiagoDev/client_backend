import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ReceiveController } from "./Receive.controller";
import { ReceiveRepository } from "./Receive.repository";
import { ReceiveService } from "./Receive.service";

@Module({
    imports: [PrismaModule],
    controllers: [ReceiveController],
    providers: [ReceiveService, ReceiveRepository],
})
export class ReceiveModule {}
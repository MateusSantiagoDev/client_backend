import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { SangriaController } from "./sangria.controller";
import { SangriaRepository } from "./sangria.repository";
import { SangriaService } from "./sangria.service";

@Module({
    imports: [PrismaModule],
    controllers:[SangriaController],
    providers: [SangriaService, SangriaRepository],
})
export class SangriaModule {}
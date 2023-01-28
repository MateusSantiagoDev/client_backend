import { Module } from "@nestjs/common";
import { SangriaController } from "./sangria.controller";
import { SangriaService } from "./sangria.service";

@Module({
    imports: [],
    controllers:[SangriaController],
    providers: [SangriaService],
})
export class SangriaModule {}
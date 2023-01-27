import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserRepositoty } from "./user.repository";
import { UserService } from "./user.service";

@Module({
    imports: [PrismaModule],
    controllers: [UserController],
    providers: [UserService, UserRepositoty],
})
export class UserModule {}
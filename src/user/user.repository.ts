import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserRepositoty{
    constructor(private readonly prisma: PrismaService){}
        
}
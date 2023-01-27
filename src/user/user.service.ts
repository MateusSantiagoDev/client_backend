import { Injectable } from "@nestjs/common";
import { UserRepositoty } from "./user.repository";

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepositoty) {}
}
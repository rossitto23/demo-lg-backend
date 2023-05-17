import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { userDTO } from "src/shared/DTO/user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Post()
    async create(
        @Body(ValidationPipe) user : userDTO
    ) : Promise<userDTO>{
        return await this.userService.create(user);
    }
}
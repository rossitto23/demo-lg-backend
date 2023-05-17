import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JWT_SECRET } from "./secret";

@Module({
    imports: [

        JwtModule.register({
            global: true,
            secret: JWT_SECRET,
            signOptions: { expiresIn: '3600s' }
        })
    ],
    controllers: [],
    providers: []
})
export class AuthModule{}
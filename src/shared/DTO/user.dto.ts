import { IsDefined, IsEmail } from "class-validator";

export class userDTO {

    @IsDefined()
    id : number;

    @IsDefined()
    @IsEmail()
    email : string;

    @IsDefined()
    password : string;
}
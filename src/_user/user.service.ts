import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from 'fs';
import { userDTO } from "src/shared/DTO/user.dto";

@Injectable()
export class UserService {
    async create(user : userDTO) : Promise<userDTO> {
        const filePath = path.join(process.cwd(), 'users.json');
        console.log("file path ==> ", filePath);
        let users : userDTO[] = [];
        // try {
            const fileData = fs.readFileSync(filePath, 'utf8');
            console.log("file data ==>");
            console.log(fileData);
            users = JSON.parse(fileData);
        // }catch(error) {
        //     throw new Error("il n'y a pas d'utilisateur");
        // }
        users.push(user);

        fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf8");
        return user;
    }
}
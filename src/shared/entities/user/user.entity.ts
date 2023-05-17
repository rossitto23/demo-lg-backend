import { Column, Entity } from "typeorm";

@Entity('user')
export class User {

    @Column({nullable: false})
    id: number;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;
}
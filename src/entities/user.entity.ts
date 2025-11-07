import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
    @Column()
    username!: string;
    @Column()
    email!: string;
}
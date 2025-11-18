import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator";

export class UserDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    lastName!: string;

    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    password!: string;
    
    @IsNotEmpty()
    city!: string;

    @IsNotEmpty()
    province!: string;
}
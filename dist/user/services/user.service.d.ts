import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserDTO } from "../dto/user.dto";
import { UserEntity } from "../entities/user.entity";
export declare class UserService extends BaseService<UserEntity> {
    constructor();
    findAllUsers(): Promise<UserEntity[]>;
    findUserById(id: string): Promise<UserEntity | null>;
    createUser(body: UserDTO): Promise<UserEntity>;
    updateUser(id: string): Promise<DeleteResult>;
    deleteUser(id: string, infoUpdate: UserDTO): Promise<UpdateResult>;
}
//# sourceMappingURL=user.service.d.ts.map
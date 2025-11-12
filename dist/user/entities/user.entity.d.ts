import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
export declare class UserEntity extends BaseEntity {
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    city: string;
    province: string;
    customer: CustomerEntity;
}
//# sourceMappingURL=user.entity.d.ts.map
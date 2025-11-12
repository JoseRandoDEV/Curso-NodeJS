import { BaseEntity } from '../../config/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { PurchaseEntity } from '../../purchase/entities/purchase.entity';
export declare class CustomerEntity extends BaseEntity {
    address: string;
    dni: string;
    user: UserEntity;
    purchases: PurchaseEntity[];
}
//# sourceMappingURL=customer.entity.d.ts.map
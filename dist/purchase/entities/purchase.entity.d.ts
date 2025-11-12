import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { PurchaseProductEntity } from "../../custom/entities/purchases-products.entity";
export declare class PurchaseEntity extends BaseEntity {
    status: string;
    paymentMethod: string;
    customer: CustomerEntity;
    purchaseProduct: PurchaseProductEntity[];
}
//# sourceMappingURL=purchase.entity.d.ts.map
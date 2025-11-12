import { BaseEntity } from "../../config/base.entity";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseProductEntity } from "../../custom/entities/purchases-products.entity";
export declare class ProductEntity extends BaseEntity {
    productName: string;
    description: string;
    price: number;
    category: CategoryEntity;
    purchaseProduct: PurchaseProductEntity[];
}
//# sourceMappingURL=product.entity.d.ts.map
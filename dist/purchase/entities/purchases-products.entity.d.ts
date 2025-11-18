import { BaseEntity } from '../../config/base.entity';
import { ProductEntity } from '../../product/entities/product.entity';
import { PurchaseEntity } from '../../purchase/entities/purchase.entity';
export declare class PurchaseProductEntity extends BaseEntity {
    quantityProduct: number;
    totalPrice: number;
    purchase: PurchaseEntity;
    product: ProductEntity;
}
//# sourceMappingURL=purchases-products.entity.d.ts.map
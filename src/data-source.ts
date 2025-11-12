import { DataSource } from 'typeorm';
import { UserEntity } from './user/entities/user.entity';
import { CustomerEntity } from './customer/entities/customer.entity';
import { ProductEntity } from './product/entities/product.entity';
import { CategoryEntity } from './category/entities/category.entity';
import { PurchaseEntity } from './purchase/entities/purchase.entity';
import { PurchaseProductEntity } from './custom/entities/purchases-products.entity';



export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3307,
  username: process.env.DB_USER || 'nodeuser',
  password: process.env.DB_PASSWORD || '52723751',
  database: process.env.DB_NAME || 'codrr_db',
  
  entities: [
    CategoryEntity,
    CustomerEntity,
    ProductEntity,
    PurchaseEntity,
    PurchaseProductEntity,
    UserEntity
  ],
  synchronize: true,
  dropSchema: false, // ⚠️ solo en desarrollo poner a true para resetear la BDD
  logging: true,
});

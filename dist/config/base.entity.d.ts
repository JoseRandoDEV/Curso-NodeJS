import { BaseEntity as TypeOrmBase } from 'typeorm';
export declare abstract class BaseEntity extends TypeOrmBase {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=base.entity.d.ts.map
import { EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";
export declare class BaseService<T extends BaseEntity> extends ConfigServer {
    private getEntity;
    execRepository: Promise<Repository<T>>;
    constructor(getEntity: EntityTarget<T>);
    initRepository(e: EntityTarget<T>): Promise<Repository<T>>;
}
//# sourceMappingURL=base.service.d.ts.map
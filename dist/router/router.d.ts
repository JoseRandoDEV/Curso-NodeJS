import { Router } from "express";
export declare class BaseRouter<T> {
    router: Router;
    controller: T;
    constructor(TController: new () => T);
    routes(): void;
}
//# sourceMappingURL=router.d.ts.map
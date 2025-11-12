import { ConnectionOptions } from 'typeorm';
export declare abstract class ConfigServer {
    constructor();
    getEnvironment(k: string): string;
    getNumberEnv(k: string): number;
    get nodeEnv(): string;
    createPathEnv(path: string): string;
    get typeORMConfig(): ConnectionOptions;
}
//# sourceMappingURL=config.d.ts.map
export declare abstract class ConfigServer {
    constructor();
    getEnvironment(k: string): string | undefined;
    getNumberEnv(k: string): number;
    get nodeEnv(): string;
    createPathEnv(path: string): string;
}
//# sourceMappingURL=config.d.ts.map
import e, { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { HttpResponse } from "../../shared/response/http.response";
export declare class UserController {
    private readonly userService;
    private readonly httpResponse;
    constructor(userService?: UserService, httpResponse?: HttpResponse);
    getUsers(req: Request, res: Response): Promise<e.Response<any, Record<string, any>>>;
    getUserById(req: Request, res: Response): Promise<e.Response<any, Record<string, any>>>;
    createUser(req: Request, res: Response): Promise<e.Response<any, Record<string, any>>>;
    updateUser(req: Request, res: Response): Promise<e.Response<any, Record<string, any>>>;
    deleteUser(req: Request, res: Response): Promise<e.Response<any, Record<string, any>>>;
}
//# sourceMappingURL=user.controller.d.ts.map
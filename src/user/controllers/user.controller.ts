import e, { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { HttpResponse } from "../../shared/response/http.response";

export class UserController {
    constructor(
        private readonly userService: UserService = new UserService(),
        private readonly httpResponse: HttpResponse = new HttpResponse()) { }

    async getUsers(req: Request, res: Response) {
        try {
            const data = await this.userService.findAllUsers();
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No Existe Datos");
            }
            return this.httpResponse.Ok(res, data);
        }
        catch (error) {
            return this.httpResponse.Error(res, error);
        }
    }
    async getUserById(req: Request, res: Response) {
        const id = req.params.id as string;
        try {
            const data = await this.userService.findUserById(id);
            if (!data) {
                return this.httpResponse.NotFound(res, "No Existe Datos");
            }
            return this.httpResponse.Ok(res, data);
        } catch (error) {
            console.error(error);
            return this.httpResponse.Error(res, error);
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const data = await this.userService.createUser(req.body);
            return this.httpResponse.Ok(res, data);
        }
        catch (error) {
            console.error(error);
            return this.httpResponse.Error(res, error);
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Hay un error al Actualizar" });
        }
        try {
            const data = await this.userService.updateUser(id);
            return this.httpResponse.Ok(res, data);
        }
        catch (error) {
            console.error(error);
            return this.httpResponse.Error(res, error);
        }
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Hay un error al Eliminar" });
        }
        try {
            const data = await this.userService.deleteUser(id, req.body);
            return this.httpResponse.Ok(res, data);
        }
        catch (error) {
            console.error(error);
            return this.httpResponse.Error(res, error);
        }
    }
}
import { UserController } from "./controllers/user.controller";
import { BaseRouter } from "../shared/router/router";

export class UserRouter extends BaseRouter<UserController> {
    constructor() {
        super(UserController);
    }

    routes(): void {
        this.router.get('/', (req, res) => this.controller.getUsers(req, res));
        this.router.get('/:id', (req, res) => this.controller.getUserById(req, res));
        this.router.post('/', (req, res) => this.controller.createUser(req, res));
        this.router.put('/:id', (req, res) => this.controller.updateUser(req, res)); // EDITAR
        this.router.delete('/:id', (req, res) => this.controller.deleteUser(req, res));
    }
}




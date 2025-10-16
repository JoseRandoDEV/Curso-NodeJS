"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const user_controller_1 = require("../controllers/user.controller");
const router_1 = require("./router");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map
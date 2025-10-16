"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const user_router_1 = require("./router/user.router");
class ServerBootstrap {
    app = express();
    PORT = 8000;
    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use('/api', this.routers());
        this.listen();
    }
    routers() {
        return [new user_router_1.UserRouter().router];
    }
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        });
    }
}
new ServerBootstrap();
//# sourceMappingURL=server.js.map
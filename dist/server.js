"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const user_router_1 = require("./router/user.router");
const config_1 = require("./config/config");
class ServerBootstrap extends config_1.ConfigServer {
    app = express();
    port = this.getNumberEnv("PORT");
    constructor() {
        super();
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
        this.app.listen(this.port, () => {
            console.log("Server running on port => ", this.port);
        });
    }
}
new ServerBootstrap();
//# sourceMappingURL=server.js.map
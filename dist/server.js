"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
class ServerBootstrap {
    app = express();
    PORT = 8000;
    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.listen();
    }
    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        });
    }
}
new ServerBootstrap();
//# sourceMappingURL=server.js.map
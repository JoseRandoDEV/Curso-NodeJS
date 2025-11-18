import 'reflect-metadata';
import express = require('express');
import morgan = require('morgan');
import cors = require('cors');
import { UserRouter } from './user/user.router';
import { ConfigServer } from './config/config';

class ServerBootstrap extends ConfigServer {
    public app: express.Application = express();
    private port: number = this.getNumberEnv("PORT");

    constructor() {
        super();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.dbConnect();

        this.app.use(morgan('dev'));
        this.app.use(cors());

        // Aquí montamos correctamente el router
        this.app.use('/users', new UserRouter().router);

        this.listen();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port => ", this.port);
        });
    }
}

new ServerBootstrap();

// Para correr el servicio
// npx ts-node src/test-db.ts
// npx ts-node src/index.ts
import express = require('express');
import morgan = require('morgan');
import cors = require('cors');
import { UserRouter } from './router/user.router';

class ServerBootstrap {
    public app: express.Application = express();
    private PORT: number = 8000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.app.use('/api', this.routers());
        this.listen();
    }

    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }

    public listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        });
    }
}

new ServerBootstrap();
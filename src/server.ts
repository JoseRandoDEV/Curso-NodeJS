import express = require('express');
import morgan = require('morgan');
import cors = require('cors');

class ServerBootstrap {
    public app: express.Application = express();
    private PORT: number = 8000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.app.get('/api/hola', (req, res) => {
            res.status(200).json({ message: 'Hola Mundo..' });
            
        });

        this.listen();
    }

    public listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on http://localhost:${this.PORT}`);
        });
    }
}

new ServerBootstrap();
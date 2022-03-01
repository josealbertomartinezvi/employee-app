import express from 'express';
import cors from 'cors';
import http from 'http';
import router from './routes';
import config from './utils/config';
import './database/database';

export const init = () => {

    const app = express();
    const server = http.createServer(app);

    app.use(express.json());
    app.use(cors());

    app.set('port', config.port);

    router(app);

    server.listen(app.get('port'), () => {
        console.log(`Servidor arriba en http://localhost:${app.get('port')}`);
    });

};
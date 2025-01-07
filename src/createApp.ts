import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import userRouters from './users/users.routes';
import { taskRouters } from './tasks/tasks.routes';
import { rolesRouters } from './roles/roles.routes';
import { homeRouters } from './home/home.routes';

export function createApp() {
    const app: express.Application = express();
    dotenv.config();

    app.use(cookieParser());

    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);

    app.use('/static', express.static(path.join(__dirname, 'public')));

    app.use('/', homeRouters);
    app.use('/users', userRouters);
    app.use('/tasks', taskRouters);
    app.use('/roles', rolesRouters);

    return app;
}
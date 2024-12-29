import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import userRouters from './routes/users.route.mjs';
import {taskRouters} from './routes/tasks.route.mjs';
import { rolesRouters } from './routes/roles.route.mjs';

const app = express();
dotenv.config();

app.use(cookieParser());

const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/users', userRouters);
app.use('/tasks', taskRouters);
app.use('/roles', rolesRouters);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
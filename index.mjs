import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

// Routes
import userRouters from './services/users/users.route.mjs';
import {taskRouters} from './services/tasks/tasks.route.mjs';

const app = express();
dotenv.config();
app.use(cookieParser());

const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use('/static', express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/travel/:from-:to', (req, res) => {
  console.log(req.params);
  res.send(`Traveling from ${req.params.from} to ${req.params.to}`);
});

app.use('/users', userRouters);
app.use('/tasks', taskRouters);

app.use('/roles/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  if(req.params.id === 0) {
    next('route');
  } else {
    next();
  }
}, (req, res, next) => {
  res.send('Regular route');
  next();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
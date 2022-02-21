import express, { json } from 'express';

import connection from './api/db/connection';
import entryRouter from './api/entry/Entry.router';
const app = express();

connection.sync();
app.use(json());
app.use('/api/entry', entryRouter);
const server = app.listen(3001, () => console.log('Listen!'));

export { app, server };

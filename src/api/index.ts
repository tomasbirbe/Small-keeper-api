import express, { json } from 'express';

import connection from '../db/connection';
import entryRouter from '../api/entry';
import { testRouter } from '../api/test';
const app = express();

connection.sync();
app.use(json());
app.use('/api/entry', entryRouter);
app.use('/api/test', testRouter);
const server = app.listen(3001, () => console.log('Listen!'));

export { app, server };

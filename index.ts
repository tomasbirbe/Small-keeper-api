import express, { json } from 'express';

import connection from './src/db/connection';
import entryRouter from './src/api/entry';
import { testRouter } from './src/api/test';
const app = express();

connection.sync();
app.use(json());
// app.use('/api/entry', entryRouter);
app.use('/api/test', testRouter);
const server = app.listen(process.env.PORT || 3001, () => console.log('Listen!'));

export { app, server };

import express from 'express';

import connection from './src/db/connection';
import entryRouter from './src/api-routes/Entry.router';
const app = express();

connection.sync();
app.use('/api/entry', entryRouter);
const server = app.listen(3001, () => console.log('Listen!'));

export { app, server };

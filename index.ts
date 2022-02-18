import express from 'express';

import connection from './src/db/connection';
import entryRouter from './src/routers/entryRouter';
const app = express();

connection.sync();
app.use('/entry', entryRouter);
app.listen(3001, () => console.log('Listen!'));

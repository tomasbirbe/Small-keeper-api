import express from 'express';

import { getAllEntries } from '../controllers/Entry.controller';

const entryRouter = express.Router();

entryRouter.get('/', getAllEntries);

export default entryRouter;

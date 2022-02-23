import express from 'express';

import { createEntry /* getAllEntries */ } from '../controllers/Entry.controller';

const entryRouter = express.Router();

// entryRouter.get('/', getAllEntries);
entryRouter.post('/', createEntry);

export default entryRouter;

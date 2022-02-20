import express from 'express';

import { createEntry, deleteEntry, getEntries } from '../controllers/Entry.controller';

const entryRouter = express.Router();

entryRouter.get('/', getEntries);
entryRouter.post('/', createEntry);
entryRouter.delete('/:id', deleteEntry);

export default entryRouter;

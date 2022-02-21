import express from 'express';

import {
  createEntry,
  deleteEntry,
  getEntries,
  getEntry,
  modifyEntry,
} from '../controllers/Entry.controller';

const entryRouter = express.Router();

entryRouter.get('/', getEntries);
entryRouter.get('/:id', getEntry);
entryRouter.post('/', createEntry);
entryRouter.delete('/:id', deleteEntry);
entryRouter.put('/:id', modifyEntry);

export default entryRouter;

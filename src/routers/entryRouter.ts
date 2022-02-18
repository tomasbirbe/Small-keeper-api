import express from 'express';

import { EntryModel } from '../db/models';

const entryRouter = express.Router();

entryRouter.get('/', async (request, response) => {
  const entries = await EntryModel.findAll();

  response.status(200).send(entries);
});

export default entryRouter;

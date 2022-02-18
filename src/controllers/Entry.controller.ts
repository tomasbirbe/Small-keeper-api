import { Request, Response } from 'express';

import { EntryModel } from '../db/models';

export function getAllEntries(request: Request, response: Response) {
  EntryModel.findAll()
    .then((entries) => response.status(200).send(entries))
    .catch((error) => console.log(error));
}

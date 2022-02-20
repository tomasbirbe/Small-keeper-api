import { Request, Response } from 'express';
import { Model } from 'sequelize/types';

import { EntryModel } from '../db/models';

interface CreateEntryRequest {
  account: string;
  username: string;
  password: string;
}

interface Entry {
  id: number;
  account: string;
  username: string;
  password: string;
}

export function getAllEntries(request: Request, response: Response) {
  EntryModel.findAll()
    .then((entries) => response.status(200).json(entries))
    .catch((error) => console.log(error));
}

export function createEntry(request: Request, response: Response) {
  const { account, username, password }: CreateEntryRequest = request.body;

  EntryModel.create({ account, username, password })
    .then((entry) => response.status(201).json(entry))
    .catch((error) => {
      console.log(error);
      response.status(500).json({ msg: "Couldn't create a new entry" });
    });
}

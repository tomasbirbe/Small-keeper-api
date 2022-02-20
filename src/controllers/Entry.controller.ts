import { Request, Response } from 'express';
import { Model, ValidationError } from 'sequelize/types';

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

export function getEntries(request: Request, response: Response) {
  EntryModel.findAll()
    .then((entries) => response.status(200).json(entries))
    .catch((error) => console.log(error));
}

export function createEntry(request: Request, response: Response) {
  const { account, username, password }: CreateEntryRequest = request.body;

  EntryModel.create({ account, username, password })
    .then((entry) => response.status(201).json(entry))
    .catch((error) => response.status(400).json({ msg: "Couldn't create a new entry" }));
}

export function deleteEntry(request: Request, response: Response) {
  const { id } = request.params;

  EntryModel.destroy({ where: { id: Number(id) } })
    .then((entriesDeleted: number) => {
      if (entriesDeleted) {
        EntryModel.findByPk(Number(id))
          .then((resp) =>
            resp === null
              ? response.status(200).json({ msg: 'The entry was deleted sucessfully' })
              : response.status(500).json({ msg: "The entry wasn't deleted" }),
          )
          .catch((resp) => console.log(resp));
      } else {
        response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
      }
    })
    .catch((error) => console.log(error));
}

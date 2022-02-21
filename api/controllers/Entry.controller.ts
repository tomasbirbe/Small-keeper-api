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
          .then((entry) =>
            entry === null
              ? response.status(200).json({ msg: 'The entry was deleted sucessfully' })
              : response.status(500).json({ msg: "The entry wasn't deleted" }),
          )
          .catch((error) => console.log(error));
      } else {
        response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
      }
    })
    .catch((error) => console.log(error));
}

export function modifyEntry(request: Request, response: Response) {
  const { id } = request.params;
  const newDataEntry = request.body;

  EntryModel.findByPk(id)
    .then((actualEntry) => {
      if (actualEntry) {
        /* 
          Model.update returns an array in which there are 2 elements.
          The first one is the amount of rows affected and the second one is the row affected
          (Only available on postgres); 
         */
        EntryModel.update(newDataEntry, { where: { id } })
          .then((entriesModified) => {
            if (entriesModified[0] > 0) {
              response
                .status(200)
                .json([{ oldEntry: actualEntry }, { modifiedEntry: { ...newDataEntry, id } }]);
            } else {
              response.status(400).json({
                msg: "The entry couldn't be modified. Maybe you are trying to modify an entry with the same data it already has",
              });
            }
          })
          .catch((error) => console.log(error));
      } else {
        response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
      }
    })
    .catch((error) => console.log(error));
}

export function getEntry(request: Request, response: Response) {
  const { id } = request.params;

  EntryModel.findByPk(id).then((entry) => {
    if (entry) {
      response.status(200).json(entry);
    } else {
      response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
    }
  });
}

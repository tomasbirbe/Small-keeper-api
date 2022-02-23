"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntry = exports.modifyEntry = exports.deleteEntry = exports.createEntry = exports.getEntries = void 0;
const models_1 = require("../db/models");
function getEntries(request, response) {
    models_1.EntryModel.findAll()
        .then((entries) => response.status(200).json(entries))
        .catch((error) => console.log(error));
}
exports.getEntries = getEntries;
function createEntry(request, response) {
    const { account, username, password } = request.body;
    models_1.EntryModel.create({ account, username, password })
        .then((entry) => response.status(201).json(entry))
        .catch((error) => response.status(400).json({ msg: "Couldn't create a new entry" }));
}
exports.createEntry = createEntry;
function deleteEntry(request, response) {
    const { id } = request.params;
    models_1.EntryModel.destroy({ where: { id: Number(id) } })
        .then((entriesDeleted) => {
        if (entriesDeleted) {
            models_1.EntryModel.findByPk(Number(id))
                .then((entry) => entry === null
                ? response.status(200).json({ msg: 'The entry was deleted sucessfully' })
                : response.status(500).json({ msg: "The entry wasn't deleted" }))
                .catch((error) => console.log(error));
        }
        else {
            response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
        }
    })
        .catch((error) => console.log(error));
}
exports.deleteEntry = deleteEntry;
function modifyEntry(request, response) {
    const { id } = request.params;
    const newDataEntry = request.body;
    models_1.EntryModel.findByPk(id)
        .then((actualEntry) => {
        if (actualEntry) {
            /*
              Model.update returns an array in which there are 2 elements.
              The first one is the amount of rows affected and the second one is the row affected
              (Only available on postgres);
             */
            models_1.EntryModel.update(newDataEntry, { where: { id } })
                .then((entriesModified) => {
                if (entriesModified[0] > 0) {
                    response
                        .status(200)
                        .json([{ oldEntry: actualEntry }, { modifiedEntry: { ...newDataEntry, id } }]);
                }
                else {
                    response.status(400).json({
                        msg: "The entry couldn't be modified. Maybe you are trying to modify an entry with the same data it already has",
                    });
                }
            })
                .catch((error) => console.log(error));
        }
        else {
            response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
        }
    })
        .catch((error) => console.log(error));
}
exports.modifyEntry = modifyEntry;
function getEntry(request, response) {
    const { id } = request.params;
    models_1.EntryModel.findByPk(id).then((entry) => {
        if (entry) {
            response.status(200).json(entry);
        }
        else {
            response.status(400).json({ msg: "That entry doesn't exist. Check your request" });
        }
    });
}
exports.getEntry = getEntry;

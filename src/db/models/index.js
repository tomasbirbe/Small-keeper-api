"use strict";
exports.__esModule = true;
exports.EntryModel = void 0;
var connection_1 = require("../connection");
var Entry_model_1 = require("./Entry.model");
var EntryModel = (0, Entry_model_1.CreateEntryModel)(connection_1["default"]);
exports.EntryModel = EntryModel;

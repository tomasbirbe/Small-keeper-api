"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModel = void 0;
const connection_1 = __importDefault(require("../connection"));
const Entry_model_1 = require("./Entry.model");
const EntryModel = (0, Entry_model_1.CreateEntryModel)(connection_1.default);
exports.EntryModel = EntryModel;

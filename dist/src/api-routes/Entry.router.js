"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Entry_controller_1 = require("../controllers/Entry.controller");
const entryRouter = express_1.default.Router();
// entryRouter.get('/', getAllEntries);
entryRouter.post('/', Entry_controller_1.createEntry);
exports.default = entryRouter;

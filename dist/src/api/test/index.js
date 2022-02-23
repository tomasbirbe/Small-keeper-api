"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = __importDefault(require("express"));
const testRouter = express_1.default.Router();
exports.testRouter = testRouter;
testRouter.get('/', (request, response) => {
    response.status(200).json({ msg: 'Hey, I am alive!' });
});

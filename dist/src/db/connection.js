"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT, NODE_ENV } = process.env;
const db = {
    name: DB_NAME || '',
    username: DB_USER || '',
    password: DB_PASSWORD || '',
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT === undefined ? DB_PORT : 3306,
};
exports.default = new sequelize_1.Sequelize(db.name, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    port: db.port,
    logging: false,
});

"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
require("dotenv/config");
var _a = process.env, DB_NAME = _a.DB_NAME, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_HOST = _a.DB_HOST, DB_DIALECT = _a.DB_DIALECT, DB_PORT = _a.DB_PORT, NODE_ENV = _a.NODE_ENV;
var db = {
    name: DB_NAME || '',
    username: DB_USER || '',
    password: DB_PASSWORD || '',
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT === undefined ? DB_PORT : 3306
};
exports["default"] = new sequelize_1.Sequelize(db.name, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    port: db.port,
    logging: false
});

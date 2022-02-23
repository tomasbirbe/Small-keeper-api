"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEntryModel = void 0;
const sequelize_1 = require("sequelize");
function CreateEntryModel(sequelize) {
    return sequelize.define('Entry', {
        account: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    });
}
exports.CreateEntryModel = CreateEntryModel;

"use strict";
exports.__esModule = true;
exports.CreateEntryModel = void 0;
var sequelize_1 = require("sequelize");
function CreateEntryModel(sequelize) {
    return sequelize.define('Entry', {
        account: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
}
exports.CreateEntryModel = CreateEntryModel;

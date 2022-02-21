import { DataTypes, Sequelize } from 'sequelize';

export function CreateEntryModel(sequelize: Sequelize) {
  return sequelize.define(
    'Entry',
    {
      account: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    },
  );
}

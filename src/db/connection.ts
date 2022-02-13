import { Dialect, Sequelize } from 'Sequelize';

import 'dotenv/config';
import { DatabaseCloseResponse, DatabaseConnectionResponse } from '../types/db/Database';

let sequelize: Sequelize;

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

const db = {
  name: DB_NAME || '',
  username: DB_USER || '',
  password: DB_PASSWORD || '',
  host: DB_HOST,
  dialect: DB_DIALECT as Dialect,
  port: DB_PORT === undefined ? DB_PORT : 3306,
};

export const Database = {
  connect: (): Promise<DatabaseConnectionResponse> => {
    return new Promise((resolve, reject) => {
      try {
        sequelize = new Sequelize(db.name, db.username, db.password, {
          host: db.host,
          dialect: db.dialect,
          port: db.port,
        });
        resolve({ succesful: true });
      } catch (error) {
        reject({ succesful: false });
      }
    });
  },
  close: (): Promise<DatabaseCloseResponse> =>
    new Promise((resolve, reject) => {
      try {
        sequelize.close();
        resolve({ isClosed: true });
      } catch (error) {
        reject({ isClosed: false });
      }
    }),
};

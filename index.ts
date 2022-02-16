import { Dialect, Sequelize } from 'sequelize/types';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } = process.env;

const db = {
  name: DB_NAME || '',
  username: DB_USER || '',
  password: DB_PASSWORD || '',
  host: DB_HOST,
  dialect: DB_DIALECT as Dialect,
  port: DB_PORT === undefined ? DB_PORT : 3306,
};

let sequelize;

sequelize = new Sequelize(db.name, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  port: db.port,
});

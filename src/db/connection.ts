import { Dialect, Sequelize } from 'sequelize';
import 'dotenv/config';
// const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT, NODE_ENV } = process.env;

// const db = {
//   name: DB_NAME || '',
//   username: DB_USER || '',
//   password: DB_PASSWORD || '',
//   host: DB_HOST,
//   dialect: DB_DIALECT as Dialect,
//   port: DB_PORT === undefined ? DB_PORT : 3306,
// };

// export default new Sequelize(db.name, db.username, db.password, {
//   host: db.host,
//   dialect: db.dialect,
//   port: db.port,
//   logging: false,
// });

const { DB_URL } = process.env;

console.log(DB_URL);

export default new Sequelize(`${DB_URL}`);

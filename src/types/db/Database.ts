import { Sequelize } from 'sequelize/types';

export interface DatabaseConnectionResponse {
  sequelize: Sequelize;
}

export interface DatabaseCloseResponse {
  isClosed: boolean;
}

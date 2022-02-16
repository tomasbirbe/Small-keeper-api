import sequelize from '../connection';

import { CreateEntryModel } from './Entry';

const EntryModel = CreateEntryModel(sequelize);

export { EntryModel };

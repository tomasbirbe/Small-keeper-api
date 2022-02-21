import sequelize from '../connection';

import { CreateEntryModel } from './Entry.model';

const EntryModel = CreateEntryModel(sequelize);

export { EntryModel };

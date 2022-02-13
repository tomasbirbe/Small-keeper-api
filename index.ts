import { Database } from './src/db/connection';

Database.connect()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

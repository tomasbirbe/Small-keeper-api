import 'jest';
import { Database } from '../../../src/db/connection';

describe('Connect and disconnect from database', () => {
  it('Connection established ', () => {
    expect.assertions(1);

    return Database.connect()
      .then((resp) => {
        expect(resp.succesful).toBe(true);
      })
      .catch((resp) => {
        expect(resp.succesful).toBe(false);
      });
  });

  it('Connection close', () => {
    expect.assertions(1);

    return Database.close()
      .then((resp) => {
        expect(resp.isClosed).toBe(true);
      })
      .catch((resp) => {
        expect(resp.isClosed).toBe(false);
      });
  });
});

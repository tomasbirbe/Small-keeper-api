import supertest from 'supertest';

import sequelize from '../../../src/db/connection';
import { app, server } from '../../../index';

const api = supertest(app);

interface Entry {
  id: number;
  account: string;
  username: string;
  password: string;
}

describe('/entry', () => {
  it('Get all entries', async () => {
    const response = await api.get('/api/entry');
    const entries = response.body;

    entries.forEach((entry: Entry | undefined) =>
      expect(entry).toMatchObject<Entry>({
        id: expect.any(Number),
        username: expect.any(String),
        password: expect.any(String),
        account: expect.any(String),
      }),
    );
  });
});

afterAll(() => {
  server.close();
});

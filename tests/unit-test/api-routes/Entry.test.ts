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

const EntryPattern = {
  id: expect.any(Number),
  username: expect.any(String),
  password: expect.any(String),
  account: expect.any(String),
};

describe('/entry', () => {
  it('Get all entries', async () => {
    const response = await api.get('/api/entry');
    const entries = response.body;

    entries.forEach((entry: Entry | undefined) => expect(entry).toMatchObject<Entry>(EntryPattern));
  });

  it('Create an entry', async () => {
    expect.assertions(3);
    const response = await api
      .post('/api/entry')
      .send({ account: 'Santander', username: 'Tomas', password: 'Birbe' });
    const entry = response.body;

    expect(response.status).toEqual(201);
    expect(response.header['content-type']).toMatch(new RegExp(/application\/json/, 'ig'));
    expect(entry).toMatchObject<Entry>(EntryPattern);
  });

  it('Create entry without enough data, like password, username or account', async () => {
    expect.assertions(2);
    const response = await api.post('/api/entry').send({});

    expect(response.status).toEqual(400);
    expect(response.header['content-type']).toMatch(new RegExp(/application\/json/, 'ig'));
  });

  it('Delete entry', async () => {
    expect.assertions(3);
    const response = await api.delete('/api/entry/10');

    expect(response.status).toEqual(200);
    expect(response.header['content-type']).toMatch(new RegExp(/application\/json/, 'ig'));
    expect(response.body).toEqual({ msg: 'The entry was deleted sucessfully' });
  });

  it('Delete entry with an inexistent id', async () => {
    expect.assertions(3);
    const response = await api.delete('/api/entry/9999');

    expect(response.status).toEqual(400);
    expect(response.header['content-type']).toMatch(new RegExp(/application\/json/, 'ig'));
    expect(response.body).toEqual({ msg: "That entry doesn't exist. Check your request" });
  });
});

afterAll(() => {
  server.close();
});

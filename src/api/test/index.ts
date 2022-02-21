import express, { request, response } from 'express';

const testRouter = express.Router();

testRouter.get('/', (request, response) => {
  response.status(200).json({ msg: 'Hey, I am alive!' });
});

export { testRouter };

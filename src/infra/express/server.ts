import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import '@infra/typeorm/database';
import '@infra/tsyringe';

import GlobalError from '@infra/errors/GlobalError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(GlobalError);

app.listen(3333, () => {
  console.log(`Servidor started on port: 3333`);
});

export default app;

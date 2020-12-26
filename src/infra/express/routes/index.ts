import { Router } from 'express';

import userRouter from '@modules/users/infra/express/routes/User.routes';

const routes = Router();

routes.use('/users', userRouter);

export default routes;

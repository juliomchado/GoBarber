import { Router } from 'express';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const providersController = new ProvidersController();

const providersRouter = Router();

providersRouter.use(ensureAuthenticaded);

providersRouter.get('/', providersController.index);

export default providersRouter;

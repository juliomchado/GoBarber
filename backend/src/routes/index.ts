import { Router } from 'express';

import appointmentsRouter from './appointment.routes'
import usersRouter from './users.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)


export default routes;

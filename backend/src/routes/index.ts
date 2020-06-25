import { Router } from 'express';
import appointmentsRouter from './appointment.routes'

const routes = Router();

routes.use('/appointments', appointmentsRouter)


export default routes;

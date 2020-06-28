import { Router } from 'express'

const sessionsRouter = Router()

import AuthenticateUserService from '../services/AuthenticateUserService'

sessionsRouter.post('/', async (request, response) => {
  try {

    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user } = await authenticateUser.execute({
      email,
      password,
    })

    delete user.password;

    return response.json({ user });
  }
  catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

export default sessionsRouter;

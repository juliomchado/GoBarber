import { Router } from 'express'

import CreateUserService from '../services/CreateUserService'

const usersRouter = Router()



usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createdUserService = new CreateUserService();

    const user = await createdUserService.execute({
      name,
      email,
      password
    })


    return response.json(user);
  }
  catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

export default usersRouter;

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const authenticateUser = container.resolve(ResetPasswordService);

    await authenticateUser.execute({ token, password });

    return response.status(204).json();
  }
}

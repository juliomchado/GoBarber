import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const authenticateUser = container.resolve(SendForgotPasswordEmailService);

    await authenticateUser.execute({ email });

    return response.status(204).json();
  }
}

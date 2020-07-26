import IMailProvider from '../models/IMailProvider';

interface IMessege {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messeges: IMessege[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messeges.push({
      to,
      body,
    });
  }
}

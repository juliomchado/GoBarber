import IMailProvider from '../models/IMailProvider';
import ISendMailDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messeges: ISendMailDTO[] = [];

  public async sendMail(messeges: ISendMailDTO): Promise<void> {
    this.messeges.push(messeges);
  }
}

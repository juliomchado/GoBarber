import IMailTempalteProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTempalteProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;

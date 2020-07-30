import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTempalteProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTempalteProvider {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;

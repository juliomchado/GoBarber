import handlebars from 'handlebars';

import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';
import IMailTempalteProvider from '../models/IMailTemplateProvider';

class HandleBarsMailTemplateProvider implements IMailTempalteProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandleBarsMailTemplateProvider;

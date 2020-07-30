import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseTemplateDTO): Promise<string>;
}

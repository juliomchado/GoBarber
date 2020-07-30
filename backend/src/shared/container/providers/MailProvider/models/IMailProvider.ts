import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailPrivider {
  sendMail(data: ISendMailDTO): Promise<void>;
}

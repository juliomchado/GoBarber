export default interface IMailPrivider {
  sendMail(to: string, body: string): Promise<void>;
}

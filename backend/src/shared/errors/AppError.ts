class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(messege: string, statusCode = 400) {
    this.message = messege;
    this.statusCode = statusCode;
  }
}

export default AppError;

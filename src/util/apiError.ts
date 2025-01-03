import { ErrorMessage, HttpStatusCode } from './enum/error';

export class BaseError extends Error {
  readonly message: ErrorMessage;
  readonly statusCode: HttpStatusCode;

  constructor(message: ErrorMessage, statusCode: HttpStatusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;

    Error.captureStackTrace(this);
  }
}

export class APIError extends BaseError {
  constructor(message: ErrorMessage, statusCode = 500) {
    super(message, statusCode);
  }
}

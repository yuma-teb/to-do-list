import { HttpStatusCode } from './enum/error';

export class ResponseBuilder {
  private statusCode: HttpStatusCode;
  private status: StatusMessage;
  private message: string;
  private data?: any;
  private error?: any;
  private errorCode?: any;
  private errorDetails: any;

  constructor() {
    this.statusCode = HttpStatusCode.OK;
    this.status = StatusMessage.OK;
    this.message = 'Request successful';
    this.errorDetails = {};
    this.data = null;
    this.error = null;
    this.errorCode = '';
    this.errorDetails = null;
  }

  public setStatus(status: StatusMessage): this {
    this.status = status;
    return this;
  }

  public setMessage(message: string): this {
    this.message = message;
    return this;
  }

  public setData(data: any): this {
    this.data = data;
    return this;
  }

  public setError(error: any): this {
    this.error = error;
    return this;
  }

  public setErrorCode(errorCode: any): this {
    this.errorCode = errorCode;
    return this;
  }

  public setErrorDetails(details: any): this {
    this.errorDetails = details;
    return this;
  }

  public setStatusCode(code: number): this {
    this.statusCode = code;
    return this;
  }

  public build() {
    return {
      status: this.status,
      message: this.message,
      data: this.data,
      error: this.error,
      errorCode: this.errorCode,
      errorDetails: this.errorDetails,
    }
  }

  protected buildResponse(status: StatusMessage ,message: string, statusCode: HttpStatusCode, data?: any, error?: any, errorCode?: any, errorDetails?: any) {
    return this.setStatus(status).setStatusCode(statusCode).setMessage(message).setData(data).setError(error).setErrorCode(errorCode).setErrorDetails(errorDetails).build();
  }



}


class ApiResponseBuilder extends ResponseBuilder {
  constructor() {
    super();
  }
    /**
   * Response for successful request
   *
   * @param message
   * @param statusCode
   * @param data
   * @returns
   */
    public ok(message: string, data: any) {
      return this.buildResponse(StatusMessage.OK, message, HttpStatusCode.OK, data)
    }

    /**
     * Response for created request
     *
     * @param message
     * @param data
     * @returns
     */
    public created(message: string, data: any) {
      return this.buildResponse(StatusMessage.CREATED, message, HttpStatusCode.CREATED, data)
    }

  public badRequest(message: string, error: any) {
    return this.buildResponse(StatusMessage.BAD_REQUEST, message, HttpStatusCode.BAD_REQUEST, null, error)
  }

  public unauthorized(message: string, error: any) {
    return this.buildResponse(StatusMessage.UNAUTHORIZED, message, HttpStatusCode.UNAUTHORIZED, null, error)
  }

  public forbidden(message: string, error: any) {
    return this.buildResponse(StatusMessage.FORBIDDEN, message, HttpStatusCode.FORBIDDEN, null, error)
  }

  public notFound(message: string, error: any) {
    return this.buildResponse(StatusMessage.NOT_FOUND, message, HttpStatusCode.NOT_FOUND, null, error)
  }

  public conflict(message: string, error: any) {
    return this.buildResponse(StatusMessage.CONFLICT, message, HttpStatusCode.CONFLICT, null, error)
  }

  public internalServerError(message: string, error: any) {
    return this.buildResponse(StatusMessage.INTERNAL_SERVER_ERROR, message, HttpStatusCode.INTERNAL_SERVER_ERROR, null, error)
  }
}
export class ApiError extends Error {
  response: Response;

  constructor(body: any, response: Response){
    super();
    this.name = "APIError";
    this.response = response;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}

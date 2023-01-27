import { ApiError } from "../../errors/ApiError";

export default class HttpClient {
  baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {

    let result;

    const response = await fetch(`${this.baseUrl}${path}`);

    const contentType =  response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      result = await response.json();
    }

    if (response.ok) {
      return result;
    }

    throw new ApiError(result, response);

  }
}


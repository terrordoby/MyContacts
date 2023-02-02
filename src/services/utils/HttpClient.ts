import { ApiError } from "../../errors/ApiError";
import { ContactCreateRequest } from "../../types/ContactResponse";

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

  async post(path: string, payload: ContactCreateRequest) {
    let result;

    const headers = new Headers({
      "Content-Type": "application/json"
    });

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers
    });

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


export default class HttpClient {
  baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {

    let result;

    try {
      const response = await fetch(`${this.baseUrl}${path}`);

      const contentType =  response.headers.get("Content-Type");

      if (contentType?.includes("application/json")) {
        result = await response.json();
      }

      if (response.ok) {
        return result;
      }

    } catch (e) {
      throw new Error(result?.error);
    }
  }
}


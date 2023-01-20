import HttpClient from "./utils/httpClient";


class ContactServices {

  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(params = "asc") {
    return this.httpClient.get(`/contacts/?orderBy=${params}`);
  }
}

export default new ContactServices();

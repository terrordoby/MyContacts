import { ContactCreateRequest } from "../types/ContactResponse";
import HttpClient from "./utils/HttpClient";

class ContactServices {

  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(params = "asc") {
    return this.httpClient.get(`/contacts/?orderBy=${params}`);
  }

  async createContact(payload: ContactCreateRequest) {
    return this.httpClient.post("/contacts/", payload );
  }
}

export default new ContactServices();

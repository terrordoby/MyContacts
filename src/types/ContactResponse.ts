export interface ContactsResponse {
  category: {
    name: string
  }
  category_id: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}

export interface ContactCreateRequest {
  category_id: string;
  email: string;
  name: string;
  phone: string;
}

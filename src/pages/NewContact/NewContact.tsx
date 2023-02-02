import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactServices from "../../services/ContactServices";
import { ContactCreateRequest } from "../../types/ContactResponse";
import { Container } from "./styles";

const NewContact = () => {

  async function createContact(payload: ContactCreateRequest) {
    await ContactServices.createContact(payload);
  }
  return (
    <Container>
      <PageHeader title="Novo Contato" />
      <ContactForm onCreateContact={createContact} />
    </Container>
  );
};

export default NewContact;

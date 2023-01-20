import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Container } from "./styles";

const NewContact = () => {
  return (
    <Container>
      <PageHeader title="Novo Contato" />
      <ContactForm />
    </Container>
  );
};

export default NewContact;

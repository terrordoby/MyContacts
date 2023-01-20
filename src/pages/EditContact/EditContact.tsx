import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Container } from "./styles";

const EditContact = () => {
  return (
    <Container>
      <PageHeader title="Editar Contato" />
      <ContactForm />
    </Container>
  );
};

export default EditContact;

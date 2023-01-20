import React from "react";
import { Container, Header } from "./styles";
import Arrow from "../../assets/icons/Arrow.svg";
import ContactItem from "../ContactItem/ContactItem";
import { ContactsResponse } from "../../types/ContactResponse";

interface ContactListProps {
  contacts: ContactsResponse[]
  onHandleToggleOrderBy: () => void
  orderBy: string
}

const ContactList = (props: ContactListProps) => {
  return (
    <Container >
      <Header orderBy={props.orderBy}>
        {props.contacts.length > 0 && (
          <button onClick={props.onHandleToggleOrderBy}>
            <strong>Nome</strong>
            <img src={Arrow} alt="Flecha" />
          </button>
        )}
      </Header>
      <ContactItem contacts={props.contacts} />
    </Container>
  );
};

export default ContactList;

import React from "react";
import { Container, Header } from "./styles";
import Arrow from "../../assets/icons/Arrow.svg";
import ContactItem from "../ContactItem/ContactItem";
import { ContactsResponse } from "../../types/ContactResponse";

interface ContactListProps {
  contacts: ContactsResponse[]
  onHandleToggleOrderBy: () => void
  orderBy: string
  onLoadContacts: () => Promise<void>
  isError: boolean;
}

const ContactList = (props: ContactListProps) => {
  return (
    <Container >
      <Header orderBy={props.orderBy}>
        {props.contacts.length > 0 && (
          <button className="toggleOrderBy" onClick={props.onHandleToggleOrderBy}>
            <strong>Nome</strong>
            <img src={Arrow} alt="Flecha" />
          </button>
        )}
      </Header>
      <ContactItem isError={props.isError} onLoadContacts={props.onLoadContacts} contacts={props.contacts} />
    </Container>
  );
};

export default ContactList;

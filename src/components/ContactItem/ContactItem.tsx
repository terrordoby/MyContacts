import React from "react";
import { ContactActions, ContactDetails, Container, ContainerNoContacts } from "./styles";
import Edit from "../../assets/icons/Edit.svg";
import Delete from "../../assets/icons/Delete.svg";
import { Link } from "react-router-dom";
import { ContactsResponse } from "../../types/ContactResponse";
import sad from "../../assets/images/sad.svg";


interface ContactItemProps {
  contacts: ContactsResponse[]
  onLoadContacts: () => Promise<void>
  isError: boolean;
}

const ContactItem = (props: ContactItemProps) => {

  function loadContacts() {
    props.onLoadContacts();
  }
  return (
    <>
      {props.contacts.length === 0 && props.isError && (
        <ContainerNoContacts>
          <div className="img-nocontacts">
            <img src={sad} alt="" />
          </div>
          <div className="nocontacts-details">
            <span>Ocorreu um erro ao obter seus contatos</span>
            <button onClick={loadContacts}>Tentar Novamente</button>
          </div>
        </ContainerNoContacts>
      )}
      {props.contacts.map((contact) => (
        <Container key={contact.id}>
          <ContactDetails>
            <strong>{contact.name}</strong>
            <small>{contact.category.name}</small>
            <p>{contact.email}</p>
            <span>{contact.phone}</span>
          </ContactDetails>
          <ContactActions>
            <Link to={`edit/${contact.id}`}>
              <img src={Edit} alt="" />
            </Link>
            <a href="">
              <img src={Delete} alt="" />
            </a>
          </ContactActions>
        </Container>
      ))}
    </>
  );
};

export default ContactItem;

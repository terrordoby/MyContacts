import React from "react";
import { ContactActions, ContactDetails, Container } from "./styles";
import Edit from "../../assets/icons/Edit.svg";
import Delete from "../../assets/icons/Delete.svg";
import { Link } from "react-router-dom";
import { ContactsResponse } from "../../types/ContactResponse";

interface ContactItemProps {
  contacts: ContactsResponse[]
}

const ContactItem = (props: ContactItemProps) => {
  return (
    <>
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

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import ContactServices from "../../services/ContactServices";
import { ContactsResponse } from "../../types/ContactResponse";
import { Container, ContainerNewContact, Divider, InputHome } from "./styles";

const Home = () => {
  const [contacts, setContacts] = useState<ContactsResponse[]>([]);
  const [orderBy, setOrderBy] = useState<string>("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadContats() {
      try {
        setIsLoading(true);
        const result = await ContactServices.listContacts(orderBy);
        console.log(result);
        setContacts(result);
      }catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false);
      }
    }
    loadContats();
  },[orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState === "asc" ? "desc" : "asc");
  }

  const searchLowerCase = searchTerm.toLowerCase();

  const filteredContacts = useMemo(() => (
    contacts.filter(contact => contact.name.toLowerCase().includes(searchLowerCase))
  ),[contacts, searchTerm]);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputHome
        placeholder="Pesquisar Contato"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ContainerNewContact>
        <strong>{filteredContacts.length} {filteredContacts.length === 1 ? "contato" : "contatos"}</strong>
        <Link to="/new">Novo Contato</Link>
      </ContainerNewContact>
      <Divider />
      <ContactList
        orderBy={orderBy}
        onHandleToggleOrderBy={handleToggleOrderBy}
        contacts={filteredContacts} />
    </Container>
  );
};

export default Home;

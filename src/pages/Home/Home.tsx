import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import ContactServices from "../../services/ContactServices";
import { ContactsResponse } from "../../types/ContactResponse";
import delay from "../../utils/delay";
import { Container, ContainerNewContact, ContainerNoContacts, ContainerNoContactsFilteredes, Divider, InputHome } from "./styles";
import emptyBox from "../../assets/images/emptyBox.svg";
import magnifierQuestion from "../../assets/images/magnifierQuestion.svg";

const Home = () => {
  const [contacts, setContacts] = useState<ContactsResponse[]>([]);
  const [orderBy, setOrderBy] = useState<string>("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);


  const loadContacts = useCallback( async() => {
    try {
      setIsLoading(true);
      await delay(500);
      const result = await ContactServices.listContacts(orderBy);
      setContacts(result);
    }catch (error) {
      setIsError(true);
    }finally {
      setIsLoading(false);
    }
  },[orderBy]);

  useEffect(() => {
    loadContacts();
  },[orderBy, loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState === "asc" ? "desc" : "asc");
  }

  const searchLowerCase = searchTerm.toLowerCase();

  const filteredContacts = useMemo(() => (
    contacts.filter(contact => contact.name.toLowerCase().includes(searchLowerCase))
  ),[contacts, searchTerm]);

  return (
    <Container >
      <Loader isLoading={isLoading} />
      {contacts.length > 0 && (
        <InputHome
          placeholder="Pesquisar Contato"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
      <ContainerNewContact isError={isError} haveContacts={contacts.length}>
        {(contacts.length > 0 && !isError) && (
          <strong>{filteredContacts.length} {filteredContacts.length === 1 ? "contato" : "contatos"}</strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </ContainerNewContact>
      <Divider />
      {(contacts.length < 1 && !isLoading) && (
        <ContainerNoContacts>
          <img src={emptyBox} alt="" />
          <p>Você ainda não tem nenhum contato cadastrado!
          Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!</p>
        </ContainerNoContacts>
      )}
      {filteredContacts.length === 0 && !isLoading && (
        <ContainerNoContactsFilteredes>
          <img src={magnifierQuestion} alt="" />
          <p>{`Nenhum resultado foi encontrado para "${searchTerm}"`}.</p>
        </ContainerNoContactsFilteredes>
      )}
      <ContactList
        orderBy={orderBy}
        onHandleToggleOrderBy={handleToggleOrderBy}
        contacts={filteredContacts}
        onLoadContacts={loadContacts}
        isError={isError}
      />
    </Container>
  );
};

export default Home;

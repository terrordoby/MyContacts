import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo MyContacts" />
    </Container>
  );
};

export default Header;

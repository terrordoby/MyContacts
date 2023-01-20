import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import Arrow from "../../assets/icons/Arrow.svg";

interface IPageHeaders {
  title: string
}

const PageHeader = (props: IPageHeaders) => {
  return (
    <Container>
      <Link to="/">
        <img src={Arrow} alt="Ícone de seta de voltar para a página home" />
        <span>Voltar</span>
      </Link>
      <h1>{props.title}</h1>
    </Container>
  );
};

export default PageHeader;

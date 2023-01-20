import React from "react";
import ReactDOM from "react-dom";
import { Container, ContainerActions, Overlay } from "./styles";

interface IModalProps {
  title: string;
  message: string;
}
const Modal = (props: IModalProps) => {
  return (
    ReactDOM.createPortal(
      <Overlay>
        <Container>
          <h1>{props.title}</h1>
          <span>{props.message}</span>
          <ContainerActions>
            <button className="btn-outline">Cancelar</button>
            <button className="btn-danger">Deletar</button>
          </ContainerActions>
        </Container>
      </Overlay>, document.getElementById("modal")!
    )

  );
};

export default Modal;

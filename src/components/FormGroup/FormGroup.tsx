import React, { ReactNode } from "react";
import { Container } from "./styles";

interface IFormGroup {
  children: ReactNode
  error?: string
}

const FormGroup = (props: IFormGroup) => {
  return (
    <Container>
      {props.children}
      {props.error && (
        <small>{props.error}</small>
      )}
    </Container>
  );
};

export default FormGroup;

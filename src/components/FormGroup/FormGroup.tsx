import React, { ReactNode } from "react";
import { Container } from "./styles";

interface IFormGroup {
  children: ReactNode
  error?: string
  isLoading?: boolean
}

const FormGroup = (props: IFormGroup) => {
  return (
    <Container>
      {props.children}
      {props.isLoading  && (
        <div className="loader"></div>
      )}
      {props.error && (
        <small>{props.error}</small>
      )}
    </Container>
  );
};

export default FormGroup;

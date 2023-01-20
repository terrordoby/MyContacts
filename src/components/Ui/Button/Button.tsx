import React, { ReactNode } from "react";
import { ButtonStyles } from "./styles";

export interface IButtonProps {
  children: ReactNode
}

const Button = (props: IButtonProps) => {
  return (
    <ButtonStyles>
      {props.children}
    </ButtonStyles>
  );
};

export default Button;

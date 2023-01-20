import React, { InputHTMLAttributes } from "react";
import { InputStyle } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder : string
  error?: boolean | undefined;
}

const Input = (props: IInputProps) => {
  return (
    <InputStyle
      {...props}
      error={props.error}
      placeholder={props.placeholder}
    />
  );
};

export default Input;

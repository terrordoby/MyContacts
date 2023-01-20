import React, { SelectHTMLAttributes } from "react";
import { SelectStyle } from "./styles";

type ISelect = SelectHTMLAttributes<HTMLSelectElement>

const Select = (props: ISelect) => {
  return (
    <SelectStyle {...props}>
      <option value="">Selecione uma categoria</option>
      <option value="instagram">Instagram</option>
      <option value="linkedin">Linkedin</option>
      <option value="Twitter">Twitter</option>
    </SelectStyle>
  );
};

export default Select;

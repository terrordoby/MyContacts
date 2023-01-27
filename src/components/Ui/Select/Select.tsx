import React, { SelectHTMLAttributes } from "react";
import { SelectStyle } from "./styles";

type ISelect = SelectHTMLAttributes<HTMLSelectElement>

const Select = (props: ISelect) => {
  return (
    <SelectStyle {...props}>
    </SelectStyle>
  );
};

export default Select;

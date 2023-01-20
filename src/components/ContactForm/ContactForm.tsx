import React, { useState } from "react";
import { useErrors } from "../../hooks/useErrors";
import FormGroup from "../FormGroup/FormGroup";
import Input from "../Ui/Input/Input";
import Select from "../Ui/Select/Select";
import formatPhone from "../utils/formatPhone";
import isEmailValid from "../utils/isEmailValid";
import {  Container } from "./stryles";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const {errors, setError, removeError, getErrorMessageByFieldName} = useErrors();

  const isFormdValid = name && errors.length === 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = {
      name, email, phone, category
    };
    return formData;
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({field: "Name",
        message: "O Campo nome é obrigatório"});
    } else {
      removeError("Name");
    }
  }

  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({
        field: "E-mail",
        message: "O E-mail é obrigatório"
      });
    } else {
      removeError("E-mail");
    }
  }

  function handleChangePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value));
  }

  return (
    <Container noValidate onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName("Name")}>
        <Input
          error={!!getErrorMessageByFieldName("Name")}
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName }
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("E-mail")}>
        <Input
          error={!!getErrorMessageByFieldName("E-mail")}
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="telefone"
          value={phone}
          onChange={handleChangePhone}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)} />
      </FormGroup>
      <button disabled={!isFormdValid} className="button--newContact">Cadastrar</button>
    </Container>
  );
};

export default ContactForm;

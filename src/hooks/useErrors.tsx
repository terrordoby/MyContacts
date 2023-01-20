import { useState } from "react";

interface IErrors {
  field: string;
  message: string;
}

function useErrors() {
  const [errors, setErrors] = useState<IErrors[]>([]);

  function setError({field, message} : IErrors) {

    const errosAlreadyExists = errors.find((obj => obj.field === field));

    if (errosAlreadyExists) return;

    setErrors((prevState) => [
      ...prevState, {
        field,
        message
      }
    ]);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) => prevState.filter(error => error.field !== fieldName));
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((obj) => obj.field === fieldName)?.message;
  }

  return { errors, setError, removeError, getErrorMessageByFieldName};
}

export {useErrors};

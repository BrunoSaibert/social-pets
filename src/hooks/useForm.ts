import React from "react";

interface OutProps {
  error: string | null;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange(target: any): void;
  validate(): boolean;
  onBlur(): boolean;
}

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
  },
};

function useForm(type?: any): OutProps {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value: string): boolean {
    if (type === false) return true;
    if (!value.length) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }): void {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    error,
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;

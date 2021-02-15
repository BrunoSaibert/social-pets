import React, { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const Input: React.FC<Props> = ({
  id,
  label,
  error,
  type,
  value,
  required,
  onChange,
  onBlur,
}) => {
  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Element
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default Input;

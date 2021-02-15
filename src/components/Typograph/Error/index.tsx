import React from "react";

import * as S from "./styles";

interface Props {
  error: string;
}
const Error: React.FC<Props> = ({ error }) => {
  if (!error) return null;
  return <S.Container>{error}</S.Container>;
};

export default Error;

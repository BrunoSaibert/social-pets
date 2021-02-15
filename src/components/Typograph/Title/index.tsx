import React from "react";

import * as S from "./styles";

interface Props {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  sub?: boolean;
}
const Title: React.FC<Props> = ({ children, as, sub }) => {
  return (
    <S.Container as={as} sub={sub}>
      {children}
    </S.Container>
  );
};

export default Title;

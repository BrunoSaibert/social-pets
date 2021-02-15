import React, { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const Button: React.FC<Props> = ({ children, as, ...props }) => {
  return (
    <S.Element as={as} {...props}>
      {children}
    </S.Element>
  );
};

export default Button;

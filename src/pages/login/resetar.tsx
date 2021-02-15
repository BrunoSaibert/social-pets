import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color.primary};
`;

const Resetar: React.FC = () => {
  return <Title className="container">Resetar</Title>;
};

export default Resetar;

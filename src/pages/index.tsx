import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color.primary};
`;

const Home: React.FC = () => {
  return <Title className="container">Home</Title>;
};

export default Home;

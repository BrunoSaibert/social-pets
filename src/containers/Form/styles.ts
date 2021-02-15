import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  min-height: 100vh;

  &::before {
    content: "";
    display: block;
    background: url("/login.jpg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const Content = styled.div.attrs({ className: "animeLeft" })`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;

export const FormWarper = styled.div`
  margin-bottom: 2rem;
`;

export const PerdeuSenha = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.gray};
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: currentColor;
    display: block;
  }
`;

export const Cadastro = styled.div`
  margin-top: 4rem;

  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

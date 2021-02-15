import styled from "styled-components";

export const Element = styled.button`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.first};
  cursor: pointer;
  border: 0;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary_dark};
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primary_ligth},
      0 0 0 4px ${({ theme }) => theme.color.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

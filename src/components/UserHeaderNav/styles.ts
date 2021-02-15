import styled from "styled-components";

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #eee;
    border-radius: 0.2rem;
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      background: #fff;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
    }
  }

  a.active {
    background: #fff;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primary_ligth};
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${({ theme }) => theme.color.body};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
`;

export const Logo = styled.a`
  padding: 0.5rem 0;
`;

export const Login = styled.a`
  color: ${({ theme }) => theme.color.text};
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url("/usuario.svg") no-repeat center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;

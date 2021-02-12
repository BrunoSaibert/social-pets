import { createGlobalStyle } from "styled-components";

import { ThemeType } from "../pages/_app";

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.color.body};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.first};
  }

  h1, 
  h2, 
  h3, 
  h4, 
  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input {
    display: block;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.font.first};    
    color: ${({ theme }) => theme.color.text};
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;

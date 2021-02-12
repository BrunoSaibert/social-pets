import { createGlobalStyle } from "styled-components";

import { ThemeType } from "../pages/_app";

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }    
`;

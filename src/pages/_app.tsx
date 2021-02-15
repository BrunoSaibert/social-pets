import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/Global";
import { Theme } from "../styles/Theme";

import { UserStorage } from "../hooks/UserContext";

import Header from "../components/Header";
import Footer from "../components/Footer";

export type ThemeType = typeof Theme;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <UserStorage>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </UserStorage>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

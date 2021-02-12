import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/Global";
import { Theme } from "../styles/Theme";

import Header from "../components/Header";
import Footer from "../components/Footer";

export type ThemeType = typeof Theme;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

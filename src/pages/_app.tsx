import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Header } from "../components/Header";

const theme = {
    colors: {
        primary: "#FFFFFF",
        secondary: "#393E46",
        text: "#37447E",
        secondText: "#37447E",
        message: "#00ADB5",
        buttonColor: "#111b47;",
        footerColor: "#E7ECFF",
    },
};

function MyApp({ Component, pageProps }: AppProps) {
    
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default MyApp;

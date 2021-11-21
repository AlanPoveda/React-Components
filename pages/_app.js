import './src/styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#393E46',
    text: '#37447E',
    secondText: '#37447E',
    message: '#00ADB5'
  }
}


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp

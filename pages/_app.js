import './src/styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#222831',
    secondary: '#393E46',
    text: '#EEEEEE',
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

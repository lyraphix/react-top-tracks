import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#8791F9',
        mainPage: '#47A85A',
        light: '#cad6ff',
        dark: '#394221',
        text: "white"
      },
      secondary: {
        main: '#9BB9D8',
        light: '#92AFCE',
        dark: '#0C233B',
        text: "white"

      },
      third: {
        main: '#A02937',
        light: '#F0D7DA',
        dark: '#3D1519',
        text: "white"

      },
      forth: {
        main: '#DD7C22',
        light: '#E9BF98',
        dark: '#54361A',
        text: "white"

      },
      divider: '#ffffff',
      info: {
        main: '#ffffff',
      },
      // text: {
      //   primary: '#ffffff',
      // },
      background: {
        default: '#19191B',
      },
      login: '#8791F9',

    },
    background: {
      default: '#191722',
      paper: '#000000',
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    typography: {
      h1: {
        fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 350,
        fontSize: '1.7rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 150,
        fontStretch: "condensed",
        // fontFamily: "cursive",
      },
      iconFont: {
        // fontFamily: `"Gill Sans", sans-serif`,
        fontWeight: 700,
        fontSize: '1.3rem',
      },
      text: {
        fontWeight: 20,
        fontSize: '1rem',
      },
      bottom: {
        fontWeight: 20,
        fontSize: '1.5rem',
      },
      h2Large: {
        fontSize: '4rem',
        fontWeight: 150,
        fontStretch: "condensed",
        // fontFamily: "cursive",
      },
    },

  });
  return (<><Head>
    <title> Musiac </title>
    <link rel="icon" href="/landing/logo.png" />
  </Head><ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider></>)
}

import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3o8WdkaRchWYOHD68iNc5AgyfLFEbn6A",
  authDomain: "musaic-374f6.firebaseapp.com",
  projectId: "musaic-374f6",
  storageBucket: "musaic-374f6.appspot.com",
  messagingSenderId: "967954541083",
  appId: "1:967954541083:web:819f540d0531fd972566be",
  measurementId: "G-V2NBVXE7KP"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#8791F9',
        mainPage: '#47A85A',
        light: '#cad6ff',
        dark: '#262152',
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
      },
      iconFont: {
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
      },
    },
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'user_data') {
        const userData = JSON.parse(e.newValue);
        userData.playlists = userData.playlists || [];
        userData.image_url = userData.image_url || "/landing/logo.png";
        setUser(userData);
      }
    };
  
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
 

  return (
    <>
      <Head>
        <title>Musaic</title>
        <link rel="icon" href="/landing/logo.png" type="image/png" />
        <style>
          {`
            body {
              margin: 0;
            }
          `}
        </style>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} user={user} setUser={setUser} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

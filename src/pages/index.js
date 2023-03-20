import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import About from './about.js'
import {
  Button,
  Drawer,

} from '@mui/material/';
import Tos from "./tos.js";
import Privacy from "./privacy.js";

const App = () => {

  const ellipse = "/landingdown/ellipse.svg";
  var music = "/landingdown/music.png";
  var whenever = "/landingdown/whenever.png";
  var whoever = "/landingdown/whoever.png";


  const groupm = "/landingdown/grouptgrc.png";
  const logo = "/landingdown/logo.png";
  const group1 = "/landingdown/group1.svg"
  const untitledArtwork = "/landing/logo.png";
  const vector = "/landing/vector1.svg";
  const vector1 = "/landing/vector.svg";
  const tri = "/landing/polygon.png";

  const [anchorAbout, setAbout] = useState(null);
  const openAbout = (event) => {
    setAbout(event.currentTarget);
  };
  const closeAbout = () => {
    setAbout(null);
  };
  const [anchorTos, setTos] = useState(null);
  const openTos = (event) => {
    setTos(event.currentTarget);
  };
  const closeTos = () => {
    setTos(null);
  };
  const [anchorPrivacy, setPrivacy] = useState(null);
  const openPrivacy = (event) => {
    setPrivacy(event.currentTarget);
  };
  const closePrivacy = () => {
    setPrivacy(null);
  };

  return (
    <div className={styles.all}>

      <div className={styles.landing} style={{ marginLeft: 0 }}>
        <div className={styles.flexcontainer}>
          <img className={styles.untitledartwork4} src={untitledArtwork} />
          <div className={styles.navigatepages}>
            <Button variant="text" href="/">
              <span className={styles.buttontext}>Home</span>
            </Button>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" onClick={openAbout}>
              <span className={styles.buttontext}>About</span>
            </Button>
            <Drawer
              anchor="left"
              open={Boolean(anchorAbout)}
              onClose={closeAbout}
              PaperProps={{
                sx: {
                  marginTop: '100px',
                  backgroundColor: 'grey',
                  color: 'white',
                  flexGrow: 1,
                  width: '100%'
                }
              }}
            >
              <About />
            </Drawer>
          </div>
          <div className={styles.navigatepages}>
            <Button variant="text" >
              <span className={styles.buttontext}>People</span>
            </Button>
          </div>
          <div className={styles.flexcontainer}></div>

          <div className={styles.logininstance1}>
            <Button variant="outlined" href="./signin" fullWidth>
              Login
            </Button>
          </div>
        </div>

        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer1}>
            <div className={styles.catabsolutecontainer}>
              <span className={styles.meetyour}>Meet Your</span>
              <span className={styles.musaictext}>MUSAIC</span>
              <span className={styles.gettheplaylistjus}>
                Get the playlist just for you, with songs fit your preference.
              </span>
              <div className={styles.logininstance}>
                <Button variant="text" href="./signin" fullWidth sx={{ height: 60, color: "primary.light" }}>
                  LET’S GO!
                </Button>
              </div>

            </div>
            <img className={styles.vector1} src={vector1} />
            <img className={styles.vector} src={vector} />
          </div>
        </div>
        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer}></div>

          <img className={styles.tri} src={tri} />
          <div className={styles.flexcontainer}></div>

        </div>

      </div>

      <div className={styles.landingdown}>
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage1} src={music} />
        </div>
        <div className={styles.flexcontainer}></div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage2} src={whenever} />
        </div>
        <div className={styles.flexcontainer}></div>
        <img className={styles.ellipse} src={ellipse} />
        <div className={styles.flexcontainer}></div>
        <div className={styles.landingdownflexcontainer}>
          <img className={styles.landingimage3} src={whoever} />
        </div>
        <div className={styles.flexcontainer}></div>
      </div>
      <span className={styles.num20238bitsterms}>
        <span className={styles.num20238bitstermsbtext}>@2023 8BITS</span>
        <div onClick={openTos} className={styles.num20238bitstermsbtext}>Terms of Service</div>
        <div onClick={openPrivacy} className={styles.num20238bitstermsbtext}>Privacy Policy</div>
        <Drawer
          anchor="left"
          open={Boolean(anchorTos)}
          onClose={closeTos}
          PaperProps={{
            sx: {
              marginTop: '100px',
              backgroundColor: 'grey',
              color: 'white',
              flexGrow: 1,
              width: '100%'
            }
          }}
        >
          <Tos />
        </Drawer>
        <Drawer
          anchor="left"
          open={Boolean(anchorPrivacy)}
          onClose={closePrivacy}
          PaperProps={{
            sx: {
              marginTop: '100px',
              backgroundColor: 'grey',
              color: 'white',
              flexGrow: 1,
              width: '100%'
            }
          }}
        >
          <Privacy />
        </Drawer>
      </span>

    </div>
  );
};
export default App;

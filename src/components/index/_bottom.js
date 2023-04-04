import * as React from "react";
import Tos from "@/pages/_tos";
import Privacy from "@/pages/_privacy";
import styles from '@/styles/Home.module.css'

import { useState, useEffect } from 'react';

import {
  Drawer,
} from '@mui/material/';

const Bottom = (props) => {
    
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

    return(
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
    );
}
export default Bottom;
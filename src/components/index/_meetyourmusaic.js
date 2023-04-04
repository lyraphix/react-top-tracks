import * as React from "react";
import styles from '@/styles/Home.module.css'

import {
  Button,
} from '@mui/material/';

const MeetyourMu = (props) => {
    
    const vector = "/landing/vector1.svg";
    const vector1 = "/landing/vector.svg";
    const tri = "/landing/polygon.png";

    return(
        <>
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
        </>
    );
}
export default MeetyourMu;
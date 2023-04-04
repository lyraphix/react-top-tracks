import * as React from "react";
import styles from '@/styles/Home.module.css'
import {
  Button,
} from '@mui/material/';
import { Checkbox } from "@mui/material";
import Link from 'next/link'

const Signin = (props) => {
    const vector = "/signin/linevector.svg";
    const logo = "/signin/logotext.png";
    const spotify = "/signin/spotify.png";

    return(
        <div className={styles.signinoutercontainer}>
        {/* <div className={styles.signinflexcontainer}>
        </div> */}
        <div className={styles.flexcontainer11}>
          <div className={styles.signinlogobox}>
            <Button href="/"><img className={styles.signinlogo} src={logo} /></Button>
          </div>
          <img className={styles.vvector1} src={vector} />
          <div className={styles.flexcontainer22}>
            <Checkbox />
            <span className={styles.iagreewiththeter}>
              I agree with the
              <Link href="/tos" className={styles.iagreewiththeter}>Terms of Service</Link>
              and
              <Link href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS" className={styles.iagreewiththeter}>Privacy Policy</Link>
              of this site
            </span>
          </div>
          <div className={styles.rectangle1157instance}>

            {/* https://ui-testing-backend.vercel.app */}
            <Button variant="outlined" href="/dashboard" fullWidth sx={{ height: 45, borderWidth: 2 }}>
              <img className={styles.spotifylogin} src={spotify} />
              Login with Spotify
            </Button>
          </div>
          <span className={styles.whydoihavetolog}>
            Why do I have to login with Spotify?
          </span>
        </div>
      </div>
    );
}
export default Signin;
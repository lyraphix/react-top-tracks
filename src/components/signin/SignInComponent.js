import React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Checkbox } from "@mui/material";
import { getAuthorizeUrl } from '../../utils/auth';
import { FamilyRestroomRounded } from "@mui/icons-material";

const SignInComponent = ({ navigateToDashboard }) => {
  const rectangle = "/signin/rectangle.svg";
  const vector = "/signin/linevector.svg";
  const logo = "/signin/logotext.png";
  const vector2 = "/signin/vector0.svg";
  const spotify = "/signin/spotify.png";
  const spotify_yt = "/signin/spotify_yt.png";
  const [state, setState] = React.useState(false);
  const [error, setError] = React.useState(false);
  const router = useRouter();
  const handleChange = (event) => {
    setState(!state);
  };
  const handleClick = (event) => {
    if (state){
      setError(false);
      navigateToDashboard();
      const url = getAuthorizeUrl();
      router.push(url);
    } else {
      setError(true);
    }
    
  };
  return (
    <div className={styles.all}>
      
      <div className={styles.landing}>
        <div className={styles.signinoutercontainer}>
          {/* <div className={styles.signinflexcontainer}>
          </div> */}
          <div className={styles.flexcontainer11}>
              <div className={styles.flexcontainer}>
                <div className={styles.signinlogobox} >
                  <Button href="/"><img className={styles.signinlogo} src={logo} /></Button>
                </div>
                <div className={styles.signinlogobox} style={{marginLeft:"10px"}}>
                  <Button href="https://open.spotify.com/"><img className={styles.signinspotify_yt} src={spotify_yt} /></Button>
                </div>
              </div>
            <img className={styles.vvector1} src={vector} />
            <div className={styles.flexcontainer22}>
              <Checkbox onChange={handleChange}/>
              <span className={styles.iagreewiththeter}>
                I agree with the
                <Link href="/tos" className={styles.iagreewiththeter}>
                    Terms of Service
                </Link>
                and
                <Link className={styles.iagreewiththeter} href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS">
                    Privacy Policy
                </Link>
                of this site
                </span>
            </div>
            <div className={styles.rectangle1157instance}>

            {/* https://ui-testing-backend.vercel.app */}
            <Button variant="outlined" onClick={handleClick} fullWidth sx={{height:45, borderWidth:2}}>
                <img className={styles.spotifylogin} src={spotify} /> 
                Login with Spotify
            </Button>
          </div>
          {(error)?
            <span className={styles.whydoihavetolog} >
              You need to agree with our policies before you continue
            </span>:
            <span className={styles.whydoihavetolog}>
            </span>
          }
          </div>
        </div>
        <img className={styles.vector0} src={vector2} />
        <span className={styles.num20238bitsterms}>
            <span className={styles.num20238bitstermsbtext}>@2023 8BITS</span>
            <Link href="/tos" className={styles.num20238bitstermsbtext}>
                Terms of Service
            </Link>
            <Link className={styles.num20238bitstermsbtext} href="https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS">
                Privacy Policy
            </Link>
        </span>

      </div>

    </div>
  );
};
export default SignInComponent;
import * as React from "react";
import styles from '@/styles/Home.module.css'


const MusicWheneverWhoever = (props) => {
    
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

    return(
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
    );
}
export default MusicWheneverWhoever;
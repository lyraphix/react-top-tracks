import * as React from "react";
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Button from "@mui/material/Button";
import Link from 'next/link'
import { useState, useEffect } from 'react';

const People = () => {
  
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

  return (
    <div className={styles.all}  style = {{height:"100vh"}}>
      
    
      <div className={styles.landing} style = {{marginLeft:0}}>
        <div className={styles.flexcontainer}>
          
        </div>

        <div className={styles.flexcontainer}>
          <div className={styles.flexcontainer1}>
            <div className={styles.catabsolutecontainer} style={{marginRight:"15%"}}>
              <span className={styles.meetyour} style={{fontWeight:400, color:"#dcdffb"}}>Our Team </span>
              <span className={styles.gettheplaylistjus} style={{fontSize:15, lineHeight:1.5}}>
                    This app was built by students at Emory University for Dr. Davide Fossati's Computer Science Practicum Course.
                </span>

                <span className={styles.gettheplaylistjus} style={{marginTop:-20, fontSize:15, lineHeight:1.5}}>
                    We hope you enjoy using our app!
              </span>
              
            </div>
            <img className={styles.vector1} style={{marginTop: "25%", marginRight:"-15%"}} src={vector1} />
            <img className={styles.vector}  src={vector} />
          </div>
        </div>

      </div>
      

    </div>
  );
};
export default People;

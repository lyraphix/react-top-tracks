import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Center from "@/components/active/_center";
import Banner from "@/components/active/_bannerandsub";
import MainBox from "@/components/active/_mainbox";
import MainButton from "@/components/active/_generalbutton";

const CreateMusaicLobby = ({ closeLobby, openVibePicker, musaicKey, copyToClipboard, createLobby, ...props }) => {
  useEffect(() => {
    console.log('CreateMusaicLobby useEffect');
    createLobby();
  }, []);

  console.log('CreateMusaicLobby render', { closeLobby, openVibePicker, musaicKey, copyToClipboard, createLobby, ...props });

  return (
    <MainBox
      object1={
        <Banner
          main="CREATE A MUSAIC"
          sub="MUSAIC KEY:"
          more={musaicKey}
          pass={closeLobby}
        />
      }
      object2={<div style = {{height:"30px"}}></div>}
      object3={
        <div
          className={styles.dashboardbox}
          style={{ flexDirection: "column", marginTop: "30px", justifyContent: "space-between" }}
        >
          <Center 
          object={ <MainButton mbb="20px" name="Copy Musaic Key" loc={copyToClipboard} />}
          object2={<div style = {{height:"50px"}}></div>}
          object3={<div className={styles.drawertextdesigns} >Share the Musaic Key with your friends to invite them to your Musaic. Once they join, this page will automatically refresh.</div>}
          object4={<div style = {{height:"20px"}}></div>}
          object5={<div className={styles.drawertextdesigns}>Or, get started with your own Musaic:</div>}
          object6={<div style = {{height:"20px"}}></div>}
          object7= {<MainButton name="Create a Solo Musaic" loc={openVibePicker} />}/>
        </div>
      }
    />
  );
};

export default CreateMusaicLobby;

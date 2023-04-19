import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Center from "@/components/active/_center";
import Banner from "@/components/active/_bannerandsub";
import MainBox from "@/components/active/_mainbox";
import MainButton from "@/components/active/_generalbutton";

const CreateMusaicLobby = ({ closeLobby, openVibePicker, musaicKey, copyToClipboard, ...props }) => {
  return (
    <MainBox
      object1={
        <Banner
          main="CREATE A MUSAIC"
          sub="MUSAIC KEY:"
          more="Your Musaic Key will appear here"
          pass={closeLobby}
        />
      }
      object2={
        <div
          className={styles.dashboardbox}
          style={{ flexDirection: "column", marginTop: "30px", justifyContent: "space-between" }}
        >
          <Center object={
            <div>
              <div>Musaic Key: {musaicKey}</div>
              <MainButton name="Copy Musaic Key" loc={copyToClipboard} />
              <div>Share the Musaic Key with your friends to invite them to your Musaic. Once they join, this page will automatically refresh.</div>
              <br></br>
              <div>Or, get started with your own Musaic:</div>
              <MainButton name="Create a Solo Musaic" loc={openVibePicker} />
            </div>
          } />
        </div>
      }
    />
  );
};

export default CreateMusaicLobby;

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
          pass={closeLobby}
        />
      }
      object2={
        <div
          className={styles.dashboardbox}
          style={{ flexDirection: "column", marginTop: "30px", justifyContent: "space-between" }}
        >
          <Center 
          object2={<div style = {{height:"50px"}}></div>}
          object4={<div className={styles.drawertextdesigns}> Get started with your own Musaic:</div>}
          object5= {<MainButton name="Create a Solo Musaic" loc={openVibePicker} />}/>
        </div>
      }
    />
  );
};

export default CreateMusaicLobby;

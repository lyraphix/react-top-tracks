import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Center from "@/components/active/_center";
import Banner from "@/components/active/_bannerandsub";
import MainBox from "@/components/active/_mainbox";
import MainButton from "@/components/active/_generalbutton";

const JoinMusaicLobby = ({ closeLobby }) => {


  const [musaicKeyInput, setMusaicKeyInput] = useState('');

  const handleChange = (event) => {
    setMusaicKeyInput(event.target.value);
  };

  const handleJoinMusaic = () => {
    props.joinLobby(musaicKeyInput);
  };

  return (
    <MainBox
      object1={
        <Banner
          main="JOIN A MUSAIC"
          sub="ENTER MUSAIC KEY:"
          more="Enter the Musaic Key provided by your friend"
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
              <div className={styles.drawertextdesigns}>Enter the Musaic Key and press "Join" to join your friend's Musaic.</div>
              <>
                <input
                  className={styles.search}
                  type="text"
                  value={musaicKeyInput}
                  onChange={handleChange}
                  placeholder="Enter Musaic Key"
                />
                
              </>
            </div>
          } 
          object2={<MainButton name="Join Musaic" loc={handleJoinMusaic} />}/>
        </div>
      }
    />
  );
};

export default JoinMusaicLobby;

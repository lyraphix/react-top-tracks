import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Center from "@/components/active/_center";
import Banner from "@/components/active/_bannerandsub";
import MainBox from "@/components/active/_mainbox";
import MainButton from "@/components/active/_generalbutton";
import Lobby from "./lobby"
import { Drawer } from '@mui/material';
import useLobbyData from '@/hooks/useLobbyData';
import { database } from '@/lib/firebase';

const JoinMusaicLobby = ({ user, joinLobby, closeLobby }) => {

  const [musaicKeyInput, setMusaicKeyInput] = useState('');
  const [lobbyDrawerOpen, setLobbyDrawerOpen] = useState(false);
  const [fetchLobbyData, setFetchLobbyData] = useState(false);

  const { lobbyData, setLobbyData } = useLobbyData(musaicKeyInput);

  useEffect(() => {
    const storedLobbyData = localStorage.getItem("lobbyData");
    if (storedLobbyData) {
      const parsedLobbyData = JSON.parse(storedLobbyData);
      setLobbyData(parsedLobbyData);
      setLobbyDrawerOpen(true);
    }
  }, []);

  const handleUserDisconnect = (userId, lobbyId) => {
    const userRef = database.ref(`lobbies/${lobbyId}/users/${userId}`);
    userRef.onDisconnect().remove();
  };

  useEffect(() => {
    if (lobbyData) {
      console.log("Lobby data received:", lobbyData);
      setLobbyDrawerOpen(true);
      localStorage.setItem("lobbyData", JSON.stringify(lobbyData));
    }
  }, [lobbyData]);

  useEffect(() => {
    if (fetchLobbyData) {
    }
  }, [lobbyData, fetchLobbyData]);

  const handleChange = (event) => {
    setMusaicKeyInput(event.target.value);
  };

  const handleJoinMusaic = async () => {
    console.log('JoinMusaicLobby handleJoinMusaic called with Musaic Key:', musaicKeyInput);
    joinLobby(musaicKeyInput);
    setFetchLobbyData(true);
  
    // Call handleUserDisconnect only when lobbyData is available
    if (lobbyData && lobbyData.id) {
      handleUserDisconnect(user.user_id, lobbyData.id);
    }
  };

  

  
  return (
    <MainBox
      object1={
        <Banner
          main="JOIN A MUSAIC"
          sub="Enter the Musaic Key and press -Join- to join your friend's Musaic."
          more=""
          pass={closeLobby}
        />
      }
      object2={
        <div
          className={styles.dashboardbox}
          style={{ flexDirection: "column", marginTop: "30px", justifyContent: "space-between" }}
        >
          <Center 

            object={<input
                  className={styles.search}
                  type="text"
                  value={musaicKeyInput}
                  onChange={handleChange}
                  placeholder="Enter Musaic Key"
                />}
             object2={<MainButton mtt="20px" name="Join Musaic" loc={handleJoinMusaic} />}
             />

          <Drawer
            anchor="left"
            open={lobbyDrawerOpen}
            onClose={closeLobby}
            sx={{ backgroundColor: "background" }}
          >
            <Lobby
              musaicKey={musaicKeyInput}
              lobbyData={lobbyData}
              closeLobby={closeLobby}
            />
          </Drawer>
        </div>
      }
    />
  );
};

export default JoinMusaicLobby;

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import { Drawer } from '@mui/material';
import MainButton from "@/components/active/_generalbutton";
import Center from "@/components/active/_center";
import Banner from "@/components/active/_bannerandsub";
import Lobbylist from "@/components/active/_lobbyparty";
import MainBox from "@/components/active/_mainbox";
import VibePicker from "./vibePicker";
import useLobby from '@/hooks/useLobby';
import useLobbyData from '@/hooks/useLobbyData';

const Lobby = ({ musaicKey, handleCreatePlaylist, closeLobby, ...props }) => {
  const untitledArtwork = "/landing/logo.png";
  const home = "/dashboard/home.png";
  const friend = "/dashboard/friend.png";
  const vibepicker = "/dashboard/vibepicker.png";
  const vector = "/dashboard/vector.png";
  const avatar = "/dashboard/Avatar.png";

  const [isReady, handleReady] = useLobby();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorVibe, setVibe] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openVibe = (event) => {
    setVibe(event.currentTarget);
  };

  const closeVibe = () => {
    setVibe(null);
  };

  const closeLobbyAndVibe = () => {
    closeVibe();
    closeLobby();
  };
  
  const [lobbyData] = useLobbyData(musaicKey);

  useEffect(() => {
    if (lobbyData) {
      console.log('Lobby data:', lobbyData);
    }
  }, [lobbyData]);

  const users = lobbyData
  ? Object.values(lobbyData.users).map((user) => ({
      id: user.id,
      avatar: user?.image_url || "/landing/logo.png"
    }))
  : [];

  return (
    <MainBox
      object1={
        <Banner
          main="LOBBY"
          sub="INVITATION LINK:"
          more="http://localhost:3000/lobby"
          pass={closeLobby}
        />
      }
      object2={
        <div
          className={styles.dashboardbox}
          style={{ flexDirection: "column", marginTop: "30px", justifyContent: "space-between" }}
        >
          <Center object={<Lobbylist users={users} />} />
          <Center object={<MainButton name="continue" loc={openVibe} />} />

          <Drawer
            anchor="left"
            open={Boolean(anchorVibe)}
            onClose={closeVibe}
            sx={{ backgroundColor: "background" }}
          >
            <VibePicker
              handleCreatePlaylist={handleCreatePlaylist}
              pass={closeVibe}
              closeAllDrawers={closeLobbyAndVibe}
            />
          </Drawer>
        </div>
      }
    />
  );
};

export default Lobby;

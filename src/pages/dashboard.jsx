import * as React from "react";
import styles from '@/styles/Home.module.css'
import {
    Button,
    Drawer,
    Menu,
    MenuItem
} from "@mui/material";
import { useState, useEffect } from 'react';
import Lobby from "./lobby";
import Menua from "@/components/active/_avatarmenu";
import MainButton from "@/components/active/_generalbutton"
import MenuaItems from "@/components/index/_menuaitems";

const Dashboard = (props) => {
    const untitledArtwork = "/landing/logo.png";
    const home = "/dashboard/home.png";
    const friend = "/dashboard/friend.png";
    const vibepicker = "/dashboard/vibepicker.png";
    const vector = "/dashboard/vector.png";
    const avatar = "/dashboard/Avatar.png";
    const playlistNumber = 7;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [anchorPlaylist, setPlaylist] = useState(null);
    const openPlaylist = (event) => {
        setPlaylist(event.currentTarget);
    };
    const closePlaylist = () => {
        setPlaylist(null);
    };

    return (
        <div className={styles.all}>
            <div className={styles.dashboard}>
                <div className={styles.menu}>
                    <MenuaItems source={untitledArtwork} />
                    <MenuaItems source={home} />

                    <div>
                        <img onClick={handleClick} className={styles.untitledartworkdash3} src={avatar} />
                        <Menua function={handleClose} anchor={anchorEl} />
                    </div>

                </div>
                <div className={styles.dashboardbox}>
                    <div className={styles.innerbox}>
                        <div className={styles.landingdash}>Hi, Y/N</div>
                        <div className={styles.landingdash} style={{ fontSize: "15px", letterSpacing: "5px", marginTop: "50px", marginBottom: "50px" }}>You have created {playlistNumber} playlists</div>
                        <MainButton name="Create playlist" loc={openPlaylist} height="50px" width="200px" />
                        {/* <img className={styles.image} src={untitledArtwork} /> */}

                    </div>

                </div>

            </div>

            <Drawer
                anchor="left"
                open={Boolean(anchorPlaylist)}
                onClose={closePlaylist}
                sx={{backgroundColor:'background'}}
            >
                <Lobby pass={closePlaylist}/>
            </Drawer>
        </div>
    )
}
export default Dashboard;
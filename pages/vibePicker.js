import * as React from "react";
import styles from '@/styles/Home.module.css'
import {
    Button,
    Drawer,
    Menu,
    MenuItem,
    TextField
} from "@mui/material";
import { useState, useEffect } from 'react';
import Banner from "@/components/active/_bannerandsub";
import Center from "@/components/active/_center";
import Vibecontent from "@/components/active/_vibepicker";
import MainBox from "@/components/active/_mainbox";

export default function Dashboard() {
    const untitledArtwork = "/landing/logo.png";
    const home = "/dashboard/home.png";
    const friend = "/dashboard/friend.png";
    const vibepicker = "/dashboard/vibepicker.png";
    const vector = "/dashboard/vector.png";
    const avatar = "/dashboard/Avatar.png";
    const [ready, changeReadyState] = useState(false);
    const [avatorColor, changeAvatorColor] = useState(false);


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
        <div className={styles.all} style={{ backgroundColor: "#282634" }}>
            <MainBox object1={<Banner main="VIBE PICKER" sub="CREATE YOUR MUSIC:" more="TRY IT TODAY" />}
                object2={<div className={styles.dashboardbox} style={{ flexDirection: "column", marginTop: "30px", justifyContent:"flex-start" }}>
                    <div style={{ flexDirection: "row", display:"flex", justifyContent:"space-between", alignSelf:"center", flexGrow:3}}>
                        <Vibecontent avatar={avatar} avatarcolor={avatorColor} />
                        <Vibecontent avatar={avatar} avatarcolor={false} />
                    </div>
                    {/* <div>{enterRoom()}</div> */}
                    <TextField disabled = {ready} variant="outlined" label= "Enter your vibe here" multiline rows={3} sx={{width:"50vw", flexGrow:7, alignSelf:"center", flexdirection:"column" ,justifySelf:"space-around", background:"primary"}}></TextField>
                    <Center object={!ready ?
                        <Button variant="contained" onClick={() => { changeReadyState(true); changeAvatorColor(true) }} sx={{ height: 50, width: 150, color: "primary.textD" }}>ready</Button>
                        :
                        <Button variant="outlined" sx={{ height: 50, width: 150, borderWidth: 2, borderColor: "button.color", color: "button.color", }}>I'm ready</Button>
                    } />
                </div>} />
        </div>
    )
}
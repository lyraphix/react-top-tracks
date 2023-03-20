import * as React from "react";
import styles from '@/styles/Home.module.css'
import {
    Button,
    Drawer,
} from "@mui/material";
import { useState, useEffect } from 'react';
import Lobby from "./lobby";

export default function Dashboard() {
    const untitledArtwork = "/landing/logo.png";
    const home = "/dashboard/home.png";
    const friend = "/dashboard/friend.png";
    const vibepicker = "/dashboard/vibepicker.png";
    const vector = "/dashboard/vector.png";
    const avatar = "/dashboard/Avatar.png";

    const [anchorLobby, setLobby] = useState(null);
    const openLobby = (event) => {
        setLobby(event.currentTarget);
    };
    const closeLobby = () => {
        setLobby(null);
    };

    return (
        <div className={styles.all}>
            <div className={styles.dashboard}>
                <div className={styles.menu}>
                    <img className={styles.untitledartworkdash1} src={untitledArtwork} />
                    <img className={styles.untitledartworkdash2} src={home} />
                    <img className={styles.untitledartworkdash3} src={avatar} />

                </div>
                <div className={styles.dashboardbox}>
                    <div className={styles.innerbox}>
                        <div className={styles.landingdash}>Hi, Y/N</div>
                        <img className={styles.image} src={untitledArtwork} />
                        <div className={styles.halfsize} >
                            <div className={styles.title}>
                                <img className={styles.functionicon} src={friend} />
                                <div className={styles.friendmatch}>FRIEND MATCH</div>
                            </div>
                            <div className={styles.innerfilebox}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.innerbox2}>
                        <img className={styles.vectordash} src={vector} />
                        <div className={styles.halfsize2} >
                            <div className={styles.title}>
                                <img className={styles.functionicon} src={vibepicker} />
                                <div className={styles.friendmatch}>FRIEND MATCH&nbsp;&nbsp;


                                    <input className={styles.textfield} type="text" id="lobby" name="lobby"></input>
                                    <Button onClick={openLobby} for="lobby">Join Lobby</Button>
                                    <Drawer
                                        anchor="right"
                                        open={Boolean(anchorLobby)}
                                        onClose={closeLobby}
                                        sx={{color:"background"}}
                                        // PaperProps={{
                                        //     sx: {
                                        //         marginTop: '100px',
                                        //         backgroundColor: 'transparent',
                                        //         color: 'white',
                                        //         flexGrow: 1,
                                        //         width: '100%',
                                        //         opacity: 1,
                                        //     },
                                        //     styles: {
                                                
                                        //     }
                                        // }}
                                    >
                                        <Lobby />
                                    </Drawer>

                                </div>

                            </div>
                            <div className={styles.innerfilebox2}>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

import React from 'react';
import MainButton from './_generalbutton';
import {
    Button,
    Drawer,
    Menu,
    MenuItem,
    Alert
} from "@mui/material";

function Menua(props) {

    const logout = () => {
        alert("This will log you out, not integrated yet")
    };

    const deleteuser = () => {
        alert("This will delete all tracklist, not integrated yet")
    };

    return (
        <Menu
            id="simple-menu"
            anchorEl={props.anchor}
            keepMounted
            open={Boolean(props.anchor)}
            onClose={props.function}
        >   
            <MenuItem>
            <MainButton name="Log Out" function1={logout}/>
            </MenuItem>
            <MenuItem>
            <MainButton name="Delete User Data" function1={deleteuser}/>
            </MenuItem>
            
            
        </Menu>

    );
}

export default Menua;

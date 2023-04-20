
import React from 'react';
import MainButton from './_generalbutton';
import styles from './_friendbar.module.css'
import {
    Button,
    Drawer,
    Menu,
    MenuItem,
    Alert
} from "@mui/material";
import { useRouter } from 'next/router';
import FriendListSidebar from './_friendbar';
import { useState, useEffect } from 'react';

function Menua(props) {

    const router = useRouter();

    const handleLogOut = () => {
        props.logout();
        sessionStorage.clear();
    };

    const handleDeleteUser = async () => {
        const confirmed = window.confirm('This will delete all of your data stored on Musaic. Are you sure you want to proceed?');
        if (confirmed) {
            const requestBody = {
                user_id: props.user.user_id
            };
            try {
                const response = await fetch('/api/delete_userdata', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                  });
    
                if (response.ok) {
                    console.log('user data successfully deleted');
                    handleLogOut();
                } else {
                    console.error('Request failed', response.statusText);
                }
    
            } catch (error) {
                console.error('Error deleting user:', error);
              }
        }
        
    };

    const [anchorFriendlist, setFriendlist] = useState(null);
    // const openFriendlist = (event) => {
    //     setFriendlist(event.currentTarget);
    // };
    const closeFriendlist = () => {
        setFriendlist(null);
    };
    const openAndclose = (event) => {
        props.function();
        setFriendlist(event.currentTarget);
    }

    const handleReplace = () => {
        router.replace('/');
    }

    const friends = [
        {
          id: 1,
          name: "Alice",
          avatar: "/dashboard/Avatar.png",
        
        },
        {
          id: 2,
          name: "Bobby",
          avatar: "/dashboard/Avatar.png",
        },
        {
          id: 3,
          name: "Charlie",
          avatar: "/dashboard/Avatar.png",
        },
        {
          id: 4,
          name: "Diana",
          avatar: "/dashboard/Avatar.png",
        },
        {
            id: 5,
            name: "Ellen",
            avatar: "/dashboard/Avatar.png",
          },
      ];

      const [searchTerm, setSearchTerm] = useState("");

      const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
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
            <MainButton name="Log Out" loc={handleLogOut}/>
            </MenuItem>
            <MenuItem>
            <MainButton name="Delete User Data" loc={handleDeleteUser}/>
            </MenuItem>
             {/*<MenuItem>
             <MainButton name="Friends" loc={openAndclose}/>
             </MenuItem>*/}
            
            <Drawer
                anchor="left"
                open={Boolean(anchorFriendlist)}
                onClose={closeFriendlist}
        
            >
                <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", backgroundColor: "rgb(2, 12, 21)"}}>
                    <h2 className={styles.mainheadtext} style = {{alignSelf:"center"}}>FRIEND LIST</h2>
                    <input className={styles.search}
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style = {{alignSelf:"center", marginBottom:"10px"}}
                    />
                    <FriendListSidebar friends={friends} searchTerm={searchTerm}/>
                </div>
            </Drawer>
        </Menu>

    );
}

export default Menua;

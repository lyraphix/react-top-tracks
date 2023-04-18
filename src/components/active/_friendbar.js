import React, { useState } from "react";
import styles from './_friendbar.module.css'
import Center from "@/components/active/_center";
import MainButton from "@/components/active/_generalbutton";

const FriendListSidebar = ({ friends, searchTerm }) => {
    

    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.mainbox}>
            <Center object={<MainButton name="Add Friend" height="30px" weight="150px"/>} object2={<div style={{height:"10px"}}></div>} object3={<MainButton name="Delete Friend" height="30px" weight="150px"/>}/>
            <div style={{display:"flex", flexDirection:"column", marginTop:"5px"}}>
                {filteredFriends.map((friend) => (
                    <div key={friend.id} style = {{alignSelf:"center"}}>
                        <img src={friend.avatar} alt={friend.name}/>
                        <div style = {{display:"flex", flexdirection:"row", justifyContent:"space-around", marginBottom:"20px"}}>
                            <h3 className={styles.nametext} style = {{alignSelf:"center"}}>{friend.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendListSidebar;

import React, { useState } from "react";
import styles from './_friendbar.module.css'

const FriendListSidebar = ({ friends, searchTerm }) => {
    

    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.mainbox}>
            <MainButton name="Add Friend"/>
            <MainButton name="Delete Friend"/>
            <div style={{display:"flex", flexDirection:"column", marginTop:"5vh"}}>
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

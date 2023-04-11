import React, { useState } from "react";
import styles from './_scrolltracklist.module.css'

const TrackList = ({ friends, searchTerm }) => {
    

    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.mainbox}>
            
            <ul >
                {filteredFriends.map((friend) => (
                    <div className={styles.each} key={friend.id} >
                        <img className={styles.image} src={friend.avatar} alt={friend.name} />
                        
                        <h3 className={styles.nametext}>{friend.name}</h3>
                        <h3 className={styles.authortext}>- {friend.author}</h3>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default TrackList;

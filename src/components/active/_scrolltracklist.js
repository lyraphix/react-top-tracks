import React, { useState } from "react";
import styles from './_scrolltracklist.module.css'

const TrackList = ({ friends }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.mainbox}>
            <div >
                <h2 className={styles.mainheadtext}> Track List</h2>
                <input className={styles.search}
                    type="text"
                    placeholder="Search Tracks"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
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

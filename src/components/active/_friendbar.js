import React, { useState } from "react";
import styles from './_friendbar.module.css'

const FriendListSidebar = ({ friends }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.mainbox}>
            <div style={{flexDirection:"column", justifyContent:"flex-start"}}>
                <h2 className={styles.mainheadtext}>FRIEND LIST</h2>
                <input className={styles.search}
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <ul style={{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
                {filteredFriends.map((friend) => (
                    <div key={friend.id} style = {{alignSelf:"center"}}>
                        <img src={friend.avatar} alt={friend.name}/>
                        <div style = {{alignSelf:"center"}}>
                            <h3 className={styles.nametext}>{friend.name}</h3>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default FriendListSidebar;

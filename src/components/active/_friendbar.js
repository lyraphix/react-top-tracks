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
            <div >
                <h2 className={styles.mainheadtext}> Friend List</h2>
                <input className={styles.search}
                    type="text"
                    placeholder="Search friends"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <ul >
                {filteredFriends.map((friend) => (
                    <div key={friend.id} >
                        <img src={friend.avatar} alt={friend.name} />
                        <div>
                            <h3 className={styles.nametext}>{friend.name}</h3>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default FriendListSidebar;

import React, { useState } from "react";
import styles from '@/styles/Home.module.css'

const FriendListSidebar = ({ friends }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFriends = friends.filter((friend) =>
        friend.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.sidebar}>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search friends"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <ul className={styles.friendList}>
                {filteredFriends.map((friend) => (
                    <li
                        key={friend.id}
                        className={styles.friend}
                    >
                        <img src={friend.avatar} alt={friend.name} />
                        <div className={styles.friendInfo}>
                            <h3>{friend}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendListSidebar;





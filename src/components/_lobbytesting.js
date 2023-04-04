import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'
import {
  Button,
  Drawer,
} from "@mui/material";
import MainButton from './active/_generalbutton';

function Lobby2() {
  const [users, setUsers] = useState([
    { id: 1, name: 'User' },
    { id: 2, name: 'User' },
    { id: 3, name: 'User' },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const removeUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = event.target.name.value;
    const newId = users.length + 1;
    const newUser = { id: newId, name: newName };
    addUser(newUser);
    event.target.reset();
  };

  const lobbyID = "LOBBY ID"

  const friend = "/dashboard/friend.png";
  return (
    <div>      
      
      <div className={styles.halfsize} >
        <div className={styles.title}>
          <img className={styles.functionicon} src={friend} />
          <div className={styles.friendmatch}>{lobbyID}</div>
        </div>
   
        <div className={styles.innerfilebox}>
        <form onSubmit={handleSubmit}>
          <input className={styles.textfield} type="text" name="name" required placeholder="Enter Your Name"/>
          <Button type="submit">Join Lobby</Button>
          <div className={styles.iagreewiththeter}>Current Party</div>
          <ul>
            {users.map((user) => (
              <div className={styles.iagreewiththeter} key={user.id}>
                {/* NEED TO ADD STYLES */}
                {user.name} <button className={styles.buttontext} onClick={() => removeUser(user.id)}>Leave lobby</button>
              </div>
            ))}
          </ul>
          </form>
        </div>
        
      </div>
    </div>

  );
}
export default Lobby2;
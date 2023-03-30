import React from 'react';
import styles from './UserGreeting.module.css';

const UserGreeting = ({ user }) => {
  return <div className={styles.landingdash}>Hi, {user && user.name ? user.name : 'User'}</div>;
};

export default UserGreeting;

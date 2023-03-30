import React from 'react';
import styles from '@/styles/Home.module.css';

const Menu = ({ untitledArtwork, home, avatar }) => (
  <div className={styles.menu}>
    <img className={styles.untitledartworkdash1} src={untitledArtwork} />
    <img className={styles.untitledartworkdash2} src={home} />
    <img className={styles.untitledartworkdash3} src={avatar} />
  </div>
);

export default Menu;

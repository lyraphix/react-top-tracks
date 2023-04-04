import React from 'react';
import styles from './DisplayBox1.module.css';

const DisplayBox1 = ({ image, title, children }) => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <img className={styles.image} src={image} alt="Icon" />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DisplayBox1;

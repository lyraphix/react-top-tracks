import React from 'react';
import styles from '@/styles/Home.module.css';

const FullCanvasButton = ({ onClick }) => {

    return (
        <button className={styles.canvas_button} onClick={onClick} >
            <div className={styles.content}>
                DELETE ALL DATA
            </div>
        </button>
    );
}
export default FullCanvasButton;

//CSS CODE

// .canvas_button {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     background-color: #f0f0f0;
//     border: none;
//     outline: none;
//   }
  
//   .canvas_button:hover {
//     background-color: #d0d0d0;
//   }
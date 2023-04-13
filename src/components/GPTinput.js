import React from 'react';
import styles from '@/styles/Home.module.css';

const GPTinput = ({textInput, userInput, handleInputChange, handleSubmit, handleKeyPress}) => {
    return (
        <div style={{flexDirection:"column", justifyContent:"center", display:"flex"}}>
            <h1 style={{fontSize:"3vh", fontFamily:"Inter, sans-serif", fontWeight:"100", alignSelf:"center"}}>Enter a phrase to create a playlist</h1>
            <input
                className={styles.search}
                ref={textInput}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Enter a phrase"
                onKeyPress={handleKeyPress}
                />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default GPTinput;
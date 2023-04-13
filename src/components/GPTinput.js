import React from 'react';
import styles from '@/styles/GPT.module.css';
import MainButton from './active/_generalbutton';

const GPTinput = ({textInput, userInput, handleInputChange, handleSubmit, handleKeyPress}) => {
    return (
        <div className={styles.flex}>
            <h1 className={styles.maintext}>Enter a phrase to create a playlist</h1>
            <input
                className={styles.vibepickersearch}
                ref={textInput}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Enter a phrase"
                onKeyPress={handleKeyPress}
                />
            {/* <button onClick={handleSubmit}>Submit</button> */}
            <MainButton loc={handleSubmit} name="Submit"/>
        </div>
    );
};

export default GPTinput;
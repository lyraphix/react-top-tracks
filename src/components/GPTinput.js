import React from 'react';
<<<<<<< HEAD
import styles from '@/styles/Home.module.css';

const GPTinput = ({textInput, userInput, handleInputChange, handleSubmit, handleKeyPress}) => {
    return (
        <div style={{flexDirection:"column", justifyContent:"center", display:"flex"}}>
            <h1 style={{fontSize:"3vh", fontFamily:"Inter, sans-serif", fontWeight:"100", alignSelf:"center"}}>Enter a phrase to create a playlist</h1>
            <input
                className={styles.search}
=======
import styles from '@/styles/GPT.module.css';
import MainButton from './active/_generalbutton';

const GPTinput = ({textInput, userInput, handleInputChange, handleSubmit, handleKeyPress}) => {
    return (
        <div className={styles.flex}>
            <h1 className={styles.maintext}>Enter a phrase to create a playlist</h1>
            <input
                className={styles.vibepickersearch}
>>>>>>> b0d8f294fad67c42c4f60216a9215f8c9dda5820
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
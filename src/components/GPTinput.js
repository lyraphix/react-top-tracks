import React from 'react';
import styles from '@/styles/Home.module.css';
import MainButton from "../components/active/_generalbutton";

const GPTinput = ({textInput, userInput, handleInputChange, handleSubmit, handleKeyPress}) => {
    return (
        <div style={{flexDirection:"column", justifyContent:"center",display:"flex"}}>
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
            {/* <button onClick={handleSubmit}>Submit</button> */}
            </div>
            <div style={{flexDirection:"row", justifyContent:"space-around", marginTop:"40px", alignSelf:"center"}}>
            <MainButton loc={handleSubmit} name="Submit"  width = "50px" height = "40px"/>
            </div>
        </div>
    );
};

export default GPTinput;
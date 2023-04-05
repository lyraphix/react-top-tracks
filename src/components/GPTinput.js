import React from 'react';

const GPTinput = ({textInput, userInput, handleInputChange, handleSubmit, handleKeyPress}) => {
    return (
        <div>
            <h1>Enter a phrase to create a playlist</h1>
            <input
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
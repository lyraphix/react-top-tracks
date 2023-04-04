import React from 'react';

const TextInput = ({ inputField, handleChange }) => {
  return (
    <div>
      <label htmlFor={inputField.id}>{inputField.label}</label>
      <input
        type={inputField.type}
        id={inputField.id}
        name={inputField.name}
        value={inputField.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;

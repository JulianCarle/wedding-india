import React from 'react';

const TextInput = ({ textLabel, ...rest }) => {
  return (
    <div className="text-input-container">
      {textLabel === 'hidden' ? (
        <label className="hidden">{textLabel}</label>
      ) : (
        <label>{textLabel}</label>
      )}
      <input {...rest}></input>
    </div>
  );
};
export default TextInput;

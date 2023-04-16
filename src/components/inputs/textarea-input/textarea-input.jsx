import React from 'react';

const TextareaInput = ({ textLabel, ...rest }) => {
  return (
    <div className="textarea-input-container">
      {textLabel && <label>{textLabel}</label>}
      <textarea {...rest}></textarea>
    </div>
  );
};
export default TextareaInput;

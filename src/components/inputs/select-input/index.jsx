import React from 'react';

const SelectInput = ({ textLabel, options, defaultText, ...rest }) => {
  return (
    <div className="select-input-container">
      {textLabel && <label>{textLabel}</label>}
      <select {...rest}>
        <option value="">{defaultText}</option>
        {options}
      </select>
    </div>
  );
};
export default SelectInput;

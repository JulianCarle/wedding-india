import React from 'react';

export const optionsList = (answers) => {
  return answers.map((answer) => {
    return (
      <option key={answer} value={answer}>
        {answer}
      </option>
    );
  });
};

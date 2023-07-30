import React from 'react';
import aurelia from '../../images/home/aurelia.png';
import julian from '../../images/home/julian.png';
import mr from '../../images/home/mr.png';
import mrs from '../../images/home/mrs.png';

import './styles.scss';

export const BrideAndGroom = () => {
  return (
    <div className="BrideAndGroom">
      <img className="mrs" src={mrs} alt="img" />
      <img className="img-us" src={aurelia} alt="img" />
      <p>Aurélia</p>
      <p className="nm">&</p>
      <p>Julian</p>
      <img className="img-us" src={julian} alt="img" />
      <img className="mr" src={mr} alt="img" />
    </div>
  );
};

export default BrideAndGroom;

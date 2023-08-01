import React from 'react';
import './styles.scss';

const WarningScreenSize = () => {
  return (
    <div className="warning-screen-size-container margin130">
      <p className="warning-screen-text">
        Ce site est conçue pour les téléphones. <br />
        <br /> Vos dimensions d&apos;écran doivent être inférieures à 600 pixels
      </p>
    </div>
  );
};
export default WarningScreenSize;

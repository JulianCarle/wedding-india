import React from 'react';

const Convenience = ({ title, adresse, link, image }) => {
  return (
    <div className="container-convenience">
      <img className="img-convenience" src={image} alt="img" />
      <div className="box">
        <div className="container-infos">
          <div className="text">{title}</div>
          <div className="text">{adresse}</div>
          <a href={link} className="text">{`Lien Google Maps:  ${link}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Convenience;

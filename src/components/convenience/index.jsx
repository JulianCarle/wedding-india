import React from 'react';

const Convenience = ({ title, adresse, link, linkLaw, image, text }) => {
  return (
    <div className="container-convenience">
      {image &&
        <img className="img-convenience" src={image} alt="img" />
      }
      <div className="box">
        <div className="container-infos">
          <div className="title-text">{title}</div>
          {link ? (
            <>
              {text && <p>{text}</p>}
              <div className="text">{adresse}</div>
              <p>Lien Google Maps:</p>
              <a href={link} className="text">
                ${link}
              </a>
            </>
          ) : (
            <>
              <p>Lien du site:</p>
              <a href={linkLaw} className="text">
                {linkLaw}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Convenience;

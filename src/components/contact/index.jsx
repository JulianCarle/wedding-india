import React from 'react';
import './styles.scss';

const Contact = ({ firstName, image, phone, ties }) => {
  return (
    <div className="container-contact">
      <img className="img-contact" src={image} alt="img" />
      <div className="box">
        <div className="container-infos">
          <div className="text">{`${firstName}`}</div>
          <div className="text">{ties}</div>
          <div className="text">{phone}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

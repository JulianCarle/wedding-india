import React from 'react';
import { FcPhoneAndroid } from 'react-icons/fc';
import './styles.scss';

const Contact = ({ firstName, image, phone, ties }) => {
  return (
    <div className="container-contact">
      <img className="img-contact" src={image} alt="img" />
      <div className="box">
        <div className="container-infos">
          <div className="text">{`${firstName}`}</div>
          <div className="text">{ties}</div>
          <div className="text phone-number">
            <FcPhoneAndroid />
            &nbsp;&nbsp;
            {phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import './styles.scss';
import flowers from '../../images/home/green-flower.png';

const Counter = () => {
  const endDate = moment('2023-08-21');
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getCountdown() {
    const now = moment();
    const duration = moment.duration(endDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  }

  const formatNumberWithZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };  

  return (
    <div className="counter-container">
      <p className="date-counter">Lundi 21 Août 2023</p>
      <p className="title-counter bottom-text nm">K Resort</p>
      <p className="adresse bottom-text">
        No 1, Dr. M.D.K. Kuthalingam Salai Ranganathapuram, SH 49, Koonimedu,
        Tamil Nadu 604303, Inde
      </p>
      <div className="countdown-section">
        <p>{formatNumberWithZero(countdown.days)}</p>
        <p>jour(s)</p>
      </div>
      <div className="countdown-section">
        <p>{formatNumberWithZero(countdown.hours)}</p>
        <p>heure(s)</p>
      </div>
      <div className="countdown-section">
        <p>{formatNumberWithZero(countdown.minutes)} </p>
        <p>minute(s)</p>
      </div>
      <div className="countdown-section">
        <p>{formatNumberWithZero(countdown.seconds)}</p>
        <p>seconde(s)</p>
      </div>

      <div className="img-flowers">
        <img src={flowers} alt="flowers-img" />
      </div>
    </div>
  );
};

export default Counter;

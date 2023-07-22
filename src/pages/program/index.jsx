import React from 'react';
import { Event } from '../../components/event';

const ProgramPage = () => {
  return (
    <div>
      <h2 className="title-page">Programme</h2>
      <Event title="Lundi 21 août : jour du mariage" />
      <Event title="Lundi 22 août : Visite d'Auroville " />
      <Event title="Lundi 23 août : Visite des temples de Mahabalipuram" />
    </div>
  );
};

export default ProgramPage;

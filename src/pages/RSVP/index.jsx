import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/button';
import './styles.scss';

export const RSVPPage = () => {
  const navigate = useNavigate();

  const onNavigateHandler = (adresse) => {
    navigate(adresse);
  };

  return (
    <div className="rsvp margin85">
      <div className="rsvp-box">
        <div className="title-RSVP">RSVP</div>
        <div className="title-RSVP">Mariage d&apos;Aurélia et Julian</div>
        <div className="text-RSVP">
          Répondez à ces deux formulaires afin d&apos;organiser votre venue
        </div>
        <div className="button-validate-form-guests">
          <Button
            onClick={() => onNavigateHandler('/guests-form')}
            buttonType="validateButton"
          >
            Formulaire 1: Informations
          </Button>
        </div>
        <div className="button-validate-form-guests">
          <Button
            onClick={() => onNavigateHandler('/travel-form')}
            buttonType="orangeButton"
          >
            Formulaire 2: Voyage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;

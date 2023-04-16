import React, { useContext, useState } from 'react';
import FormGuests from '../../components/form-guests';
import { LanguageContext } from '../../contexts/language.context';

const FormGuestsPage = () => {
  const { translationTexts } = useContext(LanguageContext);
  const [isSuccess, setIsSuccess] = useState(null);

  return (
    <div className="FormGuestsPage">
      <div className="title-container">
        <h1>{translationTexts.formGuests.title}</h1>
      </div>
      {isSuccess ? (
        <div className="message-success">
          <p>{translationTexts.basics.successMessage}</p>
        </div>
      ) : (
        <FormGuests
          translationTexts={translationTexts}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
        />
      )}
    </div>
  );
};

export default FormGuestsPage;

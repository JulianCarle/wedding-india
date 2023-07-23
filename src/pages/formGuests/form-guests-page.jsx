import React, { useContext, useState } from 'react';
import FormGuests from '../../components/form-guests';
import { LanguageContext } from '../../contexts/language.context';

const FormGuestsPage = () => {
  const { translationTexts } = useContext(LanguageContext);
  const [isSuccess, setIsSuccess] = useState(null);

  return (
    <div className="FormGuestsPage margin85">
      <div className="title-container">
        <h1>{translationTexts.forms.formGuests.title}</h1>
      </div>
      {isSuccess ? (
        <div className="message-success">
          <p>{translationTexts.forms.basics.successMessage}</p>
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

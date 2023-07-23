import React, { useContext, useState } from 'react';
import FormTravel from '../../components/form-travel';
import { LanguageContext } from '../../contexts/language.context';

const FormTravelPage = () => {
  const { translationTexts } = useContext(LanguageContext);
  const [isSuccess, setIsSuccess] = useState(null);

  return (
    <div className="FormTravelPage margin85">
      <div className="title-container-fr">
        <div className="blue"></div>
        <div className="white">
          <h1>{translationTexts.forms.formTravel.title}</h1>
        </div>
        <div className="red"></div>
      </div>
      {isSuccess ? (
        <div className="message-success">
          <p>{translationTexts.forms.basics.successMessage}</p>
        </div>
      ) : (
        <FormTravel
          translationTexts={translationTexts}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
        />
      )}
    </div>
  );
};

export default FormTravelPage;

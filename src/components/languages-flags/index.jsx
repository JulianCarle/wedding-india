import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language.context';
import FranceFlag from '../../images/flags/France.png';
import UKFlag from '../../images/flags/United-Kingdom.png';
import './styles.scss';

const LanguagesFlags = () => {
  const { translationTexts, setLanguage } = useContext(LanguageContext);

  return (
    <div className="container-image-flag">
      <div>{translationTexts.forms.basics.language}</div>
      <img onClick={() => setLanguage('fr')} src={FranceFlag} alt="EN"></img>
      <img onClick={() => setLanguage('en')} src={UKFlag} alt="EN"></img>
    </div>
  );
};

export default LanguagesFlags;

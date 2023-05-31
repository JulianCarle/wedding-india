import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language.context';
import './styles.scss';

const NotFoundPage = () => {
  const { translationTexts } = useContext(LanguageContext);

  return (
    <div className="container-notFound">
      <p>{translationTexts.notFound.notExist}</p>
      <a href="/#/guests-form">{translationTexts.notFound.link1}</a>
      <br/><br/>
      <a href="/#/travel-form">{translationTexts.notFound.link2}</a>
    </div>
  );
};

export default NotFoundPage;

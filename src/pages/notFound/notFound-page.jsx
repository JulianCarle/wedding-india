import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language.context';
import './styles.scss';

const NotFoundPage = () => {
  const { translationTexts } = useContext(LanguageContext);

  return (
    <div className="container-notFound">
      <p>{translationTexts.notFound.notExist}</p>
      <a href="/#/guests-form">{translationTexts.notFound.link}</a>
    </div>
  );
};

export default NotFoundPage;

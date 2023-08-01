import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/language.context';
import './styles.scss';

const NotFoundPage = () => {
  const { translationTexts } = useContext(LanguageContext);

  return (
    <div className="container-not-found">
      <p>404</p>
      <p>{translationTexts.notFound.notExist}</p>
    </div>
  );
};

export default NotFoundPage;

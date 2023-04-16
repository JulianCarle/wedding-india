import React, { createContext, useEffect, useMemo, useState } from 'react';
import { en } from '../translations/en';
import { fr } from '../translations/fr';

export const LanguageContext = createContext({
  setLanguage: () => null,
  language: null,
  translation: null
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');
  const [translationTexts, setTranslationTexts] = useState(fr);

  useEffect(() => {
    language === 'fr' ? setTranslationTexts(fr) : setTranslationTexts(en);
  }, [language]);

  const value = useMemo(() => {
    return { language, setLanguage, translationTexts };
  }, [language, translationTexts]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

import React, { useContext } from 'react';
import { LanguageContext } from './contexts/language.context';
import FranceFlag from './images/flags/France.png';
import UKFlag from './images/flags/United-Kingdom.png';
import Router from './router';

function App() {
  const { setLanguage } = useContext(LanguageContext);

  return (
    <div className="App">
      <div className="container-image-flag">
        <img onClick={() => setLanguage('fr')} src={FranceFlag} alt="EN"></img>
        <img onClick={() => setLanguage('en')} src={UKFlag} alt="EN"></img>
      </div>
      <Router />
    </div>
  );
}

export default App;

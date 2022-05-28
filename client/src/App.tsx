import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import './lang/i18n';
import { i18nInstance } from './lang/i18n';
import HomePage from './pages/HomePage';
import { ThemeProvider as CustomThemeProvider } from './theme/ThemeContext';
import { getLocal } from './services/localStorageService';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [ isLangLoaded, setIsLangLoaded ] = useState(false);

  useEffect(() => {
    i18nInstance()
      .then((() => {
        const lang = getLocal('language')
        i18next.changeLanguage(lang || 'en')
      }))
      .then((() => {
        setIsLangLoaded(true);
      }))
  },[]);
 


  return (
    <div>
      <Router>
        <CustomThemeProvider>
          {isLangLoaded && <HomePage />}
          {!isLangLoaded && <div>Loading...</div>}
        </CustomThemeProvider>
      </Router>
    </div>
  );
}

export default App;

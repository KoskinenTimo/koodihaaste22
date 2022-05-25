import React, { useEffect, useState } from 'react';
import './lang/i18n';
import { i18nInstance } from './lang/i18n';
import LinkText from './LinkText';


function App() {
  const [ isLangLoaded, setIsLangLoaded ] = useState(false);

  useEffect(() => {
    i18nInstance()
      .then((() => {
        setIsLangLoaded(true);
      }))
  },[]);
 


  return (
    <div>
      {isLangLoaded && <LinkText />}
    </div>
  );
}

export default App;

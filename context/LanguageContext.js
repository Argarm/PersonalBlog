import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [t, setT] = useState(translations.es);

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
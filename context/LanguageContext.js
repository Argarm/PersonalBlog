import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [t, setT] = useState(translations.es);

  useEffect(() => {
    // Leer idioma guardado en localStorage al montar
    const storedLang = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang);
      setT(translations[storedLang]);
    }
  }, []);

  useEffect(() => {
    setT(translations[language]);
    // Guardar idioma en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
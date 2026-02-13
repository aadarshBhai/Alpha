import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useTranslation();
  
  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label="Toggle language"
    >
      {language === 'hi' ? 'EN' : 'हिं'}
    </button>
  );
};

export default LanguageToggle;

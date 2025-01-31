// LanguageSwitcher.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={switchLanguage} className='p-3 w-48 h-20 bg-white'>
        Switch to {language === 'en' ? 'Malayalam' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

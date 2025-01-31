// Content.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    title: 'Welcome to My Website',
    description: 'This is an example of a React app with a language switcher.',
  },
  ml: {
    title: 'എന്റെ വെബ്സൈറ്റിലേക്ക് സ്വാഗതം',
    description: 'ഈ ഒരു റിയാക്ട് ആപ്പിന്റെ ഉദാഹരണമാണ്, ഭാഷ സ്വിച്ച് ചെയ്യുന്നത്.',
  },
};

const Content = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h1>{content[language].title}</h1>
      <p>{content[language].description}</p>
    </div>
  );
};

export default Content;

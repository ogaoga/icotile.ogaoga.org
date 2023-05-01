import { useState, useEffect } from 'react';

export const useLang = () => {
  const [lang, setLang] = useState('ja');
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const l = queryParameters.get('lang');
    if (l === 'en' || l === 'je') {
      setLang(l);
    } else {
      setLang(navigator.language || 'ja');
    }
  }, []);
  return lang;
};

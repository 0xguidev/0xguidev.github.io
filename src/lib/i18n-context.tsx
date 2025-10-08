'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

type Language = 'pt' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    // Load language from localStorage or browser preference
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      // Default to Portuguese, or detect from browser
      const browserLang = navigator.language.startsWith('en') ? 'en' : 'pt';
      setLanguage(browserLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <I18nContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}

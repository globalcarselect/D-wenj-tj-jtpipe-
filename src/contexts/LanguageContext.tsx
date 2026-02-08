'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, defaultLanguage, languages } from '@/locales';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && languages[savedLanguage]) {
      setLanguageState(savedLanguage);
      // Update html lang attribute
      document.documentElement.lang = savedLanguage === 'cn' ? 'zh-CN' : savedLanguage;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update html lang attribute
    document.documentElement.lang = lang === 'cn' ? 'zh-CN' : lang;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      availableLanguages: languages
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
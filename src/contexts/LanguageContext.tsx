import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getDirection } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fa')) {
      setLanguageState(savedLanguage);
    } else {
      // Default to English
      setLanguageState('en');
    }
  }, []);

  useEffect(() => {
    // Update document attributes
    const direction = getDirection(language);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add Vazirmatn font class for Persian
    if (language === 'fa') {
      document.documentElement.classList.add('font-vazirmatn');
    } else {
      document.documentElement.classList.remove('font-vazirmatn');
    }
    
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const direction = getDirection(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};
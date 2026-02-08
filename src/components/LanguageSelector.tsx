// components/LanguageSelector.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/locales';

const LanguageSelector = () => {
  const { language, setLanguage, availableLanguages } = useLanguage();

  const languageFlags: Record<Language, string> = {
    en: '🇺🇸',
    cn: '🇨🇳',
    es: '🇪🇸',
    fr: '🇫🇷',
    de: '🇩🇪',
    ru: '🇷🇺',
    ar: '🇸🇦',
    ja: '🇯🇵',
    ko: '🇰🇷',
    pt: '🇵🇹',
    it: '🇮🇹',
    hi: '🇮🇳',
    tr: '🇹🇷'
  };

  const languages = Object.entries(availableLanguages).map(([code, name]) => ({
    code: code as Language,
    name,
    flag: languageFlags[code as Language] || '🌐'
  }));

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
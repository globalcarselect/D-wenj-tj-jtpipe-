import { getTranslation, TranslationKey, Language, defaultLanguage } from '@/locales';
import { useLanguage } from '@/contexts/LanguageContext';

// 创建一个简单的翻译钩子
export function useTranslationSimple() {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey): string => {
    return getTranslation(key, language);
  };

  return { t, language };
}
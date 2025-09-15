import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, formatNumber, translations } from '@/lib/i18n';

export const useTranslation = () => {
  const { language, direction } = useLanguage();

  const t = (key: keyof typeof translations.en): string => {
    return getTranslation(language, key);
  };

  const formatNum = (num: number): string => {
    return formatNumber(num, language);
  };

  return {
    t,
    formatNum,
    language,
    direction,
    isRTL: direction === 'rtl',
  };
};
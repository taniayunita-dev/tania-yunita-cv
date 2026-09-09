import { useLanguage } from '@/hooks/useLanguage';
// import { getTranslations } from '@/data/translations';
import { translations } from '@/data/translations-language';

export function useTranslation() {
  const { language } = useLanguage();

  return {
    language,
    t: translations[language],
  };
}
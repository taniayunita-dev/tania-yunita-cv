import { useLanguage } from '@/hooks/useLanguage';
import { getTranslations } from '@/data/translations';

export function useTranslation() {
  const { language } = useLanguage();

  return {
    language,
    t: getTranslations(language),
  };
}
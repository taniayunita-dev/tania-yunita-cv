import type { Lang, Translation } from '../types/i18n';
import { en } from './en';
import { id } from './id';

export const translations: Record<Lang, Translation> = { en, id };

export const supportedLangs: Lang[] = ['en', 'id'];

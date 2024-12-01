import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en'
import th from './th'

export const languageResources = {
  en: { translation: en },
  th: { translation: th },
}

i18n.use(initReactI18next).init({
  lng: 'th',
  fallbackLng: 'th',
  resources: languageResources,
});

export default i18n;

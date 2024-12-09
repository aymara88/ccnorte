import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es.json';
import glTranslation from './locales/gl.json';

i18next.use(initReactI18next).init({
  resources: {
    es: {
      translation: esTranslation
    },
    gl: {
      translation: glTranslation
    },
  },
  lng: 'es', // Set the default language
  fallbackLng: 'es', // Fallback language if the chosen language is not available
  interpolation: {
    escapeValue: false, // React already escapes variables
  },
});

export default i18next;

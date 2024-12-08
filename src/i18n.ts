import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        EVENTS: "Eventos",
        INFORMATION: "Información",
        SIGNUP: "Inscripción",
        ROUTES: "Recorridos",
        RESULTS: "Resultados",
        CONTACT: "Contactar",
        Spanish: "Español",
        Galician: "Gallego",
      },
    },
    gl: {
      translation: {
        EVENTS: "Eventos",
        INFORMATION: "Información",
        SIGNUP: "Inscrición",
        ROUTES: "Tours",
        RESULTS: "Resultados",
        CONTACT: "Contacto",
        Spanish: "Castelán",
        Galician: "Galego",
      },
    },
  },
  lng: 'es', // Set the default language
  fallbackLng: 'es', // Fallback language if the chosen language is not available
  interpolation: {
    escapeValue: false, // React already escapes variables
  },
});

export default i18next;

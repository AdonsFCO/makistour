import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const options = {
  lng: 'es',  //Default languaje
  fallbackLng: 'en', 
  backend: {
    loadPath: '/locales/{{lng}}/translation.json', 
  },

};

i18next
  .use(Backend)
  .use(initReactI18next)
  .init(options);

export default i18next;

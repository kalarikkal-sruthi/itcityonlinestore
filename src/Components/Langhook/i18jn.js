import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import ar from '../../locales/ar.json'
import en from '../../locales/en.json'



const resources = {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  };
  
  const langs = ["en", "ar"];
  



    i18n
    
  .use(HttpBackend)
  .use(LanguageDetector)
  
  .init({
    resources,
      whiteList: langs,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
    export default i18n
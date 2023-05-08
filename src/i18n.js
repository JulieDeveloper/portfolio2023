import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locale/language/en.json';
import tc from './locale/language/tc.json';
import projectsList from './locale/language/projectsList.json';
import project01 from './locale/language/project01.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources: {
      en: {
        translations: en,
        project01: project01.en,
        projectsList: projectsList.en,
      },

      tc: {
        translations: tc,
        project01: project01.tc,
        projectsList: projectsList.tc,
      },
    },
    ns: ['translations', 'project01', 'projectsList'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

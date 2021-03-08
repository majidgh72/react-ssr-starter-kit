import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Languages from 'Data/Languages';

i18n
  .use(initReactI18next)
  .init({
    resources: Languages,
    lng: "fa",
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false
    }
});

export default i18n;
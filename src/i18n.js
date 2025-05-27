import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cvData from "./data/cv.json";

const resources = {
  en: { translation: cvData.en },
  fr: { translation: cvData.fr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

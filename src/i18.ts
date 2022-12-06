import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "jp",
    lng: localStorage["i18nextLng"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "sessionStorage"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/i18n/{{lng}}/translation.json",
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./Locales/ru.json";
import uz from "./Locales/uz.json";

const resources = {
  ru: { translation: ru },
  uz: { translation: uz },
  // Other languages
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

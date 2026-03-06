import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/translation.json"
import de from "./de/translation.json"

const resources = {
    en: {
        translation: en
    },
    de: {
        translation: de
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "de",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n
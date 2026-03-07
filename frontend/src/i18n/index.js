import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enNavbar from "./en/navbar.json";
import enHero from "./en/hero.json";
import enServices from "./en/services.json";
import enContact from "./en/contact.json";
import enSchuldnerberatung from "./en/schuldnerberatung.json";

import deNavbar from "./de/navbar.json";
import deHero from "./de/hero.json";
import deServices from "./de/services.json";
import deContact from "./de/contact.json";
import deSchuldnerberatung from "./de/schuldnerberatung.json";

const resources = {
    en: {
        navbar: enNavbar,
        hero: enHero,
        services: enServices,
        contact: enContact,
        schuldnerberatung: enSchuldnerberatung
    },
    de: {
        navbar: deNavbar,
        hero: deHero,
        services: deServices,
        contact: deContact,
        schuldnerberatung: deSchuldnerberatung
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "de",
        fallbackLng: "en",

        ns: ["navbar", "hero", "services", "contact", "schuldnerberatung"],
        defaultNS: "navbar",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enNavbar from "./en/navbar.json";
import enHero from "./en/hero.json";
import enServices from "./en/services.json";
import enContact from "./en/contact.json";
import enSchuldnerberatung from "./en/schuldnerberatung.json";
import enOffer from "./en/offer.json";
import enTeam from "./en/team.json";
import enFooter from "./en/footer.json"
import enPrivacy from "./en/privacy.json"
import enImpressum from "./en/impressum.json"

import deNavbar from "./de/navbar.json";
import deHero from "./de/hero.json";
import deServices from "./de/services.json";
import deContact from "./de/contact.json";
import deSchuldnerberatung from "./de/schuldnerberatung.json";
import deOffer from "./de/offer.json";
import deTeam from "./de/team.json";
import deFooter from "./de/footer.json"
import dePrivacy from "./de/privacy.json"
import deImpressum from "./de/impressum.json"

const resources = {
    en: {
        navbar: enNavbar,
        hero: enHero,
        services: enServices,
        contact: enContact,
        schuldnerberatung: enSchuldnerberatung,
        offer: enOffer,
        team: enTeam,
        footer: enFooter,
        privacy: enPrivacy,
        impressum: enImpressum
    },
    de: {
        navbar: deNavbar,
        hero: deHero,
        services: deServices,
        contact: deContact,
        schuldnerberatung: deSchuldnerberatung,
        offer: deOffer,
        team: deTeam,
        footer: deFooter,
        privacy: dePrivacy,
        impressum: deImpressum
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "de",
    fallbackLng: "en",

    ns: [
        "navbar",
        "hero",
        "services",
        "contact",
        "schuldnerberatung",
        "offer",
        "team",
        "footer",
        "privacy",
        "impressum"
    ],
    defaultNS: "navbar",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

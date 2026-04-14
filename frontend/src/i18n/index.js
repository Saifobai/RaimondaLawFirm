import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enNavbar from "./en/navbar.json";
import enHero from "./en/hero.json";
import enHighlights from "./en/highlights.json";
import enContact from "./en/contact.json";
import enSchuldnerberatung from "./en/schuldnerberatung.json";
import enDebtway from "./en/debtway.json";
import enTeam from "./en/team.json";
import enFooter from "./en/footer.json"
import enPrivacy from "./en/privacy.json"
import enImpressum from "./en/impressum.json"
import enReviews from "./en/reviews.json"
import enServices from "./en/services.json"
import enExtra from "./en/extra.json"


import deNavbar from "./de/navbar.json";
import deHero from "./de/hero.json";
import deHighlights from "./de/highlights.json";
import deContact from "./de/contact.json";
import deSchuldnerberatung from "./de/schuldnerberatung.json";
import deDebtway from "./de/debtway.json";
import deTeam from "./de/team.json";
import deFooter from "./de/footer.json"
import dePrivacy from "./de/privacy.json"
import deImpressum from "./de/impressum.json"
import deReviews from "./de/reviews.json"
import deServices from "./de/services.json"
import deExtra from "./de/extra.json"

const resources = {
    en: {
        navbar: enNavbar,
        hero: enHero,
        highlights: enHighlights,
        contact: enContact,
        schuldnerberatung: enSchuldnerberatung,
        debtway: enDebtway,
        team: enTeam,
        footer: enFooter,
        privacy: enPrivacy,
        impressum: enImpressum,
        reviews: enReviews,
        services: enServices,
        extra: enExtra
    },
    de: {
        navbar: deNavbar,
        hero: deHero,
        highlights: deHighlights,
        contact: deContact,
        schuldnerberatung: deSchuldnerberatung,
        debtway: deDebtway,
        team: deTeam,
        footer: deFooter,
        privacy: dePrivacy,
        impressum: deImpressum,
        reviews: deReviews,
        services: deServices,
        extra: deExtra
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "de",
    fallbackLng: "en",

    ns: [
        "navbar",
        "hero",
        "hightlights",
        "contact",
        "schuldnerberatung",
        "debtway",
        "team",
        "footer",
        "privacy",
        "impressum",
        "reviews",
        "services",
        "extra"
    ],
    defaultNS: "navbar",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

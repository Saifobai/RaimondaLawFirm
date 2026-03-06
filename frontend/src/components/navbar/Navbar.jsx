import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-[#262B3E] shadow-lg py-3" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}

        <div className="text-white font-bold text-xl tracking-wide">IMM</div>

        {/* Navigation */}

        <nav className="hidden h-[70px] md:flex items-center gap-8 text-white text-sm">
          <a href="#" className="hover:opacity-70">
            {t("navbar.home")}
          </a>

          <a href="#" className="hover:opacity-70">
            {t("navbar.services")}
          </a>

          <a href="#" className="hover:opacity-70">
            {t("navbar.offer")}
          </a>

          <a href="#" className="hover:opacity-70">
            {t("navbar.team")}
          </a>

          <a href="#" className="hover:opacity-70">
            {t("navbar.contact")}
          </a>
        </nav>

        {/* Right side */}

        <div className="flex items-center gap-6">
          {/* Language Switch */}

          <div className="text-white text-sm hidden md:flex gap-2">
            <button
              onClick={() => changeLanguage("de")}
              className="hover:opacity-70"
            >
              DE
            </button>

            <span>|</span>

            <button
              onClick={() => changeLanguage("en")}
              className="hover:opacity-70"
            >
              EN
            </button>
          </div>

          {/* CTA */}

          <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition">
            {t("navbar.cta")}
          </button>
        </div>
      </div>
    </header>
  );
}

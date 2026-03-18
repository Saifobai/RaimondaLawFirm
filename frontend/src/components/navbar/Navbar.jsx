import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLogo from "../../assets/NavLogo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("navbar");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t("home"), href: "#" },
    { name: t("services"), href: "#services" },
    { name: t("offer"), href: "#offers" },
    { name: t("team"), href: "#team" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-[#262B3E]/80 backdrop-blur-md py-4 shadow-xl border-b border-white/5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="relative z-[110] flex items-center">
            <img
              src={NavLogo}
              alt="Logo"
              className="h-10 w-auto object-contain mix-blend-lighten"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[#C9B38C] text-[13px] xl:text-[14px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 sm:gap-6 relative z-[110]">
            {/* LANGUAGE SWITCHER */}
            <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[12px] font-bold tracking-widest text-white/60">
              <button
                onClick={() => changeLanguage("de")}
                className={`transition-colors ${
                  i18n.language === "de" ? "text-[#C9B38C]" : "hover:text-white"
                }`}
              >
                DE
              </button>
              <span className="w-[1px] h-3 bg-white/10" />
              <button
                onClick={() => changeLanguage("en")}
                className={`transition-colors ${
                  i18n.language === "en" ? "text-[#C9B38C]" : "hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-[#C9B38C] transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#262B3E]/95 backdrop-blur-xl z-[95] lg:hidden flex flex-col justify-center px-8 sm:px-10"
          >
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#C9B38C]/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl sm:text-4xl font-serif italic text-white hover:text-[#C9B38C] transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

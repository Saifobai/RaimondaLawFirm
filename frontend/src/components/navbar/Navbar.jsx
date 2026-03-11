import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  // Prevent background scrolling when mobile menu is active
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
          {/* LOGO SECTION */}
          <div className="flex flex-col relative z-[110]">
            <span className="font-serif italic text-2xl tracking-tighter leading-none text-white">
              Kraemer
            </span>
            <span className="text-[#C9B38C] text-[8px] uppercase tracking-[0.4em] font-bold mt-1">
              Law Firm
            </span>
          </div>

          {/* DESKTOP NAVIGATION - Visible only on LG screens and up */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[#C9B38C] text-[14px] uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE UTILITIES */}
          <div className="flex items-center gap-8 relative z-[110]">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-4 text-[14px] font-bold tracking-widest text-white/40">
              <button
                onClick={() => changeLanguage("de")}
                className={
                  i18n.language === "de"
                    ? "text-[#C9B38C]"
                    : "hover:text-white transition-colors"
                }
              >
                DE
              </button>
              <span className="w-[1px] h-3 bg-white/10" />
              <button
                onClick={() => changeLanguage("en")}
                className={
                  i18n.language === "en"
                    ? "text-[#C9B38C]"
                    : "hover:text-white transition-colors"
                }
              >
                EN
              </button>
            </div>

            {/* MOBILE TOGGLE - FIXED: lg:hidden ensures it is removed on desktop */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-[#C9B38C] transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#262B3E]/95 backdrop-blur-xl z-[95] lg:hidden flex flex-col justify-center px-10"
          >
            {/* Decorative Gold Glow for a premium feel */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#C9B38C]/10 rounded-full blur-[100px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif italic text-white hover:text-[#C9B38C] transition-all"
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

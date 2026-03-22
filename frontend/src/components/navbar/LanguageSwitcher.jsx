import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher({ closeMenu }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const currentLang = i18n.language.toUpperCase();
  const langs = [
    { label: "DEUTSCH", code: "de" },
    { label: "ENGLISH", code: "en" },
  ];

  // Robust hover handling to prevent accidental closing
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay so user can move mouse to dropdown
  };

  const changeLanguage = (e, code) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling up to Navbar
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setIsOpen(false);
    if (closeMenu) closeMenu();
  };

  return (
    <div
      className="relative z-[500]" // Extremely high z-index
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRIGGER */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="relative w-12 h-12 flex items-center justify-center bg-white/[0.05] border border-white/10 rounded-full hover:border-[#BA8C61] transition-all duration-500 group"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentLang}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-black tracking-widest text-white pointer-events-none"
          >
            {currentLang}
          </motion.span>
        </AnimatePresence>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Invisible "Bridge" to keep the menu open while moving mouse down */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 top-[calc(100%+10px)] w-44 bg-[#1A1E2E] border border-white/10 shadow-2xl z-[501]"
            >
              {/* Top accent line */}
              <div className="h-[2px] w-full bg-[#BA8C61]" />

              <div className="flex flex-col p-1">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onMouseDown={(e) => changeLanguage(e, l.code)} // MouseDown triggers faster than Click
                    className="relative flex items-center justify-between px-4 py-4 group transition-colors hover:bg-white/[0.03]"
                  >
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${
                        i18n.language === l.code
                          ? "text-[#BA8C61]"
                          : "text-white/40 group-hover:text-white"
                      }`}
                    >
                      {l.label}
                    </span>

                    {i18n.language === l.code && (
                      <div className="w-1 h-1 bg-[#BA8C61] rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

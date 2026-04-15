import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../assets/NavLogo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop State
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile State
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation("navbar");

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Desktop Dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.body.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.body.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    if (targetId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  };

  const navLinks = [
    { name: t("home"), href: "#", type: "scroll" },
    {
      name: t("services"),
      type: "dropdown",
      subItems: [
        { name: t("services"), href: "#services", type: "scroll" },
        { name: t("offer"), href: "#debtway", type: "scroll" },
      ],
    },
    { name: t("team"), href: "#team", type: "scroll" },
    { name: t("contact"), href: "#contact", type: "scroll" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-[#262B3E]/95 backdrop-blur-md py-4 md:py-5 shadow-xl border-b border-white/5"
            : "bg-transparent py-6 md:py-10"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* LOGO SECTION */}
          <div
            className="relative z-[110] flex items-center cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            <img
              src={NavLogo}
              alt="Logo"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain mix-blend-lighten transition-all duration-300"
            />
          </div>

          {/* DESKTOP NAVIGATION (MacBook 16" Optimized) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-14">
            {navLinks.map((link) =>
              link.type === "dropdown" ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 text-white hover:text-[#C9B38C] text-[14px] xl:text-[17px] 2xl:text-[19px] uppercase tracking-[0.25em] font-medium transition-all"
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className="absolute top-full left-0 mt-6 bg-[#262B3D] border border-white/10 min-w-[240px] py-6 shadow-2xl backdrop-blur-xl"
                      >
                        {link.subItems.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={(e) => {
                              if (sub.type === "scroll")
                                handleSmoothScroll(e, sub.href);
                              else navigate(sub.href);
                              setIsDropdownOpen(false);
                            }}
                            className="block w-full text-left px-8 py-4 text-white hover:bg-[#BA8C61] hover:text-white transition-all text-xs lg:text-sm uppercase tracking-widest"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-white hover:text-[#C9B38C] text-[14px] xl:text-[17px] 2xl:text-[19px] uppercase tracking-[0.25em] font-medium transition-all"
                >
                  {link.name}
                </a>
              ),
            )}
          </nav>

          {/* ACTIONS (Language & Mobile Toggle) */}
          <div className="flex items-center gap-4 md:gap-8 relative z-[110]">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X key="x" size={30} /> : <Menu key="m" size={30} />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (iPhone 18 Pro Max Optimized) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0D0F16] z-[95] lg:hidden flex flex-col pt-36 pb-12 px-8 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-8 sm:space-y-10">
              {navLinks.map((link, i) => (
                <div key={link.name} className="flex flex-col">
                  {link.type === "dropdown" ? (
                    <div className="flex flex-col">
                      {/* Sub-menu Toggle */}
                      <button
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                        className="group flex items-center justify-between w-full py-2"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-[#C9B38C] font-serif italic text-sm mt-2 opacity-50">
                            0{i + 1}
                          </span>
                          <span className="text-4xl sm:text-5xl font-serif italic text-white group-hover:text-[#C9B38C] transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <ChevronDown
                          className={`text-[#C9B38C] transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                          size={28}
                        />
                      </button>

                      {/* Expandable Links */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col pl-10 space-y-6 mt-6 border-l border-[#C9B38C]/20"
                          >
                            {link.subItems.map((sub) => (
                              <button
                                key={sub.name}
                                onClick={(e) => {
                                  if (sub.type === "scroll")
                                    handleSmoothScroll(e, sub.href);
                                  else navigate(sub.href);
                                }}
                                className="text-2xl sm:text-3xl font-serif italic text-white/70 hover:text-[#C9B38C] text-left transition-colors"
                              >
                                {sub.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="group flex items-start gap-4 py-2"
                    >
                      <span className="text-[#C9B38C] font-serif italic text-sm mt-2 opacity-50">
                        0{i + 1}
                      </span>
                      <span className="text-4xl sm:text-5xl font-serif italic text-white group-hover:text-[#C9B38C] transition-colors">
                        {link.name}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom Accent Decoration */}
            <div className="mt-auto pt-10 opacity-20">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9B38C] to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import RequestButton from "../RequestQuestions/RequestButton";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const { t, i18n } = useTranslation("navbar");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang);
//   };

//   return (
//     <header
//       className={`fixed h-[90px] top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-[#262B3E] shadow-lg py-3" : "bg-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-white font-bold text-2xl tracking-wide">IMM</div>

//         {/* Navigation */}
//         <nav className="hidden md:flex items-center gap-8 text-white text-xl">
//           <a href="#" className="hover:opacity-70 transition">
//             {t("home")}
//           </a>

//           <a href="#services" className="hover:opacity-70 transition">
//             {t("services")}
//           </a>

//           <a href="#offers" className="hover:opacity-70 transition">
//             {t("offer")}
//           </a>

//           <a href="#team" className="hover:opacity-70 transition">
//             {t("team")}
//           </a>

//           <a href="#contact" className="hover:opacity-70 transition">
//             {t("contact")}
//           </a>
//         </nav>

//         {/* Right Side */}
//         <div className="flex items-center gap-6">
//           {/* Language Switch */}
//           <div className="hidden md:flex items-center gap-2 text-white text-sm">
//             <button
//               onClick={() => changeLanguage("de")}
//               className="hover:opacity-70 transition"
//             >
//               DE
//             </button>

//             <span>|</span>

//             <button
//               onClick={() => changeLanguage("en")}
//               className="hover:opacity-70 transition"
//             >
//               EN
//             </button>
//           </div>

//           {/* CTA Button */}
//           {/* <button className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition">
//             {t("cta")}
//           </button> */}
//           <RequestButton />
//         </div>
//       </div>
//     </header>
//   );
// }

//============================================================
//============================================================
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import RequestButton from "../RequestQuestions/RequestButton";

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

  // Prevent scrolling when mobile menu is open
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
            ? "bg-slate-950 py-4 shadow-2xl"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex flex-col relative z-[110]">
            <span className="text-white font-serif italic text-2xl tracking-tighter leading-none">
              Kraemer
            </span>
            <span className="text-[#FE9A00] text-[8px] uppercase tracking-[0.4em] font-bold mt-1">
              Law Firm
            </span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[#FE9A00] text-[13px] uppercase tracking-[0.2em] font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8 relative z-[110]">
            <div className="hidden md:flex items-center gap-4 text-[11px] font-bold tracking-widest text-white/50">
              <button
                onClick={() => changeLanguage("de")}
                className={
                  i18n.language === "de" ? "text-[#FE9A00]" : "hover:text-white"
                }
              >
                DE
              </button>
              <span className="w-[1px] h-3 bg-white/20" />
              <button
                onClick={() => changeLanguage("en")}
                className={
                  i18n.language === "en" ? "text-[#FE9A00]" : "hover:text-white"
                }
              >
                EN
              </button>
            </div>

            <div className="hidden sm:block">
              <RequestButton />
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-[#FE9A00] transition-colors"
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
            className="fixed inset-0 bg-slate-950 z-[95] lg:hidden flex flex-col justify-center px-10"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FE9A00] rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif italic text-white hover:text-[#FE9A00] transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="relative z-10 mt-16 pt-10 border-t border-white/10">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[#FE9A00] uppercase tracking-widest text-[10px] mb-4 font-bold">
                    Language
                  </p>
                  <div className="flex gap-6 text-xl text-white">
                    <button
                      onClick={() => changeLanguage("de")}
                      className={i18n.language === "de" ? "text-[#FE9A00]" : ""}
                    >
                      Deutsch
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={i18n.language === "en" ? "text-[#FE9A00]" : ""}
                    >
                      English
                    </button>
                  </div>
                </div>
                <RequestButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

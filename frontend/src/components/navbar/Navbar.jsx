// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import NavLogo from "../../assets/NavLogo.jpeg";
// import LanguageSwitcher from "./LanguageSwitcher";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation("navbar");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20); // More sensitive for mobile feel
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isOpen]);

//   const navLinks = [
//     { name: t("home"), href: "#" },
//     { name: t("services"), href: "#services" },

//     { name: t("team"), href: "#team" },
//     { name: t("contact"), href: "#contact" },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
//           scrolled || isOpen
//             ? "bg-[#262B3E]/90 backdrop-blur-md py-3 md:py-4 shadow-xl border-b border-white/5"
//             : "bg-transparent py-6 md:py-8"
//         }`}
//       >
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
//           {/* LOGO - Scaled for mobile */}
//           <div className="relative z-[110] flex items-center">
//             <img
//               src={NavLogo}
//               alt="Logo"
//               className="h-8 md:h-10 w-auto object-contain mix-blend-lighten transition-all"
//             />
//           </div>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-white/80 hover:text-[#C9B38C] text-[13px] xl:text-[14px] uppercase tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* RIGHT SIDE (LANG + MOBILE TOGGLE) */}
//           <div className="flex items-center gap-2 md:gap-6 relative z-[110]">
//             {/* LANGUAGE SWITCHER - Improved hit area for mobile */}
//             <div className="flex items-center text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-white/60">
//               <span className="w-[1px] h-3 bg-white/10 mx-1" />
//               <LanguageSwitcher />
//             </div>

//             {/* MOBILE TOGGLE BUTTON */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden text-white hover:text-[#C9B38C] transition-colors p-2 -mr-2"
//               aria-label="Toggle Menu"
//             >
//               <div className="relative w-6 h-6 flex items-center justify-center">
//                 <AnimatePresence mode="wait">
//                   {isOpen ? (
//                     <motion.div
//                       key="close"
//                       initial={{ rotate: -90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: 90, opacity: 0 }}
//                     >
//                       <X size={26} />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="menu"
//                       initial={{ rotate: 90, opacity: 0 }}
//                       animate={{ rotate: 0, opacity: 1 }}
//                       exit={{ rotate: -90, opacity: 0 }}
//                     >
//                       <Menu size={26} />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* MOBILE MENU OVERLAY */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 25, stiffness: 200 }}
//             className="fixed inset-0 bg-[#0D0F16] z-[95] lg:hidden flex flex-col justify-center px-10"
//           >
//             {/* Background Aesthetic Blur */}
//             <div className="absolute top-[20%] right-[-20%] w-[300px] h-[300px] bg-[#C9B38C]/10 rounded-full blur-[120px] pointer-events-none" />
//             <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-[#262B3E]/40 rounded-full blur-[100px] pointer-events-none" />

//             <nav className="relative z-10 flex flex-col space-y-8">
//               {navLinks.map((link, i) => (
//                 <motion.div
//                   key={link.name}
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 + i * 0.1 }}
//                 >
//                   <a
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="group flex items-end gap-4"
//                   >
//                     <span className="text-[#C9B38C] font-serif italic text-lg mb-2 opacity-50">
//                       0{i + 1}
//                     </span>
//                     <span className="text-4xl xs:text-5xl font-serif italic text-white group-hover:text-[#C9B38C] transition-all">
//                       {link.name}
//                     </span>
//                   </a>
//                 </motion.div>
//               ))}
//             </nav>

//             {/* Footer info for mobile menu */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="absolute bottom-12 left-10 right-10 flex justify-between items-center border-t border-white/5 pt-8"
//             >
//               <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
//                 {t("footer_tagline") || "Legal Excellence"}
//               </p>
//               <div className="flex gap-4">
//                 {/* Social links icons can go here */}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

//=================================
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLogo from "../../assets/NavLogo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  // SMOOTH SCROLL LOGIC
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    if (targetId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80; // Adjusted for your Navbar height
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navLinks = [
    { name: t("home"), href: "#" },
    { name: t("services"), href: "#services" },
    { name: t("team"), href: "#team" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-[#262B3E]/90 backdrop-blur-md py-3 md:py-4 shadow-xl border-b border-white/5"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <div
            className="relative z-[110] flex items-center cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            <img
              src={NavLogo}
              alt="Logo"
              className="h-8 md:h-10 w-auto object-contain mix-blend-lighten transition-all"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white hover:text-[#C9B38C] text-[13px] xl:text-[26px] uppercase tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-6 relative z-[110]">
            <div className="flex items-center text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-white/60">
              <span className="w-[1px] h-3 bg-white/10 mx-1" />
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-[#C9B38C] transition-colors p-2 -mr-2"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={26} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu size={26} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0D0F16] z-[95] lg:hidden flex flex-col justify-center px-10"
          >
            <div className="absolute top-[20%] right-[-20%] w-[300px] h-[300px] bg-[#C9B38C]/10 rounded-full blur-[120px] pointer-events-none" />

            <nav className="relative z-10 flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group flex items-end gap-4"
                  >
                    <span className="text-[#C9B38C] font-serif italic text-lg mb-2 opacity-50">
                      0{i + 1}
                    </span>
                    <span className="text-4xl xs:text-5xl font-serif italic text-white group-hover:text-[#C9B38C] transition-all">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

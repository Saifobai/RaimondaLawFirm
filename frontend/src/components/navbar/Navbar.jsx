// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import NavLogo from "../../assets/NavLogo.jpeg";
// import LanguageSwitcher from "./LanguageSwitcher";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const { t } = useTranslation("navbar");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
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

//   // SMOOTH SCROLL LOGIC
//   const handleSmoothScroll = (e, href) => {
//     e.preventDefault();
//     const targetId = href.replace("#", "");

//     if (targetId === "") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const elem = document.getElementById(targetId);
//       if (elem) {
//         const offset = 80; // Adjusted for your Navbar height
//         const elementPosition = elem.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - offset;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: "smooth",
//         });
//       }
//     }
//     setIsOpen(false); // Close mobile menu after clicking
//   };

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
//           <div
//             className="relative z-[110] flex items-center cursor-pointer"
//             onClick={(e) => handleSmoothScroll(e, "#")}
//           >
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
//                 onClick={(e) => handleSmoothScroll(e, link.href)}
//                 className="text-white hover:text-[#C9B38C] text-[13px] xl:text-[26px] uppercase tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           <div className="flex items-center gap-2 md:gap-6 relative z-[110]">
//             <div className="flex items-center text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-white/60">
//               <span className="w-[1px] h-3 bg-white/10 mx-1" />
//               <LanguageSwitcher />
//             </div>

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
//             <div className="absolute top-[20%] right-[-20%] w-[300px] h-[300px] bg-[#C9B38C]/10 rounded-full blur-[120px] pointer-events-none" />

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
//                     onClick={(e) => handleSmoothScroll(e, link.href)}
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
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// ===============================================================
// ===============================================================
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react"; // Added Chevron
import { useNavigate } from "react-router-dom"; // For routing
import NavLogo from "../../assets/NavLogo.jpeg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation("navbar");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
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
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: t("home"), href: "#", type: "scroll" },
    {
      name: t("services"),
      type: "dropdown",
      subItems: [
        { name: t("services"), href: "#services", type: "scroll" },
        { name: t("offer"), href: "#debtway", type: "scroll" }, // External or internal route
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
            {navLinks.map((link) =>
              link.type === "dropdown" ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 text-white hover:text-[#C9B38C] text-[13px] xl:text-[22px] uppercase tracking-[0.2em] font-medium transition-all"
                  >
                    {link.name}{" "}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-4 bg-[#262B3D] border border-white/10 min-w-[200px] py-4 shadow-2xl backdrop-blur-xl"
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
                            className="block w-full text-left px-6 py-3 text-white hover:bg-[#BA8C61] hover:text-white transition-all text-sm uppercase tracking-widest"
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
                  className="text-white hover:text-[#C9B38C] text-[13px] xl:text-[22px] uppercase tracking-[0.2em] font-medium transition-all"
                >
                  {link.name}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 md:gap-6 relative z-[110]">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X key="x" size={26} /> : <Menu key="m" size={26} />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 bg-[#0D0F16] z-[95] lg:hidden flex flex-col justify-center px-10 overflow-y-auto"
          >
            <nav className="relative z-10 flex flex-col space-y-6 pt-20">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  {link.type === "dropdown" ? (
                    <div className="flex flex-col space-y-4">
                      <span className="text-4xl font-serif italic text-[#C9B38C] opacity-50 uppercase tracking-widest text-xs">
                        0{i + 1} — {link.name}
                      </span>
                      {link.subItems.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={(e) => {
                            if (sub.type === "scroll")
                              handleSmoothScroll(e, sub.href);
                            else navigate(sub.href);
                          }}
                          className="text-3xl font-serif italic text-white text-left pl-6 border-l border-[#C9B38C]/30"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="group flex items-end gap-4"
                    >
                      <span className="text-[#C9B38C] font-serif italic text-lg mb-2 opacity-50">
                        0{i + 1}
                      </span>
                      <span className="text-4xl xs:text-5xl font-serif italic text-white group-hover:text-[#C9B38C]">
                        {link.name}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

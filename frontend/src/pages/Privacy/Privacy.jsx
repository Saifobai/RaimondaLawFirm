// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// export default function Privacy() {
//   const { t } = useTranslation("privacy");
//   const sections = t("sections", { returnObjects: true }) || [];

//   return (
//     <section className="bg-[#050c18] text-slate-300 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         {/* Header Section */}
//         <motion.header
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 md:mb-20 border-l-4 border-amber-600 pl-5 md:pl-8"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight">
//             {t("hero.title")}
//           </h1>
//           <p className="text-amber-500 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">
//             {t("hero.dateLabel") || "Stand: März 2026"}
//           </p>
//         </motion.header>

//         {/* Content Sections */}
//         <div className="space-y-12 md:space-y-16">
//           {sections.map((section, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="group"
//             >
//               <h2 className="text-lg md:text-xl font-serif font-bold text-white mb-4 md:mb-6 flex items-start">
//                 {/* Responsive Marker: Smaller on mobile, animated on desktop */}
//                 <span className="w-1 md:w-1.5 h-6 md:h-8 bg-amber-600 mr-3 md:mr-4 mt-1 shrink-0 transition-all duration-300 group-hover:bg-white group-hover:h-10 hidden sm:block" />
//                 <span className="leading-tight">{section.title}</span>
//               </h2>

//               <div className="space-y-3 md:space-y-4 leading-relaxed text-slate-400 pl-0 sm:pl-5 md:pl-6">
//                 {section.content.map((line, index) => (
//                   <p
//                     key={index}
//                     className="text-base md:text-lg font-light break-words"
//                   >
//                     {line}
//                   </p>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//=======================================================================
import { useLayoutEffect } from "react"; // Added
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap"; // Added
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Added
import ScrollToTop from "../../components/ScrollToTop"; // Added

export default function Privacy() {
  const { t } = useTranslation("privacy");
  const sections = t("sections", { returnObjects: true }) || [];

  // --- FORCE SCROLL TO TOP & RESET GSAP ---
  useLayoutEffect(() => {
    // Reset window to absolute top immediately before paint
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Kill any active ScrollTriggers from the previous page to prevent "ghost" height
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-[#050c18] text-slate-300 py-16 md:py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 border-l-4 border-amber-600 pl-5 md:pl-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-amber-500 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">
            {t("hero.dateLabel") || "Stand: März 2026"}
          </p>
        </motion.header>

        {/* Content Sections */}
        <div className="space-y-12 md:space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <h2 className="text-lg md:text-xl font-serif font-bold text-white mb-4 md:mb-6 flex items-start">
                <span className="w-1 md:w-1.5 h-6 md:h-8 bg-amber-600 mr-3 md:mr-4 mt-1 shrink-0 transition-all duration-300 group-hover:bg-white group-hover:h-10 hidden sm:block" />
                <span className="leading-tight">{section.title}</span>
              </h2>

              <div className="space-y-3 md:space-y-4 leading-relaxed text-slate-400 pl-0 sm:pl-5 md:pl-6">
                {section.content.map((line, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light break-words"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollToTop /> {/* Added ScrollToTop button */}
    </section>
  );
}

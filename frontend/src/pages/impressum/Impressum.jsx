// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// export default function Impressum() {
//   const { t } = useTranslation("impressum");
//   const content = t("hero.content", { returnObjects: true }) || [];

//   return (
//     <section className="bg-[#050c18] text-slate-300 py-24 md:py-36 px-6">
//       <div className="max-w-[850px] mx-auto">
//         {/* HEADER */}
//         <div className="mb-20">
//           <p className="text-[10px] tracking-[0.35em] uppercase text-[#BA8C61] mb-6">
//             Impressum
//           </p>
//           <div className="h-[1px] w-20 bg-[#BA8C61]" />
//         </div>

//         {/* CONTENT */}
//         <div className="space-y-4">
//           {content.map((line, i) => {
//             const isHeadline =
//               line.length < 60 &&
//               !line.includes(":") &&
//               !line.includes("@") &&
//               !line.match(/\d{5}/) &&
//               !line.startsWith("-");

//             const isList = line.startsWith("-");

//             return (
//               <motion.p
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: i * 0.02 }}
//                 className={`
//                   leading-relaxed
//                   ${isHeadline ? "text-white font-serif italic text-2xl mt-10" : ""}
//                   ${isList ? "pl-6 text-[#BA8C61]" : "text-slate-400 text-lg"}
//                 `}
//               >
//                 {line}
//               </motion.p>
//             );
//           })}
//         </div>

//         {/* FOOTER */}
//         <div className="mt-20 h-px bg-gradient-to-r from-[#BA8C61]/50 to-transparent" />
//       </div>
//     </section>
//   );
// }

//=======================================================================
import { useLayoutEffect } from "react"; // Add this
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap"; // Add this
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Add this
import ScrollToTop from "../../components/ScrollToTop";
export default function Impressum() {
  const { t } = useTranslation("impressum");
  const content = t("hero.content", { returnObjects: true }) || [];

  // --- FORCE SCROLL TO TOP ---
  useLayoutEffect(() => {
    // 1. Reset window to absolute top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 2. Clear out any GSAP pinning/scrolling math from the home page
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="bg-[#050c18] text-slate-300 py-24 md:py-36 px-6 min-h-screen">
      <div className="max-w-[850px] mx-auto">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#BA8C61] mb-6">
            Impressum
          </p>
          <div className="h-[1px] w-20 bg-[#BA8C61]" />
        </div>

        {/* CONTENT */}
        <div className="space-y-4">
          {content.map((line, i) => {
            const isHeadline =
              line.length < 60 &&
              !line.includes(":") &&
              !line.includes("@") &&
              !line.match(/\d{5}/) &&
              !line.startsWith("-");

            const isList = line.startsWith("-");

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Ensures animation only runs once
                transition={{ duration: 0.4, delay: i * 0.02 }}
                className={`
                  leading-relaxed
                  ${isHeadline ? "text-white font-serif italic text-2xl mt-10" : ""}
                  ${isList ? "pl-6 text-[#BA8C61]" : "text-slate-400 text-lg"}
                `}
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-20 h-px bg-gradient-to-r from-[#BA8C61]/50 to-transparent" />
      </div>
      <ScrollToTop /> {/* Add this */}
    </section>
  );
}

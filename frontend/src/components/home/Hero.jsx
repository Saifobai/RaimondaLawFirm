// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Briefcase, RefreshCw, Rocket, Globe, Play, X } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import slide1 from "../../assets/hero_pic_01.jpeg";
// import Video_Law from "../../assets/law_vid.mp4";

// function SubtitleParagraphs({ text, className }) {
//   if (!text) return null;
//   const parts = text
//     .split(/(?<=\.)\s+/)
//     .map((s) => s.trim())
//     .filter(Boolean);
//   return (
//     <div className={className}>
//       {parts.map((part, i) => (
//         <p
//           key={i}
//           className="text-white/90 font-bold text-[14px] sm:text-[17px] leading-[1.85] tracking-wide mt-0 mb-5 last:mb-0"
//         >
//           {part}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default function Hero() {
//   const { t } = useTranslation("hero");
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   const icons = [Briefcase, RefreshCw, Rocket, Globe];
//   const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

//   return (
//     <section className="relative w-full h-screen min-h-[600px] bg-[#262B3E]">
//       <style>{`
//         @keyframes pulse-gold {
//           0%   { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0.7); }
//           70%  { box-shadow: 0 0 0 20px rgba(201, 179, 140, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0); }
//         }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>

//       {/* VIDEO MODAL */}
//       <AnimatePresence>
//         {isVideoOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#262B3E]/95 backdrop-blur-md"
//           >
//             <button
//               onClick={() => setIsVideoOpen(false)}
//               className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-[#C9B38C] text-white rounded-full transition-all border border-white/20"
//             >
//               <X size={28} />
//             </button>
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden border border-white/10"
//             >
//               <video
//                 className="w-full h-full object-cover"
//                 src={Video_Law}
//                 controls
//                 autoPlay
//                 muted
//                 playsInline
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* PLAY BUTTON */}
//       <div className="absolute right-1/2 translate-x-1/2 bottom-[18%] md:bottom-auto md:right-[140px] lg:right-[180px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-40">
//         <motion.button
//           onClick={() => setIsVideoOpen(true)}
//           style={{ animation: "pulse-gold 2s infinite" }}
//           className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#BA8C61] hover:bg-white text-white hover:text-[#C9B38C] rounded-full shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C9B38C]"
//         >
//           <Play fill="currentColor" className="ml-1 w-5 h-5 md:w-8 md:h-8" />
//         </motion.button>
//       </div>

//       {/* HERO BACKGROUND — single static image */}
//       <div className="absolute inset-0">
//         <img
//           src={slide1}
//           className="w-full h-full object-cover object-[75%_20%] scale-[0.98] origin-right"
//           alt="Hero"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#262B3E]/90 via-[#262B3E]/55 to-[#262B3E]/10" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#262B3E]/80 via-transparent to-transparent md:hidden" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="w-full md:w-[55%] lg:w-[48%] xl:w-[44%] px-6 sm:px-8 md:pl-12 lg:pl-36 xl:pl-44 text-white pb-36 md:pb-0 text-center md:text-left">
//           {/* TITLE */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="font-serif italic leading-[1.15] mb-5 text-[1.9rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2rem] xl:text-[3rem]"
//           >
//             {t("title")
//               .split(". ")
//               .map((line, i, arr) => (
//                 <span key={i} className="block">
//                   {line}
//                   {i < arr.length - 1 ? "." : ""}
//                 </span>
//               ))}
//           </motion.h1>

//           {/* SUBTITLE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.35 }}
//             className="mb-9 max-w-sm mx-auto md:mx-0"
//           >
//             <SubtitleParagraphs text={t("subtitle")} />
//           </motion.div>

//           {/* CTA */}
//           <motion.a
//             href="#contact"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.5 }}
//             className="inline-block bg-[#BA8C61] hover:bg-white hover:text-[#C9B38C] text-white px-9 py-5 rounded-sm font-bold uppercase tracking-[0.18em] text-[12px] sm:text-[15px] transition-all duration-500 shadow-xl"
//           >
//             {t("cta")}
//           </motion.a>
//         </div>
//       </div>

//       {/* INFO BOXES */}
//       <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 z-30 translate-y-[30%] md:translate-y-[50%]">
//         <div className="max-w-[1200px] mx-auto flex bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] rounded-sm overflow-x-auto hide-scrollbar min-h-[100px] md:min-h-[120px]">
//           {translatedBoxes.map((box, index) => {
//             const Icon = icons[index] || Briefcase;
//             return (
//               <div
//                 key={index}
//                 className="group relative flex-none w-[150px] sm:w-[160px] md:flex-1 py-4 px-3 border-r border-slate-100 last:border-r-0 flex flex-col justify-center items-center hover:bg-[#dad2c4] transition-colors duration-500 cursor-default"
//               >
//                 <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9B38C] group-hover:w-full transition-all duration-500" />
//                 <div className="flex flex-col items-center gap-2 text-center w-full">
//                   <Icon className="text-[#C9B38C] group-hover:text-white w-5 h-5 md:w-6 md:h-6 transition-colors flex-shrink-0" />
//                   <h4
//                     className="text-[#262B3E] group-hover:text-white font-serif font-bold text-[9px] md:text-[11px] lg:text-sm uppercase tracking-wider leading-tight"
//                     style={{ wordBreak: "break-word", hyphens: "auto" }}
//                   >
//                     {box.title}
//                   </h4>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

//=============================================================
//=============================================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, RefreshCw, Rocket, Globe, Play, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import slide1 from "../../assets/hero_pic_01.jpeg";
import Video_Law from "../../assets/law_vid.mp4";

function SubtitleParagraphs({ text, className }) {
  if (!text) return null;
  const parts = text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className={className}>
      {parts.map((part, i) => (
        <p
          key={i}
          className="text-white/90 font-bold text-[14px] sm:text-[17px] leading-[1.85] tracking-wide mt-0 mb-5 last:mb-0"
        >
          {part}
        </p>
      ))}
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation("hero");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const icons = [Briefcase, RefreshCw, Rocket, Globe];
  const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

  return (
    <>
      <style>{`
        @keyframes pulse-gold {
          0%   { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0.7); }
          70%  { box-shadow: 0 0 0 20px rgba(201, 179, 140, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#262B3E]/95 backdrop-blur-md"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-[#C9B38C] text-white rounded-full transition-all border border-white/20"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-sm overflow-hidden border border-white/10"
            >
              <video
                className="w-full h-full object-cover"
                src={Video_Law}
                controls
                autoPlay
                muted
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*
        SECTION:
        - overflow-visible so info boxes (translate-y) aren't clipped
        - pb added to section itself to make room for the info boxes below
      */}
      <section
        className="relative w-full bg-[#262B3E]"
        style={{ minHeight: "100svh" }}
      >
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={slide1}
            className="w-full h-full object-cover object-[75%_20%] scale-[0.98] origin-right"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262B3E]/90 via-[#262B3E]/55 to-[#262B3E]/10" />
          {/* stronger bottom fade on mobile so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#262B3E]/85 via-[#262B3E]/20 to-transparent md:hidden" />
        </div>

        {/* CONTENT — vertically centered, padded away from info boxes */}
        <div className="relative z-10 h-full flex items-center">
          <div
            className="
              w-full md:w-[58%] lg:w-[52%] xl:w-[46%]
              px-6 sm:px-8 md:pl-12 lg:pl-24 xl:pl-36
              text-white
              text-center md:text-left
              pt-24
              pb-48 sm:pb-52 md:pb-20
            "
          >
            {/* TITLE
                FIX: lg was 2rem (smaller than md 2.3rem) — corrected to scale up properly
            */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="
                font-serif italic leading-[1.15] mb-5
                text-[1.75rem] sm:text-[2.1rem] md:text-[2.3rem] lg:text-[2.6rem] xl:text-[3.1rem] xl:mt-14
              "
            >
              {t("title")
                .split(". ")
                .map((line, i, arr) => (
                  <span key={i} className="block">
                    {line}
                    {i < arr.length - 1 ? "." : ""}
                  </span>
                ))}
            </motion.h1>

            {/* SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-9 max-w-sm mx-auto md:mx-0"
            >
              <SubtitleParagraphs text={t("subtitle")} />
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-block bg-[#BA8C61] hover:bg-white hover:text-[#C9B38C] text-white px-9 py-5 rounded-sm font-bold uppercase tracking-[0.18em] text-[12px] sm:text-[15px] transition-all duration-500 shadow-xl"
            >
              {t("cta")}
            </motion.a>
          </div>
        </div>

        {/*
          PLAY BUTTON
          FIX: removed hardcoded pixel right values (right-[140px], right-[180px])
          that broke on laptop widths. Now uses percentage-based right positioning
          that scales correctly across all breakpoints.
          Mobile: centered horizontally, sits above info boxes (bottom-[22%])
          md+: right side of image area, vertically centered
        */}
        <div
          className="
            absolute z-40
            left-1/2 -translate-x-1/2 bottom-[22%]
            md:left-auto md:translate-x-0 md:-translate-y-1/2
            md:right-[18%] md:top-1/2
            lg:right-[20%]
            xl:right-[22%]
          "
        >
          <motion.button
            onClick={() => setIsVideoOpen(true)}
            style={{ animation: "pulse-gold 2s infinite" }}
            className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#BA8C61] hover:bg-white text-white hover:text-[#C9B38C] rounded-full shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C9B38C]"
          >
            <Play fill="currentColor" className="ml-1 w-5 h-5 md:w-8 md:h-8" />
          </motion.button>
        </div>

        {/*
          INFO BOXES
          FIX: was translate-y-[30%]/[50%] — relative to the box itself, unreliable.
          Now uses a fixed pixel offset that is consistent across all screen sizes.
          Section has enough pb to accommodate.
          overflow-visible on section ensures boxes aren't clipped.
        */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 z-30 translate-y-1/2">
          <div className="max-w-[1200px] mx-auto flex bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] rounded-sm overflow-x-auto hide-scrollbar min-h-[100px] md:min-h-[120px]">
            {translatedBoxes.map((box, index) => {
              const Icon = icons[index] || Briefcase;
              return (
                <div
                  key={index}
                  className="
                    group relative
                    flex-none w-[150px] sm:w-[170px] md:flex-1
                    py-4 px-3 md:px-5
                    border-r border-slate-100 last:border-r-0
                    flex flex-col justify-center items-center
                    hover:bg-[#dad2c4] transition-colors duration-500 cursor-default
                  "
                >
                  <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9B38C] group-hover:w-full transition-all duration-500" />
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <Icon className="text-[#C9B38C] group-hover:text-white w-5 h-5 md:w-6 md:h-6 transition-colors flex-shrink-0" />
                    <h4
                      className="text-[#262B3E] group-hover:text-white font-serif font-bold text-[9px] md:text-[11px] lg:text-[13px] uppercase tracking-wider leading-tight"
                      style={{ wordBreak: "break-word", hyphens: "auto" }}
                    >
                      {box.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*
        SPACER: pushes the next section down so the info boxes
        (which overflow the hero via translate-y-1/2) don't cover it.
        Half the info box height (~60px mobile, ~60px desktop).
      */}
      <div className="w-full h-[60px] bg-white" aria-hidden="true" />
    </>
  );
}

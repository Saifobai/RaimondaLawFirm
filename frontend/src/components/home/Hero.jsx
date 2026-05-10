// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { motion, AnimatePresence } from "framer-motion";
// import { Briefcase, RefreshCw, Rocket, Globe, Play, X } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import "swiper/css";
// import "swiper/css/navigation";

// import slide1 from "../../assets/hero_pic_01.jpeg";

// import Video_Law from "../../assets/law_vid.mp4";

// export default function Hero() {
//   const { t } = useTranslation("hero");
//   const [isVideoOpen, setIsVideoOpen] = useState(false);

//   const slides = [{ image: slide1 }];
//   const icons = [Briefcase, RefreshCw, Rocket, Globe];
//   const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

//   return (
//     <section className="relative w-full h-screen bg-[#262B3E]">
//       <style>{`
//         .swiper-button-next, .swiper-button-prev {
//           top: 50% !important; color: white !important; transition: all 0.3s ease;
//           width: 44px !important; height: 44px !important;
//           background: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border-radius: 50%;
//         }
//         .swiper-button-next:after, .swiper-button-prev:after { font-size: 16px !important; font-weight: bold; }
//         .swiper-button-next { right: 20px !important; }
//         .swiper-button-prev { left: 20px !important; }
//         .swiper-button-next:hover, .swiper-button-prev:hover { background: #C9B38C !important; }

//         @media (min-width: 1280px) { .swiper-button-next { right: 60px !important; } .swiper-button-prev { left: 60px !important; } }
//         @media (max-width: 1024px) { .swiper-button-next, .swiper-button-prev { display: none !important; } }

//         @keyframes pulse-gold {
//           0% { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0.7); }
//           70% { box-shadow: 0 0 0 20px rgba(201, 179, 140, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0); }
//         }
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>

//       {/* --- VIDEO MODAL --- */}
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

//       {/* --- PLAY BUTTON --- */}
//       <div className="absolute right-1/2 translate-x-1/2 bottom-[15%] md:bottom-auto md:right-[140px] lg:right-[180px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-40">
//         <motion.button
//           onClick={() => setIsVideoOpen(true)}
//           style={{ animation: "pulse-gold 2s infinite" }}
//           className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#BA8C61] hover:bg-white text-white hover:text-[#C9B38C] rounded-full shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C9B38C] group"
//         >
//           <Play fill="currentColor" className="ml-1 w-5 h-5 md:w-8 md:h-8" />
//         </motion.button>
//       </div>

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={true}
//         autoplay={{ delay: 6000 }}
//         loop={true}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="relative">
//             <img
//               src={slide.image}
//               className="absolute inset-0 w-full h-full object-cover"
//               alt="Slide"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#262B3E] via-[#262B3E]/40 to-transparent"></div>
//             <div className="relative z-10 h-full flex items-center">
//               {/* Responsive width and alignment */}
//               <div className="w-full md:w-1/2 px-6 lg:ml-36 lg:px-4 text-white pb-32 md:pb-0 text-center md:text-left">
//                 <h2 className="text-4xl lg:text-4xl font-serif italic leading-[1.1] mb-6 max-w-2xl text-balance">
//                   {t("title")}
//                 </h2>
//                 <p className="text-white mb-10 max-w-xl mx-auto md:mx-0 font-light text-xl">
//                   {t("subtitle")}
//                 </p>
//                 <a
//                   href="#contact"
//                   className="inline-block bg-[#BA8C61] hover:bg-white hover:text-[#C9B38C] text-white
//   px-5 sm:px-6 md:px-8 lg:px-4
//   py-3 sm:py-4 md:py-5 lg:py-6
//   rounded-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]
//   text-sm sm:text-base md:text-[16px] lg:text-[15px]
//   transition-all duration-500 shadow-xl"
//                 >
//                   {t("cta")}
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* --- UPDATED INFO BOXES WITH WRAP-FRIENDLY LOGIC --- */}
//       <div className="absolute bottom-0 left-0 w-full px-4 z-30 translate-y-[30%] md:translate-y-[50%] md:px-6">
//         <div className="max-w-[1200px] mx-auto flex bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm overflow-x-auto hide-scrollbar min-h-[120px]">
//           {translatedBoxes.map((box, index) => {
//             const Icon = icons[index] || Briefcase;
//             return (
//               <div
//                 key={index}
//                 className="group relative flex-none w-[160px] md:flex-1 py-4 px-3 border-r border-slate-100 last:border-r-0 flex flex-col justify-center items-center hover:bg-[#dad2c4] transition-colors duration-500"
//               >
//                 <div className="flex flex-col items-center gap-2 text-center w-full">
//                   <Icon className="text-[#C9B38C] group-hover:text-white w-6 h-6 transition-colors flex-shrink-0" />
//                   {/* Removed whitespace-nowrap and added text-balance for better word wrapping */}
//                   <h4
//                     className="text-[#262B3E] group-hover:text-white font-serif font-bold text-[10px] md:text-sm uppercase tracking-wider leading-tight break-words hyphens-auto"
//                     style={{ wordBreak: "break-word" }}
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

//=================================================================
//=================================================================
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, RefreshCw, Rocket, Globe, Play, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../assets/hero_pic_01.jpeg";
import Video_Law from "../../assets/law_vid.mp4";

// Splits subtitle into paragraphs at sentence boundaries (after ". ")
// Each sentence ending with a full stop becomes its own paragraph with vertical spacing
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

  const slides = [{ image: slide1 }];
  const icons = [Briefcase, RefreshCw, Rocket, Globe];
  const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#262B3E]">
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          top: 50% !important;
          color: white !important;
          transition: all 0.3s ease;
          width: 44px !important;
          height: 44px !important;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border-radius: 50%;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
        }
        .swiper-button-next { right: 20px !important; }
        .swiper-button-prev { left: 20px !important; }
        .swiper-button-next:hover,
        .swiper-button-prev:hover { background: #C9B38C !important; }

        @media (min-width: 1280px) {
          .swiper-button-next { right: 60px !important; }
          .swiper-button-prev { left: 60px !important; }
        }
        @media (max-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev { display: none !important; }
        }

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

      {/* PLAY BUTTON */}
      <div className="absolute right-1/2 translate-x-1/2 bottom-[18%] md:bottom-auto md:right-[140px] lg:right-[180px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-40">
        <motion.button
          onClick={() => setIsVideoOpen(true)}
          style={{ animation: "pulse-gold 2s infinite" }}
          className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#BA8C61] hover:bg-white text-white hover:text-[#C9B38C] rounded-full shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C9B38C]"
        >
          <Play fill="currentColor" className="ml-1 w-5 h-5 md:w-8 md:h-8" />
        </motion.button>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* IMAGE — smaller, pushed to the right */}
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover object-[75%_20%] scale-[0.98] origin-right"
              alt="Hero"
            />

            {/* GRADIENT OVERLAY — stronger on left for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#262B3E]/90 via-[#262B3E]/55 to-[#262B3E]/10" />
            {/* Extra bottom gradient for mobile info boxes area */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#262B3E]/80 via-transparent to-transparent md:hidden" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full md:w-[55%] lg:w-[48%] xl:w-[44%] px-6 sm:px-8 md:pl-12 lg:pl-36 xl:pl-44 text-white pb-36 md:pb-0 text-center md:text-left">
                {/* TITLE */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-serif italic leading-[1.15] mb-5 text-[1.9rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2rem] xl:text-[3rem]"
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

                {/* SUBTITLE — each sentence as its own paragraph with spacing */}
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* INFO BOXES */}
      <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 z-30 translate-y-[30%] md:translate-y-[50%]">
        <div className="max-w-[1200px] mx-auto flex bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] rounded-sm overflow-x-auto hide-scrollbar min-h-[100px] md:min-h-[120px]">
          {translatedBoxes.map((box, index) => {
            const Icon = icons[index] || Briefcase;
            return (
              <div
                key={index}
                className="group relative flex-none w-[150px] sm:w-[160px] md:flex-1 py-4 px-3 border-r border-slate-100 last:border-r-0 flex flex-col justify-center items-center hover:bg-[#dad2c4] transition-colors duration-500 cursor-default"
              >
                {/* Gold top accent on hover */}
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-[#C9B38C] group-hover:w-full transition-all duration-500" />
                <div className="flex flex-col items-center gap-2 text-center w-full">
                  <Icon className="text-[#C9B38C] group-hover:text-white w-5 h-5 md:w-6 md:h-6 transition-colors flex-shrink-0" />
                  <h4
                    className="text-[#262B3E] group-hover:text-white font-serif font-bold text-[9px] md:text-[11px] lg:text-sm uppercase tracking-wider leading-tight"
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
  );
}

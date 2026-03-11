import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, RefreshCw, Rocket, Globe, Play, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../assets/slide_01.jpeg";
import slide2 from "../../assets/slide_02.jpeg";
import slide3 from "../../assets/slide_03.jpeg";
import slide4 from "../../assets/slide_04.jpeg";
import slide5 from "../../assets/slide_05.jpeg";
import slide6 from "../../assets/slide_06.jpeg";
import slide7 from "../../assets/slide_07.jpeg";

import Video_Law from "../../assets/law_vid.mp4";
export default function Hero() {
  const { t } = useTranslation("hero");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const slides = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
    { image: slide5 },
    { image: slide6 },
    { image: slide7 },
  ];
  const icons = [Briefcase, RefreshCw, Rocket, Globe];
  const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

  return (
    <section className="relative w-full h-screen  bg-slate-900">
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          top: 50% !important;
          color: white !important;
          transition: all 0.3s ease;
          width: 44px !important;
          height: 44px !important;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          border-radius: 50%;
        }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 16px !important; font-weight: bold; }
        .swiper-button-next { right: 20px !important; }
        .swiper-button-prev { left: 20px !important; }
        
        @media (min-width: 1280px) {
           .swiper-button-next { right: 60px !important; }
           .swiper-button-prev { left: 60px !important; }
        }

        // .swiper-button-next:hover, .swiper-button-prev:hover {
        //   background: #d97706; 
        //   transform: translateY(-50%) scale(1.1);
        // }
        
        @media (max-width: 1024px) { .swiper-button-next, .swiper-button-prev { display: none !important; } }

        @keyframes pulse-amber {
          0% { box-shadow: 0 0 0 0 rgba(217, 119, 6, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(217, 119, 6, 0); }
          100% { box-shadow: 0 0 0 0 rgba(217, 119, 6, 0); }
        }
      `}</style>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            {/* Improved Close Button Position for Mobile */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-[210] p-3 bg-white/10 hover:bg-amber-600 text-white rounded-full transition-all border border-white/20"
              aria-label="Close video"
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

      {/* --- PLAY BUTTON --- 
          - Mobile: Positioned lower (bottom-40) and centered
          - Desktop: Back to center-right positioning
      */}
      <div className="absolute right-1/2 translate-x-1/2 bottom-[32%] md:bottom-auto md:right-[140px] lg:right-[180px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-40">
        <motion.button
          onClick={() => setIsVideoOpen(true)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ animation: "pulse-amber 2s infinite" }}
          className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-amber-600 hover:bg-white text-white hover:text-amber-600 rounded-full shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-600 group"
        >
          <Play
            fill="currentColor"
            className="ml-1 w-5 h-5 md:w-8 md:h-8 transition-transform group-hover:scale-110"
          />

          <span className="absolute right-full mr-6 bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden lg:block border border-white/10">
            {t("watchVideo") || "Watch Trailer"}
          </span>
        </motion.button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        className="h-full heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt="Law Office"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

            <div className="relative z-10 h-full flex items-center">
              <div className="w-full ml-6 sm:ml-12 lg:ml-36 px-4 md:px-6 text-white pb-48 md:pb-0">
                <div className="max-w-3xl">
                  <motion.h1
                    key={`t-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] mb-6"
                  >
                    {t("title")}
                  </motion.h1>
                  <motion.p
                    key={`p-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed"
                  >
                    {t("subtitle")}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <a
                      href="#contact"
                      className="inline-block bg-amber-600 hover:bg-white text-white hover:text-amber-600 border-2 border-transparent hover:border-amber-600 px-8 md:px-12 py-3 md:py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 shadow-xl"
                    >
                      {t("cta")}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Info Boxes */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-0 sm:px-6 z-30 lg:translate-y-1/2">
        <div className="flex bg-white shadow-2xl overflow-x-auto lg:overflow-hidden scrollbar-hide min-h-[90px] lg:min-h-[140px]">
          {translatedBoxes.map((box, index) => {
            const Icon = icons[index] || Briefcase;
            return (
              <div
                key={index}
                className="group relative flex-1 min-w-[140px] sm:min-w-[200px] lg:min-w-0 py-4 lg:py-6 px-4 border-r border-gray-100 last:border-0 flex flex-col justify-center items-center"
              >
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out hidden lg:block" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-2 lg:gap-4 w-full justify-center">
                  <Icon className="text-amber-600 w-5 h-5 lg:w-7 lg:h-7 group-hover:text-white transition-colors" />
                  <h4 className="text-slate-900 group-hover:text-white font-serif font-bold text-[0.65rem] md:text-[0.75rem] lg:text-[0.95rem] leading-tight text-center lg:text-left">
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

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
import Video_Law from "../../assets/law_vid.mp4";

export default function Hero() {
  const { t } = useTranslation("hero");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const slides = [{ image: slide1 }, { image: slide2 }, { image: slide3 }];
  const icons = [Briefcase, RefreshCw, Rocket, Globe];
  const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

  return (
    <section className="relative w-full h-screen bg-[#262B3E]">
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          top: 50% !important; color: white !important; transition: all 0.3s ease;
          width: 44px !important; height: 44px !important;
          background: rgba(255,255,255,0.1); backdrop-filter: blur(4px); border-radius: 50%;
        }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 16px !important; font-weight: bold; }
        .swiper-button-next { right: 20px !important; }
        .swiper-button-prev { left: 20px !important; }
        .swiper-button-next:hover, .swiper-button-prev:hover { background: #C9B38C !important; }

        @media (min-width: 1280px) { .swiper-button-next { right: 60px !important; } .swiper-button-prev { left: 60px !important; } }
        @media (max-width: 1024px) { .swiper-button-next, .swiper-button-prev { display: none !important; } }
        
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(201, 179, 140, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 179, 140, 0); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- VIDEO MODAL --- */}
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

      {/* --- PLAY BUTTON --- */}
      <div className="absolute right-1/2 translate-x-1/2 bottom-[15%] md:bottom-auto md:right-[140px] lg:right-[180px] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-40">
        <motion.button
          onClick={() => setIsVideoOpen(true)}
          style={{ animation: "pulse-gold 2s infinite" }}
          className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#C9B38C] hover:bg-white text-white hover:text-[#C9B38C] rounded-full shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#C9B38C] group"
        >
          <Play fill="currentColor" className="ml-1 w-5 h-5 md:w-8 md:h-8" />
        </motion.button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Slide"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#262B3E] via-[#262B3E]/40 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center">
              {/* Responsive width and alignment */}
              <div className="w-full md:w-1/2 px-6 lg:ml-36 lg:px-4 text-white pb-32 md:pb-0 text-center md:text-left">
                <h2 className="text-4xl lg:text-6xl font-serif italic leading-[1.1] mb-6 max-w-2xl text-balance">
                  {t("title")}
                </h2>
                <p className="text-white mb-10 max-w-xl mx-auto md:mx-0 font-light text-3xl">
                  {t("subtitle")}
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-[#C9B38C] hover:bg-white hover:text-[#C9B38C] text-white px-12 py-6 rounded-sm font-bold uppercase tracking-[0.2em] text-[18px] transition-all duration-500 shadow-xl"
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- UPDATED INFO BOXES WITH WRAP-FRIENDLY LOGIC --- */}
      <div className="absolute bottom-0 left-0 w-full px-4 z-30 translate-y-[30%] md:translate-y-[50%] md:px-6">
        <div className="max-w-[1200px] mx-auto flex bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm overflow-x-auto hide-scrollbar min-h-[120px]">
          {translatedBoxes.map((box, index) => {
            const Icon = icons[index] || Briefcase;
            return (
              <div
                key={index}
                className="group relative flex-none w-[160px] md:flex-1 py-4 px-3 border-r border-slate-100 last:border-r-0 flex flex-col justify-center items-center hover:bg-[#dad2c4] transition-colors duration-500"
              >
                <div className="flex flex-col items-center gap-2 text-center w-full">
                  <Icon className="text-[#C9B38C] group-hover:text-white w-6 h-6 transition-colors flex-shrink-0" />
                  {/* Removed whitespace-nowrap and added text-balance for better word wrapping */}
                  <h4
                    className="text-[#262B3E] group-hover:text-white font-serif font-bold text-[10px] md:text-sm uppercase tracking-wider leading-tight break-words hyphens-auto"
                    style={{ wordBreak: "break-word" }}
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

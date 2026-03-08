// import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Briefcase, RefreshCw, Rocket, Globe } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import hero1 from "../../assets/hero_sw_01.jpg";
import hero2 from "../../assets/hero_sw_02.jpg";
import hero3 from "../../assets/hero_sw_03.jpg";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("hero");

  const slides = [{ image: hero1 }, { image: hero2 }, { image: hero3 }];

  const icons = [Briefcase, RefreshCw, Rocket, Globe];

  const translatedBoxes = t("infoBoxes", { returnObjects: true }) || [];

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        className="h-full heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <img
              src={slide.image}
              alt="Law Office"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white w-full pb-32 lg:pb-0">
                <div className="max-w-4xl">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-6xl font-serif font-bold leading-[1.1] mb-8"
                  >
                    {t("title")}
                  </motion.h1>

                  <motion.p
                    key={`subtitle-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed"
                  >
                    {t("subtitle")}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg">
                      {t("cta")}
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Info Boxes */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-6 z-30 hidden lg:block translate-y-1/2">
        <div className="flex bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden min-h-[140px]">
          {translatedBoxes.map((box, index) => {
            const Icon = icons[index] || Briefcase;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex-1 min-w-0 py-4 px-6 border-r border-gray-100 last:border-0 overflow-hidden flex flex-col justify-center cursor-default"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="absolute -top-2 -right-2 text-gray-100/30 font-serif text-2xl group-hover:text-slate-800/30 transition-colors duration-500 select-none">
                    0{index + 1}
                  </span>

                  <div className="flex items-center justify-center gap-3 w-full">
                    <Icon
                      className="text-amber-600 w-7 h-7 shrink-0 group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.5}
                    />

                    <h4
                      className="text-slate-900 group-hover:text-white transition-colors duration-500 font-serif font-bold 
                      text-[0.8rem] xl:text-[0.95rem] 
                      leading-tight text-center 
                      hyphens-auto break-words max-w-full"
                    >
                      {box.title}
                    </h4>
                  </div>

                  <div className="w-6 h-[1px] bg-amber-600 mt-3 group-hover:w-16 transition-all duration-700 ease-in-out" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import hero1 from "../../assets/hero_sw_01.jpg";
import hero2 from "../../assets/hero_sw_02.jpg";
import hero3 from "../../assets/hero_sw_03.jpg";

export default function Hero() {
  const { t } = useTranslation();

  const slides = [{ image: hero1 }, { image: hero2 }, { image: hero3 }];

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
              alt="Modern law office in Cologne or Düsseldorf"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
                  {t("home.hero.title")}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                  {t("home.hero.subtitle")}
                </p>

                {/* CTA Button */}
                <button className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-md font-semibold transition">
                  {t("home.hero.cta")}
                </button>

                {/* Trust Badges */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-200">
                  <span>⭐ {t("home.hero.trust.google")}</span>
                  <span>⚖ {t("home.hero.trust.chamber")}</span>
                  <span>✔ {t("home.hero.trust.starug")}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

// GSAP Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "swiper/css";
import "swiper/css/free-mode";
import { TEAM_IMAGES } from "../constants/teamImages";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const { t } = useTranslation("team");
  const containerRef = useRef(null);
  const [isGlobalActive, setIsGlobalActive] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const allMembers = t("members", { returnObjects: true }) || [];
  const founders = allMembers.filter((m) =>
    ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
  );
  const assistants = allMembers.filter(
    (m) => !founders.find((f) => f.slug === m.slug),
  );

  useEffect(() => {
    const heartbeat = () => {
      setIsGlobalActive(true);
      setTimeout(() => setIsGlobalActive(false), 2000);
    };
    heartbeat();
    const interval = setInterval(heartbeat, 4000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      gsap.from(".founder-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-grid",
          start: "top 80%",
        },
      });
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section
      id="team"
      ref={containerRef}
      className="py-16 lg:py-32 bg-[#282D40] text-white overflow-hidden relative"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] bg-[#BA8C61] rounded-full blur-[100px] lg:blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* --- HEADER (Keep as is) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-24 border-l-2 border-[#BA8C61] pl-6 lg:pl-10">
          <div className="max-w-3xl">
            <h2
              className="font-serif italic tracking-tighter leading-[0.95] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              {t("hero.title")}
            </h2>
          </div>
        </div>

        {/* --- FOUNDERS SECTION (Keep as is) --- */}
        <div className="founder-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-40">
          {founders.map((f, i) => (
            <motion.div
              key={f.slug}
              onMouseEnter={() => setHoveredSlug(f.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className={`founder-card relative ${i === 1 ? "lg:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/5] lg:aspect-[1/1] bg-[#161923] overflow-hidden group border border-white/5">
                <motion.img
                  src={TEAM_IMAGES[f.slug]}
                  animate={{
                    scale:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1.05
                        : 1,
                    opacity:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1
                        : 0.85,
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <AnimatePresence>
                  {hoveredSlug === f.slug && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="hidden lg:block absolute bottom-6 right-6 left-6 z-30 backdrop-blur-md bg-black/50 border border-white/10 p-6 shadow-2xl"
                    >
                      <p className="text-white text-sm lg:text-[15px] font-light italic leading-relaxed">
                        {f.bio}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 flex justify-between items-end border-b border-white/10 pb-5">
                <div className="space-y-1">
                  <h3
                    className="font-serif italic text-white tracking-tight"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                  >
                    {f.name}
                  </h3>
                </div>
                <ArrowUpRight className="text-[#BA8C61]" size={28} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ASSISTANTS SECTION (The Fix) --- */}
        <div className="relative pt-16 border-t border-white/10">
          <div className="flex flex-col items-center mb-12 lg:mb-18 space-y-4">
            <motion.div
              animate={{ width: isGlobalActive ? "100px" : "50px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-[#BA8C61]"
            />
            <h3
              className="text-white font-serif italic tracking-tighter text-center"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {t("cta.expert")}
            </h3>
          </div>

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={6000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2.8 },
              1440: { slidesPerView: 3.5 },
            }}
            // CRITICAL: This ensures all slides are the same height
            className="overflow-visible !flex items-stretch"
          >
            {[...assistants, ...assistants].map((a, idx) => (
              <SwiperSlide
                key={`${a.slug}-${idx}`}
                className="py-6 !h-auto flex"
              >
                <motion.div className="group cursor-default w-full flex flex-col h-full">
                  <div
                    className="relative bg-[#161923] border border-white/5 pt-12 pb-8 px-6 flex-1 flex flex-col items-center text-center transition-all duration-1000 hover:border-[#BA8C61]/40 shadow-xl 
                    /* Height Fixes */
                    min-h-[580px] lg:min-h-[715px]"
                  >
                    <div className="relative mb-8 w-full aspect-[4/5] max-w-[220px] shrink-0">
                      <motion.div
                        animate={{
                          opacity: isGlobalActive ? 1 : 0.8,
                          scale: isGlobalActive ? 1.03 : 1,
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-full h-full overflow-hidden rounded-sm relative z-10"
                      >
                        <img
                          src={TEAM_IMAGES[a.slug]}
                          className="w-full h-full object-cover"
                          alt={a.name}
                        />
                      </motion.div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#BA8C61] z-20 opacity-40" />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-[#BA8C61] z-20 opacity-40" />
                    </div>

                    <div className="flex flex-col items-center space-y-4 flex-grow w-full">
                      <div className="space-y-1">
                        <h4 className="text-2xl lg:text-3xl font-serif italic text-white tracking-tight leading-tight">
                          {a.name}
                        </h4>
                        <p className="text-[#BA8C61] font-mono text-[11px] tracking-[0.3em] uppercase">
                          {a.title}
                        </p>
                      </div>
                      <div className="w-8 h-[1px] bg-[#BA8C61]/20" />

                      {/* Bio with fixed line-clamp to keep card height consistent */}
                      <p className="text-white/70 text-sm lg:text-[15.5px] font-light leading-relaxed italic px-2 line-clamp-5">
                        "{a.bio}"
                      </p>
                    </div>

                    <div className="mt-auto pt-6 shrink-0">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-1000 ${isGlobalActive ? "bg-[#BA8C61] shadow-[0_0_10px_#BA8C61]" : "bg-white/10"}`}
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

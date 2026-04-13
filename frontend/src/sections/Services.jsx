import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function Services() {
  const { t } = useTranslation("services");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardsRef = useRef([]);

  const services = t("services.items", { returnObjects: true }) || [];

  const handleMouseMove = (e, index) => {
    // Disable 3D tilt on mobile/tablets for stability
    if (window.innerWidth < 1024) return;

    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    gsap.to(cardsRef.current[index], {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section
      id="services"
      className="relative bg-[#262B3E] py-24 md:py-40 px-5 md:px-6 overflow-hidden"
    >
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:30px_30px] md:[background-size:40px_40px]" />
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* --- THE MASTER HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 md:mb-32 gap-6">
          <div className="space-y-6">
            <div className="h-px w-16 md:w-24 bg-[#BA8C61]" />
            <h2 className="text-5xl sm:text-6xl lg:text-[2.5vw] font-serif italic text-white leading-[0.9] tracking-tighter uppercase">
              {t("services.sectionTitle")}
            </h2>
          </div>
        </div>

        {/* --- UNIFORM FLEX ENGINE --- */}
        <div className="flex flex-wrap border border-white/10 bg-white/[0.02]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex-grow basis-full md:basis-1/2 lg:basis-1/3 min-h-[500px] md:min-h-[650px] p-8 md:p-12 
                border-b border-white/10 md:even:border-l-0 lg:even:border-l lg:border-r
                flex flex-col justify-between group overflow-hidden transition-all duration-700 lg:hover:bg-[#2D334A]`}
            >
              {/* Content Top */}
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <span className="text-5xl md:text-6xl font-serif italic text-white/5 group-hover:text-[#BA8C61]/20 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="text-white/70 lg:text-white/60 group-hover:text-[#BA8C61] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="mt-12 md:mt-20 space-y-4 md:space-y-6">
                  <h3 className="text-[#BA8C61] font-mono text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[0.6em] uppercase">
                    {service.subtitle}
                  </h3>
                  <h4 className="text-3xl md:text-[clamp(1.5rem,2vw,2rem)] font-serif italic text-white leading-tight md:leading-none tracking-tight break-words">
                    {service.title}
                  </h4>
                </div>
              </div>

              {/* Description Reveal - Optimized for Mobile visibility */}
              <div className="relative z-10 mt-auto pt-8 md:pt-10 border-t border-white/5">
                <motion.p
                  variants={{
                    initial: { y: 20, opacity: 0.3 },
                    animate: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.8, ease: "circOut" },
                    },
                  }}
                  className="text-white/80 text-base md:text-lg font-light leading-relaxed italic"
                >
                  {service.content}
                </motion.p>

                <div className="mt-6 md:mt-8 flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>
              </div>

              {/* THE "AWARD" GLOW: Static on mobile, interactive on desktop */}
              <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,_#BA8C61_0%,_transparent_70%)] opacity-0 lg:group-hover:opacity-40 blur-[80px] pointer-events-none z-0 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-20 md:mt-32 flex flex-col items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gradient-to-r from-transparent via-[#BA8C61] to-transparent mb-12"
          />
          <button className="w-full md:w-auto px-10 md:px-20 py-8 md:py-10 bg-white text-[#262B3E] font-black text-[10px] md:text-[11px] tracking-[0.6em] md:tracking-[1em] uppercase hover:bg-[#BA8C61] hover:text-white transition-all duration-500">
            {t("services.btn")}
          </button>
        </div>
      </div>
    </section>
  );
}

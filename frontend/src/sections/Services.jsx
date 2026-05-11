import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const { t } = useTranslation("services");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // JSON keys: services.items[] → { id, title, subtitle, content, slug }
  const services = t("services.items", { returnObjects: true }) || [];

  const scrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) {
      const offsetPosition =
        elem.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-40 px-5 md:px-6 overflow-hidden"
      style={{ backgroundColor: "#1B2A4A" }}
    >
      {/* ── Subtle dot grid ── */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:36px_36px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* ══ HEADER ══ */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-28 gap-6">
          <div className="space-y-5">
            {/* Section title — key: services.sectionTitle */}
            <h2
              className="font-serif italic text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)" }}
            >
              {t("services.sectionTitle")}
            </h2>

            {/* Subheading — key: services.subheading */}
            <p
              className="text-white/90 font-light leading-[1.85] max-w-xl"
              style={{ fontSize: "clamp(1.05rem, 1.2vw, 1.05rem)" }}
            >
              {t("services.subheading")}
            </p>
          </div>
        </div>

        {/* ══ CARDS GRID ══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-white flex flex-col p-8 md:p-10 group overflow-hidden cursor-default"
              style={{ minHeight: "400px" }}
            >
              {/* Gold top accent line — sweeps on hover */}
              <span className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#BA8C61] to-[#C9B38C] group-hover:w-full transition-all duration-500" />

              {/* ── ZONE 1 (fixed top): subtitle + arrow ── */}
              <div className="flex items-start justify-between gap-4">
                {/* Subtitle — key: services.items[].subtitle */}
                <span
                  className="text-[#BA8C61] uppercase tracking-[0.1em] font-semibold leading-snug"
                  style={{ fontSize: "clamp(0.95rem, 0.8vw, 0.75rem)" }}
                >
                  {service.subtitle}
                </span>

                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 border border-[#1B2A4A]/15 flex items-center justify-center group-hover:bg-[#1B2A4A] transition-all duration-300">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="text-[#1B2A4A] group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform"
                  />
                </div>
              </div>

              {/* ── ZONE 2 (fixed height): title ── */}
              {/* Title — key: services.items[].title */}
              <div
                className="flex items-end py-8"
                style={{ minHeight: "120px" }}
              >
                <h3
                  className="font-serif italic text-[#1B2A4A] leading-[1.1]"
                  style={{ fontSize: "clamp(1.45rem, 2vw, 1.9rem)" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* ── ZONE 3: divider + content ── */}
              <div className="pt-7 border-t border-[#1B2A4A]/15">
                {/* Content — key: services.items[].content */}
                <p
                  className="text-[#1B2A4A]/80 font-normal leading-[1.85] group-hover:text-[#1B2A4A] transition-colors duration-500"
                  style={{ fontSize: "clamp(1.02rem, 1vw, 1rem)" }}
                >
                  {service.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ══ FOOTER CTA ══ */}
        <div className="mt-20 md:mt-32 flex flex-col items-center gap-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-[#BA8C61]/40 to-transparent"
          />

          {/* CTA button — key: services.btn */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 px-10 md:px-16 py-5 md:py-6 bg-white text-[#1B2A4A] font-bold uppercase tracking-[0.35em] text-xs md:text-sm hover:bg-[#BA8C61] hover:text-white transition-all duration-400 shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_48px_rgba(186,140,97,0.25)]"
          >
            {t("services.btn")}
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

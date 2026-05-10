import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../../components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

export default function Impressum() {
  const { t } = useTranslation("impressum");
  const content = t("hero.content", { returnObjects: true }) || [];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      className="relative min-h-screen py-28 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#1B2A4A" }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:36px_36px]" />
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BA8C61] to-transparent opacity-50" />

      <div className="relative z-10 max-w-[780px] mx-auto">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          {/* Title */}
          <h1
            className="font-serif italic text-white leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Impressum
          </h1>

          {/* Gold rule */}
          <div className="h-px w-16 bg-[#BA8C61]" />
        </motion.div>

        {/* ── CONTENT ── */}
        <div className="space-y-3">
          {content.map((line, i) => {
            const isHeadline =
              line.length < 60 &&
              !line.includes(":") &&
              !line.includes("@") &&
              !line.match(/\d{5}/) &&
              !line.startsWith("-");

            const isList = line.startsWith("-");
            const isContact =
              line.includes(":") || line.includes("@") || line.match(/\d{5}/);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.015, 0.3) }}
              >
                {isHeadline ? (
                  <p
                    className="font-serif italic text-white mt-14 mb-2 leading-snug"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}
                  >
                    {line}
                  </p>
                ) : isList ? (
                  <div className="flex items-start gap-3 pl-2">
                    <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#BA8C61] flex-shrink-0" />
                    <p className="text-[#C9B38C] font-medium text-[15px] leading-[1.8]">
                      {line.replace(/^-\s*/, "")}
                    </p>
                  </div>
                ) : isContact ? (
                  <p className="text-white/90 font-semibold text-[15px] leading-[1.85] font-mono tracking-wide">
                    {line}
                  </p>
                ) : (
                  <p className="text-white/90 font-semibold text-[15px] md:text-[16px] leading-[1.9]">
                    {line}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── FOOTER RULE ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 h-px bg-gradient-to-r from-[#BA8C61]/50 via-[#BA8C61]/20 to-transparent origin-left"
        />

        <p className="mt-6 text-white/80 text-[16px] uppercase tracking-[0.1em] font-medium">
          Wirtschaftskanzlei Dr. jur. Kraemer GmbH
        </p>
      </div>

      <ScrollToTop />
    </section>
  );
}

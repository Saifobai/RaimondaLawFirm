import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../../components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

export default function Privacy() {
  const { t } = useTranslation("privacy");
  const sections = t("sections", { returnObjects: true }) || [];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();
  }, []);

  // Lines that look like bullet data points (short, no verb)
  const isBulletLine = (line) =>
    line.length < 55 &&
    !line.endsWith(".") &&
    !line.endsWith(":") &&
    !line.startsWith("Art.");

  return (
    <section
      className="relative min-h-screen py-28 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#1B2A4A" }}
    >
      {/* Dot grid */}
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
          <h1
            className="font-serif italic text-white leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            {t("hero.title")}
          </h1>

          <div className="h-px w-16 bg-[#BA8C61]" />
        </motion.div>

        {/* ── SECTIONS ── */}
        <div className="space-y-16 md:space-y-20">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group relative pl-6 border-l border-white/[0.06] hover:border-[#BA8C61]/40 transition-colors duration-500"
            >
              {/* Gold dot on left border */}
              <span className="absolute -left-[5px] top-[6px] w-[9px] h-[9px] rounded-full border-2 border-[#BA8C61] bg-[#1B2A4A] group-hover:bg-[#BA8C61] transition-colors duration-500" />

              {/* Section number + title */}
              <h2
                className="font-serif italic text-white mb-6 leading-snug"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}
              >
                {section.title}
              </h2>

              {/* Content lines */}
              <div className="space-y-3">
                {section.content.map((line, idx) => {
                  const isIntro = line.endsWith(":");
                  const isLegal =
                    line.startsWith("Rechtsgrundlage") ||
                    line.startsWith("Art.");
                  const isBullet = isBulletLine(line) && !isIntro && !isLegal;

                  return (
                    <div key={idx}>
                      {isIntro ? (
                        <p className="text-white/80 font-semibold text-[17px] uppercase tracking-[0.15em] mt-5 mb-2">
                          {line}
                        </p>
                      ) : isLegal ? (
                        <p className="text-[#BA8C61]/90 font-medium text-[17px] tracking-wide mt-4 ">
                          {line}
                        </p>
                      ) : isBullet ? (
                        <div className="flex items-start gap-3 pl-1">
                          <span className="mt-[9px] w-1 h-1 rounded-full bg-[#BA8C61]/90 flex-shrink-0" />
                          <p className="text-white/90 font-semibold text-[17px] leading-[1.8]">
                            {line}
                          </p>
                        </div>
                      ) : (
                        <p className="text-white/90 font-semibold text-[17px] md:text-[16px] leading-[1.95]">
                          {line}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FOOTER RULE ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 h-px bg-gradient-to-r from-[#BA8C61]/50 via-[#BA8C61]/20 to-transparent origin-left"
        />

        <p className="mt-6 text-white/80 text-[17px] uppercase tracking-[0.1em] font-medium">
          Wirtschaftskanzlei Dr. jur. Kraemer GmbH
        </p>
      </div>

      <ScrollToTop />
    </section>
  );
}

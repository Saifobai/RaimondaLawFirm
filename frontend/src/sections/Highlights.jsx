import React, { useEffect, useRef, useState } from "react";
import {
  useMotionValue,
  useMotionTemplate,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, ArrowRight, Send, Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Both_Image from "../assets/Both_Image.png";
import Swipe_Image from "../assets/highlight_image.jpeg";

gsap.registerPlugin(ScrollTrigger);

// ─── Color system ──────────────────────────────────────────────────
// Base:    #1B2A4A  — primary background
// Surface: #1F3256  — card / elevated surfaces
// Deep:    #141F36  — contrast sections (horizontal scroll, CTA)
// Accent:  #BA8C61 / #C9B38C

// ─── ServiceSlide ──────────────────────────────────────────────────
// Premium editorial card — contained, shadowed, newspaper two-column inside
function ServiceSlide({
  service,
  index,
  areaLabel,
  sectionTitle,
  readMoreLabel,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-24 py-16 lg:py-0">
      {/* ── Outer card — wider, more breathing room ── */}
      <div
        className="w-full max-w-[1200px] grid lg:grid-cols-12 gap-0 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fafaf9 0%, #f5f0e8 100%)",
          boxShadow:
            "0 4px 6px rgba(27,42,74,0.04), 0 20px 60px rgba(27,42,74,0.10), 0 1px 0 rgba(186,140,97,0.15)",
          border: "1px solid rgba(186,140,97,0.15)",
        }}
      >
        {/* ══ LEFT: Typographic anchor ══ */}
        <div
          className="lg:col-span-5 flex flex-col justify-between p-12 lg:p-16 border-b lg:border-b-0 lg:border-r"
          style={{ borderColor: "rgba(186,140,97,0.15)" }}
        >
          <div className="space-y-7">
            {/* Title — bolder, bigger */}
            <h3
              className="font-serif italic text-[#1B2A4A] leading-[1.08] font-bold"
              style={{ fontSize: "clamp(1.7rem, 2.4vw, 2.9rem)" }}
            >
              {service.title}
            </h3>
          </div>

          {/* Tags pushed to bottom */}
          {service.tags && service.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-10 mt-auto">
              {service.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold px-3 py-1.5 text-[#BA8C61]"
                  style={{
                    border: "1px solid rgba(186,140,97,0.35)",
                    background: "rgba(186,140,97,0.05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ══ RIGHT: Summary + expandable body ══ */}
        <div className="lg:col-span-7 flex flex-col justify-center p-12 lg:p-16 gap-8">
          {/* Pull quote — bolder, bigger */}
          <p
            className="text-[#1B2A4A] font-semibold leading-[2] border-l-[3px] border-[#BA8C61] pl-6"
            style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.22rem)" }}
          >
            {service.summary}
          </p>

          {/* Subtle divider */}
          <div
            className="h-px w-full"
            style={{ background: "rgba(27,42,74,0.08)" }}
          />

          {/* Expand toggle */}
          <div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div
                className="w-7 h-7 flex items-center justify-center transition-all duration-300 group-hover:bg-[#BA8C61] group-hover:text-white"
                style={{
                  border: "1px solid rgba(186,140,97,0.45)",
                  color: "#BA8C61",
                }}
              >
                {expanded ? (
                  <Minus size={12} strokeWidth={2.5} />
                ) : (
                  <Plus size={12} strokeWidth={2.5} />
                )}
              </div>
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#1B2A4A]/40 group-hover:text-[#BA8C61] transition-colors duration-300">
                {readMoreLabel}
              </span>
            </button>

            {/* Full body — split into readable paragraph groups */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-7 space-y-5 max-w-xl">
                    {service.headline
                      .split(/(?<=\.)\s+/)
                      .reduce((acc, sentence, i) => {
                        const g = Math.floor(i / 3);
                        if (!acc[g]) acc[g] = [];
                        acc[g].push(sentence);
                        return acc;
                      }, [])
                      .map((group, gi) => (
                        <p
                          key={gi}
                          className="leading-[1.95] font-medium"
                          style={{
                            fontSize: "clamp(0.92rem, 1.05vw, 1.02rem)",
                            color: "rgba(27,42,74,0.75)",
                          }}
                        >
                          {group.join(" ")}
                        </p>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Highlights() {
  const { t } = useTranslation("highlights");
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // JSON keys: servicesSection.clusters[] → { title, headline, ... }
  // JSON keys: advantages.items[]         → { title, description }
  const services = t("servicesSection.clusters", { returnObjects: true }) || [];
  const advantages = t("advantages.items", { returnObjects: true }) || [];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const sections = gsap.utils.toArray(".service-slide");
        if (sections.length === 0) return;
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 4,
            snap: {
              snapTo: 1 / (sections.length - 1),
              duration: { min: 0.4, max: 0.8 },
              ease: "power2.inOut",
            },
            end: () => `+=${(sections.length - 1) * window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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
    <div
      ref={containerRef}
      className="text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white font-sans antialiased"
      style={{ backgroundColor: "#1B2A4A" }}
    >
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — MANIFESTO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-24 py-24 overflow-hidden"
        style={{ backgroundColor: "#1B2A4A" }}
      >
        {/* Background watermark — key: intro.text4 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025] select-none overflow-hidden">
          <motion.h2
            style={{ x: "-5%" }}
            whileInView={{ x: "5%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="text-[25vw] font-serif italic whitespace-nowrap text-white"
          >
            {t("intro.text4")}
          </motion.h2>
        </div>

        <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
          {/* ── Left: Text ── */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1 text-left">
            {/* Animated heading — key: intro.text1 */}
            <div className="space-y-3">
              <h1
                className="font-serif italic text-white leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
              >
                {t("intro.text1")
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden mr-[0.3em] pb-3 -mb-3"
                    >
                      <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
              </h1>
            </div>

            {/* Primary body — key: intro.text2 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-white/90 font-light leading-[1.9] max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              {t("intro.text2")}
            </motion.p>

            {/* Secondary body / pull-quote — key: intro.text3 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9 }}
              className="text-white/90 font-light leading-[1.9] max-w-lg  "
              style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)" }}
            >
              {t("intro.text3")}
            </motion.p>
          </div>

          {/* ── Right: Image ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative w-full lg:w-[90%] aspect-[14/10] overflow-hidden border border-[#BA8C61]/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)] group cursor-default"
            >
              <img
                src={Both_Image}
                alt="Partners"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-5 left-6 right-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-white font-serif italic text-sm lg:text-base leading-relaxed">
                  Dr. jur. Raimonda Kraemer, LL.M.
                </p>
                <p className="text-white/75 font-serif italic text-sm lg:text-base leading-relaxed">
                  Aurelija Maumevičė, LL.M.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — SERVICES (HORIZONTAL SCROLL on desktop)
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={horizontalRef}
        className="horizontal-container border-y border-slate-200"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex flex-col lg:flex-row lg:w-[300%] h-auto lg:h-screen">
          {/* ── Slide 0: Title + image ── */}
          <div className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-32 py-16 lg:py-0 gap-10 lg:gap-20 border-b lg:border-b-0 border-slate-100">
            <div className="w-full lg:w-[46%] text-left space-y-8">
              {/* Eyebrow — key: servicesSection.area */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#BA8C61]" />
                <span className="text-[#BA8C61] text-xs uppercase tracking-[0.4em] font-semibold">
                  {t("servicesSection.area")}
                </span>
              </div>

              {/* Big navy title — key: servicesSection.title */}
              <h2
                className="font-serif italic leading-[1.08] text-[#1B2A4A]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 4.8rem)" }}
              >
                {t("servicesSection.title")}
              </h2>

              {/* Supporting text — key: servicesSection.sideTitle */}
              <p
                className="text-slate-500 font-light leading-[1.85] max-w-sm"
                style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}
              >
                {t("servicesSection.sideTitle")}
              </p>

              {/* Scroll cue — key: servicesSection.slide */}
              <div className="flex items-center gap-4 group cursor-default pt-2">
                <span className="text-xs tracking-[0.4em] uppercase font-semibold text-[#1B2A4A]/40">
                  {t("servicesSection.slide")}
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#BA8C61] group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Image — constrained height to match text column, no detail chopping */}
            <div className="w-full lg:w-[44%] lg:max-h-[70vh] overflow-hidden border border-[#BA8C61]/20 shadow-[0_24px_64px_rgba(27,42,74,0.12)] flex-shrink-0">
              <img
                src={Swipe_Image}
                alt="Kanzlei"
                className="w-full h-full object-cover object-center"
                style={{ maxHeight: "520px" }}
              />
            </div>
          </div>

          {/* ── Slides 1+: clusters[] → title + summary + expandable headline ── */}
          {services.map((service, index) => (
            <ServiceSlide
              key={index}
              service={service}
              index={index}
              areaLabel={t("servicesSection.area")}
              sectionTitle={t("servicesSection.title")}
              readMoreLabel={t("servicesSection.slide")}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — ADVANTAGES
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-44 px-6 sm:px-10 relative z-20"
        style={{ backgroundColor: "#1B2A4A" }}
      >
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Heading — keys: advantages.title, servicesSection.legacy, servicesSection.choose */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-[#BA8C61]/60" />
              <span className="text-[#BA8C61]/70 text-xs uppercase tracking-[0.35em] font-semibold">
                {t("advantages.title")}
              </span>
            </div>
            <h2
              className="font-serif leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
            >
              {t("servicesSection.legacy")}
            </h2>
            <p
              className="text-white/45 font-light leading-[1.85] max-w-xs"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1rem)" }}
            >
              {t("servicesSection.choose")}
            </p>
          </motion.div>

          {/* Advantage cards — keys: advantages.items[].title + .description */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="relative p-7 lg:p-8 border border-white/[0.06] group hover:border-[#BA8C61]/25 transition-all duration-500 overflow-hidden"
                style={{ backgroundColor: "#1F3256" }}
              >
                {/* Gold hover accent */}
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#BA8C61] to-[#C9B38C] group-hover:w-full transition-all duration-500" />

                <ShieldCheck
                  className="text-[#BA8C61] mb-5 opacity-75"
                  size={24}
                  strokeWidth={1.5}
                />

                {/* Card title — key: advantages.items[].title */}
                <h4 className="text-lg lg:text-xl font-serif italic text-white mb-3 leading-snug">
                  {item.title}
                </h4>

                {/* Card body — key: advantages.items[].description */}
                <p
                  className="text-white/50 font-light leading-[1.85] group-hover:text-white/75 transition-colors duration-500"
                  style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — CTA SPOTLIGHT
      ══════════════════════════════════════════════════════════════ */}
      <section
        onMouseMove={handleMouseMove}
        className="relative py-28 lg:py-40 flex flex-col items-center text-center px-6 border-t border-slate-200 overflow-hidden group/cta"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Subtle gold spotlight on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover/cta:opacity-100 transition duration-700"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                700px circle at ${mouseX}px ${mouseY}px,
                rgba(186, 140, 97, 0.07),
                transparent 80%
              )
            `,
          }}
        />

        {/* Main heading — key: servicesSection.secure */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 font-serif italic text-[#1B2A4A] mb-5 tracking-tight max-w-3xl"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.6rem)" }}
        >
          {t("servicesSection.secure")}
        </motion.h2>

        {/* CTA button — key: servicesSection.contactButton */}
        <motion.div
          onClick={scrollToContact}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 flex items-center gap-4 px-10 py-4 border-2 border-[#1B2A4A] text-[#1B2A4A] cursor-pointer transition-all duration-300 hover:bg-[#1B2A4A] hover:text-white group/btn shadow-[0_8px_32px_rgba(27,42,74,0.12)] hover:shadow-[0_12px_40px_rgba(27,42,74,0.22)]"
        >
          <span className="text-xs uppercase tracking-[0.35em] font-bold">
            {t("servicesSection.contactButton")}
          </span>
          <Send
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 h-px bg-[#BA8C61]/40"
        />
      </section>
    </div>
  );
}

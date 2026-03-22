import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import Rai_Image from "../assets/Rai_Image.jpeg";
import Auri_Image from "../assets/Auri_Image.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const { t } = useTranslation("highlights");
  const containerRef = useRef(null);

  const services = t("servicesSection.clusters", { returnObjects: true }) || [];
  const advantages = t("advantages.items", { returnObjects: true }) || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Mask Animation
      gsap.from(".mask-text", {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".mask-text",
          start: "top 90%",
        },
      });

      // Horizontal Scroll Logic - ONLY for screens larger than 1024px
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const sections = gsap.utils.toArray(".service-slide");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () =>
              "+=" +
              document.querySelector(".horizontal-container").offsetWidth,
          },
        });
      });

      // Advantage Card Stagger
      gsap.from(".advantage-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".advantages-grid",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#262B3E] text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white font-sans antialiased"
    >
      {/* --- SECTION 1: THE MANIFESTO (AWWWARDS VIBE) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-32 bg-[#0D0F16] overflow-hidden">
        {/* BACKDROP TEXT: Massive outlined text that moves on scroll */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
          <motion.h2
            style={{ x: "-10%" }}
            whileInView={{ x: "10%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="text-[30vw] font-serif italic whitespace-nowrap outline-text text-white"
          >
            PARTNERSHIP — PARTNERSHIP
          </motion.h2>
        </div>

        <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-10 items-center z-10">
          {/* LEFT: THE MASTHEAD (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <span className="w-12 h-[1px] bg-[#BA8C61]" />
                <span className="text-[#BA8C61] font-mono text-[10px] tracking-[0.5em] uppercase">
                  Curated Excellence
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif italic leading-[0.85] text-white tracking-tighter">
                {t("intro.text1")
                  .split(" ")
                  .map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden mr-4">
                      <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/30 font-light text-lg lg:text-xl leading-relaxed max-w-md italic"
            >
              {t("intro.text2")}
            </motion.p>
          </div>

          {/* RIGHT: THE GALLERY (Cols 7-12) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end gap-6 order-1 lg:order-2 h-[600px]">
            {/* RAI: THE FLOATER */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: -40, opacity: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="relative w-[48%] aspect-[2/3] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
            >
              <img
                src={Rai_Image}
                alt="Rai"
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-[#BA8C61] font-mono text-[10px] tracking-widest uppercase mb-1">
                  Founding Partner
                </p>
                <p className="text-white font-serif italic text-2xl">Rai</p>
              </div>
            </motion.div>

            {/* AURI: THE ANCHOR */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 60, opacity: 1 }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              className="relative w-[48%] aspect-[2/3] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
            >
              <img
                src={Auri_Image}
                alt="Auri"
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-[#BA8C61] font-mono text-[10px] tracking-widest uppercase mb-1">
                  Managing Director
                </p>
                <p className="text-white font-serif italic text-2xl">Auri</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* AMBIENT LIGHT: A glowing orb that follows the scroll */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#BA8C61] rounded-full blur-[150px] pointer-events-none"
        />
      </section>

      {/* --- SECTION 2: SERVICES (RESPONSIVE STACK) --- */}
      <section className="horizontal-container bg-white/[0.01] border-y border-white/5">
        {/* On mobile: vertical flex. On lg: horizontal scroll width. */}
        <div className="flex flex-col lg:flex-row lg:w-[150%] h-auto lg:h-screen">
          {/* Intro Slide */}
          <div className="service-slide flex-shrink-0 w-full lg:w-screen h-[50vh] lg:h-full flex items-center px-6 lg:px-32 border-b lg:border-b-0 border-white/5">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-8xl lg:text-[5rem] font-serif italic mb-8 lg:mb-12 leading-tight">
                {t("servicesSection.title")}
              </h2>
              <div className="flex items-center gap-6 text-white/30 group cursor-pointer lg:hover:text-[#BA8C61] transition-colors">
                <span className="text-[10px] lg:text-sm tracking-[0.3em] uppercase font-semibold">
                  {t("servicesSection.slide")}
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-3 transition-transform hidden lg:block"
                />
              </div>
            </div>
          </div>

          {/* Service Slides */}
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center px-6 lg:px-20 py-20 lg:py-0 border-b lg:border-b-0 border-white/5"
              >
                <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                  {/* Left Side: Image Container */}
                  <div className="relative w-full md:w-[70%] lg:w-[45%] flex-shrink-0 aspect-[4/5] overflow-hidden border border-white/10 bg-[#1a1e2e]">
                    <img
                      src={index % 2 === 0 ? Rai_Image : Auri_Image}
                      className="w-full h-full object-cover opacity-20 grayscale"
                      alt="Partner Service"
                    />

                    <div className="absolute top-4 left-6 text-7xl lg:text-9xl font-serif text-white/[0.03] select-none">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Right Side: Content Container */}
                  <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-6 lg:space-y-8">
                    <div className="space-y-4 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="h-[1px] w-8 bg-[#BA8C61]/50 hidden lg:block" />
                        <span className="text-[#BA8C61] text-[10px] lg:text-xs tracking-[0.3em] uppercase font-bold">
                          {t("servicesSection.area")}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.2] lg:leading-[1.1] text-white">
                        {service.headline || service.title}
                      </h3>
                    </div>

                    <div className="relative px-6 lg:px-0">
                      <div className="absolute left-0 lg:-left-6 top-0 bottom-0 w-[2px] lg:w-px bg-[#BA8C61]/30 lg:bg-white/10" />
                      <p className="text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed">
                        {service.content}
                      </p>
                    </div>

                    {/* Keyword Badges */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4 lg:pt-6">
                      {service.keywords?.map((kw, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white/[0.03] border border-white/5 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#BA8C61]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 3: ADVANTAGES --- */}
      <section className="py-20 lg:py-56 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 space-y-6 lg:space-y-8">
            <span className="text-[#BA8C61] tracking-[0.4em] uppercase text-[10px] lg:text-xs font-bold block">
              {t("servicesSection.choose")}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] lg:leading-[1.1] lg:sticky lg:top-40">
              {t("servicesSection.legacy")} <br className="hidden lg:block" />
              <span className="italic text-[#BA8C61]">
                {t("servicesSection.trust")}
              </span>{" "}
              {t("servicesSection.and")}{" "}
              <span className="italic text-[#BA8C61]">
                {t("servicesSection.strategy")}
              </span>
              .
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-px bg-white/5 border border-white/5 advantages-grid">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="advantage-card bg-[#262B3E] p-8 lg:p-16 flex flex-col md:flex-row gap-6 md:gap-8 items-start border-b border-white/5 last:border-b-0"
              >
                <div className="h-10 w-10 rounded-full border border-[#BA8C61]/30 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={18} className="text-[#BA8C61]" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl lg:text-3xl font-serif italic">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg text-white/40 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-32 lg:py-72 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Simplified Background for Mobile */}
        <div className="absolute w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] border border-[#BA8C61]/10 rounded-full pointer-events-none" />
        <div className="z-10 space-y-12 lg:space-y-16">
          <h2 className="text-4xl md:text-7xl lg:text-[5rem] font-serif italic leading-tight">
            {t("servicesSection.contactButton")}
          </h2>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 group"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-[#BA8C61] flex items-center justify-center group-hover:bg-[#BA8C61] transition-all duration-700">
              <Plus
                className="text-[#BA8C61] group-hover:text-[#262B3E] transition-all duration-700"
                size={24}
              />
            </div>
            <span className="text-[10px] lg:text-sm tracking-[0.4em] lg:tracking-[0.6em] uppercase font-bold text-[#BA8C61] border-b border-[#BA8C61]/20 pb-2">
              {t("servicesSection.conversation")}
            </span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}

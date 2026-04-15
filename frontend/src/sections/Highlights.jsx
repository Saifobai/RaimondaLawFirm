import { useTranslation } from "react-i18next";
import { ShieldCheck, ArrowRight, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rai_Image from "../assets/Rai_Image.jpeg";
import Auri_Image from "../assets/Auri_Image.jpeg";
import Both_Image from "../assets/Both_Image.png";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const { t } = useTranslation("highlights");
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

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
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => `+=${horizontalRef.current?.offsetWidth || 2000}`,
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
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#262B3E] text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white font-sans antialiased"
    >
      {/* --- SECTION 1: THE MANIFESTO --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-20 bg-[#0D0F16] overflow-hidden">
        {/* Background Decorative Text - Reduced Opacity and Size */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] select-none">
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

        <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-10 items-center z-10">
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1 text-left">
            <h1
              className="font-serif italic leading-[0.9] text-white "
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)" }} // SCALING FIX
            >
              {t("intro.text1")
                .split(" ")
                .map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-3">
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white font-light leading-relaxed max-w-md italic opacity-90"
              style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }} // SCALING FIX
            >
              {t("intro.text2")}
            </motion.p>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative w-full lg:w-[90%] aspect-[14/10] overflow-hidden border border-white/10 shadow-2xl group cursor-default"
            >
              <img
                src={Both_Image}
                alt="Partners"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 text-left">
                <p className="text-white font-serif italic text-base lg:text-lg">
                  Dr. jur. Raimonda Kraemer, LL.M.
                </p>
                <p className="text-white font-serif italic text-base lg:text-lg">
                  Aurelija Maumevičė, LL.M.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SERVICES (HORIZONTAL) --- */}
      <section
        ref={horizontalRef}
        className="horizontal-container bg-white/[0.01] border-y border-white/5"
      >
        <div className="flex flex-col lg:flex-row lg:w-[150%] h-auto lg:h-screen">
          {/* Intro Slide */}
          <div className="service-slide flex-shrink-0 w-full lg:w-screen h-[40vh] lg:h-full flex items-center px-6 lg:px-32 border-b lg:border-b-0 border-white/5">
            <div className="max-w-4xl text-left">
              <h2
                className="font-serif italic mb-8 leading-tight"
                style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }} // SCALING FIX
              >
                {t("servicesSection.title")}
              </h2>
              <div className="flex items-center gap-6 text-[#BA8C61] group">
                <span className="text-[12px] lg:text-sm tracking-[0.4em] uppercase font-bold text-white">
                  {t("servicesSection.slide")}
                </span>
                <ArrowRight
                  size={32}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center px-6 lg:px-20 py-20 lg:py-0 border-b lg:border-b-0 border-white/5"
            >
              <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <div className="relative w-full md:w-[60%] lg:w-[40%] aspect-[4/5] overflow-hidden border border-white/10 bg-[#1a1e2e]">
                  <img
                    src={index % 2 === 0 ? Rai_Image : Auri_Image}
                    className="w-full h-full object-cover"
                    alt="Partner Service"
                  />
                  <div className="absolute top-4 left-6 text-7xl lg:text-[10rem] font-serif text-white/[0.03] select-none">
                    0{index + 1}
                  </div>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-6 text-left">
                  <h3
                    className="font-serif italic leading-tight"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }} // SCALING FIX
                  >
                    {service.headline || service.title}
                  </h3>
                  <p
                    className="text-white font-light leading-relaxed opacity-80"
                    style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.5rem)" }} // SCALING FIX
                  >
                    {service.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: ADVANTAGES --- */}
      <section className="py-24 lg:py-48 px-6 bg-[#262B3E] relative z-20">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2
              className="font-serif leading-[1.1] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)" }} // SCALING FIX
            >
              {t("servicesSection.legacy")}
            </h2>
          </motion.div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-sm group hover:bg-white/[0.04] transition-all duration-500"
              >
                <ShieldCheck
                  className="text-[#BA8C61] mb-6"
                  size={32}
                  strokeWidth={1.5}
                />
                <h4 className="text-2xl font-serif italic text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-300 font-light leading-relaxed text-base opacity-80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-32 flex flex-col items-center text-center px-6 bg-[#0D0F16]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-serif italic text-white mb-10 tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }} // SCALING FIX
        >
          {t("servicesSection.contactButton")}
        </motion.h2>

        <motion.div
          onClick={scrollToContact}
          whileHover={{ scale: 1.05, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 rounded-full border border-[#BA8C61] flex items-center justify-center text-[#BA8C61] cursor-pointer transition-all duration-500 hover:bg-[#BA8C61] hover:text-[#0D0F16]"
        >
          <Send size={36} strokeWidth={1} />
        </motion.div>
      </section>
    </div>
  );
}

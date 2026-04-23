// import React, { useEffect, useRef } from "react";
// import { useMotionValue, useSpring, useMotionTemplate, motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { ShieldCheck, ArrowRight, Send } from "lucide-react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";
// import Both_Image from "../assets/Both_Image.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");
//   const containerRef = useRef(null);
//   const horizontalRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const advantages = t("advantages.items", { returnObjects: true }) || [];

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       mm.add("(min-width: 1024px)", () => {
//         const sections = gsap.utils.toArray(".service-slide");
//         if (sections.length === 0) return;

//         gsap.to(sections, {
//           xPercent: -100 * (sections.length - 1),
//           ease: "none",
//           scrollTrigger: {
//             trigger: horizontalRef.current,
//             pin: true,
//             scrub: 1,
//             snap: 1 / (sections.length - 1),
//             end: () => `+=${horizontalRef.current?.offsetWidth || 2000}`,
//             invalidateOnRefresh: true,
//           },
//         });
//       });
//     }, containerRef);

//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const scrollToContact = (e) => {
//     e.preventDefault();
//     const elem = document.getElementById("contact");
//     if (elem) {
//       const offset = 80;
//       const elementPosition = elem.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#262B3E] text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white font-sans antialiased"
//     >
//       {/* --- SECTION 1: THE MANIFESTO (REMOVED BLACK) --- */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-20 bg-[#262B3E] overflow-hidden">
//         {/* Background Decorative Text - Subtle Watermark */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
//           <motion.h2
//             style={{ x: "-5%" }}
//             whileInView={{ x: "5%" }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//             className="text-[25vw] font-serif italic whitespace-nowrap text-white"
//           >
//             {t("intro.text4")}
//           </motion.h2>
//         </div>

//         <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-10 items-center z-10">
//           <div className="lg:col-span-6 space-y-8 order-2 lg:order-1 text-left">
//             <div className="space-y-4">
//               <h1
//                 className="font-serif italic text-white leading-[1.1]"
//                 style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)" }}
//               >
//                 {t("intro.text1")
//                   .split(" ")
//                   .map((word, i) => (
//                     <span
//                       key={i}
//                       className="inline-block overflow-hidden mr-3 pb-4 -mb-4"
//                     >
//                       <motion.span
//                         initial={{ y: "100%" }}
//                         whileInView={{ y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 1,
//                           delay: i * 0.1,
//                           ease: [0.16, 1, 0.3, 1],
//                         }}
//                         className="inline-block"
//                       >
//                         {word}
//                       </motion.span>
//                     </span>
//                   ))}
//               </h1>
//               {/* Gold Accent Line */}
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: "80px" }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 className="h-px bg-[#BA8C61]"
//               />
//             </div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="text-white/90 font-light leading-relaxed max-w-md italic"
//               style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)" }}
//             >
//               {t("intro.text2")}
//             </motion.p>
//           </div>

//           <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
//             <motion.div
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1.2, ease: "circOut" }}
//               className="relative w-full lg:w-[90%] aspect-[14/10] overflow-hidden border border-[#BA8C61]/20 shadow-2xl group cursor-default"
//             >
//               <img
//                 src={Both_Image}
//                 alt="Partners"
//                 className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E2E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//               <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 text-left">
//                 <p className="text-white font-serif italic text-base lg:text-lg">
//                   Dr. jur. Raimonda Kraemer, LL.M.
//                 </p>
//                 <p className="text-white font-serif italic text-base lg:text-lg">
//                   Aurelija Maumevičė, LL.M.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 2: SERVICES (HORIZONTAL) --- */}
//       <section
//         ref={horizontalRef}
//         className="horizontal-container bg-[#1A1E2E] border-y border-white/5"
//       >
//         <div className="flex flex-col lg:flex-row lg:w-[150%] h-auto lg:h-screen">
//           {/* Intro Slide */}
//           <div className="service-slide flex-shrink-0 w-full lg:w-screen h-[40vh] lg:h-full flex items-center px-6 lg:px-32 border-b lg:border-b-0 border-white/5">
//             <div className="max-w-4xl text-left">
//               <h2
//                 className="font-serif italic mb-8 leading-tight text-white"
//                 style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}
//               >
//                 {t("servicesSection.title")}
//               </h2>
//               <div className="flex items-center gap-6 text-[#BA8C61] group">
//                 <span className="text-[12px] lg:text-sm tracking-[0.4em] uppercase font-bold text-white/60">
//                   {t("servicesSection.slide")}
//                 </span>
//                 <ArrowRight
//                   size={32}
//                   className="group-hover:translate-x-3 transition-transform"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Service Cards */}
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center px-6 lg:px-20 py-20 lg:py-0 border-b lg:border-b-0 border-white/5"
//             >
//               <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
//                 <div className="relative w-full md:w-[60%] lg:w-[40%] aspect-[4/5] overflow-hidden border border-white/10 bg-[#262B3E]">
//                   <img
//                     src={index % 2 === 0 ? Rai_Image : Auri_Image}
//                     className="w-full h-full object-cover"
//                     alt="Partner Service"
//                   />
//                   <div className="absolute top-4 left-6 text-7xl lg:text-[10rem] font-serif text-white/[0.03] select-none">
//                     0{index + 1}
//                   </div>
//                 </div>
//                 <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-6 text-left">
//                   <h3
//                     className="font-serif italic text-[#BA8C61] leading-tight"
//                     style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }}
//                   >
//                     {service.headline || service.title}
//                   </h3>
//                   <p
//                     className="text-white/80 font-light leading-relaxed"
//                     style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
//                   >
//                     {service.content}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- SECTION 3: ADVANTAGES --- */}
//       <section className="py-24 lg:py-48 px-6 bg-[#262B3E] relative z-20">
//         <div className="max-w-[1300px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 text-left">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5"
//           >
//             <h2
//               className="font-serif leading-[1.1] tracking-tighter text-white"
//               style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)" }}
//             >
//               {t("servicesSection.legacy")}
//             </h2>
//           </motion.div>

//           <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
//             {advantages.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-8 bg-white/[0.03] border border-white/5 rounded-sm group hover:border-[#BA8C61]/30 transition-all duration-500"
//               >
//                 <ShieldCheck
//                   className="text-[#BA8C61] mb-6"
//                   size={32}
//                   strokeWidth={1.5}
//                 />
//                 <h4 className="text-2xl font-serif italic text-white mb-4">
//                   {item.title}
//                 </h4>
//                 <p className="text-white/60 font-light leading-relaxed text-base group-hover:text-white/80 transition-colors">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 4: CTA (REMOVED BLACK) --- */}
//       <section className="py-32 flex flex-col items-center text-center px-6 bg-[#202435] border-t border-white/5">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="font-serif italic text-white mb-10 tracking-tight"
//           style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
//         >
//           {t("servicesSection.contactButton")}
//         </motion.h2>

//         <motion.div
//           onClick={scrollToContact}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-20 h-20 rounded-full border border-[#BA8C61] flex items-center justify-center text-[#BA8C61] cursor-pointer transition-all duration-500 hover:bg-[#BA8C61] hover:text-[#1A1E2E]"
//         >
//           <Send size={32} strokeWidth={1.5} />
//         </motion.div>
//       </section>
//     </div>
//   );
// }

//======================================================================
import React, { useEffect, useRef } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion"; // Cleaned up imports
import { useTranslation } from "react-i18next";
import { ShieldCheck, ArrowRight, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rai_Image from "../assets/Rai_Image.jpeg";
import Auri_Image from "../assets/Auri_Image.jpeg";
import Both_Image from "../assets/Both_Image.png";

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const { t } = useTranslation("highlights");
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  // --- SPOTLIGHT LOGIC FOR CTA ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

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
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-20 bg-[#262B3E] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
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
            <div className="space-y-4">
              <h1
                className="font-serif italic text-white leading-[1.1]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.2rem)" }}
              >
                {t("intro.text1")
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden mr-3 pb-4 -mb-4"
                    >
                      <motion.span
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
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
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-px bg-[#BA8C61]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/90 font-light leading-relaxed max-w-md italic"
              style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)" }}
            >
              {t("intro.text2")}
            </motion.p>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative w-full lg:w-[90%] aspect-[14/10] overflow-hidden border border-[#BA8C61]/20 shadow-2xl group cursor-default"
            >
              <img
                src={Both_Image}
                alt="Partners"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E2E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
        className="horizontal-container bg-[#1A1E2E] border-y border-white/5"
      >
        <div className="flex flex-col lg:flex-row lg:w-[150%] h-auto lg:h-screen">
          <div className="service-slide flex-shrink-0 w-full lg:w-screen h-[40vh] lg:h-full flex items-center px-6 lg:px-32 border-b lg:border-b-0 border-white/5">
            <div className="max-w-4xl text-left">
              <h2
                className="font-serif italic mb-8 leading-tight text-white"
                style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}
              >
                {t("servicesSection.title")}
              </h2>
              <div className="flex items-center gap-6 text-[#BA8C61] group">
                <span className="text-[12px] lg:text-sm tracking-[0.4em] uppercase font-bold text-white/60">
                  {t("servicesSection.slide")}
                </span>
                <ArrowRight
                  size={32}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </div>
            </div>
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center px-6 lg:px-20 py-20 lg:py-0 border-b lg:border-b-0 border-white/5"
            >
              <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                <div className="relative w-full md:w-[60%] lg:w-[40%] aspect-[4/5] overflow-hidden border border-white/10 bg-[#262B3E]">
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
                    className="font-serif italic text-[#BA8C61] leading-tight"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }}
                  >
                    {service.headline || service.title}
                  </h3>
                  <p
                    className="text-white/80 font-light leading-relaxed"
                    style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
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
              className="font-serif leading-[1.1] tracking-tighter text-white"
              style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)" }}
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
                className="p-8 bg-white/[0.03] border border-white/5 rounded-sm group hover:border-[#BA8C61]/30 transition-all duration-500"
              >
                <ShieldCheck
                  className="text-[#BA8C61] mb-6"
                  size={32}
                  strokeWidth={1.5}
                />
                <h4 className="text-2xl font-serif italic text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-white/60 font-light leading-relaxed text-base group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CTA WITH HIGH-INTENSITY SPOTLIGHT --- */}
      <section
        onMouseMove={handleMouseMove}
        className="relative py-32 flex flex-col items-center text-center px-6 bg-[#202435] border-t border-white/5 overflow-hidden group/cta"
      >
        {/* The Mouse Spotlight Engine */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover/cta:opacity-100 transition duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(186, 140, 97, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 font-serif italic text-white mb-10 tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("servicesSection.contactButton")}
        </motion.h2>

        <motion.div
          onClick={scrollToContact}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 w-20 h-20 rounded-full border border-[#BA8C61] flex items-center justify-center text-[#BA8C61] cursor-pointer transition-all duration-500 hover:bg-[#BA8C61] hover:text-[#1A1E2E] shadow-[0_0_30px_rgba(186,140,97,0.1)]"
        >
          <Send size={32} strokeWidth={1.5} />
        </motion.div>
      </section>
    </div>
  );
}

// import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { ShieldCheck, Plus, Scale, ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Assets
// import Both_Image from "../assets/Both_Image.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");
//   const containerRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const advantages = t("advantages.items", { returnObjects: true }) || [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Elegant Entrance for Cards (Scaling + Fade)
//       gsap.from(".service-card", {
//         y: 40,
//         opacity: 0,
//         scale: 0.98,
//         duration: 1,
//         stagger: 0.15,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: ".services-grid",
//           start: "top 85%",
//         },
//       });

//       // 2. MAGNETIC EFFECT: Cards follow mouse subtly
//       const cards = gsap.utils.toArray(".service-card");
//       cards.forEach((card) => {
//         const glow = card.querySelector(".card-glow");

//         card.addEventListener("mousemove", (e) => {
//           const rect = card.getBoundingClientRect();
//           const x = e.clientX - rect.left;
//           const y = e.clientY - rect.top;

//           // Move the glow spotlight
//           gsap.to(glow, {
//             opacity: 1,
//             x: x - 150, // center the 300px glow
//             y: y - 150,
//             duration: 0.4,
//           });

//           // Subtle tilt
//           const tiltX = (y - rect.height / 2) * 0.01;
//           const tiltY = (x - rect.width / 2) * -0.01;
//           gsap.to(card, {
//             rotateX: tiltX,
//             rotateY: tiltY,
//             scale: 1.01,
//             duration: 0.5,
//           });
//         });

//         card.addEventListener("mouseleave", () => {
//           gsap.to(glow, { opacity: 0, duration: 0.4 });
//           gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#262B3E] text-white selection:bg-[#BA8C61] font-sans antialiased overflow-hidden"
//     >
//       <div className="max-w-[1550px] mx-auto ">
//         {/* --- SECTION 1: HERO --- */}
//         <section className="relative min-h-[70vh] flex items-center px-6 lg:px-12 py-20">
//           <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
//             <div className="lg:col-span-7 space-y-10 z-10">
//               <p className="text-[#BA8C61] font-mono text-[13px] tracking-[0.5em] uppercase font-bold">
//                 International Jurisprudence
//               </p>
//               <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif italic leading-[1.1] text-white tracking-tight">
//                 {t("intro.text1")}
//               </h1>
//               <div className="max-w-md space-y-6">
//                 <div className="h-px w-full bg-white/50" />
//                 <p className="text-white/70 font-light text-[20px] leading-relaxed italic font-serif">
//                   {t("intro.text2")}
//                 </p>
//               </div>
//             </div>
//             <div className="lg:col-span-5 relative">
//               <div className="aspect-[16/10] overflow-hidden rounded-sm border border-white/10 p-2 bg-white/5">
//                 <img
//                   src={Both_Image}
//                   className="w-full h-full object-cover brightness-110"
//                   alt="Partners"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* --- SECTION 2: SERVICES (The Fixed Part) --- */}
//         <section className="py-24 px-6 lg:px-12 bg-[#1E2335]/50">
//           <div className="flex justify-between items-end mb-16">
//             <h2 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tighter">
//               {t("servicesSection.title")}
//             </h2>
//             <div className="hidden md:flex items-center gap-2 text-[#BA8C61]/50 font-mono text-[15px] tracking-widest uppercase">
//               <Scale size={14} /> / Expertise Areas
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6 services-grid">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="service-card group relative bg-[#2D334D] p-10 lg:p-14 rounded-sm border border-white/[0.05] transition-colors duration-500 hover:border-[#BA8C61]/30 overflow-hidden"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {/* GSAP Controlled Glow - This removes the "Gray" feeling */}
//                 <div className="card-glow absolute w-[300px] h-[300px] bg-[#BA8C61]/10 blur-[100px] rounded-full opacity-0 pointer-events-none" />

//                 <div className="relative z-10 space-y-6">
//                   <div className="flex justify-between items-start">
//                     <span className="text-[#BA8C61] font-mono text-xs">
//                       0{index + 1}
//                     </span>
//                     <ArrowUpRight
//                       size={20}
//                       className="text-white/10 group-hover:text-[#BA8C61] transition-colors"
//                     />
//                   </div>

//                   <h3 className="text-2xl lg:text-3xl font-serif italic text-white group-hover:text-white transition-colors">
//                     {service.headline || service.title}
//                   </h3>

//                   <p className="text-white/70 leading-relaxed font-light text-sm lg:text-lg group-hover:text-white/70 transition-colors">
//                     {service.content}
//                   </p>

//                   <div className="flex flex-wrap gap-2 pt-4">
//                     {service.keywords?.map((kw, i) => (
//                       <span
//                         key={i}
//                         className="text-[15px] tracking-widest uppercase text-white/70 border border-white/10 px-3 py-1 bg-[#262B3E]"
//                       >
//                         {kw}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- SECTION 3: ADVANTAGES --- */}
//         <section className="py-24 px-6 lg:px-12">
//           <div className="grid lg:grid-cols-12 gap-16">
//             <div className="lg:col-span-4">
//               <h2 className="text-4xl font-serif italic text-white sticky top-24">
//                 {t("servicesSection.legacy")}
//               </h2>
//             </div>
//             <div className="lg:col-span-8 grid md:grid-cols-2 gap-10">
//               {advantages.map((item, i) => (
//                 <div
//                   key={i}
//                   className="p-8 border-l border-white/5 hover:border-[#BA8C61] transition-all duration-500 bg-white/[0.02]"
//                 >
//                   <ShieldCheck
//                     className="text-[#BA8C61] mb-6"
//                     size={24}
//                     strokeWidth={1}
//                   />
//                   <h4 className="text-xl font-serif italic text-white mb-4">
//                     {item.title}
//                   </h4>
//                   <p className="text-white/70 text-lg leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- SECTION 4: CTA --- */}
//         <section className="py-40 flex flex-col items-center justify-center text-center">
//           <motion.div whileHover={{ y: -5 }} className="group cursor-pointer">
//             <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
//               Ready to Connect
//             </p>
//             <h2 className="text-4xl lg:text-5xl font-serif italic text-white group-hover:text-[#BA8C61] transition-colors">
//               {t("servicesSection.contactButton")}
//             </h2>
//             <div className="mt-10 flex justify-center">
//               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#BA8C61] group-hover:border-[#BA8C61] transition-all duration-500">
//                 <Plus className="text-white transition-transform group-hover:rotate-90" />
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// }

// =======================================================================
// =======================================================================
// import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { ShieldCheck, Plus, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";
// import Both_Image from "../assets/Both_Image.png";
// import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");

//   const containerRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];

//   const advantages = t("advantages.items", { returnObjects: true }) || [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Text Mask Animation

//       gsap.from(".mask-text", {
//         yPercent: 100,

//         duration: 1.5,

//         stagger: 0.1,

//         ease: "expo.out",

//         scrollTrigger: {
//           trigger: ".mask-text",

//           start: "top 90%",
//         },
//       });

//       // Horizontal Scroll Logic

//       const mm = gsap.matchMedia();

//       mm.add("(min-width: 1024px)", () => {
//         const sections = gsap.utils.toArray(".service-slide");

//         gsap.to(sections, {
//           xPercent: -100 * (sections.length - 1),

//           ease: "none",

//           scrollTrigger: {
//             trigger: ".horizontal-container",

//             pin: true,

//             scrub: 1,

//             snap: 1 / (sections.length - 1),

//             end: () =>
//               "+=" +
//               document.querySelector(".horizontal-container").offsetWidth,
//           },
//         });
//       });

//       // Advantage Card Stagger

//       gsap.from(".advantage-card", {
//         opacity: 0,

//         y: 40,

//         stagger: 0.2,

//         duration: 1,

//         ease: "power3.out",

//         scrollTrigger: {
//           trigger: ".advantages-grid",

//           start: "top 85%",
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#262B3E] text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white font-sans antialiased"
//     >
//       {/* --- SECTION 1: THE MANIFESTO --- */}

//       <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-32 bg-[#0D0F16] overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
//           <motion.h2
//             style={{ x: "-10%" }}
//             whileInView={{ x: "10%" }}
//             transition={{
//               duration: 20,

//               repeat: Infinity,

//               repeatType: "mirror",
//             }}
//             className="text-[30vw] font-serif italic whitespace-nowrap outline-text text-white"
//           >
//             PARTNERSHIP — PARTNERSHIP
//           </motion.h2>
//         </div>

//         <div className="max-w-[1400px] w-full grid lg:grid-cols-12 gap-10 items-center z-10">
//           {/* LEFT */}

//           <div className="lg:col-span-6 space-y-12 order-2 lg:order-1">
//             <div className="space-y-6">
//               <h1 className="text-5xl md:text-7xl lg:text-[3.5rem] font-serif italic leading-[0.85] text-white tracking-tighter">
//                 {t("intro.text1")
//                   .split(" ")

//                   .map((word, i) => (
//                     <span key={i} className="inline-block overflow-hidden mr-4">
//                       <motion.span
//                         initial={{ y: "100%" }}
//                         whileInView={{ y: 0 }}
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
//             </div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="text-white/80 font-light text-lg lg:text-xl leading-relaxed max-w-md italic"
//             >
//               {t("intro.text2")}
//             </motion.p>
//           </div>

//           {/* RIGHT (UPDATED SINGLE IMAGE) */}

//           <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end gap-6 order-1 lg:order-2 h-[600px]">
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1.5, ease: "circOut" }}
//               whileHover={{ scale: 1.02, zIndex: 50 }}
//               className="relative w-[95%] lg:w-[85%] aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
//             >
//               <img
//                 src={Both_Image}
//                 alt="Partners"
//                 className="w-full h-full object-cover object-center grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
//                 <p className="text-[#BA8C61] font-mono text-[10px] tracking-widest uppercase mb-2">
//                   Founding Partners
//                 </p>

//                 <p className="text-white font-serif italic text-lg leading-snug">
//                   Dr. jur. Raimonda Kraemer, LL.M.
//                 </p>

//                 <p className="text-white font-serif italic text-lg leading-snug">
//                   Aurelija Maumevičė, LL.M.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           animate={{
//             y: [0, -20, 0],

//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{ duration: 5, repeat: Infinity }}
//           className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#BA8C61] rounded-full blur-[150px] pointer-events-none"
//         />
//       </section>

//       {/* --- SECTION 2: SERVICES --- */}

//       <section className="horizontal-container bg-white/[0.01] border-y border-white/5">
//         <div className="flex flex-col lg:flex-row lg:w-[150%] h-auto lg:h-screen">
//           <div className="service-slide flex-shrink-0 w-full lg:w-screen h-[50vh] lg:h-full flex items-center px-6 lg:px-32 border-b lg:border-b-0 border-white/5">
//             <div className="max-w-4xl">
//               <h2 className="text-5xl md:text-8xl lg:text-[5rem] font-serif italic mb-8 lg:mb-12 leading-tight">
//                 {t("servicesSection.title")}
//               </h2>

//               <div className="flex items-center gap-6 text-white/30 group cursor-pointer lg:hover:text-[#BA8C61] transition-colors">
//                 <span className="text-[10px] lg:text-sm tracking-[0.3em] uppercase font-semibold">
//                   {t("servicesSection.slide")}
//                 </span>

//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-3 transition-transform hidden lg:block"
//                 />
//               </div>
//             </div>
//           </div>

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-slide flex-shrink-0 w-full lg:w-screen h-auto lg:h-full flex items-center justify-center px-6 lg:px-20 py-20 lg:py-0 border-b lg:border-b-0 border-white/5"
//             >
//               <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
//                 <div className="relative w-full md:w-[70%] lg:w-[45%] flex-shrink-0 aspect-[4/5] overflow-hidden border border-white/10 bg-[#1a1e2e]">
//                   <img
//                     src={index % 2 === 0 ? Rai_Image : Auri_Image}
//                     className="w-full h-full object-cover opacity-20 grayscale"
//                     alt="Partner Service"
//                   />

//                   <div className="absolute top-4 left-6 text-7xl lg:text-9xl font-serif text-white/[0.03] select-none">
//                     0{index + 1}
//                   </div>
//                 </div>

//                 <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-6 lg:space-y-8">
//                   <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic">
//                     {service.headline || service.title}
//                   </h3>

//                   <p className="text-white/50">{service.content}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- SECTION 3 --- */}

//       <section className="py-20 lg:py-56 px-6">
//         <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
//           <div className="lg:col-span-5">
//             <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">
//               {t("servicesSection.legacy")}
//             </h2>
//           </div>

//           <div className="lg:col-span-7 advantages-grid">
//             {advantages.map((item, i) => (
//               <div key={i} className="advantage-card p-8">
//                 <ShieldCheck />

//                 <h4>{item.title}</h4>

//                 <p>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SECTION 4 --- */}

//       <section className="py-32 flex flex-col items-center">
//         <h2>{t("servicesSection.contactButton")}</h2>

//         <Plus />
//       </section>
//     </div>
//   );
// }

//=====================================================================
//=====================================================================
import { useTranslation } from "react-i18next";
import { ShieldCheck, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
            // Improved end calculation to prevent disappearing content
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

  return (
    <div
      ref={containerRef}
      className="bg-[#262B3E] text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white font-sans antialiased"
    >
      {/* --- SECTION 1: THE MANIFESTO --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 py-32 bg-[#0D0F16] overflow-hidden">
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
          <div className="lg:col-span-6 space-y-12 order-2 lg:order-1 text-left">
            <h1 className="text-5xl md:text-7xl lg:text-[3.5rem] font-serif italic leading-[0.85] text-white tracking-tighter">
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/80 font-light text-lg lg:text-xl leading-relaxed max-w-md italic"
            >
              {t("intro.text2")}
            </motion.p>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end gap-6 order-1 lg:order-2 h-[600px]">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="relative w-[95%] lg:w-[85%] aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
            >
              <img
                src={Both_Image}
                alt="Partners"
                className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                <p className="text-white font-serif italic text-lg leading-snug">
                  Dr. jur. Raimonda Kraemer, LL.M.
                </p>
                <p className="text-white font-serif italic text-lg leading-snug">
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
          <div className="service-slide flex-shrink-0 w-full lg:w-screen h-[50vh] lg:h-full flex items-center px-6 lg:px-32 border-b lg:border-b-0 border-white/5">
            <div className="max-w-4xl text-left">
              <h2 className="text-5xl md:text-8xl lg:text-[5rem] font-serif italic mb-8 lg:mb-12 leading-tight">
                {t("servicesSection.title")}
              </h2>
              <div className="flex items-center gap-6 text-white group">
                <span className="text-[13px] lg:text-xl tracking-[0.3em] uppercase font-semibold">
                  {t("servicesSection.slide")}
                </span>
                <ArrowRight
                  size={36}
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
              <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                <div className="relative w-full md:w-[70%] lg:w-[45%] flex-shrink-0 aspect-[4/5] overflow-hidden border border-white/10 bg-[#1a1e2e]">
                  <img
                    src={index % 2 === 0 ? Rai_Image : Auri_Image}
                    className="w-full h-full object-cover"
                    alt="Partner Service"
                  />
                  <div className="absolute top-4 left-6 text-7xl lg:text-9xl font-serif text-white/[0.03] select-none">
                    0{index + 1}
                  </div>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-6 lg:space-y-8 text-left">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic">
                    {service.headline || service.title}
                  </h3>
                  <p className="text-white text-2xl font-light leading-relaxed">
                    {service.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: ADVANTAGES (CONVERTED TO FRAMER MOTION) --- */}
      <section className="py-20 lg:py-56 px-6 bg-[#262B3E] relative z-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tighter">
              {t("servicesSection.legacy")}
            </h2>
          </motion.div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-sm group hover:border-[#BA8C61]/30 transition-all duration-500"
              >
                <ShieldCheck
                  className="text-[#BA8C61] mb-8"
                  size={40}
                  strokeWidth={1}
                />
                <h4 className="text-2xl font-serif italic text-white mb-5 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-400 font-light leading-relaxed text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-40 flex flex-col items-center text-center px-6 bg-[#0D0F16]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-serif italic text-white mb-12 tracking-tight"
        >
          {t("servicesSection.contactButton")}
        </motion.h2>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 90 }}
          className="w-24 h-24 rounded-full border-2 border-[#BA8C61] flex items-center justify-center text-[#BA8C61] cursor-pointer hover:bg-[#BA8C61] hover:text-[#0D0F16] transition-colors"
        >
          <Plus size={48} strokeWidth={1.5} />
        </motion.div>
      </section>
    </div>
  );
}

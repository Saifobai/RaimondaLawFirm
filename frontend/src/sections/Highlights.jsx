// import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   UserCheck,
//   Scale,
//   Gavel,
//   ArrowUpRight,
//   Globe,
//   ShieldCheck,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Assets
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");
//   const billboardRef = useRef(null);
//   const containerRef = useRef(null);
//   const gridRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const advantages = t("advantages.items", { returnObjects: true }) || [];
//   const serviceIcons = [UserCheck, Scale, Globe];

//   useEffect(() => {
//     const texts = gsap.utils.toArray(".billboard-text");

//     // 1. PINNING THE BACKGROUND
//     ScrollTrigger.create({
//       trigger: billboardRef.current,
//       start: "top top",
//       end: "+=2500",
//       pin: true,
//       scrub: true,
//     });

//     // 2. PARALLAX GRID EFFECT
//     gsap.to(gridRef.current, {
//       backgroundPosition: "0px 100px",
//       ease: "none",
//       scrollTrigger: {
//         trigger: billboardRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     // 3. HIGH-END TEXT CYCLE (The "Award" Animation)
//     const masterTl = gsap.timeline({ repeat: -1 });

//     texts.forEach((text, i) => {
//       // Split text into characters for a staggered reveal (Simulated here with a sub-timeline)
//       const sectionTl = gsap.timeline();

//       sectionTl
//         .fromTo(
//           text,
//           { opacity: 0, scale: 1.1, filter: "blur(20px)", y: 40 },
//           {
//             opacity: 1,
//             scale: 1,
//             filter: "blur(0px)",
//             y: 0,
//             duration: 1.5,
//             ease: "expo.out",
//           },
//         )
//         .to(
//           text,
//           {
//             opacity: 0,
//             scale: 0.9,
//             filter: "blur(20px)",
//             y: -40,
//             duration: 1.2,
//             ease: "expo.in",
//           },
//           "+=3",
//         ); // Display time

//       masterTl.add(sectionTl);
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#0D0F16] selection:bg-[#BA8C61] selection:text-[#0D0F16]"
//     >
//       {/* 1. CINEMATIC BILLBOARD INTRO */}
//       <section
//         ref={billboardRef}
//         className="h-screen flex items-center justify-center px-6 overflow-hidden relative bg-[#0D0F16]"
//       >
//         {/* Animated Master Grid Background */}
//         <div
//           ref={gridRef}
//           className="absolute inset-0 opacity-[0.1] pointer-events-none transition-opacity duration-1000"
//           style={{
//             backgroundImage: `linear-gradient(#BA8C61 1px, transparent 1px), linear-gradient(90deg, #BA8C61 1px, transparent 1px)`,
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* Floating Gradient Orbs for Depth */}
//         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#BA8C61]/10 rounded-full blur-[120px] animate-pulse" />
//         <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#BA8C61]/5 rounded-full blur-[120px]" />

//         <div className="max-w-[1400px] w-full text-center relative h-[400px] flex items-center justify-center">
//           {/* Text Layers */}
//           <div className="billboard-text absolute w-full flex flex-col items-center">
//             <span className="text-[#BA8C61] text-[10px] uppercase tracking-[0.8em] mb-8 font-black opacity-60">
//               Legal Philosophy
//             </span>
//             <h2 className="text-5xl md:text-6xl font-serif italic text-white leading-[1.1] max-w-5xl">
//               {t("intro.text1")}
//             </h2>
//           </div>

//           <div className="billboard-text absolute w-full flex flex-col items-center">
//             <span className="text-[#BA8C61] text-[10px] uppercase tracking-[0.8em] mb-8 font-black opacity-60">
//               Strategic Advisory
//             </span>
//             <h2 className="text-4xl md:text-6xl font-serif text-white/90 leading-tight max-w-4xl font-light">
//               {t("intro.text2")}
//             </h2>
//           </div>

//           <div className="billboard-text absolute w-full flex flex-col items-center">
//             <span className="text-[#BA8C61] text-[10px] uppercase tracking-[0.8em] mb-8 font-black opacity-60">
//               Cross-Border Excellence
//             </span>
//             <h2 className="text-3xl md:text-5xl font-serif text-[#BA8C61] italic leading-relaxed max-w-4xl">
//               {t("intro.text3")}
//             </h2>
//           </div>
//         </div>

//         {/* Navigation / Branding accents */}
//         <div className="absolute top-12 left-12 overflow-hidden">
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             className="text-white text-[9px] tracking-[0.4em] font-bold border-l border-[#BA8C61] pl-4"
//           >
//             RAI & AURI <br />
//             <span className="text-white/40">ASSOCIATES</span>
//           </motion.div>
//         </div>

//         {/* Scroll/Progress Indicator */}
//         <div className="absolute bottom-12 flex flex-col items-center gap-4">
//           <div className="relative w-12 h-12 flex items-center justify-center">
//             <svg className="w-full h-full rotate-[-90deg]">
//               <circle
//                 cx="24"
//                 cy="24"
//                 r="22"
//                 stroke="white"
//                 strokeWidth="0.5"
//                 fill="none"
//                 opacity="0.1"
//               />
//               <motion.circle
//                 cx="24"
//                 cy="24"
//                 r="22"
//                 stroke="#BA8C61"
//                 strokeWidth="1"
//                 fill="none"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{
//                   duration: 13.5,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//             </svg>
//             <ArrowUpRight
//               className="absolute text-[#BA8C61] rotate-45"
//               size={14}
//             />
//           </div>
//           <span className="text-[#BA8C61] text-[8px] uppercase tracking-[0.6em] font-black">
//             Scroll to Begin
//           </span>
//         </div>
//       </section>

//       {/* 2. SERVICES SECTION (Keep your existing solid architecture) */}
//       <section className="py-32 lg:py-56 px-6 relative z-10 bg-[#0D0F16]">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="grid lg:grid-cols-2 gap-10 mb-32 items-end">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-6xl lg:text-[7rem] font-serif italic text-white leading-[0.8] tracking-tighter">
//                 {t("servicesSection.title")}
//               </h2>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="lg:pl-20 border-l border-white/10"
//             >
//               <p className="text-white/50 text-xl lg:text-2xl font-light italic leading-relaxed max-w-md">
//                 {t("servicesSection.sideTitle")}
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 border border-white/10 backdrop-blur-sm">
//             <div className="lg:col-span-3 border-r border-white/10 overflow-hidden group">
//               <div className="h-[500px] lg:h-full relative">
//                 <img
//                   src={Rai_Image}
//                   className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
//                   alt="Partner"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F16] via-transparent" />
//                 <div className="absolute bottom-10 left-10">
//                   <p className="text-[#BA8C61] text-[10px] uppercase font-bold tracking-widest">
//                     Partner
//                   </p>
//                   <h4 className="text-3xl font-serif italic text-white">Rai</h4>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-6 flex flex-col divide-y divide-white/10 bg-white/[0.01]">
//               {services.map((service, index) => {
//                 const Icon = serviceIcons[index] || Gavel;
//                 return (
//                   <motion.div
//                     key={index}
//                     whileHover={{ backgroundColor: "rgba(186, 140, 97, 0.05)" }}
//                     className="p-12 lg:p-16 group relative transition-all duration-500"
//                   >
//                     <div className="flex justify-between items-start mb-8">
//                       <Icon
//                         className="text-[#BA8C61] group-hover:scale-110 transition-transform"
//                         size={32}
//                         strokeWidth={1}
//                       />
//                       <span className="text-white/5 font-serif italic text-7xl group-hover:text-[#BA8C61]/10 transition-colors">
//                         0{index + 1}
//                       </span>
//                     </div>
//                     <h3 className="text-2xl lg:text-4xl font-serif text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
//                       {service.headline || service.title}
//                     </h3>
//                     <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
//                       {service.content}
//                     </p>
//                     {service.keywords && (
//                       <div className="flex flex-wrap gap-2">
//                         {service.keywords.map((kw, i) => (
//                           <span
//                             key={i}
//                             className="text-[9px] border border-white/10 px-3 py-1 text-white/30 uppercase tracking-[0.2em] rounded-full group-hover:border-[#BA8C61]/30 transition-colors"
//                           >
//                             {kw}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>

//             <div className="lg:col-span-3 border-l border-white/10 overflow-hidden group">
//               <div className="h-[500px] lg:h-full relative">
//                 <img
//                   src={Auri_Image}
//                   className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
//                   alt="Partner"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F16] via-transparent" />
//                 <div className="absolute bottom-10 left-10">
//                   <p className="text-[#BA8C61] text-[10px] uppercase font-bold tracking-widest">
//                     Partner
//                   </p>
//                   <h4 className="text-3xl font-serif italic text-white">
//                     Auri
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. PRECISION ADVANTAGES */}
//       <section className="py-32 px-6 bg-[#0A0C12]">
//         <div className="max-w-[1400px] mx-auto">
//           <div className="flex flex-col items-center mb-24">
//             <span className="text-[#BA8C61] text-xs font-bold uppercase tracking-[0.5em] mb-4">
//               Value Proposition
//             </span>
//             <h3 className="text-4xl lg:text-6xl font-serif italic text-white text-center">
//               {t("advantages.title")}
//             </h3>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
//             {advantages.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-[#0D0F16] p-12 hover:bg-white/[0.04] transition-all group relative"
//               >
//                 <div className="absolute top-0 left-0 w-1 h-0 bg-[#BA8C61] group-hover:h-full transition-all duration-700" />
//                 <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#BA8C61]/50 transition-colors">
//                   <ShieldCheck
//                     className="text-[#BA8C61]"
//                     size={24}
//                     strokeWidth={1}
//                   />
//                 </div>
//                 <h4 className="text-xl font-serif text-white mb-4 italic tracking-wide">
//                   {item.title}
//                 </h4>
//                 <p className="text-white/40 text-sm leading-relaxed font-light">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. FOOTER CTA */}
//       <section className="py-40 px-6 text-center bg-[#0D0F16] relative overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BA8C61]/5 rounded-full blur-[120px] pointer-events-none" />
//         <motion.div
//           whileInView={{ opacity: [0, 1], y: [20, 0] }}
//           className="max-w-4xl mx-auto space-y-12 relative z-10"
//         >
//           <h2 className="text-5xl lg:text-9xl font-serif italic text-white tracking-tighter leading-none">
//             Your Future, <br /> <span className="text-[#BA8C61]">Secured.</span>
//           </h2>
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-6 bg-[#BA8C61] text-[#0D0F16] px-16 py-8 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all duration-700 group shadow-2xl"
//           >
//             {t("servicesSection.contactButton")}
//             <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

//============================================================
//============================================================
// import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   UserCheck,
//   Scale,
//   Gavel,
//   ArrowUpRight,
//   Globe,
//   ShieldCheck,
// } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Assets
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");
//   const containerRef = useRef(null);
//   const introRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const advantages = t("advantages.items", { returnObjects: true }) || [];
//   const serviceIcons = [UserCheck, Scale, Globe];

//   // Smooth Scroll Parallax for the images
//   const { scrollYProgress } = useScroll({
//     target: introRef,
//     offset: ["start start", "end start"],
//   });

//   const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//   useEffect(() => {
//     // Elegant reveal for service cards
//     gsap.from(".reveal-card", {
//       scrollTrigger: {
//         trigger: ".services-container",
//         start: "top 70%",
//       },
//       y: 100,
//       opacity: 0,
//       stagger: 0.2,
//       duration: 1.5,
//       ease: "expo.out",
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#0D0F16] text-white selection:bg-[#BA8C61]"
//     >
//       {/* 1. HERO: ASYMMETRIC OVERLAP DESIGN */}
//       <section
//         ref={introRef}
//         className="relative min-h-screen flex items-center px-6 lg:px-20 py-32 overflow-hidden"
//       >
//         <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-10 items-center">
//           {/* Left: Floating Typography */}
//           <motion.div style={{ y: textY }} className="lg:col-span-7 z-20">
//             <h1 className="text-[12vw] lg:text-[5rem] font-serif italic leading-[0.85] tracking-tighter mb-12">
//               {t("intro.text1")}
//             </h1>
//             <div className="flex items-start gap-8 border-l border-[#BA8C61] pl-8 max-w-xl">
//               <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
//                 {t("intro.text2")}
//               </p>
//             </div>
//           </motion.div>

//           {/* Right: The "Art Gallery" Image Layer */}
//           <div className="lg:col-span-5 relative mt-20 lg:mt-0">
//             <motion.div
//               style={{ y: imgY }}
//               className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-2xl"
//             >
//               <img
//                 src={Rai_Image}
//                 className="w-full h-full object-cover grayscale brightness-75"
//                 alt="Partner"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F16] via-transparent opacity-60" />
//             </motion.div>

//             {/* The Overlapping Text3 Box */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               className="absolute -bottom-10 -left-10 lg:-left-20 z-20 bg-[#BA8C61] p-8 lg:p-12 max-w-xs lg:max-w-md shadow-2xl"
//             >
//               <h2 className="text-2xl lg:text-3xl font-serif italic text-[#0D0F16] leading-snug">
//                 {t("intro.text3")}
//               </h2>
//             </motion.div>
//           </div>
//         </div>

//         {/* Minimalist Background Decoration */}
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 transform origin-top pointer-events-none" />
//       </section>

//       {/* 2. SERVICES: THE BENTO-GALLERY HYBRID */}
//       <section className="services-container py-32 lg:py-64 px-6 relative">
//         <div className="max-w-[1400px] mx-auto">
//           <header className="mb-32">
//             <h2 className="text-6xl lg:text-[6rem] font-serif tracking-tighter leading-none opacity-10 absolute left-30 -top-10 select-none">
//               {t("servicesSection.title")}
//             </h2>
//             <div className="relative z-10 pt-20 flex flex-col lg:flex-row justify-between items-end gap-10">
//               <h3 className="text-5xl lg:text-7xl font-serif italic">
//                 {t("servicesSection.title")}
//               </h3>
//               <p className="text-[#BA8C61] text-xl font-light max-w-sm italic border-b border-[#BA8C61]/30 pb-4">
//                 {t("servicesSection.sideTitle")}
//               </p>
//             </div>
//           </header>

//           <div className="grid lg:grid-cols-3 gap-12">
//             {services.map((service, index) => {
//               const Icon = serviceIcons[index] || Gavel;
//               return (
//                 <div key={index} className="reveal-card group">
//                   <div className="mb-8 overflow-hidden aspect-video relative border border-white/5">
//                     {/* Unique logic: Alternate partner images as background for service cards */}
//                     <img
//                       src={index % 2 === 0 ? Auri_Image : Rai_Image}
//                       className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
//                       alt=""
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <Icon
//                         className="text-[#BA8C61] group-hover:scale-150 transition-transform duration-700"
//                         size={48}
//                         strokeWidth={0.5}
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-6">
//                     <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-bold">
//                       Category 0{index + 1}
//                     </span>
//                     <h4 className="text-3xl font-serif text-white group-hover:text-[#BA8C61] transition-colors">
//                       {service.headline || service.title}
//                     </h4>
//                     <p className="text-white/40 font-light leading-relaxed text-lg">
//                       {service.content}
//                     </p>
//                     <div className="flex flex-wrap gap-3 pt-4">
//                       {service.keywords?.map((kw, i) => (
//                         <span
//                           key={i}
//                           className="text-[9px] text-[#BA8C61] border border-[#BA8C61]/20 px-3 py-1 uppercase tracking-widest"
//                         >
//                           {kw}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 3. ADVANTAGES: THE "GOLDEN VERTICAL" GRID */}
//       <section className="py-32 lg:py-48 px-6 bg-white/[0.01] border-y border-white/5">
//         <div className="max-w-[1400px] mx-auto">
//           <div className="grid lg:grid-cols-12 gap-20 items-start">
//             <div className="lg:col-span-4 sticky top-32">
//               <h3 className="text-5xl lg:text-6xl font-serif leading-tight">
//                 {t("advantages.title")}
//               </h3>
//               <div className="mt-12 w-20 h-1 bg-[#BA8C61]" />
//             </div>

//             <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
//               {advantages.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-[#0D0F16] p-12 lg:p-16 hover:bg-white/[0.03] transition-colors group"
//                 >
//                   <ShieldCheck
//                     className="text-[#BA8C61] mb-8 group-hover:rotate-[360deg] transition-transform duration-1000"
//                     size={32}
//                     strokeWidth={1}
//                   />
//                   <h4 className="text-2xl font-serif text-white mb-6 italic">
//                     {item.title}
//                   </h4>
//                   <p className="text-white/40 text-sm leading-relaxed font-light">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. THE ULTIMATE CALL TO ACTION */}
//       <section className="py-64 px-6 text-center bg-[#0D0F16] relative overflow-hidden">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="relative z-10"
//         >
//           <a
//             href="#contact"
//             className="group relative inline-flex items-center justify-center px-20 py-10 overflow-hidden font-bold tracking-[0.5em] text-[12px] uppercase bg-transparent text-[#BA8C61] border border-[#BA8C61] transition duration-500 hover:text-[#0D0F16]"
//           >
//             <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out bg-[#BA8C61] group-hover:w-full"></span>
//             <span className="relative flex items-center gap-4">
//               {t("servicesSection.contactButton")}
//               <ArrowUpRight
//                 size={20}
//                 className="group-hover:rotate-45 transition-transform duration-500"
//               />
//             </span>
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

//================================================================
//================================================================
// import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import {
//   UserCheck,
//   Scale,
//   Gavel,
//   ArrowUpRight,
//   Globe,
//   ShieldCheck,
//   Plus,
// } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Assets
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");
//   const containerRef = useRef(null);
//   const horizontalSectionRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const advantages = t("advantages.items", { returnObjects: true }) || [];
//   const serviceIcons = [UserCheck, Scale, Globe];

//   useEffect(() => {
//     // 1. Smooth Fade-in for Content
//     const ctx = gsap.context(() => {
//       gsap.from(".reveal-text", {
//         y: 60,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.3,
//         ease: "power4.out",
//       });

//       // 2. Horizontal Scroll for Services (Desktop Luxury)
//       if (window.innerWidth > 1024) {
//         gsap.to(".horizontal-track", {
//           xPercent: -66, // Adjust based on number of items
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".horizontal-wrapper",
//             pin: true,
//             scrub: 1,
//             end: () =>
//               "+=" + document.querySelector(".horizontal-track").offsetWidth,
//           },
//         });
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#0A0B0E] text-white overflow-x-hidden selection:bg-[#BA8C61] selection:text-white"
//     >
//       {/* --- HERO: THE PARTNERSHIP PILLARS --- */}
//       <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24">
//         <div className="max-w-[1800px] mx-auto w-full grid lg:grid-cols-12 gap-10 items-end">
//           {/* Partner 1: Rai */}
//           <div className="hidden lg:block lg:col-span-3">
//             <motion.div
//               initial={{ clipPath: "inset(100% 0 0 0)" }}
//               whileInView={{ clipPath: "inset(0% 0 0 0)" }}
//               transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
//               className="aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
//             >
//               <img
//                 src={Rai_Image}
//                 alt="Partner Rai"
//                 className="w-full h-full object-cover scale-110"
//               />
//             </motion.div>
//             <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#BA8C61]">
//               Senior Partner / Rai
//             </p>
//           </div>

//           {/* Center Content */}
//           <div className="lg:col-span-6 text-center pb-20">
//             <h1 className="reveal-text text-[15vw] lg:text-[5rem] font-serif italic leading-none mb-8">
//               {t("intro.text1")}
//             </h1>
//             <div className="reveal-text h-px w-24 bg-[#BA8C61] mx-auto mb-8" />
//             <p className="reveal-text text-xl lg:text-2xl text-white/60 font-light max-w-xl mx-auto leading-relaxed">
//               {t("intro.text2")}
//             </p>
//           </div>

//           {/* Partner 2: Auri */}
//           <div className="hidden lg:block lg:col-span-3">
//             <motion.div
//               initial={{ clipPath: "inset(100% 0 0 0)" }}
//               whileInView={{ clipPath: "inset(0% 0 0 0)" }}
//               transition={{
//                 duration: 1.5,
//                 ease: [0.19, 1, 0.22, 1],
//                 delay: 0.2,
//               }}
//               className="aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
//             >
//               <img
//                 src={Auri_Image}
//                 alt="Partner Auri"
//                 className="w-full h-full object-cover scale-110"
//               />
//             </motion.div>
//             <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#BA8C61] text-right">
//               Senior Partner / Auri
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES: THE HORIZONTAL GALLERY --- */}
//       <section className="horizontal-wrapper bg-[#0D0F16] overflow-hidden">
//         <div className="h-screen flex flex-col justify-center">
//           <div className="px-6 lg:px-20 mb-12 flex justify-between items-end">
//             <div>
//               <span className="text-[#BA8C61] text-sm tracking-[0.4em] uppercase mb-4 block">
//                 Expertise
//               </span>
//               <h2 className="text-5xl lg:text-7xl font-serif italic">
//                 {t("servicesSection.title")}
//               </h2>
//             </div>
//             <p className="hidden lg:block text-white/40 max-w-xs text-right italic">
//               {t("servicesSection.sideTitle")}
//             </p>
//           </div>

//           <div className="horizontal-track flex gap-10 px-6 lg:px-20">
//             {services.map((service, index) => {
//               const Icon = serviceIcons[index] || Gavel;
//               return (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-[85vw] lg:w-[30vw] group"
//                 >
//                   <div className="relative aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-[#BA8C61]/50 transition-colors">
//                     <Icon
//                       className="text-[#BA8C61] opacity-50"
//                       size={32}
//                       strokeWidth={1}
//                     />
//                     <div>
//                       <span className="text-[10px] text-white/30 uppercase tracking-widest mb-2 block">
//                         0{index + 1}
//                       </span>
//                       <h3 className="text-3xl font-serif mb-4 group-hover:text-[#BA8C61] transition-colors">
//                         {service.headline || service.title}
//                       </h3>
//                     </div>
//                     {/* Ghost Image background on hover */}
//                     <img
//                       src={index % 2 === 0 ? Rai_Image : Auri_Image}
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
//                     />
//                   </div>
//                   <p className="mt-8 text-white/50 font-light leading-relaxed">
//                     {service.content}
//                   </p>
//                   <div className="mt-6 flex flex-wrap gap-2">
//                     {service.keywords?.map((kw, i) => (
//                       <span
//                         key={i}
//                         className="text-[9px] border border-white/10 px-2 py-1 uppercase tracking-tighter text-[#BA8C61]"
//                       >
//                         {kw}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* --- ADVANTAGES: THE ARCHITECTURAL GRID --- */}
//       <section className="py-32 lg:py-64 px-6 relative">
//         <div className="max-w-[1400px] mx-auto">
//           <div className="flex flex-col lg:flex-row gap-20">
//             <div className="lg:w-1/3">
//               <h2 className="text-6xl font-serif sticky top-40 leading-tight">
//                 {t("advantages.title")
//                   .split(" ")
//                   .map((word, i) => (
//                     <span
//                       key={i}
//                       className={
//                         i % 2 !== 0 ? "italic text-[#BA8C61] block" : "block"
//                       }
//                     >
//                       {word}{" "}
//                     </span>
//                   ))}
//               </h2>
//             </div>

//             <div className="lg:w-2/3 grid md:grid-cols-2 gap-px bg-white/5">
//               {advantages.map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-[#0A0B0E] p-12 hover:bg-white/[0.02] transition-all group border border-white/5"
//                 >
//                   <div className="flex justify-between items-start mb-12">
//                     <ShieldCheck className="text-[#BA8C61]" size={24} />
//                     <span className="text-white/10 text-4xl font-serif">
//                       0{i + 1}
//                     </span>
//                   </div>
//                   <h4 className="text-2xl font-serif mb-6 group-hover:translate-x-2 transition-transform">
//                     {item.title}
//                   </h4>
//                   <p className="text-white/40 text-sm leading-relaxed font-light">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA: THE MONOLITH --- */}
//       <section className="py-40 flex justify-center">
//         <motion.div
//           whileHover={{ scale: 0.98 }}
//           className="relative group cursor-pointer"
//         >
//           <a
//             href="#contact"
//             className="relative z-10 block px-24 py-12 border border-[#BA8C61]/30 overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-[#BA8C61] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.19,1,0.22,1]" />
//             <span className="relative flex items-center gap-6 text-[#BA8C61] group-hover:text-black transition-colors duration-500 tracking-[0.6em] text-sm uppercase font-bold">
//               {t("servicesSection.contactButton")}
//               <Plus
//                 size={20}
//                 className="group-hover:rotate-90 transition-transform duration-500"
//               />
//             </span>
//           </a>
//           {/* Decorative ring */}
//           <div className="absolute inset-0 border border-[#BA8C61]/10 -m-4 group-hover:-m-2 transition-all duration-700" />
//         </motion.div>
//       </section>
//     </div>
//   );
// }

//==================================================================
//==================================================================
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  UserCheck,
  Scale,
  Gavel,
  Globe,
  ShieldCheck,
  Plus,
  ArrowRight,
} from "lucide-react";
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
  const serviceIcons = [UserCheck, Scale, Globe];

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

      // Horizontal Scroll Logic
      if (window.innerWidth > 1024) {
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
      }

      // Advantage Card Stagger
      gsap.from(".advantage-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".advantages-grid",
          start: "top 70%",
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
      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
          <div className="space-y-10">
            <div className="overflow-hidden">
              <h1 className="mask-text text-6xl md:text-7xl lg:text-[5rem] font-serif italic leading-[0.95] tracking-tight">
                {t("intro.text1")}
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              <div className="h-px w-16 bg-[#BA8C61] hidden md:block" />
              <p className="text-lg lg:text-xl text-white/50 font-light max-w-md leading-relaxed">
                {t("intro.text2")}
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-center py-12">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative z-20 w-[70%] aspect-[3/4] border-[1px] border-white/10 shadow-2xl overflow-hidden"
            >
              <img
                src={Rai_Image}
                alt="Rai"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
              className="absolute left-0 bottom-0 z-10 w-[55%] aspect-[3/4] border-[1px] border-white/10 shadow-xl overflow-hidden"
            >
              <img
                src={Auri_Image}
                alt="Auri"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SERVICES (FLEX-STABLE VERSION) --- */}
      <section className="horizontal-container bg-white/[0.01] border-y border-white/5">
        <div className="flex w-[300%] lg:w-[150%] h-screen">
          {/* Intro Slide */}
          <div className="service-slide flex-shrink-0 w-screen h-full flex items-center px-6 lg:px-32">
            <div className="max-w-4xl">
              <span className="text-[#BA8C61] tracking-[0.6em] uppercase text-xs lg:text-sm mb-6 block font-bold">
                Professional Expertise
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-serif italic mb-12 leading-tight">
                {t("servicesSection.title")}
              </h2>
              <div className="flex items-center gap-6 text-white/30 group cursor-pointer hover:text-[#BA8C61] transition-colors">
                <span className="text-sm tracking-[0.3em] uppercase font-semibold">
                  Slide to explore
                </span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Service Slides */}
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Gavel;
            return (
              <div
                key={index}
                className="service-slide flex-shrink-0 w-screen h-full flex items-center justify-center px-6 lg:px-20"
              >
                {/* Main Flex Wrapper */}
                <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                  {/* Left Side: Image Container */}
                  <div className="relative w-full lg:w-[45%] flex-shrink-0 aspect-square lg:aspect-[4/5] overflow-hidden border border-white/10 bg-[#1a1e2e]">
                    <img
                      src={index % 2 === 0 ? Rai_Image : Auri_Image}
                      className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-opacity duration-700"
                      alt="Partner Service"
                    />
                    {/* Centered Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className="text-[#BA8C61] opacity-80"
                        size={80}
                        strokeWidth={0.5}
                      />
                    </div>
                    {/* Background Ghost Number */}
                    <div className="absolute top-4 left-6 text-9xl font-serif text-white/[0.03] select-none">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Right Side: Content Container */}
                  <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-[1px] w-8 bg-[#BA8C61]/50" />
                        <span className="text-[#BA8C61] text-xs tracking-[0.3em] uppercase font-bold">
                          Area of Practice
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] text-white">
                        {service.headline || service.title}
                      </h3>
                    </div>

                    <div className="relative">
                      {/* Vertical accent line for the paragraph */}
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-white/10" />
                      <p className="text-lg lg:text-xl text-white/50 font-light leading-relaxed">
                        {service.content}
                      </p>
                    </div>

                    {/* Keyword Badges */}
                    <div className="flex flex-wrap gap-2 pt-6">
                      {service.keywords?.map((kw, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/[0.03] border border-white/5 text-[10px] uppercase tracking-[0.2em] text-[#BA8C61] rounded-sm"
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
      <section className="py-32 lg:py-56 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[#BA8C61] tracking-[0.5em] uppercase text-xs font-bold block">
              Why Choose Us
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] sticky top-40">
              A Legacy built on <br />
              <span className="italic text-[#BA8C61]">Trust</span> and{" "}
              <span className="italic text-[#BA8C61]">Strategy</span>.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-px bg-white/5 border border-white/5 advantages-grid">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="advantage-card bg-[#262B3E] p-10 lg:p-16 hover:bg-white/[0.01] transition-colors flex gap-8 items-start group border-b border-white/5 last:border-b-0"
              >
                <div className="mt-2 h-10 w-10 rounded-full border border-[#BA8C61]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#BA8C61] group-hover:border-[#BA8C61] transition-all duration-500">
                  <ShieldCheck
                    size={18}
                    className="text-[#BA8C61] group-hover:text-[#262B3E] transition-colors"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl lg:text-3xl font-serif italic">
                    {item.title}
                  </h4>
                  <p className="text-base lg:text-lg text-white/40 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-48 lg:py-72 flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute w-[600px] h-[600px] border border-[#BA8C61]/5 rounded-full pointer-events-none" />
        <div className="z-10 space-y-16">
          <div className="space-y-4">
            <span className="text-[#BA8C61] tracking-[0.8em] uppercase text-xs font-bold">
              Secure your future
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic leading-none">
              {t("servicesSection.contactButton")}
            </h2>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-10 group"
          >
            <div className="w-20 h-20 rounded-full border border-[#BA8C61] flex items-center justify-center group-hover:bg-[#BA8C61] transition-all duration-700">
              <Plus
                className="text-[#BA8C61] group-hover:text-[#262B3E] group-hover:rotate-90 transition-all duration-700"
                size={28}
              />
            </div>
            <span className="text-xs lg:text-sm tracking-[0.6em] uppercase font-bold text-[#BA8C61] border-b border-[#BA8C61]/20 pb-2">
              Start Conversation
            </span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}

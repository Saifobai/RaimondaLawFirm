// import React, { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Briefcase,
//   Scale,
//   AlertCircle,
//   TrendingUp,
//   Rocket,
//   Globe,
//   ArrowRight,
//   Plus,
// } from "lucide-react";
// import gsap from "gsap";

// export default function Services() {
//   const { t } = useTranslation("services");
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const gridRef = useRef(null);
//   const cardsRef = useRef([]);

//   const services = t("services.items", { returnObjects: true }) || [];
//   const icons = [Briefcase, Scale, AlertCircle, TrendingUp, Rocket, Globe];

//   // SUPERPOWER: 3D Tilt Physics with GSAP
//   const handleMouseMove = (e, index) => {
//     const card = cardsRef.current[index];
//     if (!card) return;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = (y - centerY) / 10;
//     const rotateY = (centerX - x) / 10;

//     gsap.to(card, {
//       rotateX: rotateX,
//       rotateY: rotateY,
//       duration: 0.5,
//       ease: "power2.out",
//       transformPerspective: 1000,
//     });
//   };

//   const handleMouseLeave = (index) => {
//     setHoveredIndex(null);
//     gsap.to(cardsRef.current[index], {
//       rotateX: 0,
//       rotateY: 0,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.3)",
//     });
//   };

//   return (
//     <section className="relative bg-[#262B3E] py-40 px-6 overflow-hidden selection:bg-[#BA8C61]/30">
//       {/* --- AMBIENT ARCHITECTURE --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#BA8C61]/5 blur-[160px] animate-pulse" />
//         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#3E4663]/20 blur-[140px]" />
//         {/* Fine Grain Overlay */}
//         <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
//       </div>

//       <div className="max-w-[1400px] mx-auto relative z-10">
//         {/* --- ELITE HEADER --- */}
//         <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-32 gap-12">
//           <div className="space-y-4">
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               className="h-[1px] w-24 bg-[#BA8C61] origin-left"
//             />
//             <h2 className="text-6xl lg:text-[10rem] font-serif italic leading-[0.8] tracking-tighter text-white">
//               {t("services.sectionTitle")}
//             </h2>
//           </div>
//           <div className="relative">
//             <p className="text-white/40 text-xl font-light max-w-xs leading-relaxed uppercase tracking-widest">
//               <span className="text-[#BA8C61] font-black mr-2">//</span>
//               {t("services.subheading")}
//             </p>
//           </div>
//         </div>

//         {/* --- THE BENTO LENS GRID --- */}
//         <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, idx) => {
//             const Icon = icons[idx];
//             return (
//               <div
//                 key={idx}
//                 ref={(el) => (cardsRef.current[idx] = el)}
//                 onMouseMove={(e) => handleMouseMove(e, idx)}
//                 onMouseLeave={() => handleMouseLeave(idx)}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 className="group relative bg-white/[0.02] border border-white/5 p-12 h-[500px] flex flex-col justify-between transition-all duration-500 hover:border-[#BA8C61]/30 hover:bg-white/[0.04] cursor-none"
//               >
//                 {/* Floating Glow Follower (Inside Card) */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                   <motion.div
//                     animate={{
//                       opacity: hoveredIndex === idx ? 1 : 0,
//                       scale: hoveredIndex === idx ? 1 : 0.5,
//                     }}
//                     className="absolute -inset-20 bg-[radial-gradient(circle_at_center,_#BA8C61_0%,_transparent_70%)] opacity-10 blur-3xl"
//                   />
//                 </div>

//                 {/* Card Top: Identity */}
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-16">
//                     <div className="relative">
//                       <Icon
//                         size={32}
//                         className="text-[#BA8C61] relative z-10"
//                       />
//                       <div className="absolute inset-0 bg-[#BA8C61] blur-xl opacity-20 group-hover:opacity-60 transition-opacity" />
//                     </div>
//                     <span className="text-[9px] font-mono text-white/10 group-hover:text-[#BA8C61] transition-colors tracking-[0.5em]">
//                       {service.id} // GLOBAL_LEGAL
//                     </span>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-[10px] tracking-[0.8em] uppercase font-bold text-[#BA8C61]/50 group-hover:text-[#BA8C61] transition-colors">
//                       {service.subtitle}
//                     </h3>
//                     <h4 className="text-4xl lg:text-5xl font-serif italic text-white/90 leading-tight">
//                       {service.title}
//                     </h4>
//                   </div>
//                 </div>

//                 {/* Card Bottom: Intelligence */}
//                 <div className="relative z-10 space-y-10">
//                   <p className="text-white/30 group-hover:text-white/70 transition-colors duration-500 font-light leading-relaxed text-lg italic">
//                     {service.content}
//                   </p>

//                   <div className="flex items-center gap-6 overflow-hidden">
//                     <motion.div
//                       animate={{
//                         x: hoveredIndex === idx ? 0 : -20,
//                         opacity: hoveredIndex === idx ? 1 : 0,
//                       }}
//                       className="h-px w-12 bg-[#BA8C61]"
//                     />
//                     <span className="text-[10px] tracking-[0.4em] uppercase font-black text-white group-hover:text-[#BA8C61] transition-colors">
//                       Execute Strategy
//                     </span>
//                   </div>
//                 </div>

//                 {/* Back-Icon Distort */}
//                 <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-1000 rotate-12">
//                   <Icon size={300} strokeWidth={0.5} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* --- THE MAGNETIC FINALE --- */}
//         <footer className="mt-40 relative flex flex-col items-center">
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "150px" }}
//             className="w-[1px] bg-gradient-to-b from-[#BA8C61] to-transparent mb-16"
//           />

//           <div className="relative group">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative z-10 px-20 py-10 bg-white text-[#262B3E] font-black text-[12px] tracking-[0.8em] uppercase transition-all duration-500 hover:tracking-[1em]"
//             >
//               Start Your Intervention
//               <div className="absolute inset-0 bg-[#BA8C61] translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
//             </motion.button>
//           </div>

//           <div className="mt-20 text-white/10 font-serif italic text-8xl lg:text-[15rem] whitespace-nowrap select-none pointer-events-none">
//             DEBTWAY // SOLUTIONS
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// }

//======================================================================
//======================================================================
// import React, { useState, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Scale,
//   AlertCircle,
//   TrendingUp,
//   Rocket,
//   Globe,
//   Plus,
// } from "lucide-react";
// import gsap from "gsap";

// export default function Services() {
//   const { t } = useTranslation("services");
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const cardsRef = useRef([]);

//   const services = t("services.items", { returnObjects: true }) || [];
//   const icons = [Briefcase, Scale, AlertCircle, TrendingUp, Rocket, Globe];

//   const handleMouseMove = (e, index) => {
//     const card = cardsRef.current[index];
//     if (!card) return;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = (y - centerY) / 12;
//     const rotateY = (centerX - x) / 12;

//     gsap.to(card, {
//       rotateX: rotateX,
//       rotateY: rotateY,
//       scale: 1.02,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//   };

//   const handleMouseLeave = (index) => {
//     setHoveredIndex(null);
//     gsap.to(cardsRef.current[index], {
//       rotateX: 0,
//       rotateY: 0,
//       scale: 1,
//       duration: 0.7,
//       ease: "elastic.out(1, 0.3)",
//     });
//   };

//   return (
//     <section className="relative bg-[#262B3E] py-32 px-4 lg:px-10 overflow-hidden">
//       <div className="max-w-[1500px] mx-auto relative z-10">
//         {/* --- HEADER --- */}
//         <div className="mb-24 space-y-4">
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             className="h-px w-32 bg-[#BA8C61] origin-left"
//           />
//           <h2 className="text-6xl lg:text-9xl font-serif italic text-white tracking-tighter">
//             {t("services.sectionTitle")}
//           </h2>
//         </div>

//         {/* --- FLEXBOX ENGINE --- */}
//         <div className="flex flex-wrap gap-6 justify-center">
//           {services.map((service, idx) => {
//             const Icon = icons[idx];
//             return (
//               <div
//                 key={idx}
//                 ref={(el) => (cardsRef.current[idx] = el)}
//                 onMouseMove={(e) => handleMouseMove(e, idx)}
//                 onMouseLeave={() => handleMouseLeave(idx)}
//                 onMouseEnter={() => setHoveredIndex(idx)}
//                 /* Dynamic Width:
//                    Base 100%, MD: 48%, LG: 31% (3 per row)
//                    Flex-grow allows them to expand to fill space if one word is huge
//                 */
//                 className="group relative flex-grow basis-full md:basis-[48%] lg:basis-[31%] min-w-[320px] bg-white/[0.02] border border-white/5 p-10 min-h-[550px] flex flex-col justify-between transition-all duration-500 hover:border-[#BA8C61]/40 hover:bg-white/[0.04] perspective-1000"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 {/* Visual Fix: Glow & Layout */}
//                 <div className="relative z-10">
//                   <div className="flex justify-between items-start mb-12">
//                     <div className="p-3 border border-white/10 rounded-sm group-hover:border-[#BA8C61]/50 transition-colors">
//                       <Icon size={24} className="text-[#BA8C61]" />
//                     </div>
//                     <span className="text-[10px] font-mono text-white/10 tracking-[0.4em]">
//                       STRAT_0{service.id}
//                     </span>
//                   </div>

//                   <div className="space-y-4">
//                     <h3 className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#BA8C61]/60">
//                       {service.subtitle}
//                     </h3>
//                     {/* CRITICAL FIX: hyphens-auto and line-height for long German words */}
//                     <h4 className="text-3xl xl:text-5xl font-serif italic text-white leading-[1.1] break-words hyphens-auto">
//                       {service.title}
//                     </h4>
//                   </div>
//                 </div>

//                 <div className="relative z-10 space-y-8">
//                   <p className="text-white/40 group-hover:text-white/70 transition-colors duration-500 font-light leading-relaxed text-lg italic max-w-sm">
//                     {service.content}
//                   </p>

//                   <div className="flex items-center justify-between pt-6 border-t border-white/5">
//                     <span className="text-[10px] tracking-[0.4em] uppercase font-black text-white/20 group-hover:text-[#BA8C61] transition-all">
//                       Execute Strategy
//                     </span>
//                     <Plus
//                       size={20}
//                       className="text-[#BA8C61] transition-transform group-hover:rotate-90"
//                     />
//                   </div>
//                 </div>

//                 {/* Background Ambient Icon */}
//                 <div className="absolute bottom-4 right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
//                   <Icon size={200} strokeWidth={0.5} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* --- FOOTER --- */}
//         <div className="mt-32 text-center">
//           <p className="text-[#BA8C61] font-mono text-[10px] tracking-[1em] uppercase mb-8">
//             End of Protocol
//           </p>
//           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//         </div>
//       </div>
//     </section>
//   );
// }

//===================================================================
//===================================================================
// import React, { useState, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";

// export default function Services() {
//   const { t } = useTranslation("services");
//   const [activeIndex, setActiveIndex] = useState(null);
//   const containerRef = useRef(null);

//   const services = t("services.items", { returnObjects: true }) || [];

//   // Superpower: Image/Blur Follower
//   const handleMouseMove = (e) => {
//     if (activeIndex === null) return;
//     const { clientX, clientY } = e;

//     gsap.to(".service-follower", {
//       x: clientX,
//       y: clientY,
//       duration: 0.8,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <section
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="relative bg-[#262B3E] py-40 px-6 lg:px-20 overflow-hidden cursor-none"
//     >
//       {/* --- DYNAMIC MOUSE FOLLOWER --- */}
//       <div className="service-follower fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//         <div className="w-full h-full bg-[#BA8C61]/20 blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-[1600px] mx-auto relative z-10">
//         {/* --- SECTION LABEL --- */}
//         <div className="flex items-center gap-4 mb-32">
//           <div className="h-px w-12 bg-[#BA8C61]" />
//           <span className="text-[#BA8C61] font-mono text-[10px] tracking-[0.6em] uppercase">
//             {t("services.sectionTitle")}
//           </span>
//         </div>

//         {/* --- EDITORIAL LIST --- */}
//         <div className="flex flex-col border-t border-white/10">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               onMouseEnter={() => {
//                 setActiveIndex(idx);
//                 gsap.to(".service-follower", { opacity: 1 });
//               }}
//               onMouseLeave={() => {
//                 setActiveIndex(null);
//                 gsap.to(".service-follower", { opacity: 0 });
//               }}
//               className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-16 border-b border-white/10 transition-all duration-700"
//             >
//               {/* Index & Title */}
//               <div className="flex items-baseline gap-10 lg:gap-20">
//                 <span className="text-white/20 font-serif italic text-2xl group-hover:text-[#BA8C61] transition-colors">
//                   0{idx + 1}
//                 </span>
//                 <h3 className="text-5xl lg:text-6xl font-serif italic text-white/90 group-hover:text-white group-hover:italic-none transition-all duration-500 leading-none tracking-tighter">
//                   {service.title}
//                 </h3>
//               </div>

//               {/* Description (Reveals on Hover) */}
//               <div className="mt-8 lg:mt-0 max-w-md overflow-hidden">
//                 <p
//                   className={`text-white/40 text-lg lg:text-xl font-light leading-relaxed transition-all duration-700 ${activeIndex === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//                 >
//                   {service.content}
//                 </p>
//               </div>

//               {/* Diagonal Hover Line */}
//               <motion.div
//                 className="absolute bottom-0 left-0 h-[2px] bg-[#BA8C61] z-20"
//                 initial={{ width: 0 }}
//                 animate={{ width: activeIndex === idx ? "100%" : 0 }}
//                 transition={{ duration: 0.6, ease: "circOut" }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* --- THE MASTER CTA --- */}
//         <div className="mt-40 flex flex-col items-center">
//           <p className="text-white/20 font-mono text-[9px] tracking-[1em] uppercase mb-12">
//             Strategic Sovereignty
//           </p>
//           <button className="relative overflow-hidden group px-16 py-8 border border-[#BA8C61]/30">
//             <span className="relative z-10 text-white font-mono text-[11px] tracking-[0.8em] uppercase group-hover:text-[#1A1D29] transition-colors duration-500">
//               Intervene Now
//             </span>
//             <div className="absolute inset-0 bg-[#BA8C61] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
//           </button>
//         </div>
//       </div>

//       {/* --- GLOBAL CURSOR HINT --- */}
//       <AnimatePresence>
//         {activeIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0 }}
//             className="fixed pointer-events-none z-[100] text-[#BA8C61] font-mono text-[9px] tracking-tighter uppercase service-follower flex items-center justify-center"
//             style={{ width: "100px", height: "100px" }}
//           >
//             <div className="bg-white/10 backdrop-blur-md rounded-full w-full h-full flex items-center justify-center border border-white/20">
//               Discover
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

//==================================================================
//==================================================================
// import React, { useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, useScroll, useTransform } from "framer-motion";
// import gsap from "gsap";

// export default function Services() {
//   const { t } = useTranslation("services");
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   // The Magic: We transform Vertical Scroll into Horizontal Movement
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

//   const services = t("services.items", { returnObjects: true }) || [];

//   return (
//     <section ref={targetRef} className="relative h-[400vh] bg-[#262B3E]">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         {/* --- BACKGROUND KINETIC TEXT --- */}
//         <motion.div
//           style={{ x }}
//           className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
//         >
//           <span className="text-[40vh] font-serif italic text-white leading-none">
//             UNCOMPROMISING LEGAL EXCELLENCE — STRATEGIC INTERVENTION —
//           </span>
//         </motion.div>

//         {/* --- HORIZONTAL TRACK --- */}
//         <motion.div style={{ x }} className="flex gap-32 px-[10vw]">
//           {/* Intro Slide */}
//           <div className="flex flex-col justify-center min-w-[60vw]">
//             <motion.span
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="text-[#BA8C61] font-mono text-xs tracking-[1em] mb-8"
//             >
//               [ DISCOVER_CAPABILITIES ]
//             </motion.span>
//             <h2 className="text-white text-7xl lg:text-[12rem] font-serif italic leading-[0.8] tracking-tighter">
//               {t("services.sectionTitle")}
//             </h2>
//             <p className="text-white/30 text-2xl font-light mt-12 max-w-xl border-l border-[#BA8C61] pl-10 italic">
//               {t("services.subheading")}
//             </p>
//           </div>

//           {/* Service Slides */}
//           {services.map((service, idx) => (
//             <ServiceCard key={idx} service={service} index={idx} />
//           ))}

//           {/* Outro / CTA Slide */}
//           <div className="flex flex-col justify-center min-w-[50vw] pr-[20vw]">
//             <h3 className="text-white/20 text-8xl font-serif italic mb-10">
//               Next Step?
//             </h3>
//             <button className="group relative w-fit overflow-hidden border border-[#BA8C61] px-16 py-8">
//               <div className="absolute inset-0 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//               <span className="relative z-10 text-[#BA8C61] group-hover:text-[#0F111A] font-mono text-xs tracking-[0.5em] uppercase">
//                 Initiate Protocol
//               </span>
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ service, index }) {
//   return (
//     <div className="relative flex flex-col justify-center min-w-[450px] lg:min-w-[700px] h-[60vh] group">
//       {/* Visual background number */}
//       <div className="absolute -top-10 -left-10 text-[20rem] font-serif italic text-white/[0.02] group-hover:text-[#BA8C61]/5 transition-colors duration-700 select-none">
//         0{index + 1}
//       </div>

//       <div className="relative z-10 space-y-8">
//         <div className="flex items-center gap-4">
//           <div className="h-[1px] w-12 bg-[#BA8C61]" />
//           <span className="text-[#BA8C61] font-mono text-[10px] tracking-[0.4em] uppercase">
//             {service.subtitle}
//           </span>
//         </div>

//         <h3 className="text-white text-5xl lg:text-8xl font-serif italic tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-500">
//           {service.title}
//         </h3>

//         <p className="text-white/40 text-lg lg:text-2xl font-light leading-relaxed max-w-lg transition-colors group-hover:text-white/70">
//           {service.content}
//         </p>

//         {/* Decorative Progress bar */}
//         <div className="relative h-[2px] w-full bg-white/5 mt-10 overflow-hidden">
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             className="absolute top-0 left-0 h-full w-full bg-[#BA8C61] origin-left"
//             transition={{ duration: 1.5, ease: "circOut" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

//==============================================================
//==============================================================
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
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center for a 3D tilt
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
    <section className="relative bg-[#262B3E] py-40 px-6 overflow-hidden">
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* --- THE MASTER HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
          <div className="space-y-6">
            <div className="h-px w-24 bg-[#BA8C61]" />
            <h2 className="text-7xl lg:text-[10vw] font-serif italic text-white leading-[0.8] tracking-tighter uppercase">
              {t("services.sectionTitle")}
            </h2>
          </div>
          <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.8em] uppercase pb-4 border-b border-[#BA8C61]/20">
            Internal_Protocol_v3
          </p>
        </div>

        {/* --- UNIFORM FLEX ENGINE --- */}
        <div className="flex flex-wrap gap-4 lg:gap-0 border border-white/10 bg-white/[0.02]">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              /* FLEX LOGIC: 
                On LG screens, exactly 3 per row (33.33%). 
                Border-right creates a seamless grid look without gaps.
              */
              className="relative flex-grow basis-full md:basis-[48%] lg:basis-[33.33%] min-h-[650px] p-12 lg:border-r lg:border-b border-white/10 flex flex-col justify-between group overflow-hidden transition-all duration-700 hover:bg-[#2D334A]"
            >
              {/* Idle State: Big Number */}
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <span className="text-6xl font-serif italic text-white/5 group-hover:text-[#BA8C61]/20 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="text-white/10 group-hover:text-[#BA8C61] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="mt-20 space-y-6">
                  <h3 className="text-[#BA8C61] font-mono text-[9px] tracking-[0.6em] uppercase">
                    {service.subtitle}
                  </h3>
                  {/* FLUID TYPE: Text scales so it NEVER overflows the container */}
                  <h4 className="text-[clamp(2rem,3vw,3.5rem)] font-serif italic text-white leading-none tracking-tight break-words hyphens-auto">
                    {service.title}
                  </h4>
                </div>
              </div>

              {/* Hover State: Reveal Description */}
              <div className="relative z-10 mt-auto pt-10 border-t border-white/5 overflow-hidden">
                <motion.p
                  animate={{
                    y: hoveredIndex === idx ? 0 : 20,
                    opacity: hoveredIndex === idx ? 1 : 0.3,
                  }}
                  className="text-white/60 text-lg font-light leading-relaxed italic"
                >
                  {service.content}
                </motion.p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-white/5" />
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#BA8C61]">
                    Initiate
                  </span>
                </div>
              </div>

              {/* THE "AWARD" GLOW: Follows mouse indirectly */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === idx ? 0.4 : 0,
                  scale: hoveredIndex === idx ? 1.2 : 0.8,
                }}
                className="absolute -inset-10 bg-[radial-gradient(circle_at_center,_#BA8C61_0%,_transparent_70%)] blur-[80px] pointer-events-none z-0"
              />
            </div>
          ))}
        </div>

        {/* --- FOOTER CTA --- */}
        <div className="mt-32 flex flex-col items-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-[#BA8C61] to-transparent mb-12"
          />
          <button className="px-20 py-10 bg-white text-[#262B3E] font-black text-[11px] tracking-[1em] uppercase hover:bg-[#BA8C61] hover:text-white transition-all duration-500">
            Kostenlose Ersteinschätzung
          </button>
        </div>
      </div>
    </section>
  );
}

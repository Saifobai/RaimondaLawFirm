// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { ArrowRight, Home, Navigation, Scale } from "lucide-react";

// export default function DebtWay() {
//   const { t } = useTranslation("debtway");

//   const feedItems = [
//     t("liveFeedItem1"),
//     t("liveFeedItem2"),
//     t("liveFeedItem3"),
//     t("liveFeedItem4"),
//   ];

//   return (
//     <section
//       id="offers"
//       className="bg-[#F8F9FA] py-20 px-6 md:py-32 lg:py-56 text-[#262B3E] overflow-hidden"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         {/* HEADER SECTION */}
//         <div className="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
//           <div className="lg:col-span-8 space-y-6 md:space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center gap-4 md:gap-6"
//             >
//               <span className="h-px w-12 md:w-20 bg-[#BA8C61]" />
//               <p className="text-[#BA8C61] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[11px] font-bold">
//                 {t("sectionSubtitle")}
//               </p>
//             </motion.div>
//             <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter leading-tight md:leading-[0.8] text-[#262B3E]">
//               {t("sectionLabel")}
//             </h2>
//           </div>

//           <div className="lg:col-span-4 w-full">
//             <div className="border-l border-[#262B3E]/10 pl-6 md:pl-8 py-2">
//               <div className="flex items-center gap-3 mb-3 md:mb-4">
//                 <div className="h-2 w-2 rounded-full bg-[#BA8C61] animate-pulse" />
//                 <span className="text-[9px] md:text-[10px] font-black tracking-widest text-[#262B3E]/50 uppercase">
//                   {t("liveFeedLabel")}
//                 </span>
//               </div>
//               <div className="h-6 md:h-8 overflow-hidden relative">
//                 <motion.div
//                   animate={{ y: [0, -80] }}
//                   transition={{
//                     repeat: Infinity,
//                     duration: 18,
//                     ease: "linear",
//                   }}
//                   className="space-y-4"
//                 >
//                   {[...feedItems, ...feedItems].map((item, i) => (
//                     <p
//                       key={i}
//                       className="text-xs md:text-sm font-light text-[#262B3E]/70 italic"
//                     >
//                       {item}
//                     </p>
//                   ))}
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* THE BENTO SPREAD */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
//           {/* CARD 1 (Large Navy Card) */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="lg:col-span-7 bg-[#262B3E] p-8 md:p-12 lg:p-24 relative group overflow-hidden rounded-sm shadow-2xl"
//           >
//             <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#BA8C61]/10 blur-[100px] rounded-full" />

//             <div className="relative z-10 flex flex-col h-full">
//               <Navigation
//                 size={32}
//                 strokeWidth={1}
//                 className="text-[#BA8C61] mb-12"
//               />
//               <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-white mb-16 leading-tight">
//                 {t("card1.h2")}
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto">
//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#BA8C61]">
//                     {t("card1.sub1Title")}
//                   </h4>
//                   <p className="text-white/70 text-sm leading-relaxed font-light">
//                     {t("card1.sub1Desc")}
//                   </p>
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#BA8C61]">
//                     {t("card1.sub2Title")}
//                   </h4>
//                   <p className="text-white/50 text-sm leading-relaxed font-light">
//                     {t("card1.sub2Desc")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN CARDS */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
//           >
//             {/* CARD 2 (Navy Small Card) */}
//             <div className="bg-[#262B3E] p-12 group relative overflow-hidden rounded-sm shadow-2xl">
//               <Home
//                 size={40}
//                 strokeWidth={1}
//                 className="text-[#BA8C61] mb-12"
//               />
//               <h3 className="text-4xl font-serif italic text-white mb-6 leading-tight">
//                 {t("card2.h2")}
//               </h3>
//               <p className="text-white/70 font-light text-base leading-relaxed mb-8">
//                 {t("card2.content")}
//               </p>
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             </div>

//             {/* ACTION CARD (Lightened Card) */}
//             <div
//               className="bg-white p-12 border border-[#262B3E]/5 flex items-center justify-between group cursor-pointer rounded-sm hover:shadow-lg transition-all duration-500"
//               onClick={() => (window.location.href = "#contact")}
//             >
//               <div className="max-w-[70%]">
//                 <span className="block text-[9px] font-bold text-[#BA8C61] tracking-[0.2em] uppercase mb-1">
//                   Ready to act?
//                 </span>
//                 <span className="text-2xl font-serif italic text-[#262B3E]">
//                   Let's start the process
//                 </span>
//               </div>
//               <div className="h-12 w-12 rounded-full border border-[#262B3E]/10 flex items-center justify-center group-hover:bg-[#BA8C61] group-hover:border-[#BA8C61] transition-all duration-500">
//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform text-[#BA8C61] group-hover:text-white"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* CARD 3 (Full Width Navy Card) */}
//           <motion.div className="lg:col-span-12 bg-[#1e2231] border border-white/5 p-12 md:p-20 mt-8 flex flex-col lg:flex-row items-center gap-16 rounded-sm shadow-2xl">
//             <div className="flex-1">
//               <Scale
//                 size={48}
//                 strokeWidth={1}
//                 className="text-[#BA8C61] mb-10"
//               />
//               <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-8">
//                 {t("card3.h2")}
//               </h3>
//               <p className="text-white/60 text-xl font-light max-w-4xl leading-relaxed italic">
//                 {t("card3.content")}
//               </p>
//             </div>

//             <button
//               className="h-44 w-44 rounded-full border border-[#BA8C61]/30 flex items-center justify-center relative overflow-hidden group shrink-0"
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   .scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               <div className="absolute inset-0 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
//               <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#BA8C61] group-hover:text-white transition-colors">
//                 Get Help Now
//               </span>
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//=======================================================================
//=======================================================================
// import React, { useState, useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Plus,
//   ArrowUpRight,
//   Shield,
//   Scale,
//   Landmark,
//   Gavel,
//   Zap,
// } from "lucide-react";
// import gsap from "gsap";

// export default function DebtWay() {
//   const { t } = useTranslation("debtway");
//   const [activeTab, setActiveTab] = useState(0);
//   const containerRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const icons = [Landmark, Scale, Gavel, Shield];

//   // GSAP Background Movement for that "Premium Liquid" feel
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const xPos = (clientX / window.innerWidth - 0.5) * 20;
//       const yPos = (clientY / window.innerHeight - 0.5) * 20;

//       gsap.to(".bg-mesh", {
//         x: xPos,
//         y: yPos,
//         duration: 2,
//         ease: "power2.out",
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen bg-[#0A0C10] text-white overflow-hidden font-sans selection:bg-[#BA8C61]"
//     >
//       {/* --- BACKGROUND ART (The "Soul" of the UI) --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="bg-mesh absolute inset-[-10%] opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#BA8C61_0%,_transparent_50%)] blur-[120px]" />
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
//       </div>

//       {/* --- HEADER NAVIGATION --- */}
//       <header className="relative z-50 flex justify-between items-start p-8 lg:p-16">
//         <div className="space-y-2">
//           <motion.span
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-[#BA8C61] tracking-[1em] uppercase text-[10px] font-black block"
//           >
//             {t("sectionSubtitle")}
//           </motion.span>
//           <h2 className="text-4xl lg:text-6xl font-serif italic tracking-tighter leading-none">
//             {t("sectionLabel")}
//           </h2>
//         </div>

//         <div className="hidden lg:flex flex-col items-end gap-2 text-right">
//           <div className="flex items-center gap-3 text-[#BA8C61]">
//             <Zap size={14} className="animate-pulse" />
//             <span className="text-[10px] tracking-widest uppercase font-bold">
//               {t("strategyLabel")}
//             </span>
//           </div>
//           <div className="h-px w-32 bg-gradient-to-l from-[#BA8C61] to-transparent" />
//         </div>
//       </header>

//       {/* --- MAIN INTERACTIVE CORE --- */}
//       <main className="relative z-40 container mx-auto px-8 lg:px-16 grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
//         {/* LEFT: THE INTERACTIVE SELECTOR (THE "DIAL") */}
//         <div className="lg:col-span-5 space-y-4">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               onMouseEnter={() => setActiveTab(idx)}
//               className={`group cursor-pointer relative py-6 border-b border-white/5 transition-all duration-500 ${activeTab === idx ? "pl-8" : "pl-0 opacity-30 hover:opacity-100"}`}
//             >
//               {activeTab === idx && (
//                 <motion.div
//                   layoutId="indicator"
//                   className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#BA8C61] shadow-[0_0_15px_#BA8C61]"
//                 />
//               )}
//               <div className="flex items-center justify-between">
//                 <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40 mb-2 block">
//                   Cluster 0{idx + 1}
//                 </span>
//                 {activeTab === idx && (
//                   <ArrowUpRight className="text-[#BA8C61]" size={18} />
//                 )}
//               </div>
//               <h3
//                 className={`text-2xl lg:text-4xl font-serif italic transition-all ${activeTab === idx ? "text-white" : "text-white/40"}`}
//               >
//                 {service.headline}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT: THE DYNAMIC REVEAL (THE "VIEWPORT") */}
//         <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] flex items-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
//               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//               exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute inset-0 flex flex-col justify-center"
//             >
//               {/* Glassmorphism Panel */}
//               <div className="relative p-12 lg:p-16 border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden group">
//                 {/* Visual Accent */}
//                 <div className="absolute top-0 right-0 p-8">
//                   {React.createElement(icons[activeTab], {
//                     className:
//                       "text-[#BA8C61] opacity-20 group-hover:opacity-40 transition-opacity",
//                     size: 180,
//                     strokeWidth: 0.5,
//                   })}
//                 </div>

//                 <div className="relative z-10 space-y-8 max-w-xl">
//                   <h4 className="text-4xl lg:text-5xl font-serif italic leading-tight">
//                     {services[activeTab].title}
//                   </h4>
//                   <p className="text-lg lg:text-xl text-white/50 font-light leading-relaxed">
//                     {services[activeTab].content}
//                   </p>

//                   <div className="flex flex-wrap gap-2 pt-4">
//                     {services[activeTab].keywords.map((kw, i) => (
//                       <span
//                         key={i}
//                         className="px-4 py-1.5 bg-[#BA8C61]/10 border border-[#BA8C61]/20 text-[9px] tracking-widest uppercase text-[#BA8C61]"
//                       >
//                         {kw}
//                       </span>
//                     ))}
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-8 px-10 py-5 bg-[#BA8C61] text-black font-black text-[10px] tracking-[0.4em] uppercase flex items-center gap-4 group"
//                   >
//                     {services[activeTab].cta}
//                     <Plus
//                       size={16}
//                       className="group-hover:rotate-90 transition-transform duration-500"
//                     />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Decorative Floating Label */}
//               <div className="absolute -bottom-10 right-0 flex items-center gap-6">
//                 <span className="text-[8px] tracking-[1em] uppercase text-white/20 whitespace-nowrap">
//                   Status: Professional Intervention
//                 </span>
//                 <div className="w-40 h-px bg-white/10" />
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </main>

//       {/* --- FOOTER: REAL-TIME TICKER --- */}
//       <footer className="absolute bottom-0 left-0 w-full p-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
//         <div className="flex items-center gap-10">
//           <div className="flex items-center gap-4">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//             <span className="text-[10px] tracking-widest text-white/40 uppercase">
//               System Active
//             </span>
//           </div>
//           <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 max-w-xs leading-relaxed">
//             {t("liveFeedItem1")}
//           </p>
//         </div>

//         <div className="flex gap-4">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className={`w-12 h-1 ${activeTab === i ? "bg-[#BA8C61]" : "bg-white/10"} transition-all duration-700`}
//             />
//           ))}
//         </div>
//       </footer>
//     </div>
//   );
// }

//========================================================================
//========================================================================
// import React, { useState, useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Plus,
//   ArrowUpRight,
//   Shield,
//   Scale,
//   Landmark,
//   Gavel,
//   Zap,
// } from "lucide-react";
// import gsap from "gsap";

// export default function DebtWay() {
//   const { t } = useTranslation("debtway");
//   const [activeTab, setActiveTab] = useState(0);
//   const containerRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const icons = [Landmark, Scale, Gavel, Shield];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const xPos = (clientX / window.innerWidth - 0.5) * 30;
//       const yPos = (clientY / window.innerHeight - 0.5) * 30;

//       gsap.to(".bg-mesh", {
//         x: xPos,
//         y: yPos,
//         duration: 2.5,
//         ease: "power2.out",
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen bg-[#262B3E] text-white overflow-hidden font-sans selection:bg-[#BA8C61]"
//     >
//       {/* --- BACKGROUND ARCHITECTURE --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Deep Glow - Adjusted to complement #262B3E */}
//         <div className="bg-mesh absolute inset-[-20%] opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#BA8C61_0%,_transparent_60%)] blur-[140px]" />

//         {/* Subtle Grid Pattern for Law Firm Structure */}
//         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

//         {/* Dark Vignette */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#262B3E_100%)] opacity-80" />
//       </div>

//       {/* --- CONTENT WRAPPER (1400px) --- */}
//       <div className="relative z-40 max-w-[1400px] mx-auto min-h-screen flex flex-col">
//         {/* --- HEADER --- */}
//         <header className="flex justify-between items-start pt-16 px-8 lg:px-0">
//           <div className="space-y-3">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "3rem" }}
//               className="h-1 bg-[#BA8C61]"
//             />
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-[#BA8C61] tracking-[0.8em] uppercase text-[11px] font-bold block"
//             >
//               {t("sectionSubtitle")}
//             </motion.span>
//             <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none text-white/95">
//               {t("sectionLabel")}
//             </h2>
//           </div>

//           <div className="hidden lg:flex flex-col items-end gap-3">
//             <div className="flex items-center gap-3 py-2 px-4 border border-white/10 bg-white/5 backdrop-blur-md">
//               <Zap size={14} className="text-[#BA8C61] animate-pulse" />
//               <span className="text-[10px] tracking-widest uppercase font-bold text-white/70">
//                 {t("strategyLabel")}
//               </span>
//             </div>
//           </div>
//         </header>

//         {/* --- CORE INTERACTION --- */}
//         <main className="flex-grow grid lg:grid-cols-12 gap-16 items-center py-20 px-8 lg:px-0">
//           {/* LEFT: THE NAVIGATOR */}
//           <div className="lg:col-span-5 space-y-6">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 onMouseEnter={() => setActiveTab(idx)}
//                 className={`group cursor-pointer relative py-8 border-b border-white/5 transition-all duration-500 ${
//                   activeTab === idx
//                     ? "pl-10"
//                     : "pl-0 opacity-20 hover:opacity-100"
//                 }`}
//               >
//                 {activeTab === idx && (
//                   <motion.div
//                     layoutId="activeGlow"
//                     className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#BA8C61] shadow-[0_0_20px_#BA8C61]"
//                   />
//                 )}
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-[10px] tracking-[0.4em] uppercase font-black text-[#BA8C61]/60">
//                     Phase 0{idx + 1}
//                   </span>
//                   {activeTab === idx && (
//                     <ArrowUpRight className="text-[#BA8C61]" size={20} />
//                   )}
//                 </div>
//                 <h3
//                   className={`text-3xl lg:text-5xl font-serif italic transition-all duration-700 ${
//                     activeTab === idx
//                       ? "text-white translate-x-2"
//                       : "text-white/30"
//                   }`}
//                 >
//                   {service.headline}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT: THE DISPLAY VIEWPORT */}
//           <div className="lg:col-span-7 relative h-[600px] flex items-center">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, x: 40, filter: "blur(15px)" }}
//                 animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
//                 exit={{ opacity: 0, x: -40, filter: "blur(15px)" }}
//                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//                 className="absolute inset-0 flex flex-col justify-center"
//               >
//                 {/* Main Card */}
//                 <div className="relative p-12 lg:p-20 border border-white/10 bg-[#1e2335]/40 backdrop-blur-2xl shadow-2xl rounded-sm group overflow-hidden">
//                   {/* High-End Decorative Background Icon */}
//                   <div className="absolute -top-10 -right-10 pointer-events-none">
//                     {React.createElement(icons[activeTab], {
//                       className:
//                         "text-[#BA8C61] opacity-[0.07] group-hover:opacity-15 transition-opacity duration-1000",
//                       size: 320,
//                       strokeWidth: 0.5,
//                     })}
//                   </div>

//                   <div className="relative z-10 space-y-10">
//                     <h4 className="text-4xl lg:text-6xl font-serif italic leading-[1.1] text-white shadow-sm">
//                       {services[activeTab].title}
//                     </h4>

//                     <p className="text-xl lg:text-2xl text-white/50 font-light leading-relaxed max-w-lg">
//                       {services[activeTab].content}
//                     </p>

//                     <div className="flex flex-wrap gap-3">
//                       {services[activeTab].keywords.map((kw, i) => (
//                         <span
//                           key={i}
//                           className="px-5 py-2 bg-white/[0.03] border border-white/10 text-[10px] tracking-[0.2em] uppercase text-[#BA8C61] font-bold"
//                         >
//                           {kw}
//                         </span>
//                       ))}
//                     </div>

//                     <motion.button
//                       whileHover={{
//                         backgroundColor: "#BA8C61",
//                         color: "#262B3E",
//                         scale: 1.02,
//                       }}
//                       whileTap={{ scale: 0.98 }}
//                       className="mt-12 px-12 py-6 border border-[#BA8C61] text-[#BA8C61] font-black text-[11px] tracking-[0.5em] uppercase flex items-center gap-6 transition-all duration-300"
//                     >
//                       {services[activeTab].cta || "Strategy Details"}
//                       <Plus
//                         size={18}
//                         className="transition-transform duration-500 group-hover:rotate-90"
//                       />
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Status Metadata */}
//                 <div className="mt-8 flex items-center justify-between px-2">
//                   <div className="flex items-center gap-3">
//                     <div className="h-px w-12 bg-[#BA8C61]/40" />
//                     <span className="text-[9px] tracking-[1em] uppercase text-white/30">
//                       Legal Protocol: Validated
//                     </span>
//                   </div>
//                   <span className="text-[10px] font-mono text-white/20">
//                     REF-IDX: 00{activeTab + 1}
//                   </span>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </main>

//         {/* --- FOOTER --- */}
//         <footer className="pb-16 flex flex-col lg:flex-row justify-between items-center gap-10 px-8 lg:px-0 border-t border-white/5 pt-10">
//           <div className="flex items-center gap-12">
//             <div className="flex items-center gap-4">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//               </span>
//               <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold">
//                 Consultation Ready
//               </span>
//             </div>
//             <p className="text-[11px] tracking-[0.2em] uppercase text-[#BA8C61] font-medium hidden md:block">
//               {t("liveFeedItem1")}
//             </p>
//           </div>

//           <div className="flex gap-6 items-center">
//             <span className="text-[10px] text-white/20 uppercase tracking-widest">
//               Navigation
//             </span>
//             <div className="flex gap-2">
//               {[...Array(4)].map((_, i) => (
//                 <div
//                   key={i}
//                   className={`h-1 transition-all duration-700 rounded-full ${
//                     activeTab === i ? "w-16 bg-[#BA8C61]" : "w-4 bg-white/10"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

//===========================================================
//===========================================================
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ArrowUpRight,
  Shield,
  Scale,
  Landmark,
  Gavel,
  Zap,
} from "lucide-react";
import gsap from "gsap";

export default function DebtWay() {
  const { t } = useTranslation("debtway");
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // For manual hover override
  const containerRef = useRef(null);

  const services = t("servicesSection.clusters", { returnObjects: true }) || [];
  const icons = [Landmark, Scale, Gavel, Shield];

  // 1. AUTO-PLAY LOGIC (4 Second Intervals)
  useEffect(() => {
    if (isPaused) return; // Stop timer if user is hovering manually

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  // 2. MOUSE MESH MOVEMENT
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".bg-mesh", {
        x: xPos,
        y: yPos,
        duration: 2.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#262B3E] text-white overflow-hidden font-sans selection:bg-[#BA8C61]"
    >
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-mesh absolute inset-[-20%] opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#BA8C61_0%,_transparent_60%)] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#262B3E_100%)] opacity-80" />
      </div>

      <div className="relative z-40 max-w-[1400px] mx-auto min-h-screen flex flex-col">
        {/* --- HEADER --- */}
        <header className="flex justify-between items-start pt-16 px-8 lg:px-0">
          <div className="space-y-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              className="h-1 bg-[#BA8C61]"
            />
            <span className="text-[#BA8C61] tracking-[0.8em] uppercase text-[11px] font-bold block">
              {t("sectionSubtitle")}
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none text-white/95">
              {t("sectionLabel")}
            </h2>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-3">
            <div className="flex items-center gap-3 py-2 px-4 border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BA8C61] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BA8C61]"></span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-white/70">
                {t("strategyLabel")} • Auto-Sync On
              </span>
            </div>
          </div>
        </header>

        {/* --- CORE INTERACTION --- */}
        <main className="flex-grow grid lg:grid-cols-12 gap-16 items-center py-20 px-8 lg:px-0">
          {/* LEFT: THE NAVIGATOR (Handles Pause/Resume) */}
          <div
            className="lg:col-span-5 space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                className={`group cursor-pointer relative py-8 border-b border-white/5 transition-all duration-500 ${
                  activeTab === idx
                    ? "pl-10"
                    : "pl-0 opacity-20 hover:opacity-100"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#BA8C61] shadow-[0_0_20px_#BA8C61]"
                  />
                )}

                {/* Progress Bar for the active item */}
                {activeTab === idx && !isPaused && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[1px] bg-[#BA8C61]/50 z-10"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-black text-[#BA8C61]/60">
                    Phase 0{idx + 1}
                  </span>
                  {activeTab === idx && (
                    <ArrowUpRight className="text-[#BA8C61]" size={20} />
                  )}
                </div>
                <h3
                  className={`text-3xl lg:text-5xl font-serif italic transition-all duration-700 ${
                    activeTab === idx
                      ? "text-white translate-x-2"
                      : "text-white/30"
                  }`}
                >
                  {service.headline}
                </h3>
              </div>
            ))}
          </div>

          {/* RIGHT: THE DISPLAY VIEWPORT */}
          <div className="lg:col-span-7 relative h-[600px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40, filter: "blur(15px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -40, filter: "blur(15px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="relative p-12 lg:p-20 border border-white/10 bg-[#1e2335]/40 backdrop-blur-2xl shadow-2xl rounded-sm group overflow-hidden">
                  <div className="absolute -top-10 -right-10 pointer-events-none">
                    {React.createElement(icons[activeTab], {
                      className:
                        "text-[#BA8C61] opacity-[0.07] group-hover:opacity-15 transition-opacity duration-1000",
                      size: 320,
                      strokeWidth: 0.5,
                    })}
                  </div>

                  <div className="relative z-10 space-y-10">
                    <h4 className="text-4xl lg:text-6xl font-serif italic leading-[1.1] text-white">
                      {services[activeTab].title}
                    </h4>

                    <p className="text-xl lg:text-2xl text-white/50 font-light leading-relaxed max-w-lg">
                      {services[activeTab].content}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {services[activeTab].keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-5 py-2 bg-white/[0.03] border border-white/10 text-[10px] tracking-[0.2em] uppercase text-[#BA8C61] font-bold"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{
                        backgroundColor: "#BA8C61",
                        color: "#262B3E",
                        scale: 1.02,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-12 px-12 py-6 border border-[#BA8C61] text-[#BA8C61] font-black text-[11px] tracking-[0.5em] uppercase flex items-center gap-6"
                    >
                      {services[activeTab].cta || "Strategy Details"}
                      <Plus size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* --- FOOTER --- */}
        <footer className="pb-16 flex justify-between items-center px-8 lg:px-0 border-t border-white/5 pt-10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Master Protocol
            </span>
            <div className="flex gap-2">
              {[...Array(services.length)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-700 rounded-full ${
                    activeTab === i ? "w-16 bg-[#BA8C61]" : "w-4 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            System Cycle: {activeTab + 1} / {services.length}
          </p>
        </footer>
      </div>
    </div>
  );
}

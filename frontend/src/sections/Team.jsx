// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { Shield, ArrowUpRight } from "lucide-react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { TEAM_IMAGES } from "../constants/teamImages";

// export default function Team() {
//   const { t } = useTranslation("team");
//   const [isGlobalActive, setIsGlobalActive] = useState(false);
//   const [hoveredSlug, setHoveredSlug] = useState(null);

//   const allMembers = t("members", { returnObjects: true }) || [];
//   const founders = allMembers.filter((m) =>
//     ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
//   );
//   const assistants = allMembers.filter(
//     (m) => !founders.find((f) => f.slug === m.slug),
//   );

//   useEffect(() => {
//     const heartbeat = () => {
//       setIsGlobalActive(true);
//       setTimeout(() => setIsGlobalActive(false), 2000);
//     };
//     heartbeat();
//     const interval = setInterval(heartbeat, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="team"
//       className="py-24 lg:py-40 bg-[#262B3E] text-white overflow-hidden relative"
//     >
//       {/* BACKGROUND DECOR */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//         <div className="absolute top-20 left-10 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#BA8C61] rounded-full blur-[100px] lg:blur-[150px]" />
//       </div>

//       <div className="max-w-[1700px] mx-auto px-6 lg:px-8 relative z-10">
//         {/* --- THE BOLD HEADER --- */}
//         <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-32 border-l-2 border-[#BA8C61] pl-6 lg:pl-12">
//           <div className="max-w-3xl">
//             <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-[0.9] lg:leading-[0.85] text-white">
//               {t("hero.title")}
//             </h2>
//           </div>
//         </div>

//         {/* --- FOUNDERS --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-32 lg:mb-52">
//           {founders.map((f, i) => (
//             <motion.div
//               key={f.slug}
//               onMouseEnter={() => setHoveredSlug(f.slug)}
//               onMouseLeave={() => setHoveredSlug(null)}
//               className={`relative ${i === 1 ? "lg:mt-32" : ""}`}
//             >
//               <div className="relative aspect-[4/5] lg:aspect-[3/3] bg-[#1A1E2E] overflow-hidden group">
//                 {/* HUD Elements */}
//                 <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-30 flex items-center gap-2 opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
//                   <Shield size={12} className="text-[#BA8C61]" />
//                   <span className="text-[7px] font-mono tracking-widest uppercase text-white/40">
//                     Partner_Auth
//                   </span>
//                 </div>

//                 <motion.img
//                   src={TEAM_IMAGES[f.slug]}
//                   animate={{
//                     scale:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1.05
//                         : 1,
//                     filter:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? "grayscale(0%)"
//                         : "grayscale(100%) contrast(1.1)",
//                     opacity:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1
//                         : 0.5,
//                   }}
//                   transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Glass Bio Overlay - Hidden on small mobile, visible on LG hover */}
//                 <motion.div
//                   animate={{
//                     x: hoveredSlug === f.slug ? 0 : -20,
//                     opacity: hoveredSlug === f.slug ? 1 : 0,
//                   }}
//                   className="hidden lg:block absolute bottom-10 right-0 left-20 z-30 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-10"
//                 >
//                   <p className="text-white text-sm font-light italic leading-relaxed">
//                     {f.bio}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Title Content */}
//               <div className="mt-8 lg:mt-10 flex justify-between items-end border-b border-white/5 pb-6 lg:border-0">
//                 <div className="space-y-2">
//                   <p className="text-[#BA8C61] font-mono text-[8px] tracking-[0.4em] uppercase">
//                     Senior Partner
//                   </p>
//                   <h3 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
//                     {f.name}
//                   </h3>
//                   {/* Mobile-only Bio (Visible when not on desktop) */}
//                   <p className="lg:hidden text-white/50 text-sm font-light italic leading-relaxed mt-4 line-clamp-3">
//                     {f.bio}
//                   </p>
//                 </div>
//                 <ArrowUpRight
//                   className="text-[#BA8C61] lg:text-white/20 mb-2"
//                   size={32}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- ASSISTANTS --- */}
//         <div className="relative pt-16 lg:pt-24 border-t border-white/10 ">
//           {/* Section Header */}
//           <div className="flex flex-col items-center mb-20 lg:mb-32 space-y-4">
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "80px" }}
//               className="h-[1px] bg-[#BA8C61]"
//             />
//             <h3 className="text-white font-serif italic text-4xl lg:text-6xl tracking-tighter text-center">
//               {t("cta.expert")}
//             </h3>
//           </div>

//           <Swiper
//             modules={[Autoplay, FreeMode]}
//             loop={true}
//             freeMode={true}
//             speed={6000}
//             autoplay={{ delay: 0, disableOnInteraction: false }}
//             slidesPerView={1.5}
//             spaceBetween={20}
//             breakpoints={{
//               640: { slidesPerView: 2.5 },
//               1024: { slidesPerView: 4.5 },
//               1600: { slidesPerView: 5.5 },
//             }}
//             className="overflow-visible swiper-linear"
//           >
//             {[...assistants, ...assistants].map((a, idx) => (
//               <SwiperSlide key={`${a.slug}-${idx}`} className="py-10">
//                 <motion.div className="group cursor-default h-full">
//                   {/* Card Container */}
//                   <div className="relative bg-[#161923] border border-white/5 pt-16 pb-12 px-6 h-[650px] lg:h-[750px] flex flex-col items-center text-center transition-all duration-700 hover:border-[#BA8C61]/40 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
//                     {/* Index Number */}
//                     <span className="absolute top-8 font-mono text-[10px] text-white/20 tracking-widest">
//                       0{(idx % assistants.length) + 1}
//                     </span>

//                     {/* PULSING & COLORING IMAGE LOGIC */}
//                     <div className="relative mb-12 w-full aspect-[4/5] lg:w-64 lg:h-80 shrink-0">
//                       <motion.div
//                         // This triggers the "Pulsing/Coloring" when the card enters the center of the viewport
//                         initial={{
//                           filter: "grayscale(100%)",
//                           opacity: 0.3,
//                           scale: 0.95,
//                         }}
//                         whileInView={{
//                           filter: "grayscale(0%)",
//                           opacity: 1,
//                           scale: 1,
//                         }}
//                         // The "Pulse" animation while it stays in view
//                         animate={{
//                           boxShadow: [
//                             "0px 0px 0px rgba(186,140,97,0)",
//                             "0px 0px 20px rgba(186,140,97,0.2)",
//                             "0px 0px 0px rgba(186,140,97,0)",
//                           ],
//                         }}
//                         viewport={{ amount: 0.6 }} // Only colors up when 60% of the card is visible
//                         transition={{
//                           filter: { duration: 0.8 },
//                           opacity: { duration: 0.8 },
//                           scale: { duration: 0.8 },
//                           boxShadow: {
//                             duration: 3,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                           }, // Infinite Pulse
//                         }}
//                         className="w-full h-full overflow-hidden rounded-sm"
//                       >
//                         <img
//                           src={TEAM_IMAGES[a.slug]}
//                           className="w-full h-full object-cover"
//                           alt={a.name}
//                         />
//                       </motion.div>

//                       {/* Luxury Frame Accents */}
//                       <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#BA8C61]/30" />
//                       <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-[#BA8C61]/30" />
//                     </div>

//                     {/* Content Area */}
//                     <div className="flex flex-col items-center space-y-6">
//                       <div className="space-y-2">
//                         <h4 className="text-2xl lg:text-4xl font-serif italic text-white tracking-tight leading-none">
//                           {a.name}
//                         </h4>
//                         <p className="text-[#BA8C61] font-mono text-[15px] tracking-[0.3em] uppercase">
//                           {a.title}
//                         </p>
//                       </div>

//                       <div className="w-8 h-[1px] bg-white/10" />

//                       <p className="text-white/80 text-[14px] lg:text-[20px] font-light leading-relaxed italic px-2 line-clamp-4">
//                         "{a.bio}"
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

//========================================================================
//========================================================================
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { Shield, ArrowUpRight } from "lucide-react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { TEAM_IMAGES } from "../constants/teamImages";

// export default function Team() {
//   const { t } = useTranslation("team");
//   const [isGlobalActive, setIsGlobalActive] = useState(false);
//   const [hoveredSlug, setHoveredSlug] = useState(null);

//   const allMembers = t("members", { returnObjects: true }) || [];
//   const founders = allMembers.filter((m) =>
//     ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
//   );
//   const assistants = allMembers.filter(
//     (m) => !founders.find((f) => f.slug === m.slug),
//   );

//   useEffect(() => {
//     const heartbeat = () => {
//       setIsGlobalActive(true);
//       // Stay "Active" (Colored) for 2 seconds
//       setTimeout(() => setIsGlobalActive(false), 2000);
//     };
//     heartbeat();
//     // Repeat the pulse every 4 seconds
//     const interval = setInterval(heartbeat, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="team"
//       className="py-24 lg:py-40 bg-[#0D0F16] text-white overflow-hidden relative"
//     >
//       {/* BACKGROUND DECOR */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//         <div className="absolute top-20 left-10 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#BA8C61] rounded-full blur-[100px] lg:blur-[150px]" />
//       </div>

//       <div className="max-w-[1700px] mx-auto px-6 lg:px-8 relative z-10">
//         {/* --- HEADER --- */}
//         <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-32 border-l-2 border-[#BA8C61] pl-6 lg:pl-12">
//           <div className="max-w-3xl">
//             <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-[0.9] text-white">
//               {t("hero.title")}
//             </h2>
//           </div>
//         </div>

//         {/* --- FOUNDERS SECTION --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-32 lg:mb-52">
//           {founders.map((f, i) => (
//             <motion.div
//               key={f.slug}
//               onMouseEnter={() => setHoveredSlug(f.slug)}
//               onMouseLeave={() => setHoveredSlug(null)}
//               className={`relative ${i === 1 ? "lg:mt-32" : ""}`}
//             >
//               <div className="relative aspect-[4/5] lg:aspect-[3/3] bg-[#161923] overflow-hidden group border border-white/5">
//                 <motion.img
//                   src={TEAM_IMAGES[f.slug]}
//                   animate={{
//                     scale:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1.05
//                         : 1,
//                     filter:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? "grayscale(0%)"
//                         : "grayscale(100%)",
//                     opacity:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1
//                         : 0.4,
//                   }}
//                   transition={{ duration: 1.5, ease: "easeInOut" }}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Glass Bio Overlay */}
//                 <AnimatePresence>
//                   {hoveredSlug === f.slug && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                       className="hidden lg:block absolute bottom-10 right-0 left-20 z-30 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-10"
//                     >
//                       <p className="text-white text-sm font-light italic leading-relaxed">
//                         {f.bio}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <div className="mt-8 flex justify-between items-end border-b border-white/5 pb-6">
//                 <div className="space-y-2">
//                   <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.4em] uppercase">
//                     Senior Partner
//                   </p>
//                   <h3 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
//                     {f.name}
//                   </h3>
//                 </div>
//                 <ArrowUpRight className="text-[#BA8C61]" size={32} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- ASSISTANTS SECTION (WITH SYNCED HEARTBEAT) --- */}
//         <Swiper
//           {...props}
//           // Change 5.2 to a slightly smaller number if cards are too squashed
//           breakpoints={{
//             640: { slidesPerView: 2.2 },
//             1024: { slidesPerView: 3.8 }, // Reduced from 4.2 to give breathing room
//             1600: { slidesPerView: 4.8 }, // Reduced from 5.2
//           }}
//         >
//           {[...assistants, ...assistants].map((a, idx) => (
//             <SwiperSlide key={`${a.slug}-${idx}`} className="py-10 !h-auto">
//               <motion.div className="group cursor-default h-full w-full">
//                 {/* Added w-full and removed fixed lg:h-[780px] to allow flex-grow to work */}
//                 <div className="relative bg-[#161923] border border-white/5 pt-16 pb-12 px-4 lg:px-6 min-h-[650px] lg:min-h-[750px] flex flex-col items-center text-center transition-all duration-700 shadow-2xl">
//                   {/* IMAGE ZONE: Changed fixed lg:w-64 to max-w-full and w-full */}
//                   <div className="relative mb-12 w-full aspect-[4/5] max-w-[240px] shrink-0">
//                     <motion.div
//                       animate={{
//                         filter: isGlobalActive
//                           ? "grayscale(0%)"
//                           : "grayscale(100%)",
//                         opacity: isGlobalActive ? 1 : 0.3,
//                         scale: isGlobalActive ? 1.05 : 1,
//                       }}
//                       className="w-full h-full overflow-hidden rounded-sm relative z-10"
//                     >
//                       <img
//                         src={TEAM_IMAGES[a.slug]}
//                         className="w-full h-full object-cover"
//                         alt={a.name}
//                       />
//                     </motion.div>
//                   </div>

//                   {/* TEXT CONTENT: Ensure text doesn't force width */}
//                   <div className="flex flex-col items-center space-y-6 w-full overflow-hidden">
//                     <h4 className="text-xl lg:text-2xl font-serif italic text-white leading-tight">
//                       {a.name}
//                     </h4>
//                     <p className="text-[#BA8C61] font-mono text-[12px] tracking-[0.2em] uppercase">
//                       {a.title}
//                     </p>
//                     {/* Bio: Reduced font size for high slide counts */}
//                     <p className="text-white/60 text-[13px] lg:text-[15px] font-light leading-relaxed italic line-clamp-4">
//                       "{a.bio}"
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

//========================================================================
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { ArrowUpRight } from "lucide-react";
// import gsap from "gsap";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { TEAM_IMAGES } from "../constants/teamImages";

// export default function Team() {
//   const { t } = useTranslation("team");
//   const [isGlobalActive, setIsGlobalActive] = useState(false);
//   const [hoveredSlug, setHoveredSlug] = useState(null);

//   const marqueeRef = useRef(null);

//   const allMembers = t("members", { returnObjects: true }) || [];

//   const founders = allMembers.filter((m) =>
//     ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
//   );

//   const assistants = allMembers.filter(
//     (m) => !founders.find((f) => f.slug === m.slug),
//   );

//   // heartbeat animation
//   useEffect(() => {
//     const heartbeat = () => {
//       setIsGlobalActive(true);
//       setTimeout(() => setIsGlobalActive(false), 2000);
//     };

//     heartbeat();
//     const interval = setInterval(heartbeat, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // GSAP MARQUEE
//   useEffect(() => {
//     if (!marqueeRef.current) return;

//     let ctx;
//     let raf;

//     raf = requestAnimationFrame(() => {
//       ctx = gsap.context(() => {
//         const el = marqueeRef.current;

//         if (!el) return;

//         gsap.set(el, { x: 0 });

//         gsap.to(el, {
//           xPercent: -50,
//           ease: "none",
//           duration: 30,
//           repeat: -1,
//         });
//       }, marqueeRef);
//     });

//     return () => {
//       cancelAnimationFrame(raf);
//       ctx?.revert();
//     };
//   }, []);

//   return (
//     <section
//       id="team"
//       className="py-24 lg:py-40 bg-[#0D0F16] text-white overflow-hidden relative"
//     >
//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//         <div className="absolute top-20 left-10 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#BA8C61] rounded-full blur-[120px]" />
//       </div>

//       <div className="max-w-[1700px] mx-auto px-6 lg:px-8 relative z-10">
//         {/* HERO */}
//         <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-32 border-l-2 border-[#BA8C61] pl-6 lg:pl-12">
//           <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-[0.9] text-white">
//             {t("hero.title")}
//           </h2>
//         </div>

//         {/* FOUNDERS */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-32 lg:mb-52">
//           {founders.map((f, i) => (
//             <motion.div
//               key={f.slug}
//               onMouseEnter={() => setHoveredSlug(f.slug)}
//               onMouseLeave={() => setHoveredSlug(null)}
//               className={`relative ${i === 1 ? "lg:mt-32" : ""}`}
//             >
//               <div className="relative aspect-[4/5] lg:aspect-[3/3] bg-[#161923] overflow-hidden border border-white/5">
//                 <motion.img
//                   src={TEAM_IMAGES[f.slug]}
//                   animate={{
//                     scale:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1.05
//                         : 1,
//                     opacity:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1
//                         : 0.8,
//                   }}
//                   transition={{ duration: 2, ease: "easeInOut" }}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 <AnimatePresence>
//                   {hoveredSlug === f.slug && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                       className="hidden lg:block absolute bottom-8 right-8 left-8 backdrop-blur-md bg-black/40 border border-white/10 p-8"
//                     >
//                       <p className="text-white italic font-light">{f.bio}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <div className="mt-8 flex justify-between items-end border-b border-white/5 pb-6">
//                 <div>
//                   <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.4em] uppercase">
//                     Senior Partner
//                   </p>
//                   <h3 className="text-4xl lg:text-5xl font-serif italic">
//                     {f.name}
//                   </h3>
//                 </div>
//                 <ArrowUpRight className="text-[#BA8C61]" size={32} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ASSISTANTS MARQUEE */}
//         <div className="relative pt-16 lg:pt-24 border-t border-white/10 overflow-hidden">
//           {/* TITLE */}
//           <div className="flex flex-col items-center mb-20 lg:mb-32 space-y-4">
//             <motion.div
//               animate={{ width: isGlobalActive ? "120px" : "60px" }}
//               transition={{ duration: 2, ease: "easeInOut" }}
//               className="h-[1px] bg-[#BA8C61]"
//             />
//             <h3 className="text-white font-serif italic text-4xl lg:text-6xl tracking-tighter text-center">
//               {t("cta.expert")}
//             </h3>
//           </div>

//           {/* MARQUEE */}
//           <div className="relative overflow-hidden">
//             <div
//               ref={marqueeRef}
//               className="flex gap-10 w-max will-change-transform"
//             >
//               {[...assistants, ...assistants].map((a, idx) => (
//                 <div
//                   key={`${a.slug}-${idx}`}
//                   className="min-w-[320px] lg:min-w-[380px]"
//                 >
//                   <div className="bg-[#161923] border border-white/5 pt-16 pb-12 px-8 min-h-[720px] flex flex-col items-center text-center shadow-2xl">
//                     <span className="absolute top-8 text-[11px] text-white/20 tracking-widest">
//                       REF_{idx % assistants.length}
//                     </span>

//                     {/* IMAGE */}
//                     <div className="relative mb-12 w-full aspect-[4/5] max-w-[300px]">
//                       <motion.div
//                         animate={{
//                           scale: isGlobalActive ? 1.05 : 1,
//                           opacity: isGlobalActive ? 1 : 0.7,
//                         }}
//                         transition={{ duration: 2 }}
//                         className="w-full h-full overflow-hidden"
//                       >
//                         <img
//                           src={TEAM_IMAGES[a.slug]}
//                           className="w-full h-full object-cover"
//                           alt={a.name}
//                         />
//                       </motion.div>
//                     </div>

//                     {/* TEXT */}
//                     <div className="space-y-4">
//                       <h4 className="text-3xl font-serif italic">{a.name}</h4>

//                       <p className="text-[#BA8C61] font-mono text-[14px] tracking-[0.4em] uppercase">
//                         {a.title}
//                       </p>

//                       <div className="w-12 h-[1px] bg-[#BA8C61]/30 mx-auto" />

//                       <p className="text-white/80 italic text-[16px] leading-relaxed line-clamp-5 px-2">
//                         "{a.bio}"
//                       </p>
//                     </div>

//                     {/* DOT */}
//                     <div className="mt-auto pt-8">
//                       <div
//                         className={`w-2.5 h-2.5 rounded-full transition-all duration-1000 ${
//                           isGlobalActive
//                             ? "bg-[#BA8C61] scale-150 shadow-[0_0_15px_#BA8C61]"
//                             : "bg-white/10"
//                         }`}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//========================================================================
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

// GSAP Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "swiper/css";
import "swiper/css/free-mode";
import { TEAM_IMAGES } from "../constants/teamImages";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const { t } = useTranslation("team");
  const containerRef = useRef(null); // Critical for GSAP Scope
  const [isGlobalActive, setIsGlobalActive] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const allMembers = t("members", { returnObjects: true }) || [];
  const founders = allMembers.filter((m) =>
    ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
  );
  const assistants = allMembers.filter(
    (m) => !founders.find((f) => f.slug === m.slug),
  );

  // --- HEARTBEAT LOGIC (4s Cycle) ---
  useEffect(() => {
    const heartbeat = () => {
      setIsGlobalActive(true);
      setTimeout(() => setIsGlobalActive(false), 2000);
    };
    heartbeat();
    const interval = setInterval(heartbeat, 4000);
    return () => clearInterval(interval);
  }, []);

  // --- GSAP ANIMATION (The Fixed Scope Part) ---
  useGSAP(
    () => {
      // Reveal founders
      gsap.from(".founder-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-grid",
          start: "top 80%",
        },
      });

      // Refresh ScrollTrigger when components mount to avoid hash-link bugs
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  ); // Prevents "Invalid Scope" errors

  return (
    <section
      id="team"
      ref={containerRef}
      className="py-24 lg:py-40 bg-[#282D40] text-white overflow-hidden relative"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#BA8C61] rounded-full blur-[100px] lg:blur-[150px]" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-8 relative z-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-32 border-l-2 border-[#BA8C61] pl-6 lg:pl-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-[0.9] text-white">
              {t("hero.title")}
            </h2>
          </div>
        </div>

        {/* --- FOUNDERS SECTION --- */}
        <div className="founder-grid grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-32 lg:mb-52">
          {founders.map((f, i) => (
            <motion.div
              key={f.slug}
              onMouseEnter={() => setHoveredSlug(f.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className={`founder-card relative ${i === 1 ? "lg:mt-32" : ""}`}
            >
              <div className="relative aspect-[4/5] lg:aspect-[3/3] bg-[#161923] overflow-hidden group border border-white/5">
                <motion.img
                  src={TEAM_IMAGES[f.slug]}
                  animate={{
                    scale:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1.05
                        : 1,
                    filter: "grayscale(0%)", // Always colored
                    opacity:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1
                        : 0.8,
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Glass Bio Overlay */}
                <AnimatePresence>
                  {hoveredSlug === f.slug && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="hidden lg:block absolute bottom-8 right-8 left-8 z-30 backdrop-blur-md bg-black/40 border border-white/10 p-8 shadow-2xl"
                    >
                      <p className="text-white text-base font-light italic leading-relaxed">
                        {f.bio}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 flex justify-between items-end border-b border-white/5 pb-6">
                <div className="space-y-2">
                  <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.4em] uppercase">
                    Senior Partner
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
                    {f.name}
                  </h3>
                </div>
                <ArrowUpRight className="text-[#BA8C61]" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ASSISTANTS SECTION (Wide Cards) --- */}
        <div className="relative pt-16 lg:pt-24 border-t border-white/10">
          <div className="flex flex-col items-center mb-20 lg:mb-32 space-y-4">
            <motion.div
              animate={{ width: isGlobalActive ? "120px" : "60px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-[#BA8C61]"
            />
            <h3 className="text-white font-serif italic text-4xl lg:text-6xl tracking-tighter text-center">
              {t("cta.expert")}
            </h3>
          </div>

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={6000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            slidesPerView={1.1}
            spaceBetween={40}
            breakpoints={{
              640: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.8 },
              1440: { slidesPerView: 3.2 },
            }}
            className="overflow-visible swiper-linear"
          >
            {[...assistants, ...assistants].map((a, idx) => (
              <SwiperSlide key={`${a.slug}-${idx}`} className="py-10 !h-auto">
                <motion.div className="group cursor-default h-full w-full">
                  <div className="relative bg-[#161923] border border-white/5 pt-16 pb-12 px-8 min-h-[700px] lg:min-h-[820px] flex flex-col items-center text-center transition-all duration-1000 hover:border-[#BA8C61]/40 shadow-2xl">
                    <span className="absolute top-8 font-mono text-[11px] text-white/20 tracking-widest">
                      REF_{idx % assistants.length}
                    </span>

                    <div className="relative mb-12 w-full aspect-[4/5] max-w-[300px] shrink-0">
                      <motion.div
                        animate={{
                          filter: "grayscale(0%)", // Always colored
                          opacity: isGlobalActive ? 1 : 0.7,
                          scale: isGlobalActive ? 1.05 : 1,
                          boxShadow: isGlobalActive
                            ? "0px 0px 50px rgba(186,140,97,0.2)"
                            : "0px 0px 0px rgba(186,140,97,0)",
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-full h-full overflow-hidden rounded-sm relative z-10"
                      >
                        <img
                          src={TEAM_IMAGES[a.slug]}
                          className="w-full h-full object-cover"
                          alt={a.name}
                        />
                      </motion.div>

                      {/* Corner Accents */}
                      <motion.div
                        animate={{
                          opacity: isGlobalActive ? 1 : 0.3,
                          scale: isGlobalActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 2 }}
                        className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#BA8C61] z-20"
                      />
                      <motion.div
                        animate={{
                          opacity: isGlobalActive ? 1 : 0.3,
                          scale: isGlobalActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 2 }}
                        className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#BA8C61] z-20"
                      />
                    </div>

                    <div className="flex flex-col items-center space-y-6 flex-grow w-full">
                      <div className="space-y-3">
                        <h4 className="text-3xl lg:text-4xl font-serif italic text-white tracking-tight leading-none">
                          {a.name}
                        </h4>
                        <p className="text-[#BA8C61] font-mono text-[14px] tracking-[0.4em] uppercase">
                          {a.title}
                        </p>
                      </div>
                      <div className="w-12 h-[1px] bg-[#BA8C61]/30" />
                      <p className="text-white/70 text-[16px] lg:text-[19px] font-light leading-relaxed italic px-4 line-clamp-5">
                        "{a.bio}"
                      </p>
                    </div>

                    <div className="mt-auto pt-8 flex items-center gap-4">
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-1000 ${isGlobalActive ? "bg-[#BA8C61] scale-150 shadow-[0_0_15px_#BA8C61]" : "bg-white/10"}`}
                      />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

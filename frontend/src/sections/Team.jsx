// import React, { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

// // GSAP Imports
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { TEAM_IMAGES } from "../constants/teamImages";

// gsap.registerPlugin(ScrollTrigger);

// export default function Team() {
//   const { t } = useTranslation("team");
//   const containerRef = useRef(null);

//   const allMembers = t("members", { returnObjects: true }) || [];
//   const founders = allMembers.filter((m) =>
//     ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
//   );
//   const assistants = allMembers.filter(
//     (m) => !founders.find((f) => f.slug === m.slug),
//   );

//   useGSAP(
//     () => {
//       gsap.from(".founder-card", {
//         y: 60,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".founder-grid",
//           start: "top 80%",
//         },
//       });
//     },
//     { scope: containerRef },
//   );

//   return (
//     <section
//       id="team"
//       ref={containerRef}
//       className="py-16 lg:py-32 bg-[#282D40] text-white overflow-hidden relative"
//     >
//       {/* Background Decor */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
//         <div className="absolute top-20 left-10 w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] bg-[#BA8C61] rounded-full blur-[100px] lg:blur-[120px]" />
//       </div>

//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
//         {/* --- HEADER --- */}
//         <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-24 border-l-2 border-[#BA8C61] pl-6 lg:pl-10">
//           <div className="max-w-3xl">
//             <h2
//               className="font-serif italic tracking-tighter leading-[1.1] text-white"
//               style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
//             >
//               {t("hero.title")}
//             </h2>
//           </div>
//         </div>

//         {/* --- FOUNDERS SECTION (Slightly Smaller Images) --- */}
//         <div className="founder-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-24 lg:mb-40">
//           {founders.map((f, i) => (
//             <div
//               key={f.slug}
//               /* Added max-w-xl to make founder images more refined/smaller */
//               className={`founder-card relative w-full max-w-xl mx-auto `}
//             >
//               <div className="relative aspect-[4/5] bg-[#161923] overflow-hidden border border-white/5 shadow-2xl">
//                 <img
//                   src={TEAM_IMAGES[f.slug]}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   alt={f.name}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
//               </div>

//               <div className="mt-6 flex justify-between items-end border-b border-white/10 pb-5">
//                 <div className="space-y-1">
//                   <h3
//                     className="font-serif italic text-white tracking-tight"
//                     style={{ fontSize: "clamp(1.75rem, 3vw, 2rem)" }}
//                   >
//                     {f.name}
//                   </h3>
//                 </div>
//                 <ArrowUpRight className="text-[#BA8C61]" size={28} />
//               </div>
//               <p className="mt-4 text-white/90 font-light italic leading-relaxed text-sm lg:text-lg">
//                 {f.bio}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* --- ASSISTANTS SECTION --- */}
//         <div className="relative pt-16 border-t border-white/10">
//           <div className="flex flex-col mb-12 space-y-4">
//             <h3
//               className="text-white font-serif italic tracking-tighter"
//               style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
//             >
//               {t("cta.expert")}
//             </h3>
//             <div className="w-20 h-1 bg-[#BA8C61]" />
//           </div>

//           <Swiper
//             modules={[Autoplay, Navigation, Pagination]}
//             loop={true}
//             speed={1000}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             slidesPerView={1}
//             spaceBetween={40}
//             navigation={{
//               nextEl: ".swiper-next",
//               prevEl: ".swiper-prev",
//             }}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             className="rounded-sm overflow-visible"
//           >
//             {assistants.map((a) => (
//               <SwiperSlide key={a.slug}>
//                 <div className="bg-[#262B3E] border border-white/10 flex flex-col lg:flex-row items-stretch min-h-[500px] lg:h-[650px]">
//                   {/* Left: Image with Premium White Block Frame */}
//                   <div className="w-full lg:w-[45%] relative h-[450px] lg:h-auto shrink-0 p-5 lg:p-8 bg-white">
//                     <div className="w-full h-full overflow-hidden shadow-2xl relative">
//                       <img
//                         src={TEAM_IMAGES[a.slug]}
//                         className="w-full h-full object-cover object-top"
//                         alt={a.name}
//                       />
//                     </div>
//                     {/* The Dark Outer Border overlay to keep the slide shape uniform */}
//                     <div className="absolute inset-0 pointer-events-none border-[12px] border-[#282D40] lg:border-[24px]" />
//                   </div>

//                   {/* Right: Content */}
//                   <div className="p-8 lg:p-16 flex flex-col justify-center flex-1">
//                     <div className="space-y-2 mb-8">
//                       <p className="text-[#BA8C61] font-mono text-xs tracking-[0.4em] uppercase">
//                         {a.title}
//                       </p>
//                       <h4
//                         className="font-serif italic text-white leading-tight"
//                         style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
//                       >
//                         {a.name}
//                       </h4>
//                     </div>

//                     <div className="w-12 h-px bg-[#BA8C61] mb-8" />

//                     <p className="text-white/80 text-base lg:text-xl font-light leading-relaxed italic max-w-2xl">
//                       "{a.bio}"
//                     </p>

//                     {/* Navigation Buttons (Desktop) */}
//                     <div className="mt-12 hidden lg:flex gap-4">
//                       <button className="swiper-prev w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#BA8C61] hover:border-[#BA8C61] transition-all group">
//                         <ArrowLeft
//                           size={20}
//                           className="group-hover:text-[#161923]"
//                         />
//                       </button>
//                       <button className="swiper-next w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#BA8C61] hover:border-[#BA8C61] transition-all group">
//                         <ArrowRight
//                           size={20}
//                           className="group-hover:text-[#161923]"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation (Mobile) */}
//           <div className="flex lg:hidden justify-center gap-10 mt-10">
//             <button className="swiper-prev text-[#BA8C61] flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
//               <ArrowLeft size={16} /> Prev
//             </button>
//             <button className="swiper-next text-[#BA8C61] flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
//               Next <ArrowRight size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .swiper-pagination-bullet { background: #fff !important; opacity: 0.2; }
//         .swiper-pagination-bullet-active { background: #BA8C61 !important; opacity: 1; }
//         .swiper-pagination { bottom: 20px !important; }
//       `,
//         }}
//       />
//     </section>
//   );
// }

//=====================================================================
//=====================================================================
// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { ArrowUpRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { TEAM_IMAGES } from "../constants/teamImages";

// gsap.registerPlugin(ScrollTrigger);

// // ─── Fade-up animation variant ────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
//   }),
// };

// export default function Team() {
//   const { t } = useTranslation("team");
//   const containerRef = useRef(null);

//   const allMembers = t("members", { returnObjects: true }) || [];
//   const founders = allMembers.filter((m) =>
//     ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
//   );
//   const assistants = allMembers.filter(
//     (m) => !founders.find((f) => f.slug === m.slug),
//   );

//   useGSAP(
//     () => {
//       gsap.from(".founder-card", {
//         y: 60,
//         opacity: 0,
//         duration: 1.2,
//         stagger: 0.25,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".founder-grid",
//           start: "top 80%",
//         },
//       });
//       gsap.from(".assistant-card", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.15,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".assistant-grid",
//           start: "top 82%",
//         },
//       });
//     },
//     { scope: containerRef },
//   );

//   return (
//     <section
//       id="team"
//       ref={containerRef}
//       className="relative overflow-hidden"
//       style={{ backgroundColor: "#F5F0EA", fontFamily: "inherit" }}
//     >
//       {/* ══ Subtle background texture ══ */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
//         <div className="w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:32px_32px]" />
//       </div>

//       <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-8 py-24 md:py-36">
//         {/* ══ HEADER ══ */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-20 md:mb-28 space-y-5"
//         >
//           {/* Eyebrow */}
//           <motion.div
//             variants={fadeUp}
//             custom={0}
//             className="flex items-center justify-center gap-3"
//           >
//             <div className="h-px w-8 bg-[#BA8C61]" />
//             <span className="text-[#BA8C61] text-xs uppercase tracking-[0.45em] font-semibold">
//               {t("hero.eyebrow") || "Das Team"}
//             </span>
//             <div className="h-px w-8 bg-[#BA8C61]" />
//           </motion.div>

//           {/* Title — key: hero.title */}
//           <motion.h2
//             variants={fadeUp}
//             custom={0.1}
//             className="font-serif italic text-[#1B2A4A] leading-[1.05] tracking-tight"
//             style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
//           >
//             {t("hero.title")}
//           </motion.h2>

//           {/* Gold diamond divider */}
//           <motion.div
//             variants={fadeUp}
//             custom={0.2}
//             className="flex items-center justify-center gap-3 pt-1"
//           >
//             <div className="h-px w-16 bg-[#BA8C61]/30" />
//             <div className="w-1.5 h-1.5 rotate-45 bg-[#BA8C61]" />
//             <div className="h-px w-16 bg-[#BA8C61]/30" />
//           </motion.div>

//           {/* Subtitle — key: hero.subtitle */}
//           {t("hero.subtitle") && (
//             <motion.p
//               variants={fadeUp}
//               custom={0.25}
//               className="text-[#1B2A4A]/55 font-light leading-[1.85] max-w-xl mx-auto"
//               style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}
//             >
//               {t("hero.subtitle")}
//             </motion.p>
//           )}
//         </motion.div>

//         {/* ══ FOUNDERS ══ */}
//         <div className="founder-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-32 items-stretch">
//           {founders.map((f, i) => (
//             <FounderCard key={f.slug} member={f} index={i} />
//           ))}
//         </div>

//         {/* ══ ASSISTANTS SECTION ══ */}
//         <div className="relative pt-16 border-t border-[#1B2A4A]/10">
//           {/* Section label — centered */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="mb-14 md:mb-16 flex flex-col items-center gap-3"
//           >
//             <motion.div
//               variants={fadeUp}
//               custom={0}
//               className="flex items-center gap-3"
//             >
//               <div className="h-px w-8 bg-[#BA8C61]" />
//               <span className="text-[#BA8C61] text-xs uppercase tracking-[0.45em] font-semibold">
//                 {t("cta.expert") || "Experten-Assoziierte"}
//               </span>
//               <div className="h-px w-8 bg-[#BA8C61]" />
//             </motion.div>
//             <motion.div
//               variants={fadeUp}
//               custom={0.05}
//               className="w-14 h-[2px] bg-[#BA8C61]/40"
//             />
//           </motion.div>

//           {/* Assistants grid — stretch ensures all cards same height */}
//           <div className="assistant-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
//             {assistants.map((a, i) => (
//               <AssistantCard key={a.slug} member={a} index={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Founder Card ─────────────────────────────────────────────────
// function FounderCard({ member }) {
//   return (
//     <div
//       className="founder-card group flex flex-col bg-white overflow-hidden"
//       style={{ border: "1px solid rgba(27,42,74,0.1)", borderRadius: "2px" }}
//     >
//       {/* Photo */}
//       <div
//         className="relative overflow-hidden flex-shrink-0"
//         style={{ aspectRatio: "4/5" }}
//       >
//         <img
//           src={TEAM_IMAGES[member.slug]}
//           alt={member.name}
//           className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.03]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//       </div>

//       {/* Text — 3 locked zones, all centered */}
//       <div className="flex flex-col flex-1 px-7 md:px-8 pt-6 pb-8">
//         {/* ZONE 1 — Specialization: fixed 44px handles 1-line and 2-line labels equally */}
//         <div
//           className="flex-shrink-0 flex items-start justify-center text-center"
//           style={{ minHeight: "44px" }}
//         >
//           <p className="text-[#BA8C61] text-[10px] uppercase tracking-[0.45em] font-bold leading-snug">
//             {member.title}
//           </p>
//         </div>

//         {/* ZONE 2 — Name + arrow: fixed 96px so wrapped name and single-line name both land at same Y */}
//         <div
//           className="flex-shrink-0 flex items-start justify-between gap-3 pb-5 mb-5 border-b border-[#1B2A4A]/10"
//           style={{ minHeight: "96px" }}
//         >
//           <h3
//             className="font-serif italic text-[#1B2A4A] leading-tight flex-1 text-center"
//             style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
//           >
//             {member.name}
//           </h3>
//           <ArrowUpRight
//             className="text-[#BA8C61] flex-shrink-0 mt-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
//             size={18}
//           />
//         </div>

//         {/* ZONE 3 — Bio: fills remaining height */}
//         <p
//           className="text-[#1B2A4A]/70 font-[500] leading-[1.9] italic flex-1 text-center"
//           style={{ fontSize: "clamp(0.88rem, 1.1vw, 0.96rem)" }}
//         >
//           {member.bio}
//         </p>
//       </div>
//     </div>
//   );
// }

// // ─── Assistant Card ───────────────────────────────────────────────
// function AssistantCard({ member, index }) {
//   return (
//     <motion.div
//       className="assistant-card group flex flex-col bg-white h-full overflow-hidden"
//       style={{ border: "1px solid rgba(27,42,74,0.1)", borderRadius: "2px" }}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       transition={{
//         duration: 0.7,
//         delay: index * 0.1,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//     >
//       {/* Photo — fixed height */}
//       <div
//         className="relative overflow-hidden flex-shrink-0"
//         style={{ height: "300px" }}
//       >
//         <img
//           src={TEAM_IMAGES[member.slug]}
//           alt={member.name}
//           className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.03]"
//         />
//       </div>

//       {/* Text — 3 locked zones, centered */}
//       <div className="flex flex-col flex-1 px-6 md:px-7 pt-6 pb-7">
//         {/* ZONE 1 — Specialization: fixed 44px handles 1-line and 2-line labels equally */}
//         <div
//           className="flex-shrink-0 flex items-start justify-center text-center"
//           style={{ minHeight: "44px" }}
//         >
//           <p className="text-[#BA8C61] text-[10px] uppercase tracking-[0.4em] font-bold leading-snug">
//             {member.title}
//           </p>
//         </div>

//         {/* ZONE 2 — Name: fixed 72px + border */}
//         <div
//           className="flex-shrink-0 flex items-start justify-center pb-4 mb-4 border-b border-[#1B2A4A]/10"
//           style={{ minHeight: "72px" }}
//         >
//           <h4
//             className="font-serif italic text-[#1B2A4A] leading-tight text-center"
//             style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)" }}
//           >
//             {member.name}
//           </h4>
//         </div>

//         {/* ZONE 3 — Bio: fills remaining height */}
//         <p
//           className="text-[#1B2A4A]/70 font-[500] leading-[1.85] flex-1 text-center"
//           style={{ fontSize: "clamp(0.85rem, 0.95vw, 0.93rem)" }}
//         >
//           {member.bio}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

//=====================================================================
//=====================================================================
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TEAM_IMAGES } from "../constants/teamImages";

gsap.registerPlugin(ScrollTrigger);

// ─── Fade-up animation variant ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Team() {
  const { t } = useTranslation("team");
  const containerRef = useRef(null);

  const allMembers = t("members", { returnObjects: true }) || [];
  const founders = allMembers.filter((m) =>
    ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
  );
  const assistants = allMembers.filter(
    (m) => !founders.find((f) => f.slug === m.slug),
  );

  useGSAP(
    () => {
      gsap.from(".founder-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-grid",
          start: "top 80%",
        },
      });
      gsap.from(".assistant-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".assistant-grid",
          start: "top 82%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id="team"
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F5F0EA", fontFamily: "inherit" }}
    >
      {/* ══ Subtle background texture ══ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div className="w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-8 py-24 md:py-36">
        {/* ══ HEADER ══ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-28 space-y-5"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-[#BA8C61]" />
            <span className="text-[#BA8C61] text-xs uppercase tracking-[0.45em] font-semibold">
              {t("hero.eyebrow") || "Das Team"}
            </span>
            <div className="h-px w-8 bg-[#BA8C61]" />
          </motion.div>

          {/* Title — key: hero.title */}
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-serif italic text-[#1B2A4A] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            {t("hero.title")}
          </motion.h2>

          {/* Gold diamond divider */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="flex items-center justify-center gap-3 pt-1"
          >
            <div className="h-px w-16 bg-[#BA8C61]/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#BA8C61]" />
            <div className="h-px w-16 bg-[#BA8C61]/30" />
          </motion.div>

          {/* Subtitle — key: hero.subtitle */}
          {t("hero.subtitle") && (
            <motion.p
              variants={fadeUp}
              custom={0.25}
              className="text-[#1B2A4A]/55 font-light leading-[1.85] max-w-xl mx-auto"
              style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}
            >
              {t("hero.subtitle")}
            </motion.p>
          )}
        </motion.div>

        {/* ══ FOUNDERS ══ */}
        <div className="founder-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-32 items-stretch">
          {founders.map((f, i) => (
            <FounderCard key={f.slug} member={f} index={i} />
          ))}
        </div>

        {/* ══ ASSISTANTS SECTION ══ */}
        <div className="relative pt-16 border-t border-[#1B2A4A]/10">
          {/* Section label — centered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 md:mb-16 flex flex-col items-center gap-3"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#BA8C61]" />
              <span className="text-[#BA8C61] text-xs uppercase tracking-[0.45em] font-semibold">
                {t("cta.expert") || "Experten-Assoziierte"}
              </span>
              <div className="h-px w-8 bg-[#BA8C61]" />
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={0.05}
              className="w-14 h-[2px] bg-[#BA8C61]/40"
            />
          </motion.div>

          {/* Assistants grid — stretch ensures all cards same height */}
          <div className="assistant-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
            {assistants.map((a, i) => (
              <AssistantCard key={a.slug} member={a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Founder Card ─────────────────────────────────────────────────
function FounderCard({ member }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="founder-card group flex flex-col bg-white overflow-hidden cursor-pointer"
        style={{ border: "1px solid rgba(27,42,74,0.1)", borderRadius: "2px" }}
        onClick={() => setOpen(true)}
      >
        {/* Photo */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ aspectRatio: "4/5" }}
        >
          <img
            src={TEAM_IMAGES[member.slug]}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Text — 3 locked zones */}
        <div className="flex flex-col flex-1 px-7 md:px-8 pt-6 pb-8">
          {/* ZONE 1 — Specialization */}
          <div
            className="flex-shrink-0 flex items-start justify-center text-center"
            style={{ minHeight: "44px" }}
          >
            <p className="text-[#BA8C61] text-[10px] uppercase tracking-[0.45em] font-bold leading-snug">
              {member.title}
            </p>
          </div>

          {/* ZONE 2 — Name + arrow */}
          <div
            className="flex-shrink-0 flex items-start justify-between gap-3 pb-5 mb-5 border-b border-[#1B2A4A]/10"
            style={{ minHeight: "96px" }}
          >
            <h3
              className="font-serif italic text-[#1B2A4A] leading-tight flex-1 text-center"
              style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
            >
              {member.name}
            </h3>
            <ArrowUpRight
              className="text-[#BA8C61] flex-shrink-0 mt-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              size={18}
            />
          </div>

          {/* ZONE 3 — Bio truncated to 2 lines + "Mehr lesen" */}
          <div className="flex-1 flex flex-col items-center gap-3">
            <p
              className="text-[#1B2A4A]/70 font-[500] leading-[1.9] italic text-center line-clamp-2"
              style={{ fontSize: "clamp(0.88rem, 1.1vw, 0.96rem)" }}
            >
              {member.bio}
            </p>
            <span className="text-[#BA8C61] text-[11px] uppercase tracking-[0.35em] font-bold border-b border-[#BA8C61]/40 pb-px group-hover:border-[#BA8C61] transition-colors duration-300">
              Mehr lesen
            </span>
          </div>
        </div>
      </div>

      {/* ── Full bio overlay ── */}
      <BioOverlay member={member} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

// ─── Assistant Card ───────────────────────────────────────────────
function AssistantCard({ member, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="assistant-card group flex flex-col bg-white h-full overflow-hidden cursor-pointer"
        style={{ border: "1px solid rgba(27,42,74,0.1)", borderRadius: "2px" }}
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Photo */}
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{ height: "300px" }}
        >
          <img
            src={TEAM_IMAGES[member.slug]}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.03]"
          />
        </div>

        {/* Text — 3 locked zones */}
        <div className="flex flex-col flex-1 px-6 md:px-7 pt-6 pb-7">
          {/* ZONE 1 — Specialization */}
          <div
            className="flex-shrink-0 flex items-start justify-center text-center"
            style={{ minHeight: "44px" }}
          >
            <p className="text-[#BA8C61] text-[10px] uppercase tracking-[0.4em] font-bold leading-snug">
              {member.title}
            </p>
          </div>

          {/* ZONE 2 — Name + border */}
          <div
            className="flex-shrink-0 flex items-start justify-center pb-4 mb-4 border-b border-[#1B2A4A]/10"
            style={{ minHeight: "72px" }}
          >
            <h4
              className="font-serif italic text-[#1B2A4A] leading-tight text-center"
              style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)" }}
            >
              {member.name}
            </h4>
          </div>

          {/* ZONE 3 — Bio truncated + "Mehr lesen" */}
          <div className="flex-1 flex flex-col items-center gap-3">
            <p
              className="text-[#1B2A4A]/70 font-[500] leading-[1.85] text-center line-clamp-2"
              style={{ fontSize: "clamp(0.85rem, 0.95vw, 0.93rem)" }}
            >
              {member.bio}
            </p>
            <span className="text-[#BA8C61] text-[11px] uppercase tracking-[0.35em] font-bold border-b border-[#BA8C61]/40 pb-px group-hover:border-[#BA8C61] transition-colors duration-300">
              Mehr lesen
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Full bio overlay ── */}
      <BioOverlay member={member} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

// ─── Bio Overlay — covers the card, shows full bio ────────────────
function BioOverlay({ member, open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1B2A4A]/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-5 pointer-events-none"
          >
            <div
              className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto pointer-events-auto flex flex-col"
              style={{ border: "1px solid rgba(27,42,74,0.12)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo top */}
              <div
                className="relative flex-shrink-0"
                style={{ height: "280px" }}
              >
                <img
                  src={TEAM_IMAGES[member.slug]}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-[#1B2A4A] hover:text-white transition-all duration-300 group/close"
                >
                  <X
                    size={16}
                    strokeWidth={2}
                    className="text-[#1B2A4A] group-hover/close:text-white"
                  />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col p-8 gap-4">
                {/* Specialization */}
                <p className="text-[#BA8C61] text-[10px] uppercase tracking-[0.45em] font-bold leading-snug text-center">
                  {member.title}
                </p>

                {/* Name */}
                <h3
                  className="font-serif italic text-[#1B2A4A] leading-tight text-center pb-5 border-b border-[#1B2A4A]/10"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
                >
                  {member.name}
                </h3>

                {/* Full bio */}
                <p
                  className="text-[#1B2A4A]/75 font-[500] leading-[1.9] italic text-center"
                  style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
                >
                  {member.bio}
                </p>

                {/* Close CTA */}
                <button
                  onClick={onClose}
                  className="mt-4 self-center text-[11px] uppercase tracking-[0.4em] font-bold text-[#1B2A4A]/40 hover:text-[#BA8C61] transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="h-px w-5 bg-current" />
                  Schließen
                  <span className="h-px w-5 bg-current" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Home,
//   ShieldAlert,
//   CheckCircle2,
//   Activity,
//   Navigation,
//   Scale,
//   Zap,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function FirmOffers() {
//   const { t } = useTranslation("offer");
//   const navigate = useNavigate();

//   // The "Live Feed" Items
//   const feedItems = [
//     t("liveFeedItem1"),
//     t("liveFeedItem2"),
//     t("liveFeedItem3"),
//     t("liveFeedItem4"),
//   ];

//   return (
//     <section
//       id="offers"
//       className="bg-slate-950 py-32 px-6 lg:px-12 xl:px-20 text-slate-100 font-sans overflow-hidden"
//     >
//       <div className="max-w-[1600px] mx-auto">
//         {/* HEADER SECTION - Minimalist & Modern */}
//         <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-6">
//             <motion.p className="text-amber-500 uppercase tracking-[0.5em] text-[11px] font-bold">
//               {t("sectionSubtitle")}
//             </motion.p>
//             <motion.h2 className="text-6xl lg:text-8xl xl:text-6xl font-serif italic tracking-tighter leading-none">
//               {t("sectionLabel")}
//             </motion.h2>
//           </div>

//           {/* THE UNIQUE ELEMENT: Live Status Ticker */}
//           <div className="bg-slate-900/50 border-l-2 border-amber-500 p-6 w-full md:w-80 backdrop-blur-md">
//             <div className="flex items-center gap-2 mb-4">
//               <Activity size={14} className="text-amber-500 animate-pulse" />
//               <span className="text-[10px] font-black tracking-widest text-slate-500">
//                 {t("liveFeedLabel")}
//               </span>
//             </div>
//             <div className="h-10 overflow-hidden relative">
//               <motion.div
//                 animate={{ y: [0, -120] }}
//                 transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//                 className="space-y-4"
//               >
//                 {[...feedItems, ...feedItems].map((item, i) => (
//                   <p
//                     key={i}
//                     className="text-xs font-medium text-slate-300 tracking-wide uppercase italic"
//                   >
//                     {item}
//                   </p>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//           {/* SERVICE 1: SCHULDENFREI (Interactive Depth) */}
//           <motion.div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 lg:p-24 relative overflow-hidden group shadow-2xl">
//             <div className="relative z-10">
//               <div className="flex items-center gap-4 mb-10">
//                 <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
//                   <Navigation size={20} />
//                 </div>
//                 <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.4em]">
//                   {t("card1.label")}
//                 </span>
//               </div>
//               <h3 className="text-5xl lg:text-6xl font-serif text-white mb-14 max-w-2xl leading-[1.1]">
//                 {t("card1.h2")}
//               </h3>

//               <div className="grid md:grid-cols-2 gap-16 mb-20">
//                 <div className="space-y-5">
//                   <h4 className="font-bold uppercase tracking-widest text-xs flex items-center gap-3">
//                     <span className="w-8 h-px bg-amber-500" />{" "}
//                     {t("card1.sub1Title")}
//                   </h4>
//                   <p className="text-slate-400 text-base font-light leading-relaxed">
//                     {t("card1.sub1Desc")}
//                   </p>
//                 </div>
//                 <div className="space-y-5">
//                   <h4 className="font-bold uppercase tracking-widest text-xs flex items-center gap-3">
//                     <span className="w-8 h-px bg-amber-500" />{" "}
//                     {t("card1.sub2Title")}
//                   </h4>
//                   <p className="text-slate-400 text-base font-light leading-relaxed">
//                     {t("card1.sub2Desc")}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate("/contact")}
//                 className="relative group/btn flex items-center gap-8 text-[11px] font-black tracking-[0.3em] uppercase"
//               >
//                 <span className="bg-white text-slate-950 px-10 py-6 group-hover/btn:bg-amber-500 transition-colors">
//                   {t("card1.cta")}
//                 </span>
//                 <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center group-hover/btn:border-amber-500 transition-colors">
//                   <ArrowRight
//                     size={20}
//                     className="group-hover/btn:translate-x-1 transition-transform"
//                   />
//                 </div>
//               </button>
//             </div>
//           </motion.div>

//           {/* SERVICE 2: IMMOBILIE (Modern Iconography) */}
//           <motion.div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-12 lg:p-16 flex flex-col justify-between group hover:bg-slate-800/50 transition-all">
//             <div className="space-y-12">
//               <div className="relative inline-block">
//                 <Home
//                   className="text-amber-500 relative z-10"
//                   size={48}
//                   strokeWidth={1}
//                 />
//                 <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
//               </div>
//               <div>
//                 <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] block mb-6">
//                   {t("card2.label")}
//                 </span>
//                 <h3 className="text-4xl font-serif italic text-white mb-8 leading-tight">
//                   {t("card2.h2")}
//                 </h3>
//                 <p className="text-slate-400 font-light text-xl leading-relaxed">
//                   {t("card2.content")}
//                 </p>
//               </div>
//             </div>
//             <div className="pt-12 overflow-hidden">
//               <div className="h-px w-full bg-slate-800 relative">
//                 <motion.div
//                   initial={{ x: "-100%" }}
//                   whileInView={{ x: "100%" }}
//                   transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-1/2"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* SERVICE 3: Hilfe bei Pfändung (The "Boutique Strategy" Row) */}
//           <motion.div className="lg:col-span-12 bg-slate-900 border border-slate-800 p-10 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16">
//             <div className="flex-1 z-10">
//               <div className="flex items-center gap-4 mb-8">
//                 <span className="px-3 py-1 border border-amber-500/30 text-amber-500 text-[9px] font-black tracking-widest uppercase">
//                   {t("strategyLabel")}
//                 </span>
//               </div>
//               <h3 className="text-5xl lg:text-6xl font-serif text-white mb-8">
//                 {t("card3.h2")}
//               </h3>
//               <p className="text-slate-400 text-2xl font-light italic max-w-4xl leading-relaxed">
//                 {t("card3.content")}
//               </p>
//             </div>

//             {/* THE UNUSUAL ELEMENT: Interactive Grid Shield */}
//             <div className="relative w-72 h-72 flex items-center justify-center shrink-0">
//               <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full animate-pulse" />
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//                 className="absolute inset-0 border border-dashed border-slate-700 rounded-full"
//               />
//               <div
//                 className="relative z-10 flex flex-col items-center group cursor-pointer"
//                 onClick={() => navigate("/contact")}
//               >
//                 <Scale
//                   size={60}
//                   strokeWidth={1}
//                   className="text-amber-500 group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <span className="mt-4 text-[9px] font-black tracking-[0.4em] text-slate-500 group-hover:text-amber-500 transition-colors uppercase">
//                   Mandat Erteilen
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//==============================================================
//==============================================================
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { ArrowRight, Home, Activity, Navigation, Scale } from "lucide-react";

// export default function FirmOffers() {
//   const { t } = useTranslation("offer");

//   const feedItems = [
//     t("liveFeedItem1"),
//     t("liveFeedItem2"),
//     t("liveFeedItem3"),
//     t("liveFeedItem4"),
//   ];

//   return (
//     <section
//       id="offers"
//       className="bg-[#0f172a] py-32 px-6 lg:py-56 text-slate-200 overflow-hidden"
//     >
//       <div className="max-w-[1400px] mx-auto">
//         {/* HEADER SECTION - Now with Asymmetric Spacing */}
//         <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
//           <div className="lg:col-span-8 space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center gap-6"
//             >
//               <span className="h-px w-20 bg-[#d4af37]/30" />
//               <p className="text-[#d4af37] uppercase tracking-[0.6em] text-[11px] font-bold">
//                 {t("sectionSubtitle")}
//               </p>
//             </motion.div>
//             <h2 className="text-7xl lg:text-6xl font-serif italic tracking-tighter leading-[0.8] text-white">
//               {t("sectionLabel")}
//             </h2>
//           </div>

//           <div className="lg:col-span-4">
//             <div className="border-l border-white/10 pl-8 py-2">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//                 <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
//                   {t("liveFeedLabel")}
//                 </span>
//               </div>
//               <div className="h-8 overflow-hidden relative">
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
//                       className="text-xs font-light text-slate-300 italic"
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
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* CARD 1: THE ANCHOR */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             className="lg:col-span-7 bg-[#1e293b]/40 border border-white/5 p-12 lg:p-24 relative group"
//           >
//             {/* Soft Ambient Glow */}
//             <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4af37]/5 blur-[100px] rounded-full group-hover:bg-[#d4af37]/10 transition-colors duration-700" />

//             <div className="relative z-10 flex flex-col h-full">
//               <Navigation
//                 size={32}
//                 strokeWidth={1}
//                 className="text-[#d4af37] mb-12"
//               />

//               <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-16 leading-[1.1]">
//                 {t("card1.h2")}
//               </h3>

//               <div className="grid md:grid-cols-2 gap-12 mt-auto">
//                 <div className="space-y-4">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
//                     {t("card1.sub1Title")}
//                   </h4>
//                   <p className="text-slate-400 text-sm leading-relaxed font-light">
//                     {t("card1.sub1Desc")}
//                   </p>
//                 </div>
//                 <div className="space-y-4">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
//                     {t("card1.sub2Title")}
//                   </h4>
//                   <p className="text-slate-400 text-sm leading-relaxed font-light">
//                     {t("card1.sub2Desc")}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-20">
//                 <a
//                   href="#contact"
//                   className="group/btn inline-flex items-center gap-10"
//                 >
//                   <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white group-hover/btn:text-[#d4af37] transition-colors">
//                     {t("card1.cta")}
//                   </span>
//                   <div className="h-px w-24 bg-white/20 group-hover/btn:w-32 group-hover/btn:bg-[#d4af37] transition-all duration-500" />
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* CARD 2: THE ACCENT */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             className="lg:col-span-5 flex flex-col gap-8"
//           >
//             {/* SUB-CARD: REAL ESTATE */}
//             <div className="flex-1 bg-white p-12 lg:p-16 group relative overflow-hidden">
//               <Home
//                 size={40}
//                 strokeWidth={1}
//                 className="text-[#e2b82d] mb-12 group-hover:scale-110 transition-transform duration-500"
//               />
//               <h3 className="text-4xl font-serif italic text-[#d4af37] mb-6 leading-tight">
//                 {t("card2.h2")}
//               </h3>
//               <p className="text-slate-700 font-light leading-relaxed mb-10">
//                 {t("card2.content")}
//               </p>
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             </div>

//             {/* SUB-CARD: SMALL CTA/STAT */}
//             <div
//               className="bg-[#1e293b] p-12 border border-white/5 flex items-center justify-between group cursor-pointer"
//               onClick={() => (window.location.href = "#contact")}
//             >
//               <div>
//                 <span className="block text-[10px] font-bold text-[#d4af37] tracking-[0.3em] uppercase mb-2">
//                   Ready to act?
//                 </span>
//                 <span className="text-2xl font-serif italic text-white">
//                   Let's start the process
//                 </span>
//               </div>
//               <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
//                 <ArrowRight
//                   size={20}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* CARD 3: THE STRATEGY STRIP */}
//           <motion.div className="lg:col-span-12 bg-gradient-to-r from-[#1e293b]/80 to-transparent border border-white/5 p-12 lg:p-20 mt-8 flex flex-col lg:flex-row items-center gap-16">
//             <div className="flex-1">
//               <Scale
//                 size={48}
//                 strokeWidth={1}
//                 className="text-[#d4af37] mb-10"
//               />
//               <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-8">
//                 {t("card3.h2")}
//               </h3>
//               <p className="text-slate-400 text-xl font-light max-w-4xl leading-relaxed italic">
//                 {t("card3.content")}
//               </p>
//             </div>

//             <div className="relative group">
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("contact")
//                     .scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="h-44 w-44 rounded-full border border-[#d4af37]/30 flex items-center justify-center relative overflow-hidden group-hover:border-[#d4af37] transition-colors duration-700"
//               >
//                 <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
//                 <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37] group-hover:text-slate-950 transition-colors">
//                   Get Help Now
//                 </span>
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//============================================================
//============================================================
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Home, Activity, Navigation, Scale } from "lucide-react";

export default function FirmOffers() {
  const { t } = useTranslation("offer");

  const feedItems = [
    t("liveFeedItem1"),
    t("liveFeedItem2"),
    t("liveFeedItem3"),
    t("liveFeedItem4"),
  ];

  return (
    <section
      id="offers"
      className="bg-[#0f172a] py-20 px-6 md:py-32 lg:py-56 text-slate-200 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION - Responsive Grid */}
        <div className="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-6"
            >
              <span className="h-px w-12 md:w-20 bg-[#d4af37]/30" />
              <p className="text-[#d4af37] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[11px] font-bold">
                {t("sectionSubtitle")}
              </p>
            </motion.div>
            {/* Clamped Text for Mobile */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter leading-tight md:leading-[0.8] text-white">
              {t("sectionLabel")}
            </h2>
          </div>

          <div className="lg:col-span-4 w-full">
            <div className="border-l border-white/10 pl-6 md:pl-8 py-2">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  {t("liveFeedLabel")}
                </span>
              </div>
              <div className="h-6 md:h-8 overflow-hidden relative">
                <motion.div
                  animate={{ y: [0, -80] }}
                  transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "linear",
                  }}
                  className="space-y-4"
                >
                  {[...feedItems, ...feedItems].map((item, i) => (
                    <p
                      key={i}
                      className="text-xs md:text-sm font-light text-slate-300 italic"
                    >
                      {item}
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* THE BENTO SPREAD - Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* CARD 1: THE ANCHOR */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-[#1e293b]/40 border border-white/5 p-8 md:p-12 lg:p-24 relative group overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4af37]/5 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col h-full">
              <Navigation
                size={28}
                md:size={32}
                strokeWidth={1}
                className="text-[#d4af37] mb-8 md:mb-12"
              />

              <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-white mb-10 md:mb-16 leading-tight">
                {t("card1.h2")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-auto">
                <div className="space-y-3">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    {t("card1.sub1Title")}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {t("card1.sub1Desc")}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    {t("card1.sub2Title")}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {t("card1.sub2Desc")}
                  </p>
                </div>
              </div>

              <div className="mt-12 md:mt-20">
                <a
                  href="#contact"
                  className="group/btn inline-flex items-center gap-6 md:gap-10"
                >
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white group-hover/btn:text-[#d4af37] transition-colors">
                    {t("card1.cta")}
                  </span>
                  <div className="h-px w-12 md:w-24 bg-white/20 group-hover/btn:w-32 group-hover/btn:bg-[#d4af37] transition-all duration-500" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: THE ACCENT */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
          >
            {/* SUB-CARD: REAL ESTATE */}
            <div className="bg-white p-8 md:p-12 group relative overflow-hidden">
              <Home
                size={32}
                md:size={40}
                strokeWidth={1}
                className="text-[#e2b82d] mb-8 md:mb-12"
              />
              <h3 className="text-3xl md:text-4xl font-serif italic text-[#d4af37] mb-4 md:mb-6 leading-tight">
                {t("card2.h2")}
              </h3>
              <p className="text-slate-700 font-light text-sm md:text-base leading-relaxed mb-8">
                {t("card2.content")}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4af37] md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500" />
            </div>

            {/* SUB-CARD: SMALL CTA */}
            <div
              className="bg-[#1e293b] p-8 md:p-12 border border-white/5 flex items-center justify-between group cursor-pointer"
              onClick={() => (window.location.href = "#contact")}
            >
              <div className="max-w-[70%]">
                <span className="block text-[9px] font-bold text-[#d4af37] tracking-[0.2em] uppercase mb-1">
                  Ready to act?
                </span>
                <span className="text-xl md:text-2xl font-serif italic text-white">
                  Let's start the process
                </span>
              </div>
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors shrink-0">
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </motion.div>

          {/* CARD 3: THE STRATEGY STRIP */}
          <motion.div className="lg:col-span-12 bg-[#1e293b]/60 border border-white/5 p-8 md:p-12 lg:p-20 mt-4 md:mt-8 flex flex-col lg:flex-row items-start lg:items-center gap-10 md:gap-16">
            <div className="flex-1">
              <Scale
                size={40}
                md:size={48}
                strokeWidth={1}
                className="text-[#d4af37] mb-6 md:mb-10"
              />
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-white mb-6 md:mb-8">
                {t("card3.h2")}
              </h3>
              <p className="text-slate-400 text-base md:text-xl font-light max-w-4xl leading-relaxed italic">
                {t("card3.content")}
              </p>
            </div>

            <div className="w-full lg:w-auto flex justify-center">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="h-32 w-32 md:h-44 md:w-44 rounded-full border border-[#d4af37]/30 flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] group-hover:text-slate-950 transition-colors px-4 text-center">
                  Get Help Now
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

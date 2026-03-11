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
//       className="bg-[#003152] py-20 px-6 md:py-32 lg:py-56 text-slate-200 overflow-hidden"
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
//               {/* Tiffany Accent */}
//               <span className="h-px w-12 md:w-20 bg-[#81D8D0]/30" />
//               <p className="text-[#4c8b85] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[11px] font-bold">
//                 {t("sectionSubtitle")}
//               </p>
//             </motion.div>
//             <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter leading-tight md:leading-[0.8] text-slate-300">
//               {t("sectionLabel")}
//             </h2>
//           </div>

//           <div className="lg:col-span-4 w-full">
//             <div className="border-l border-white/10 pl-6 md:pl-8 py-2">
//               <div className="flex items-center gap-3 mb-3 md:mb-4">
//                 <div className="h-2 w-2 rounded-full bg-[#81D8D0] animate-pulse" />
//                 <span className="text-[9px] md:text-[10px] font-black tracking-widest text-slate-400 uppercase">
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
//                       className="text-xs md:text-sm font-light text-slate-300 italic"
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
//           {/* CARD 1 */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="lg:col-span-7 bg-white border border-white/5 p-8 md:p-12 lg:p-24 relative group overflow-hidden"
//           >
//             <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4c8b85]/5 blur-[100px] rounded-full" />
//             <div className="relative z-10 flex flex-col h-full">
//               <Navigation
//                 size={32}
//                 strokeWidth={1}
//                 className="text-[#4c8b85] mb-12"
//               />
//               <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-[#4c8b85] mb-16 leading-tight">
//                 {t("card1.h2")}
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto">
//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4c8b85]">
//                     {t("card1.sub1Title")}
//                   </h4>
//                   <p className="text-[#4c8b85] text-sm leading-relaxed font-light">
//                     {t("card1.sub1Desc")}
//                   </p>
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4c8b85]">
//                     {t("card1.sub2Title")}
//                   </h4>
//                   <p className="text-slate-500 text-sm leading-relaxed font-light">
//                     {t("card1.sub2Desc")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* CARD 2 */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
//           >
//             <div className="bg-white p-12 group relative overflow-hidden">
//               <Home
//                 size={40}
//                 strokeWidth={1}
//                 className="text-[#81D8D0] mb-12"
//               />
//               <h3 className="text-4xl font-serif italic text-[#003152] mb-6 leading-tight">
//                 {t("card2.h2")}
//               </h3>
//               <p className="text-slate-700 font-light text-base leading-relaxed mb-8">
//                 {t("card2.content")}
//               </p>
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-[#81D8D0] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             </div>

//             <div
//               className="bg-[#00253f] p-12 border border-white/5 flex items-center justify-between group cursor-pointer"
//               onClick={() => (window.location.href = "#contact")}
//             >
//               <div className="max-w-[70%]">
//                 <span className="block text-[9px] font-bold text-[#81D8D0] tracking-[0.2em] uppercase mb-1">
//                   Ready to act?
//                 </span>
//                 <span className="text-2xl font-serif italic text-white">
//                   Let's start the process
//                 </span>
//               </div>
//               <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#81D8D0] transition-colors">
//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform text-[#81D8D0]"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* CARD 3 */}
//           <motion.div className="lg:col-span-12 bg-[#00253f]/60 border border-white/5 p-20 mt-8 flex flex-col lg:flex-row items-center gap-16">
//             <div className="flex-1">
//               <Scale
//                 size={48}
//                 strokeWidth={1}
//                 className="text-[#81D8D0] mb-10"
//               />
//               <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-8">
//                 {t("card3.h2")}
//               </h3>
//               <p className="text-slate-300 text-xl font-light max-w-4xl leading-relaxed italic">
//                 {t("card3.content")}
//               </p>
//             </div>
//             <button
//               className="h-44 w-44 rounded-full border border-[#81D8D0]/30 flex items-center justify-center relative overflow-hidden group"
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   .scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               <div className="absolute inset-0 bg-[#81D8D0] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
//               <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#81D8D0] group-hover:text-[#003152] transition-colors">
//                 Get Help Now
//               </span>
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//===================================================================
//===================================================================
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import { ArrowRight, Home, Navigation, Scale } from "lucide-react";

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
//       className="bg-[#262B3E] py-20 px-6 md:py-32 lg:py-56 text-slate-200 overflow-hidden"
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
//               {/* Tan/Gold Accent Line */}
//               <span className="h-px w-12 md:w-20 bg-[#BA8C61]/40" />
//               <p className="text-[#BA8C61] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[11px] font-bold">
//                 {t("sectionSubtitle")}
//               </p>
//             </motion.div>
//             <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter leading-tight md:leading-[0.8] text-white">
//               {t("sectionLabel")}
//             </h2>
//           </div>

//           <div className="lg:col-span-4 w-full">
//             <div className="border-l border-white/10 pl-6 md:pl-8 py-2">
//               <div className="flex items-center gap-3 mb-3 md:mb-4">
//                 {/* Tan/Gold Pulse */}
//                 <div className="h-2 w-2 rounded-full bg-[#BA8C61] animate-pulse" />
//                 <span className="text-[9px] md:text-[10px] font-black tracking-widest text-slate-400 uppercase">
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
//                       className="text-xs md:text-sm font-light text-slate-300 italic"
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
//           {/* CARD 1 (Large White Card) */}
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-24 relative group overflow-hidden rounded-sm shadow-xl"
//           >
//             {/* Subtle Gold Blur background effect */}
//             <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#BA8C61]/10 blur-[100px] rounded-full" />

//             <div className="relative z-10 flex flex-col h-full">
//               <Navigation
//                 size={32}
//                 strokeWidth={1}
//                 className="text-[#BA8C61] mb-12"
//               />
//               <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-[#262B3E] mb-16 leading-tight">
//                 {t("card1.h2")}
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto">
//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#BA8C61]">
//                     {t("card1.sub1Title")}
//                   </h4>
//                   <p className="text-slate-600 text-sm leading-relaxed font-light">
//                     {t("card1.sub1Desc")}
//                   </p>
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#BA8C61]">
//                     {t("card1.sub2Title")}
//                   </h4>
//                   <p className="text-slate-500 text-sm leading-relaxed font-light">
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
//             {/* CARD 2 (White Small Card) */}
//             <div className="bg-white p-12 group relative overflow-hidden rounded-sm shadow-xl">
//               <Home
//                 size={40}
//                 strokeWidth={1}
//                 className="text-[#BA8C61] mb-12"
//               />
//               <h3 className="text-4xl font-serif italic text-[#262B3E] mb-6 leading-tight">
//                 {t("card2.h2")}
//               </h3>
//               <p className="text-slate-700 font-light text-base leading-relaxed mb-8">
//                 {t("card2.content")}
//               </p>
//               {/* Tan/Gold slide-up border */}
//               <div className="absolute bottom-0 left-0 w-full h-1 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             </div>

//             {/* ACTION CARD (Dark Navy Card) */}
//             <div
//               className="bg-[#1a1e2c] p-12 border border-white/5 flex items-center justify-between group cursor-pointer rounded-sm hover:border-[#BA8C61]/50 transition-all duration-500"
//               onClick={() => (window.location.href = "#contact")}
//             >
//               <div className="max-w-[70%]">
//                 <span className="block text-[9px] font-bold text-[#BA8C61] tracking-[0.2em] uppercase mb-1">
//                   Ready to act?
//                 </span>
//                 <span className="text-2xl font-serif italic text-white">
//                   Let's start the process
//                 </span>
//               </div>
//               <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#BA8C61] group-hover:border-[#BA8C61] transition-all duration-500">
//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform text-[#BA8C61] group-hover:text-[#262B3E]"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* CARD 3 (Full Width Dark Card) */}
//           <motion.div className="lg:col-span-12 bg-black/20 border border-white/5 p-12 md:p-20 mt-8 flex flex-col lg:flex-row items-center gap-16 rounded-sm">
//             <div className="flex-1">
//               <Scale
//                 size={48}
//                 strokeWidth={1}
//                 className="text-[#BA8C61] mb-10"
//               />
//               <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-8">
//                 {t("card3.h2")}
//               </h3>
//               <p className="text-slate-300 text-xl font-light max-w-4xl leading-relaxed italic">
//                 {t("card3.content")}
//               </p>
//             </div>

//             {/* Round CTA Button */}
//             <button
//               className="h-44 w-44 rounded-full border border-[#BA8C61]/30 flex items-center justify-center relative overflow-hidden group shrink-0"
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   .scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               <div className="absolute inset-0 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
//               <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#BA8C61] group-hover:text-[#262B3E] transition-colors">
//                 Get Help Now
//               </span>
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//================================================================
//================================================================
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Home, Navigation, Scale } from "lucide-react";

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
      className="bg-[#F8F9FA] py-20 px-6 md:py-32 lg:py-56 text-[#262B3E] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-6"
            >
              <span className="h-px w-12 md:w-20 bg-[#BA8C61]" />
              <p className="text-[#BA8C61] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[11px] font-bold">
                {t("sectionSubtitle")}
              </p>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic tracking-tighter leading-tight md:leading-[0.8] text-[#262B3E]">
              {t("sectionLabel")}
            </h2>
          </div>

          <div className="lg:col-span-4 w-full">
            <div className="border-l border-[#262B3E]/10 pl-6 md:pl-8 py-2">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="h-2 w-2 rounded-full bg-[#BA8C61] animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-[#262B3E]/50 uppercase">
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
                      className="text-xs md:text-sm font-light text-[#262B3E]/70 italic"
                    >
                      {item}
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* THE BENTO SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* CARD 1 (Large Navy Card) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-[#262B3E] p-8 md:p-12 lg:p-24 relative group overflow-hidden rounded-sm shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#BA8C61]/10 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col h-full">
              <Navigation
                size={32}
                strokeWidth={1}
                className="text-[#BA8C61] mb-12"
              />
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif italic text-white mb-16 leading-tight">
                {t("card1.h2")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#BA8C61]">
                    {t("card1.sub1Title")}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    {t("card1.sub1Desc")}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#BA8C61]">
                    {t("card1.sub2Title")}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    {t("card1.sub2Desc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN CARDS */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
          >
            {/* CARD 2 (Navy Small Card) */}
            <div className="bg-[#262B3E] p-12 group relative overflow-hidden rounded-sm shadow-2xl">
              <Home
                size={40}
                strokeWidth={1}
                className="text-[#BA8C61] mb-12"
              />
              <h3 className="text-4xl font-serif italic text-white mb-6 leading-tight">
                {t("card2.h2")}
              </h3>
              <p className="text-white/70 font-light text-base leading-relaxed mb-8">
                {t("card2.content")}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>

            {/* ACTION CARD (Lightened Card) */}
            <div
              className="bg-white p-12 border border-[#262B3E]/5 flex items-center justify-between group cursor-pointer rounded-sm hover:shadow-lg transition-all duration-500"
              onClick={() => (window.location.href = "#contact")}
            >
              <div className="max-w-[70%]">
                <span className="block text-[9px] font-bold text-[#BA8C61] tracking-[0.2em] uppercase mb-1">
                  Ready to act?
                </span>
                <span className="text-2xl font-serif italic text-[#262B3E]">
                  Let's start the process
                </span>
              </div>
              <div className="h-12 w-12 rounded-full border border-[#262B3E]/10 flex items-center justify-center group-hover:bg-[#BA8C61] group-hover:border-[#BA8C61] transition-all duration-500">
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform text-[#BA8C61] group-hover:text-white"
                />
              </div>
            </div>
          </motion.div>

          {/* CARD 3 (Full Width Navy Card) */}
          <motion.div className="lg:col-span-12 bg-[#1e2231] border border-white/5 p-12 md:p-20 mt-8 flex flex-col lg:flex-row items-center gap-16 rounded-sm shadow-2xl">
            <div className="flex-1">
              <Scale
                size={48}
                strokeWidth={1}
                className="text-[#BA8C61] mb-10"
              />
              <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-8">
                {t("card3.h2")}
              </h3>
              <p className="text-white/60 text-xl font-light max-w-4xl leading-relaxed italic">
                {t("card3.content")}
              </p>
            </div>

            <button
              className="h-44 w-44 rounded-full border border-[#BA8C61]/30 flex items-center justify-center relative overflow-hidden group shrink-0"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div className="absolute inset-0 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#BA8C61] group-hover:text-white transition-colors">
                Get Help Now
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

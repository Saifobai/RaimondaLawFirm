// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { Shield, Fingerprint, ArrowUpRight } from "lucide-react";
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

//   // THE 4s HARMONIC PULSE (The Heartbeat of the Firm)
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
//       className="py-40 bg-[#262B3E] text-white overflow-hidden relative"
//     >
//       {/* BACKGROUND DECOR (Award-winning sites use subtle textures) */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//         <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#BA8C61] rounded-full blur-[150px]" />
//       </div>

//       <div className="max-w-[1700px] mx-auto px-8 relative z-10">
//         {/* --- THE BOLD HEADER --- */}
//         <div className="flex flex-col lg:flex-row justify-between items-start mb-32 border-l-2 border-[#BA8C61] pl-12">
//           <div className="max-w-3xl">
//             <h2 className="text-7xl lg:text-5xl font-serif italic tracking-tighter leading-[0.85] text-white">
//               {t("hero.title")}
//             </h2>
//           </div>
//         </div>

//         {/* --- FOUNDERS: THE POWER DYNAMICS --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-52">
//           {founders.map((f, i) => (
//             <motion.div
//               key={f.slug}
//               onMouseEnter={() => setHoveredSlug(f.slug)}
//               onMouseLeave={() => setHoveredSlug(null)}
//               className={`relative ${i === 1 ? "lg:mt-32" : ""}`} // Asymmetric Offset
//             >
//               <div className="relative aspect-[3/3] bg-[#1A1E2E] overflow-hidden group">
//                 {/* Internal HUD Elements */}
//                 <div className="absolute top-6 left-6 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <Shield size={12} className="text-[#BA8C61]" />
//                   {/* <span className="text-[8px] font-mono tracking-widest">
//                     VERIFIED_SENIOR
//                   </span> */}
//                 </div>

//                 <motion.img
//                   src={TEAM_IMAGES[f.slug]}
//                   animate={{
//                     scale:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1.08
//                         : 1,
//                     filter:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? "grayscale(0%)"
//                         : "grayscale(100%) contrast(1.1)",
//                     opacity:
//                       hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
//                         ? 1
//                         : 0.4,
//                   }}
//                   transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />

//                 {/* Glass Bio Overlay */}
//                 <motion.div
//                   animate={{
//                     x: hoveredSlug === f.slug ? 0 : -20,
//                     opacity: hoveredSlug === f.slug ? 1 : 0,
//                   }}
//                   className="absolute bottom-10 right-0 left-20 z-30 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-10"
//                 >
//                   <p className="text-white text-sm font-light italic leading-relaxed">
//                     {f.bio}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Title Content */}
//               <div className="mt-10 flex justify-between items-end">
//                 <div>
//                   <h3 className="text-5xl font-serif italic text-white tracking-tight">
//                     {f.name}
//                   </h3>
//                 </div>
//                 <ArrowUpRight className="text-white/20" size={40} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- ASSISTANTS: THE CONTINUOUS ENGINE --- */}
//         <div className="relative pt-20 border-t border-white/10">
//           <div className="flex justify-between items-center mb-16 px-4">
//             <div className="flex items-center gap-4">
//               <div className="w-2 h-2 bg-[#BA8C61] rounded-full animate-pulse" />
//               <h3 className="text-white font-serif italic text-3xl tracking-tight">
//                 {t("cta.expert")}
//               </h3>
//             </div>
//             <div className="h-[1px] flex-grow mx-10 bg-gradient-to-r from-[#BA8C61]/40 to-transparent hidden md:block" />
//           </div>

//           <Swiper
//             modules={[Autoplay, FreeMode]}
//             loop={true}
//             freeMode={true}
//             speed={10000} // Smooth, constant drift
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: false,
//             }}
//             slidesPerView={1.2}
//             breakpoints={{
//               768: { slidesPerView: 2.5 },
//               1200: { slidesPerView: 4 },
//             }}
//             className="overflow-visible swiper-linear"
//           >
//             {/* We duplicate the assistants array [...assistants, ...assistants]
//         to ensure the loop is seamless even with few members */}
//             {[...assistants, ...assistants].map((a, idx) => (
//               <SwiperSlide key={`${a.slug}-${idx}`}>
//                 <motion.div
//                   onMouseEnter={() => setHoveredSlug(a.slug)}
//                   onMouseLeave={() => setHoveredSlug(null)}
//                   className="px-6 group cursor-crosshair"
//                 >
//                   {/* THE CARD: Glass-morphism ID Style */}
//                   <div className="relative bg-white/[0.02] border border-white/5 p-10 h-[500px] flex flex-col transition-all duration-700 group-hover:bg-white/[0.05] group-hover:border-[#BA8C61]/30">
//                     {/* Top Badge */}
//                     <div className="absolute top-0 right-0 p-4">
//                       <div
//                         className={`w-1 h-8 transition-colors duration-1000 ${hoveredSlug === a.slug || isGlobalActive ? "bg-[#BA8C61]" : "bg-white/10"}`}
//                       />
//                     </div>

//                     {/* Profile Section */}
//                     <div className="relative mb-10 w-24 h-24">
//                       <motion.div
//                         animate={{
//                           borderColor:
//                             hoveredSlug === a.slug || isGlobalActive
//                               ? "#BA8C61"
//                               : "rgba(255,255,255,0.1)",
//                           rotate: hoveredSlug === a.slug ? 90 : 0,
//                         }}
//                         className="absolute inset-0 border-2 rounded-xl transition-all duration-700"
//                       />
//                       <motion.div className="w-full h-full p-2 overflow-hidden rounded-xl">
//                         <motion.img
//                           src={TEAM_IMAGES[a.slug]}
//                           animate={{
//                             filter:
//                               hoveredSlug === a.slug || isGlobalActive
//                                 ? "grayscale(0%)"
//                                 : "grayscale(100%)",
//                             scale: hoveredSlug === a.slug ? 1.1 : 1,
//                           }}
//                           className="w-full h-full object-cover rounded-lg"
//                         />
//                       </motion.div>
//                     </div>

//                     {/* Text Content */}
//                     <div className="mt-auto space-y-4">
//                       <div className="space-y-1">
//                         <p className="text-[#BA8C61] font-mono text-[8px] tracking-[0.5em] uppercase">
//                           Position_Lvl_02
//                         </p>
//                         <h4 className="text-3xl font-serif italic text-white leading-none">
//                           {a.name}
//                         </h4>
//                       </div>

//                       <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase">
//                         {a.title}
//                       </p>

//                       <motion.p
//                         animate={{
//                           opacity:
//                             hoveredSlug === a.slug || isGlobalActive ? 1 : 0.3,
//                           y: hoveredSlug === a.slug ? 0 : 5,
//                         }}
//                         className="text-white/60 text-xs font-light leading-relaxed italic pr-4 line-clamp-4 border-l border-white/10 pl-4"
//                       >
//                         {a.bio}
//                       </motion.p>
//                     </div>

//                     {/* Bottom Tech Detail */}
//                     <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-20 group-hover:opacity-60 transition-opacity">
//                       <span className="font-mono text-[7px] tracking-tighter">
//                         SECURE_ID_{idx}
//                       </span>
//                       <div className="flex gap-1">
//                         <div className="w-1 h-1 bg-white rounded-full" />
//                         <div className="w-1 h-1 bg-white rounded-full" />
//                       </div>
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

//=====================================================================
//=====================================================================
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/free-mode";
import { TEAM_IMAGES } from "../constants/teamImages";

export default function Team() {
  const { t } = useTranslation("team");
  const [isGlobalActive, setIsGlobalActive] = useState(false);
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const allMembers = t("members", { returnObjects: true }) || [];
  const founders = allMembers.filter((m) =>
    ["raimonda-kraemer", "aurelija-maumevice"].includes(m.slug),
  );
  const assistants = allMembers.filter(
    (m) => !founders.find((f) => f.slug === m.slug),
  );

  useEffect(() => {
    const heartbeat = () => {
      setIsGlobalActive(true);
      setTimeout(() => setIsGlobalActive(false), 2000);
    };
    heartbeat();
    const interval = setInterval(heartbeat, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="team"
      className="py-24 lg:py-40 bg-[#262B3E] text-white overflow-hidden relative"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#BA8C61] rounded-full blur-[100px] lg:blur-[150px]" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 lg:px-8 relative z-10">
        {/* --- THE BOLD HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-32 border-l-2 border-[#BA8C61] pl-6 lg:pl-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-[0.9] lg:leading-[0.85] text-white">
              {t("hero.title")}
            </h2>
          </div>
        </div>

        {/* --- FOUNDERS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-32 lg:mb-52">
          {founders.map((f, i) => (
            <motion.div
              key={f.slug}
              onMouseEnter={() => setHoveredSlug(f.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className={`relative ${i === 1 ? "lg:mt-32" : ""}`}
            >
              <div className="relative aspect-[4/5] lg:aspect-[3/3] bg-[#1A1E2E] overflow-hidden group">
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-30 flex items-center gap-2 opacity-60 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <Shield size={12} className="text-[#BA8C61]" />
                  <span className="text-[7px] font-mono tracking-widest uppercase text-white/40">
                    Partner_Auth
                  </span>
                </div>

                <motion.img
                  src={TEAM_IMAGES[f.slug]}
                  animate={{
                    scale:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1.05
                        : 1,
                    filter:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? "grayscale(0%)"
                        : "grayscale(100%) contrast(1.1)",
                    opacity:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1
                        : 0.5,
                  }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Glass Bio Overlay - Hidden on small mobile, visible on LG hover */}
                <motion.div
                  animate={{
                    x: hoveredSlug === f.slug ? 0 : -20,
                    opacity: hoveredSlug === f.slug ? 1 : 0,
                  }}
                  className="hidden lg:block absolute bottom-10 right-0 left-20 z-30 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-10"
                >
                  <p className="text-white text-sm font-light italic leading-relaxed">
                    {f.bio}
                  </p>
                </motion.div>
              </div>

              {/* Title Content */}
              <div className="mt-8 lg:mt-10 flex justify-between items-end border-b border-white/5 pb-6 lg:border-0">
                <div className="space-y-2">
                  <p className="text-[#BA8C61] font-mono text-[8px] tracking-[0.4em] uppercase">
                    Senior Partner
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tight">
                    {f.name}
                  </h3>
                  {/* Mobile-only Bio (Visible when not on desktop) */}
                  <p className="lg:hidden text-white/50 text-sm font-light italic leading-relaxed mt-4 line-clamp-3">
                    {f.bio}
                  </p>
                </div>
                <ArrowUpRight
                  className="text-[#BA8C61] lg:text-white/20 mb-2"
                  size={32}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ASSISTANTS --- */}
        <div className="relative pt-16 lg:pt-20 border-t border-white/10">
          <div className="flex justify-between items-center mb-12 lg:mb-16">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#BA8C61] rounded-full animate-pulse" />
              <h3 className="text-white font-serif italic text-2xl lg:text-3xl tracking-tight">
                {t("cta.expert")}
              </h3>
            </div>
            <div className="h-[1px] flex-grow mx-10 bg-gradient-to-r from-[#BA8C61]/40 to-transparent hidden lg:block" />
          </div>

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={1.3}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.8 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1400: { slidesPerView: 4 },
            }}
            className="overflow-visible swiper-linear"
          >
            {[...assistants, ...assistants].map((a, idx) => (
              <SwiperSlide key={`${a.slug}-${idx}`}>
                <motion.div
                  onMouseEnter={() => setHoveredSlug(a.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className="group cursor-default"
                >
                  <div className="relative bg-white/[0.02] border border-white/5 p-8 lg:p-10 h-[450px] lg:h-[500px] flex flex-col transition-all duration-700 lg:group-hover:bg-white/[0.05] lg:group-hover:border-[#BA8C61]/30">
                    {/* Top Aesthetic Line */}
                    <div className="absolute top-0 right-0 p-4">
                      <div
                        className={`w-[1px] h-8 transition-colors duration-1000 ${hoveredSlug === a.slug || isGlobalActive ? "bg-[#BA8C61]" : "bg-white/10"}`}
                      />
                    </div>

                    {/* Profile Section */}
                    <div className="relative mb-8 w-20 h-20 lg:w-24 lg:h-24">
                      <motion.div
                        animate={{
                          borderColor:
                            hoveredSlug === a.slug || isGlobalActive
                              ? "#BA8C61"
                              : "rgba(255,255,255,0.1)",
                          rotate: hoveredSlug === a.slug ? 90 : 0,
                        }}
                        className="absolute inset-0 border rounded-xl transition-all duration-700"
                      />
                      <div className="w-full h-full p-2 overflow-hidden rounded-xl">
                        <motion.img
                          src={TEAM_IMAGES[a.slug]}
                          animate={{
                            filter:
                              hoveredSlug === a.slug || isGlobalActive
                                ? "grayscale(0%)"
                                : "grayscale(100%)",
                            scale: hoveredSlug === a.slug ? 1.05 : 1,
                          }}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-auto space-y-4">
                      <div className="space-y-1">
                        <p className="text-[#BA8C61] font-mono text-[7px] tracking-[0.4em] uppercase">
                          Auth_Level_02
                        </p>
                        <h4 className="text-2xl lg:text-3xl font-serif italic text-white leading-none">
                          {a.name}
                        </h4>
                      </div>

                      <p className="text-white/40 font-mono text-[9px] tracking-widest uppercase">
                        {a.title}
                      </p>

                      <p className="text-white/60 text-[11px] lg:text-xs font-light leading-relaxed italic pr-2 line-clamp-3 border-l border-[#BA8C61]/30 pl-4">
                        {a.bio}
                      </p>
                    </div>

                    {/* Bottom Detail */}
                    <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center opacity-20 group-hover:opacity-50">
                      <span className="font-mono text-[6px] tracking-widest">
                        ID_{a.slug.substring(0, 5)}
                      </span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-[#BA8C61] rounded-full" />
                      </div>
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

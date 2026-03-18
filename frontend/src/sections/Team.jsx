// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Linkedin, Mail, Twitter } from "lucide-react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import "swiper/css";
// import "swiper/css/pagination";
// import { TEAM_IMAGES } from "../constants/teamImages";

// /* ---------------------------
//     TEAM MEMBER CARD
// ---------------------------- */
// const TeamMemberCard = ({ member }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseXSpring = useSpring(x);
//   const mouseYSpring = useSpring(y);

//   const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
//   const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

//   const sheenOpacity = useTransform(
//     mouseXSpring,
//     [-0.5, 0, 0.5],
//     [0.05, 0, 0.05],
//   );
//   const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - rect.left) / rect.width - 0.5);
//     y.set((e.clientY - rect.top) / rect.height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const memberImage = TEAM_IMAGES[member.slug];

//   return (
//     <motion.div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       className="group relative h-[500px] md:h-[600px] w-full bg-white/5 rounded-sm border border-white/10 p-6 md:p-10 transition-all duration-700 hover:border-[#BA8C61]/40 hover:bg-white/10 shadow-2xl overflow-hidden"
//     >
//       <motion.div
//         style={{ x: sheenX, opacity: sheenOpacity }}
//         className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
//       />

//       <div className="relative z-10 flex flex-col items-center h-full">
//         <div
//           className="relative w-32 h-32 md:w-44 md:h-44 mb-8 md:mb-10"
//           style={{ transform: "translateZ(80px)" }}
//         >
//           <div className="absolute inset-0 rounded-full border border-[#BA8C61]/20 group-hover:scale-110 md:group-hover:scale-125 group-hover:border-[#BA8C61]/40 transition-all duration-1000" />
//           <div className="w-full h-full rounded-full overflow-hidden p-2 md:p-3 bg-[#262B3E] shadow-inner">
//             <img
//               src={memberImage}
//               alt={member.name}
//               className="w-full h-full rounded-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-[1.5s] ease-out"
//             />
//           </div>
//         </div>

//         <div
//           className="text-center space-y-2 md:space-y-4"
//           style={{ transform: "translateZ(60px)" }}
//         >
//           <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight leading-none">
//             {member.name}
//           </h3>
//           <div className="flex flex-col items-center gap-2">
//             <span className="h-px w-8 bg-[#BA8C61]/40 group-hover:w-16 transition-all duration-700" />
//             <p className="text-[#BA8C61] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">
//               {member.title}
//             </p>
//           </div>
//         </div>

//         <div
//           className="mt-6 md:mt-8 relative"
//           style={{ transform: "translateZ(40px)" }}
//         >
//           <p className="text-white/60 text-xs md:text-sm text-center leading-relaxed font-light italic group-hover:text-white/90 transition-colors duration-700 max-w-[280px]">
//             "{member.bio}"
//           </p>
//         </div>

//         <div
//           className="mt-auto pt-8 flex gap-6 md:gap-8 justify-center w-full"
//           style={{ transform: "translateZ(100px)" }}
//         >
//           {[
//             { Icon: Linkedin, link: member.linkedin },
//             {
//               Icon: Mail,
//               link: member.email ? `mailto:${member.email}` : null,
//             },
//             { Icon: Twitter, link: member.twitter },
//           ].map(
//             ({ Icon, link }, idx) =>
//               link && (
//                 <a
//                   key={idx}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white/40 hover:text-[#BA8C61] transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <Icon size={20} strokeWidth={1.5} />
//                 </a>
//               ),
//           )}
//         </div>
//       </div>
//       <span className="absolute -bottom-10 -right-5 md:-right-10 text-[120px] md:text-[180px] font-serif italic text-white/[0.03] pointer-events-none select-none">
//         {member.name.charAt(0)}
//       </span>
//     </motion.div>
//   );
// };

// /* ---------------------------
//     MAIN TEAM SECTION
// ---------------------------- */
// export default function Team() {
//   const { t } = useTranslation("team");
//   const members = t("members", { returnObjects: true }) || [];
//   const values = t("values", { returnObjects: true }) || [];
//   const cta = t("cta", { returnObjects: true }) || {};

//   return (
//     <section id="team" className="py-20 md:py-48 bg-[#262B3E]">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
//           <div className="max-w-2xl">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center gap-4 mb-6"
//             >
//               <span className="h-px w-12 bg-[#BA8C61]" />
//               <span className="text-[#BA8C61] uppercase tracking-[0.4em] text-[10px] font-bold">
//                 {t("hero.tagline") || "The Expertise"}
//               </span>
//             </motion.div>
//             <h2 className="font-serif text-4xl md:text-7xl italic text-white tracking-tighter">
//               {t("hero.title")}
//             </h2>
//           </div>
//           <p className="text-white/60 max-w-sm text-lg font-light leading-relaxed italic border-l border-white/10 pl-6">
//             {t("hero.subtitle")}
//           </p>
//         </div>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           pagination={{
//             clickable: true,
//             bulletClass: "swiper-pagination-bullet !bg-white/20 !opacity-100",
//             bulletActiveClass:
//               "!bg-[#BA8C61] !w-8 !rounded-full transition-all duration-500",
//           }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="!pb-24"
//         >
//           {members.map((member, i) => (
//             <SwiperSlide key={i}>
//               <TeamMemberCard member={member} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-8 border-t border-white/5 pt-16 md:pt-24">
//           {values.map((value, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group"
//             >
//               <span className="text-[#BA8C61]/40 font-serif text-3xl md:text-4xl group-hover:text-[#BA8C61] transition-colors duration-500">
//                 0{i + 1}.
//               </span>
//               <h4 className="font-serif italic text-xl md:text-2xl text-white mt-4">
//                 {value.title}
//               </h4>
//               <p className="text-white/50 text-sm mt-4 leading-relaxed font-light">
//                 {value.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-24 md:mt-40 bg-black/20 border border-white/5 p-8 md:p-24 text-center relative"
//         >
//           <h3 className="font-serif italic text-3xl md:text-6xl text-white mb-8">
//             {cta.title}
//           </h3>
//           <p className="text-white/60 mt-6 max-w-xl mx-auto font-light text-lg mb-12">
//             {cta.text}
//           </p>
//           <button className="group relative px-10 md:px-12 py-5 overflow-hidden bg-[#BA8C61] transition-all duration-500">
//             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#262B3E]">
//               {cta.button}
//             </span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//================================================================
//================================================================
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { Zap } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import "swiper/css";
// import { TEAM_IMAGES } from "../constants/teamImages";

// export default function Team() {
//   const { t } = useTranslation("team");
//   const [isGlobalActive, setIsGlobalActive] = useState(false);

//   const allMembers = t("members", { returnObjects: true }) || [];
//   const founders = allMembers.filter(
//     (m) => m.slug === "raimonda-kraemer" || m.slug === "aurelija-maumevice",
//   );
//   const assistants = allMembers.filter(
//     (m) => !founders.find((f) => f.slug === m.slug),
//   );

//   // 4-SECOND SYNCHRONIZED TIMER
//   useEffect(() => {
//     const pulseLogic = () => {
//       setIsGlobalActive(true);
//       // The pulse stays "On" for 2 seconds, then "Off" for 2 seconds
//       setTimeout(() => setIsGlobalActive(false), 2000);
//     };

//     pulseLogic(); // Initial trigger
//     const interval = setInterval(pulseLogic, 4000); // Repeat every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="team" className="py-48 bg-[#262B3E] overflow-hidden">
//       <div className="max-w-[1700px] mx-auto px-6">
//         {/* --- SYSTEM HEADER --- */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-10">
//           <div className="max-w-4xl">
//             <h2 className="text-7xl lg:text-[4vw] font-serif italic text-white tracking-tighter leading-none">
//               {t("hero.title")}
//             </h2>
//           </div>
//           {/* Subtle Sync Indicator */}
//           <div className="flex items-center gap-3">
//             <motion.div
//               animate={{
//                 scale: isGlobalActive ? [1, 1.5, 1] : 1,
//                 opacity: isGlobalActive ? 1 : 0.2,
//               }}
//               className="w-2 h-2 rounded-full bg-[#BA8C61]"
//             />
//             <span className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">
//               Sync_Interval: 4000ms
//             </span>
//           </div>
//         </div>

//         {/* --- FOUNDERS --- */}
//         <div className="flex flex-wrap gap-6 mb-12">
//           {founders.map((f, i) => (
//             <motion.div
//               key={i}
//               onMouseEnter={() => setIsGlobalActive(true)}
//               onMouseLeave={() => setIsGlobalActive(false)}
//               className="relative flex-grow basis-full lg:basis-[48%] h-[700px] bg-[#1A1E2E] overflow-hidden group border border-white/5"
//             >
//               {/* Scanning Beam: Slower and wider */}
//               <AnimatePresence>
//                 {isGlobalActive && (
//                   <motion.div
//                     initial={{ top: "-100%" }}
//                     animate={{ top: "100%" }}
//                     exit={{ opacity: 0 }}
//                     transition={{
//                       duration: 3, // Slower beam
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     className="absolute inset-x-0 h-[300px] bg-gradient-to-b from-transparent via-[#BA8C61]/10 to-transparent z-10 pointer-events-none"
//                   />
//                 )}
//               </AnimatePresence>

//               <motion.img
//                 src={TEAM_IMAGES[f.slug]}
//                 animate={{
//                   scale: isGlobalActive ? 1.03 : 1,
//                   filter: isGlobalActive
//                     ? "grayscale(0%) brightness(1)"
//                     : "grayscale(100%) brightness(0.5)",
//                 }}
//                 transition={{ duration: 1.5, ease: "circOut" }} // Luxurious, slow transition
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#262B3E] via-transparent to-transparent z-20" />

//               <div className="absolute bottom-12 left-12 right-12 z-30">
//                 <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.6em] uppercase mb-4">
//                   Partner_v.0{i + 1}
//                 </p>
//                 <h3 className="text-5xl lg:text-7xl font-serif italic text-white mb-6 leading-none">
//                   {f.name}
//                 </h3>
//                 <motion.p
//                   animate={{
//                     opacity: isGlobalActive ? 1 : 0.3,
//                     y: isGlobalActive ? 0 : 5,
//                   }}
//                   transition={{ duration: 1 }}
//                   className="text-white/70 text-lg font-light italic max-w-md"
//                 >
//                   {f.bio}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- ASSISTANTS --- */}
//         <div className="relative">
//           <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
//             <Zap
//               size={14}
//               className={`transition-all duration-1000 ${isGlobalActive ? "text-[#BA8C61] fill-[#BA8C61]" : "text-white/10"}`}
//             />
//             <h3 className="text-white font-serif italic text-3xl">
//               Expert Support Unit
//             </h3>
//           </div>

//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={1}
//             slidesPerView={1}
//             loop
//             autoplay={{ delay: 4000 }} // Sync Swiper with the 4s pulse
//             breakpoints={{
//               768: { slidesPerView: 2 },
//               1200: { slidesPerView: 3 },
//             }}
//             className="border-x border-white/5"
//           >
//             {assistants.map((a, i) => (
//               <SwiperSlide key={i}>
//                 <motion.div
//                   animate={{
//                     backgroundColor: isGlobalActive
//                       ? "rgba(186,140,97,0.03)"
//                       : "rgba(255,255,255,0.01)",
//                     borderColor: isGlobalActive
//                       ? "rgba(186,140,97,0.2)"
//                       : "rgba(255,255,255,0.05)",
//                   }}
//                   transition={{ duration: 1.2 }}
//                   className="h-[400px] p-12 flex flex-col justify-center border"
//                 >
//                   <motion.img
//                     src={TEAM_IMAGES[a.slug]}
//                     animate={{
//                       grayscale: isGlobalActive ? 0 : 1,
//                       scale: isGlobalActive ? 1.05 : 1,
//                     }}
//                     transition={{ duration: 1.2 }}
//                     className="w-16 h-16 rounded-full mb-8 object-cover border border-white/10"
//                   />
//                   <h4 className="text-white text-2xl font-serif italic mb-2">
//                     {a.name}
//                   </h4>
//                   <p className="text-[#BA8C61] font-mono text-[9px] tracking-[0.4em] uppercase mb-6">
//                     {a.title}
//                   </p>
//                   <p className="text-white/30 text-xs font-light leading-relaxed italic line-clamp-3">
//                     "{a.bio}"
//                   </p>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }

//================================================================
//================================================================
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, Fingerprint, ArrowUpRight } from "lucide-react";
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

  // THE 4s HARMONIC PULSE (The Heartbeat of the Firm)
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
      className="py-40 bg-[#262B3E] text-white overflow-hidden relative"
    >
      {/* BACKGROUND DECOR (Award-winning sites use subtle textures) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#BA8C61] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1700px] mx-auto px-8 relative z-10">
        {/* --- THE BOLD HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 border-l-2 border-[#BA8C61] pl-12">
          <div className="max-w-3xl">
            <h2 className="text-7xl lg:text-5xl font-serif italic tracking-tighter leading-[0.85] text-white">
              {t("hero.title")}
            </h2>
          </div>
        </div>

        {/* --- FOUNDERS: THE POWER DYNAMICS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-52">
          {founders.map((f, i) => (
            <motion.div
              key={f.slug}
              onMouseEnter={() => setHoveredSlug(f.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className={`relative ${i === 1 ? "lg:mt-32" : ""}`} // Asymmetric Offset
            >
              <div className="relative aspect-[3/3] bg-[#1A1E2E] overflow-hidden group">
                {/* Internal HUD Elements */}
                <div className="absolute top-6 left-6 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Shield size={12} className="text-[#BA8C61]" />
                  <span className="text-[8px] font-mono tracking-widest">
                    VERIFIED_SENIOR
                  </span>
                </div>

                <motion.img
                  src={TEAM_IMAGES[f.slug]}
                  animate={{
                    scale:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1.08
                        : 1,
                    filter:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? "grayscale(0%)"
                        : "grayscale(100%) contrast(1.1)",
                    opacity:
                      hoveredSlug === f.slug || (isGlobalActive && !hoveredSlug)
                        ? 1
                        : 0.4,
                  }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Glass Bio Overlay */}
                <motion.div
                  animate={{
                    x: hoveredSlug === f.slug ? 0 : -20,
                    opacity: hoveredSlug === f.slug ? 1 : 0,
                  }}
                  className="absolute bottom-10 right-0 left-20 z-30 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-10"
                >
                  <p className="text-white text-sm font-light italic leading-relaxed">
                    {f.bio}
                  </p>
                </motion.div>
              </div>

              {/* Title Content */}
              <div className="mt-10 flex justify-between items-end">
                <div>
                  <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.5em] uppercase mb-2">
                    Partner.v{i + 1}
                  </p>
                  <h3 className="text-6xl font-serif italic text-white tracking-tight">
                    {f.name}
                  </h3>
                </div>
                <ArrowUpRight className="text-white/20" size={40} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ASSISTANTS: THE CONTINUOUS ENGINE --- */}
        <div className="relative pt-20 border-t border-white/10">
          <div className="flex justify-between items-center mb-16 px-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#BA8C61] rounded-full animate-pulse" />
              <h3 className="text-white font-serif italic text-3xl tracking-tight">
                Expert Associate Unit
              </h3>
            </div>
            <div className="h-[1px] flex-grow mx-10 bg-gradient-to-r from-[#BA8C61]/40 to-transparent hidden md:block" />
            <span className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">
              Status: Operating
            </span>
          </div>

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            speed={10000} // Smooth, constant drift
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.5 },
              1200: { slidesPerView: 4 },
            }}
            className="overflow-visible swiper-linear"
          >
            {/* We duplicate the assistants array [...assistants, ...assistants] 
        to ensure the loop is seamless even with few members */}
            {[...assistants, ...assistants].map((a, idx) => (
              <SwiperSlide key={`${a.slug}-${idx}`}>
                <motion.div
                  onMouseEnter={() => setHoveredSlug(a.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className="px-6 group cursor-crosshair"
                >
                  {/* THE CARD: Glass-morphism ID Style */}
                  <div className="relative bg-white/[0.02] border border-white/5 p-10 h-[500px] flex flex-col transition-all duration-700 group-hover:bg-white/[0.05] group-hover:border-[#BA8C61]/30">
                    {/* Top Badge */}
                    <div className="absolute top-0 right-0 p-4">
                      <div
                        className={`w-1 h-8 transition-colors duration-1000 ${hoveredSlug === a.slug || isGlobalActive ? "bg-[#BA8C61]" : "bg-white/10"}`}
                      />
                    </div>

                    {/* Profile Section */}
                    <div className="relative mb-10 w-24 h-24">
                      <motion.div
                        animate={{
                          borderColor:
                            hoveredSlug === a.slug || isGlobalActive
                              ? "#BA8C61"
                              : "rgba(255,255,255,0.1)",
                          rotate: hoveredSlug === a.slug ? 90 : 0,
                        }}
                        className="absolute inset-0 border-2 rounded-xl transition-all duration-700"
                      />
                      <motion.div className="w-full h-full p-2 overflow-hidden rounded-xl">
                        <motion.img
                          src={TEAM_IMAGES[a.slug]}
                          animate={{
                            filter:
                              hoveredSlug === a.slug || isGlobalActive
                                ? "grayscale(0%)"
                                : "grayscale(100%)",
                            scale: hoveredSlug === a.slug ? 1.1 : 1,
                          }}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="mt-auto space-y-4">
                      <div className="space-y-1">
                        <p className="text-[#BA8C61] font-mono text-[8px] tracking-[0.5em] uppercase">
                          Position_Lvl_02
                        </p>
                        <h4 className="text-3xl font-serif italic text-white leading-none">
                          {a.name}
                        </h4>
                      </div>

                      <p className="text-white/40 font-mono text-[10px] tracking-widest uppercase">
                        {a.title}
                      </p>

                      <motion.p
                        animate={{
                          opacity:
                            hoveredSlug === a.slug || isGlobalActive ? 1 : 0.3,
                          y: hoveredSlug === a.slug ? 0 : 5,
                        }}
                        className="text-white/60 text-xs font-light leading-relaxed italic pr-4 line-clamp-4 border-l border-white/10 pl-4"
                      >
                        {a.bio}
                      </motion.p>
                    </div>

                    {/* Bottom Tech Detail */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-20 group-hover:opacity-60 transition-opacity">
                      <span className="font-mono text-[7px] tracking-tighter">
                        SECURE_ID_{idx}
                      </span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
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

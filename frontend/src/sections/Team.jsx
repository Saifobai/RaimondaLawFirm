// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { motion } from "framer-motion";
// import { Linkedin } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { useEffect, useRef } from "react";

// export default function Team() {
//   const { t } = useTranslation("team");

//   const members = t("members", { returnObjects: true }) || [];
//   const values = t("values", { returnObjects: true }) || [];
//   const cta = t("cta", { returnObjects: true }) || {};

//   const slides = [...members, ...members];

//   const containerRef = useRef(null);

//   // ⭐ Cursor spotlight effect
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const move = (e) => {
//       const rect = container.getBoundingClientRect();

//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       container.style.setProperty("--x", `${x}px`);
//       container.style.setProperty("--y", `${y}px`);
//     };

//     container.addEventListener("mousemove", move);

//     return () => container.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <section
//       id="team"
//       ref={containerRef}
//       className="relative bg-gradient-to-b from-white via-slate-50 to-white py-32 overflow-hidden
//       before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(249,115,22,0.08),transparent_40%)]"
//     >
//       <div className="max-w-7xl mx-auto relative z-10 px-6">
//         {/* HERO */}

//         <div className="text-center mb-24">
//           <h2 className="font-serif font-light text-5xl tracking-tight text-slate-900">
//             {t("hero.title")}
//           </h2>

//           <p className="mt-8 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
//             {t("hero.subtitle")}
//           </p>

//           <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-10 animate-pulse" />
//         </div>

//         {/* SWIPER */}

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={40}
//           slidesPerView={1}
//           loop
//           speed={900}
//           centeredSlides
//           autoplay={{
//             delay: 3200,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2.2 },
//             1200: { slidesPerView: 3 },
//           }}
//         >
//           {[...slides].map((member, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="group relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 flex flex-col h-[520px]
//                 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 {/* Portrait */}

//                 <div className="flex justify-center mb-8">
//                   <div className="relative">
//                     <img
//                       src={
//                         member.image || `https://i.pravatar.cc/400?img=${i + 3}`
//                       }
//                       alt={member.name}
//                       className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-xl transition duration-700 group-hover:scale-110"
//                     />

//                     <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
//                   </div>
//                 </div>

//                 {/* Content */}

//                 <div className="text-center flex flex-col flex-grow">
//                   <h3 className="text-2xl font-light text-slate-900 font-serif">
//                     {member.name}
//                   </h3>

//                   <p className="text-orange-500 text-sm mt-2 font-medium tracking-wide">
//                     {member.title}
//                   </p>

//                   <p className="text-sm text-slate-500 mt-6 leading-relaxed flex-grow line-clamp-4">
//                     {member.bio}
//                   </p>

//                   {/* Expertise */}

//                   <div className="flex flex-wrap justify-center gap-2 mt-6">
//                     {member.expertise?.slice(0, 2).map((tag, index) => (
//                       <span
//                         key={index}
//                         className="text-xs border border-slate-200 px-3 py-1 rounded-full bg-white/70"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* LinkedIn */}

//                   {member.linkedin && (
//                     <div className="mt-8 flex justify-center opacity-60 group-hover:opacity-100 transition">
//                       <Linkedin size={18} />
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* VALUES */}

//         <div className="grid md:grid-cols-3 gap-16 mt-32 text-center">
//           {values.map((value, i) => (
//             <div key={i} className="max-w-xs mx-auto">
//               <h4 className="font-serif text-xl text-slate-900">
//                 {value.title}
//               </h4>

//               <p className="text-slate-500 text-sm mt-4 leading-relaxed">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}

//         <div className="text-center mt-32 max-w-3xl mx-auto">
//           <h3 className="font-serif text-3xl text-slate-900">{cta.title}</h3>

//           <p className="text-slate-500 mt-6 text-lg leading-relaxed">
//             {cta.text}
//           </p>

//           <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-2xl transition shadow-xl hover:shadow-orange-500/20">
//             {cta.button}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

//===============================================================
//===============================================================
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Linkedin } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { useRef, useEffect } from "react";

// export default function Team() {
//   const { t } = useTranslation("team");
//   const members = t("members", { returnObjects: true }) || [];
//   const values = t("values", { returnObjects: true }) || [];
//   const cta = t("cta", { returnObjects: true }) || {};

//   // Duplicate for infinite carousel effect
//   const slides = [...members, ...members];

//   // Motion values for cursor spotlight effect
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const move = (e) => {
//       const rect = container.getBoundingClientRect();
//       x.set(e.clientX - rect.left);
//       y.set(e.clientY - rect.top);
//     };
//     container.addEventListener("mousemove", move);
//     return () => container.removeEventListener("mousemove", move);
//   }, [x, y]);

//   // Transform cursor to subtle radial light
//   const spotlight = useTransform(
//     [x, y],
//     ([latestX, latestY]) =>
//       `radial-gradient(circle at ${latestX}px ${latestY}px, rgba(249,115,22,0.12), transparent 60%)`,
//   );

//   return (
//     <section
//       ref={containerRef}
//       className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-32"
//       style={{ backgroundImage: spotlight }}
//     >
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* HERO */}
//         <div className="text-center mb-24">
//           <h2 className="font-serif font-light text-5xl tracking-tight text-slate-900">
//             {t("hero.title")}
//           </h2>
//           <p className="mt-8 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
//             {t("hero.subtitle")}
//           </p>
//           <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-10 animate-pulse" />
//         </div>

//         {/* SWIPER */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={50}
//           slidesPerView={1.2}
//           loop
//           speed={1000}
//           centeredSlides
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2.2 },
//             1200: { slidesPerView: 3 },
//           }}
//         >
//           {slides.map((member, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9, rotateY: 3 }}
//                 whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex flex-col h-[540px] transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
//               >
//                 {/* Portrait */}
//                 <div className="flex justify-center mb-8">
//                   <div className="relative">
//                     <img
//                       src={
//                         member.image || `https://i.pravatar.cc/400?img=${i + 3}`
//                       }
//                       alt={member.name}
//                       className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-xl transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="text-center flex flex-col flex-grow">
//                   <h3 className="text-2xl font-serif font-light text-slate-900">
//                     {member.name}
//                   </h3>
//                   <p className="text-orange-500 text-sm mt-2 font-medium tracking-wide">
//                     {member.title}
//                   </p>
//                   <p className="text-slate-500 mt-6 text-sm leading-relaxed flex-grow line-clamp-4">
//                     {member.bio}
//                   </p>

//                   {/* Expertise */}
//                   <div className="flex flex-wrap justify-center gap-2 mt-6">
//                     {member.expertise?.slice(0, 3).map((tag, index) => (
//                       <span
//                         key={index}
//                         className="text-xs border border-slate-200 px-3 py-1 rounded-full bg-white/80"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* LinkedIn */}
//                   {member.linkedin && (
//                     <div className="mt-6 flex justify-center opacity-60 group-hover:opacity-100 transition">
//                       <Linkedin size={18} />
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* VALUES */}
//         <div className="grid md:grid-cols-3 gap-16 mt-32 text-center">
//           {values.map((value, i) => (
//             <div key={i} className="max-w-xs mx-auto">
//               <h4 className="font-serif text-xl text-slate-900">
//                 {value.title}
//               </h4>
//               <p className="text-slate-500 text-sm mt-4 leading-relaxed">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-32 max-w-3xl mx-auto">
//           <h3 className="font-serif text-3xl text-slate-900">{cta.title}</h3>
//           <p className="text-slate-500 mt-6 text-lg leading-relaxed">
//             {cta.text}
//           </p>
//           <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-2xl transition shadow-xl hover:shadow-orange-500/20">
//             {cta.button}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

//============================================================
//============================================================
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { motion, useSpring } from "framer-motion";
// import { Linkedin } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { useRef, useEffect } from "react";

// export default function Team() {
//   const { t } = useTranslation("team");

//   const members = t("members", { returnObjects: true }) || [];
//   const values = t("values", { returnObjects: true }) || [];
//   const cta = t("cta", { returnObjects: true }) || {};

//   const slides = [...members, ...members];

//   const containerRef = useRef(null);

//   // Physics smooth cursor motion
//   const mouseX = useSpring(0, { stiffness: 80, damping: 20 });
//   const mouseY = useSpring(0, { stiffness: 80, damping: 20 });

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const move = (e) => {
//       const rect = container.getBoundingClientRect();

//       mouseX.set(e.clientX - rect.left);
//       mouseY.set(e.clientY - rect.top);
//     };

//     container.addEventListener("mousemove", move);

//     return () => container.removeEventListener("mousemove", move);
//   }, [mouseX, mouseY]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-gradient-to-b from-white via-slate-50 to-white py-36 overflow-hidden"
//       style={{
//         "--spot-x": `${mouseX.get()}px`,
//         "--spot-y": `${mouseY.get()}px`,
//       }}
//     >
//       {/* Luxury spotlight overlay */}

//       <div
//         className="
//         pointer-events-none
//         absolute inset-0
//         bg-[radial-gradient(circle_at_var(--spot-x)_var(--spot-y),rgba(249,115,22,0.12),transparent_65%)]
//         transition-opacity duration-300
//       "
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* HERO */}

//         <div className="text-center mb-28">
//           <h2 className="font-serif font-light text-6xl tracking-tight text-slate-900">
//             {t("hero.title")}
//           </h2>

//           <p className="mt-10 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
//             {t("hero.subtitle")}
//           </p>

//           <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-12 animate-pulse" />
//         </div>

//         {/* SWIPER PHYSICS CAROUSEL */}

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={60}
//           slidesPerView={1.2}
//           loop
//           speed={1200}
//           centeredSlides
//           autoplay={{
//             delay: 2800,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2.2 },
//             1280: { slidesPerView: 3 },
//           }}
//         >
//           {[...slides].map((member, i) => (
//             <SwiperSlide key={i}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.85, rotateY: 6 }}
//                 whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 70,
//                   damping: 20,
//                 }}
//                 className="
//                   group relative
//                   bg-white/70 backdrop-blur-xl
//                   border border-white/40
//                   rounded-3xl
//                   p-9
//                   flex flex-col
//                   h-[540px]
//                   transition-all duration-700
//                   hover:shadow-2xl
//                   hover:-translate-y-3
//                   hover:scale-[1.04]
//                   origin-center
//                 "
//               >
//                 {/* Portrait */}

//                 <div className="flex justify-center mb-10">
//                   <div className="relative">
//                     <img
//                       src={
//                         member.image || `https://i.pravatar.cc/400?img=${i + 3}`
//                       }
//                       alt={member.name}
//                       className="
//                         w-36 h-36
//                         rounded-full
//                         object-cover
//                         ring-4 ring-white
//                         shadow-xl
//                         transition-all duration-700
//                         group-hover:scale-110
//                       "
//                     />

//                     <div
//                       className="
//                       absolute inset-0
//                       rounded-full
//                       bg-gradient-to-tr
//                       from-orange-500/20
//                       to-transparent
//                       opacity-0
//                       group-hover:opacity-100
//                       transition duration-700
//                     "
//                     />
//                   </div>
//                 </div>

//                 {/* Content */}

//                 <div className="text-center flex flex-col flex-grow">
//                   <h3 className="text-2xl font-serif font-light text-slate-900">
//                     {member.name}
//                   </h3>

//                   <p className="text-orange-500 text-sm mt-3 tracking-wide">
//                     {member.title}
//                   </p>

//                   <p className="text-slate-500 mt-8 text-sm leading-relaxed flex-grow line-clamp-4">
//                     {member.bio}
//                   </p>

//                   {/* Expertise */}

//                   <div className="flex flex-wrap justify-center gap-2 mt-8">
//                     {member.expertise?.slice(0, 3).map((tag, index) => (
//                       <span
//                         key={index}
//                         className="
//                           text-xs
//                           border border-slate-200
//                           px-4 py-1.5
//                           rounded-full
//                           bg-white/80
//                         "
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* LinkedIn */}

//                   {member.linkedin && (
//                     <div
//                       className="
//                       mt-8
//                       flex justify-center
//                       opacity-50 group-hover:opacity-100
//                       transition
//                     "
//                     >
//                       <Linkedin size={18} />
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* VALUES */}

//         <div className="grid md:grid-cols-3 gap-20 mt-40 text-center">
//           {values.map((value, i) => (
//             <div key={i} className="max-w-xs mx-auto">
//               <h4 className="font-serif text-xl text-slate-900">
//                 {value.title}
//               </h4>

//               <p className="text-slate-500 text-sm mt-5 leading-relaxed">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}

//         <div className="text-center mt-40 max-w-3xl mx-auto">
//           <h3 className="font-serif text-4xl text-slate-900">{cta.title}</h3>

//           <p className="text-slate-500 mt-8 text-lg leading-relaxed">
//             {cta.text}
//           </p>

//           <button
//             className="
//             mt-12
//             bg-orange-500 hover:bg-orange-600
//             text-white
//             px-14 py-6
//             rounded-2xl
//             transition
//             shadow-xl
//             hover:shadow-orange-500/20
//             text-lg
//           "
//           >
//             {cta.button}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

//===============================================================
//===============================================================
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { Linkedin } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import "swiper/css";
// import "swiper/css/pagination";

// // --- ANIMATION VARIANTS ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
// };

// // --- MAGNETIC CARD COMPONENT ---
// const TeamMemberCard = ({ member, i }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useSpring(useTransform(y, [-200, 200], [10, -10]), {
//     stiffness: 100,
//     damping: 20,
//   });
//   const rotateY = useSpring(useTransform(x, [-200, 200], [-10, 10]), {
//     stiffness: 100,
//     damping: 20,
//   });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   };

//   return (
//     <motion.div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       className="group relative h-[540px] w-full rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/50 p-8 shadow-2xl transition-all duration-500"
//     >
//       <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-orange-500/30 transition-all duration-700" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         className="flex flex-col items-center h-full"
//       >
//         <motion.img
//           variants={itemVariants}
//           src={member.image || `https://i.pravatar.cc/400?img=${i + 3}`}
//           className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-lg mb-8"
//         />
//         <motion.h3
//           variants={itemVariants}
//           className="text-2xl font-serif text-slate-900"
//         >
//           {member.name}
//         </motion.h3>
//         <motion.p
//           variants={itemVariants}
//           className="text-orange-500 text-sm mt-2 font-medium"
//         >
//           {member.title}
//         </motion.p>
//         <motion.p
//           variants={itemVariants}
//           className="mt-8 text-slate-500 text-sm text-center leading-relaxed flex-grow line-clamp-4"
//         >
//           {member.bio}
//         </motion.p>

//         {member.linkedin && (
//           <motion.div
//             variants={itemVariants}
//             className="mt-auto opacity-50 group-hover:opacity-100"
//           >
//             <Linkedin size={20} />
//           </motion.div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- MAIN SECTION ---
// export default function Team() {
//   const { t } = useTranslation("team");
//   const members = t("members", { returnObjects: true }) || [];
//   const values = t("values", { returnObjects: true }) || [];
//   const cta = t("cta", { returnObjects: true }) || {};

//   return (
//     <section className="relative py-36 bg-slate-50 overflow-hidden">
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* HERO SECTION */}
//         <div className="text-center mb-28">
//           <h2 className="font-serif font-light text-6xl tracking-tight text-slate-900">
//             {t("hero.title")}
//           </h2>
//           <p className="mt-10 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
//             {t("hero.subtitle")}
//           </p>
//           <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-12 animate-pulse" />
//         </div>

//         {/* SWIPER SECTION */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={40}
//           slidesPerView={1}
//           loop
//           centeredSlides
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2.2 },
//             1280: { slidesPerView: 3 },
//           }}
//           className="!pb-20"
//         >
//           {members.map((member, i) => (
//             <SwiperSlide key={i}>
//               <TeamMemberCard member={member} i={i} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* VALUES SECTION */}
//         <div className="grid md:grid-cols-3 gap-20 mt-40 text-center">
//           {values.map((value, i) => (
//             <div key={i} className="max-w-xs mx-auto">
//               <h4 className="font-serif text-xl text-slate-900">
//                 {value.title}
//               </h4>
//               <p className="text-slate-500 text-sm mt-5 leading-relaxed">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA SECTION */}
//         <div className="text-center mt-40 max-w-3xl mx-auto">
//           <h3 className="font-serif text-4xl text-slate-900">{cta.title}</h3>
//           <p className="text-slate-500 mt-8 text-lg leading-relaxed">
//             {cta.text}
//           </p>
//           <button className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-14 py-6 rounded-2xl transition shadow-xl hover:shadow-orange-500/20 text-lg">
//             {cta.button}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
//===================================================
//===================================================
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

/* ---------------------------
   ANIMATION VARIANTS
---------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

/* ---------------------------
   TEAM MEMBER CARD
---------------------------- */

const TeamMemberCard = ({ member, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-200, 200], [10, -10]), {
    stiffness: 100,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-200, 200], [-10, 10]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[540px] w-full rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/50 p-8 shadow-2xl transition-all duration-500"
    >
      <div className="flex flex-col items-center h-full">
        {/* IMAGE */}
        <motion.img
          variants={itemVariants}
          src={member.image || `https://i.pravatar.cc/400?img=${i + 3}`}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-lg mb-8"
        />

        {/* NAME */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-serif text-slate-900"
        >
          {member.name}
        </motion.h3>

        {/* TITLE */}
        <motion.p
          variants={itemVariants}
          className="text-orange-500 text-sm mt-2 font-medium"
        >
          {member.title}
        </motion.p>

        {/* BIO */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-slate-500 text-sm text-center leading-relaxed flex-grow line-clamp-4"
        >
          {member.bio}
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 mt-auto opacity-0 group-hover:opacity-100 transition duration-500"
        >
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#0A66C2] text-white hover:scale-110 transition"
            >
              <Linkedin size={18} />
            </a>
          )}

          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white hover:scale-110 transition"
            >
              <Twitter size={18} />
            </a>
          )}

          {member.facebook && (
            <a
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1877F2] text-white hover:scale-110 transition"
            >
              <Facebook size={18} />
            </a>
          )}

          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-3 rounded-full bg-orange-500 text-white hover:scale-110 transition"
            >
              <Mail size={18} />
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ---------------------------
   MAIN TEAM SECTION
---------------------------- */

export default function Team() {
  const { t } = useTranslation("team");

  const members = t("members", { returnObjects: true }) || [];
  const values = t("values", { returnObjects: true }) || [];
  const cta = t("cta", { returnObjects: true }) || {};

  return (
    <section className="relative py-36 bg-slate-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-28">
          <h2 className="font-serif font-light text-6xl tracking-tight text-slate-900">
            {t("hero.title")}
          </h2>

          <p className="mt-10 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mt-12 animate-pulse" />
        </div>

        {/* TEAM SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          centeredSlides
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {members.map((member, i) => (
            <SwiperSlide key={i}>
              <TeamMemberCard member={member} i={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* VALUES */}
        <div className="grid md:grid-cols-3 gap-20 mt-40 text-center">
          {values.map((value, i) => (
            <div key={i} className="max-w-xs mx-auto">
              <h4 className="font-serif text-xl text-slate-900">
                {value.title}
              </h4>

              <p className="text-slate-500 text-sm mt-5 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-40 max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl text-slate-900">{cta.title}</h3>

          <p className="text-slate-500 mt-8 text-lg leading-relaxed">
            {cta.text}
          </p>

          <button className="mt-12 bg-orange-500 hover:bg-orange-600 text-white px-14 py-6 rounded-2xl transition shadow-xl hover:shadow-orange-500/20 text-lg">
            {cta.button}
          </button>
        </div>
      </div>
    </section>
  );
}

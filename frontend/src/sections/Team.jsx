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
//     TEAM MEMBER CARD (Refined to match Services)
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
//     const xPct = (e.clientX - rect.left) / rect.width - 0.5;
//     const yPct = (e.clientY - rect.top) / rect.height - 0.5;
//     x.set(xPct);
//     y.set(yPct);
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
//       className="group relative h-[600px] w-full bg-white/5 rounded-sm border border-white/10 p-10 transition-all duration-700 hover:border-[#BA8C61]/40 hover:bg-white/10 shadow-2xl overflow-hidden"
//     >
//       {/* GLINT EFFECT */}
//       <motion.div
//         style={{ x: sheenX, opacity: sheenOpacity }}
//         className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
//       />

//       <div className="relative z-10 flex flex-col items-center h-full">
//         {/* PROFILE IMAGE */}
//         <div
//           className="relative w-44 h-44 mb-10"
//           style={{ transform: "translateZ(80px)" }}
//         >
//           <div className="absolute inset-0 rounded-full border border-[#BA8C61]/20 group-hover:scale-125 group-hover:border-[#BA8C61]/40 transition-all duration-1000" />

//           <div className="w-full h-full rounded-full overflow-hidden p-3 bg-[#262B3E] shadow-inner">
//             <img
//               src={memberImage}
//               alt={member.name}
//               className="w-full h-full rounded-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-[1.5s] ease-out"
//             />
//           </div>
//         </div>

//         {/* TYPOGRAPHY */}
//         <div
//           className="text-center space-y-4"
//           style={{ transform: "translateZ(60px)" }}
//         >
//           <h3 className="text-3xl font-serif italic text-white tracking-tight leading-none">
//             {member.name}
//           </h3>
//           <div className="flex flex-col items-center gap-2">
//             <span className="h-px w-8 bg-[#BA8C61]/40 group-hover:w-16 transition-all duration-700" />
//             <p className="text-[#BA8C61] text-[10px] font-bold uppercase tracking-[0.5em]">
//               {member.title}
//             </p>
//           </div>
//         </div>

//         {/* BIO */}
//         <div
//           className="mt-8 relative"
//           style={{ transform: "translateZ(40px)" }}
//         >
//           <p className="text-white/60 text-sm text-center leading-relaxed font-light italic group-hover:text-white/90 transition-colors duration-700 max-w-[280px]">
//             "{member.bio}"
//           </p>
//         </div>

//         {/* SOCIALS */}
//         <div
//           className="mt-auto pt-8 flex gap-8 justify-center w-full"
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

//       {/* BACKGROUND MONOGRAM */}
//       <span className="absolute -bottom-10 -right-10 text-[180px] font-serif italic text-white/[0.03] pointer-events-none select-none">
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
//     <section id="team" className="py-24 md:py-48 bg-[#262B3E]">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
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
//             <h2 className="font-serif text-5xl md:text-7xl italic text-white tracking-tighter">
//               {t("hero.title")}
//             </h2>
//           </div>
//           <p className="text-white/60 max-w-sm text-lg font-light leading-relaxed italic border-l border-white/10 pl-6">
//             {t("hero.subtitle")}
//           </p>
//         </div>

//         {/* SWIPER */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
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

//         {/* CORE VALUES */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mt-16 border-t border-white/5 pt-24">
//           {values.map((value, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group"
//             >
//               <span className="text-[#BA8C61]/40 font-serif text-4xl group-hover:text-[#BA8C61] transition-colors duration-500">
//                 0{i + 1}.
//               </span>
//               <h4 className="font-serif italic text-2xl text-white mt-4">
//                 {value.title}
//               </h4>
//               <p className="text-white/50 text-sm mt-4 leading-relaxed font-light">
//                 {value.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* TEAM CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-40 bg-black/20 border border-white/5 p-12 md:p-24 text-center relative overflow-hidden"
//         >
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#BA8C61]/30 to-transparent" />

//           <h3 className="font-serif italic text-4xl md:text-6xl text-white mb-8">
//             {cta.title}
//           </h3>
//           <p className="text-white/60 mt-6 max-w-xl mx-auto font-light text-lg mb-12">
//             {cta.text}
//           </p>

//           <button className="group relative px-12 py-5 overflow-hidden bg-[#BA8C61] transition-all duration-500">
//             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] text-[#262B3E] transition-colors">
//               {cta.button}
//             </span>
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//===============================================================
//===============================================================
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { TEAM_IMAGES } from "../constants/teamImages";

/* ---------------------------
    TEAM MEMBER CARD 
---------------------------- */
const TeamMemberCard = ({ member }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const sheenOpacity = useTransform(
    mouseXSpring,
    [-0.5, 0, 0.5],
    [0.05, 0, 0.05],
  );
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const memberImage = TEAM_IMAGES[member.slug];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[500px] md:h-[600px] w-full bg-white/5 rounded-sm border border-white/10 p-6 md:p-10 transition-all duration-700 hover:border-[#BA8C61]/40 hover:bg-white/10 shadow-2xl overflow-hidden"
    >
      <motion.div
        style={{ x: sheenX, opacity: sheenOpacity }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center h-full">
        <div
          className="relative w-32 h-32 md:w-44 md:h-44 mb-8 md:mb-10"
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="absolute inset-0 rounded-full border border-[#BA8C61]/20 group-hover:scale-110 md:group-hover:scale-125 group-hover:border-[#BA8C61]/40 transition-all duration-1000" />
          <div className="w-full h-full rounded-full overflow-hidden p-2 md:p-3 bg-[#262B3E] shadow-inner">
            <img
              src={memberImage}
              alt={member.name}
              className="w-full h-full rounded-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-[1.5s] ease-out"
            />
          </div>
        </div>

        <div
          className="text-center space-y-2 md:space-y-4"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight leading-none">
            {member.name}
          </h3>
          <div className="flex flex-col items-center gap-2">
            <span className="h-px w-8 bg-[#BA8C61]/40 group-hover:w-16 transition-all duration-700" />
            <p className="text-[#BA8C61] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">
              {member.title}
            </p>
          </div>
        </div>

        <div
          className="mt-6 md:mt-8 relative"
          style={{ transform: "translateZ(40px)" }}
        >
          <p className="text-white/60 text-xs md:text-sm text-center leading-relaxed font-light italic group-hover:text-white/90 transition-colors duration-700 max-w-[280px]">
            "{member.bio}"
          </p>
        </div>

        <div
          className="mt-auto pt-8 flex gap-6 md:gap-8 justify-center w-full"
          style={{ transform: "translateZ(100px)" }}
        >
          {[
            { Icon: Linkedin, link: member.linkedin },
            {
              Icon: Mail,
              link: member.email ? `mailto:${member.email}` : null,
            },
            { Icon: Twitter, link: member.twitter },
          ].map(
            ({ Icon, link }, idx) =>
              link && (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-[#BA8C61] transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ),
          )}
        </div>
      </div>
      <span className="absolute -bottom-10 -right-5 md:-right-10 text-[120px] md:text-[180px] font-serif italic text-white/[0.03] pointer-events-none select-none">
        {member.name.charAt(0)}
      </span>
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
    <section id="team" className="py-20 md:py-48 bg-[#262B3E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-[#BA8C61]" />
              <span className="text-[#BA8C61] uppercase tracking-[0.4em] text-[10px] font-bold">
                {t("hero.tagline") || "The Expertise"}
              </span>
            </motion.div>
            <h2 className="font-serif text-4xl md:text-7xl italic text-white tracking-tighter">
              {t("hero.title")}
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-lg font-light leading-relaxed italic border-l border-white/10 pl-6">
            {t("hero.subtitle")}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/20 !opacity-100",
            bulletActiveClass:
              "!bg-[#BA8C61] !w-8 !rounded-full transition-all duration-500",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-24"
        >
          {members.map((member, i) => (
            <SwiperSlide key={i}>
              <TeamMemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-8 border-t border-white/5 pt-16 md:pt-24">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <span className="text-[#BA8C61]/40 font-serif text-3xl md:text-4xl group-hover:text-[#BA8C61] transition-colors duration-500">
                0{i + 1}.
              </span>
              <h4 className="font-serif italic text-xl md:text-2xl text-white mt-4">
                {value.title}
              </h4>
              <p className="text-white/50 text-sm mt-4 leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 bg-black/20 border border-white/5 p-8 md:p-24 text-center relative"
        >
          <h3 className="font-serif italic text-3xl md:text-6xl text-white mb-8">
            {cta.title}
          </h3>
          <p className="text-white/60 mt-6 max-w-xl mx-auto font-light text-lg mb-12">
            {cta.text}
          </p>
          <button className="group relative px-10 md:px-12 py-5 overflow-hidden bg-[#BA8C61] transition-all duration-500">
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#262B3E]">
              {cta.button}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

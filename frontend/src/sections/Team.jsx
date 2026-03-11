import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Linkedin, Mail, Twitter, Facebook } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { TEAM_IMAGES } from "../constants/teamImages";

/* ---------------------------
    TEAM MEMBER CARD (Luxury Refined)
---------------------------- */
const TeamMemberCard = ({ member, i }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // High-end 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // The "Glint" effect that follows the mouse
  const sheenOpacity = useTransform(
    mouseXSpring,
    [-0.5, 0, 0.5],
    [0.05, 0, 0.05],
  );
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Pull the image from our constant map using the slug
  const memberImage = TEAM_IMAGES[member.slug];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[600px] w-full bg-slate-900/40 rounded-sm border border-white/10 p-10 transition-all duration-700 hover:border-[#d4af37]/40 hover:bg-slate-900/60 shadow-2xl overflow-hidden"
    >
      {/* 1. LUXURY SHEEN OVERLAY (The "Superpower" touch) */}
      <motion.div
        style={{
          x: sheenX,
          opacity: sheenOpacity,
        }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center h-full">
        {/* 2. PROFILE IMAGE WITH DEPTH */}
        <div
          className="relative w-44 h-44 mb-10"
          style={{ transform: "translateZ(80px)" }} // Pops toward the user
        >
          {/* Animated Outer Rings */}
          <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 group-hover:scale-125 group-hover:border-[#d4af37]/40 transition-all duration-1000" />
          <div className="absolute inset-2 rounded-full border border-white/5 group-hover:scale-110 transition-all duration-700 delay-75" />

          <div className="w-full h-full rounded-full overflow-hidden p-3 bg-slate-950 shadow-inner">
            <img
              src={memberImage}
              alt={member.name}
              className="w-full h-full rounded-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-[1.5s] ease-out"
            />
          </div>
        </div>

        {/* 3. TYPOGRAPHY WITH PARALLAX */}
        <div
          className="text-center space-y-4"
          style={{ transform: "translateZ(60px)" }}
        >
          <h3 className="text-3xl font-serif italic text-white tracking-tight leading-none">
            {member.name}
          </h3>
          <div className="flex flex-col items-center gap-2">
            <span className="h-px w-8 bg-[#d4af37]/40 group-hover:w-16 transition-all duration-700" />
            <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em]">
              {member.title}
            </p>
          </div>
        </div>

        {/* 4. BIO SECTION */}
        <div
          className="mt-8 relative"
          style={{ transform: "translateZ(40px)" }}
        >
          <p className="text-slate-400 text-sm text-center leading-relaxed font-light italic opacity-60 group-hover:opacity-100 transition-opacity duration-700 max-w-[280px]">
            "{member.bio}"
          </p>
        </div>

        {/* 5. FLOATING SOCIALS */}
        <div
          className="mt-auto pt-8 flex gap-8 justify-center w-full"
          style={{ transform: "translateZ(100px)" }} // Highest depth
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
                  className="text-slate-600 hover:text-[#d4af37] transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={22} strokeWidth={1} />
                </a>
              ),
          )}
        </div>
      </div>

      {/* 6. BACKGROUND MONOGRAM (Subtle design touch) */}
      <span className="absolute -bottom-10 -right-10 text-[180px] font-serif italic text-white/[0.02] pointer-events-none select-none">
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
    <section id="team" className="py-24 md:py-48 bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-[#d4af37]/40" />
              <span className="text-[#d4af37] uppercase tracking-[0.4em] text-[10px] font-bold">
                The Expertise
              </span>
            </motion.div>
            <h2 className="font-serif text-5xl md:text-7xl italic text-white tracking-tighter">
              {t("hero.title")}
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed italic border-l border-white/10 pl-6">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* SWIPER - Optimized for responsiveness */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white/20 !opacity-100",
            bulletActiveClass:
              "!bg-[#d4af37] !w-8 !rounded-full transition-all duration-500",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-24"
        >
          {members.map((member, i) => (
            <SwiperSlide key={i}>
              <TeamMemberCard member={member} i={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CORE VALUES - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mt-16 border-t border-white/5 pt-24">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <span className="text-[#d4af37]/40 font-serif text-4xl group-hover:text-[#d4af37] transition-colors duration-500">
                0{i + 1}.
              </span>
              <h4 className="font-serif italic text-2xl text-white mt-4">
                {value.title}
              </h4>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA - Now Matches FirmOffers Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 bg-[#1e293b]/30 border border-white/5 p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

          <h3 className="font-serif italic text-4xl md:text-6xl text-white mb-8">
            {cta.title}
          </h3>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto font-light text-lg mb-12">
            {cta.text}
          </p>

          <button className="group relative px-12 py-5 overflow-hidden border border-[#d4af37]/30 transition-all duration-500">
            <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] text-[#d4af37] group-hover:text-[#0a0f1d] transition-colors">
              {cta.button}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TEAM_IMAGES } from "../constants/teamImages";

gsap.registerPlugin(ScrollTrigger);

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
        scrollTrigger: { trigger: ".founder-grid", start: "top 80%" },
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
          // Ensure cards are visible immediately if already in viewport on refresh
          toggleActions: "play none none none",
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
      style={{ backgroundColor: "#1B2A4A", fontFamily: "inherit" }}
    >
      {/* Subtle dot texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div className="w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-8 py-24 md:py-36">
        {/* ══ HEADER ══ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-18 space-y-5"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex items-center justify-center gap-3"
          >
            <span className="text-[#BA8C61] text-5xl uppercase tracking-[0.02em] font-semibold">
              {t("hero.title") || "Das Team"}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-serif  text-[#fff] leading-[1.04] tracking-tight"
            style={{ fontSize: "clamp(1rem, 3vw, 2.2rem)" }}
          >
            {t("hero.subtitle")}
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="flex items-center justify-center gap-3 pt-1"
          >
            <div className="h-px w-16 bg-[#BA8C61]/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#BA8C61]" />
            <div className="h-px w-16 bg-[#BA8C61]/30" />
          </motion.div>

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
          {founders.map((f) => (
            <FounderCard key={f.slug} member={f} />
          ))}
        </div>

        {/* ══ ASSISTANTS ══ */}
        <div className="relative pt-16 border-t border-[#1B2A4A]/10">
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
              <span className="text-[#BA8C61] text-2xl uppercase tracking-[0.15em] font-semibold">
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
  return (
    <div
      className="founder-card group flex flex-col bg-white overflow-hidden"
      style={{ border: "1px solid rgba(27,42,74,0.1)", borderRadius: "2px" }}
    >
      {/* Photo */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ aspectRatio: "6/5" }}
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
          <p className="text-[#BA8C61] text-[14px] uppercase tracking-[0.15em] font-bold leading-snug">
            {member.title}
          </p>
        </div>

        {/* ZONE 2 — Name + arrow */}
        <div
          className="flex-shrink-0 flex items-start justify-between gap-3 pb-5 mb-5 border-b border-[#1B2A4A]/10"
          style={{ minHeight: "96px" }}
        >
          <h3
            className="font-serif  text-[#1B2A4A] leading-tight flex-1 text-center"
            style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
          >
            {member.name}
          </h3>
          <ArrowUpRight
            className="text-[#BA8C61] flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            size={18}
          />
        </div>

        {/* ZONE 3 — Full bio, no truncation */}
        <p
          className="text-[#1B2A4A]/90 font-[500] leading-[1.9]  text-center flex-1"
          style={{ fontSize: "clamp(0.91rem, 1.1vw, 0.99rem)" }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

// ─── Assistant Card ───────────────────────────────────────────────
// NOTE: No Framer Motion here — GSAP handles this via .assistant-card class.
// Mixing both on the same element caused opacity:0 to persist on page refresh.
function AssistantCard({ member, index }) {
  return (
    <div
      className="assistant-card group flex flex-col bg-white h-full overflow-hidden"
      style={{ border: "1px solid rgba(27,42,74,0.1)", borderRadius: "2px" }}
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

        {/* ZONE 3 — Full bio, no truncation */}
        <p
          className="text-[#1B2A4A]/90 font-[500] leading-[1.85] text-center flex-1"
          style={{ fontSize: "clamp(0.95rem, 0.95vw, 0.99rem)" }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

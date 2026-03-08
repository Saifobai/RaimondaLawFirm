import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  ShieldAlert,
  CheckCircle2,
  Activity,
  Navigation,
  Scale,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FirmOffers() {
  const { t } = useTranslation("offer");
  const navigate = useNavigate();

  // The "Live Feed" Items
  const feedItems = [
    t("liveFeedItem1"),
    t("liveFeedItem2"),
    t("liveFeedItem3"),
    t("liveFeedItem4"),
  ];

  return (
    <section
      id="offers"
      className="bg-slate-950 py-32 px-6 lg:px-12 xl:px-20 text-slate-100 font-sans overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* HEADER SECTION - Minimalist & Modern */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <motion.p className="text-amber-500 uppercase tracking-[0.5em] text-[11px] font-bold">
              {t("sectionSubtitle")}
            </motion.p>
            <motion.h2 className="text-6xl lg:text-8xl xl:text-9xl font-serif italic tracking-tighter leading-none">
              {t("sectionLabel")}
            </motion.h2>
          </div>

          {/* THE UNIQUE ELEMENT: Live Status Ticker */}
          <div className="bg-slate-900/50 border-l-2 border-amber-500 p-6 w-full md:w-80 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={14} className="text-amber-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-slate-500">
                {t("liveFeedLabel")}
              </span>
            </div>
            <div className="h-10 overflow-hidden relative">
              <motion.div
                animate={{ y: [0, -120] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="space-y-4"
              >
                {[...feedItems, ...feedItems].map((item, i) => (
                  <p
                    key={i}
                    className="text-xs font-medium text-slate-300 tracking-wide uppercase italic"
                  >
                    {item}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SERVICE 1: SCHULDENFREI (Interactive Depth) */}
          <motion.div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 lg:p-24 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
                  <Navigation size={20} />
                </div>
                <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.4em]">
                  {t("card1.label")}
                </span>
              </div>
              <h3 className="text-5xl lg:text-7xl font-serif text-white mb-14 max-w-2xl leading-[1.1]">
                {t("card1.h2")}
              </h3>

              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div className="space-y-5">
                  <h4 className="font-bold uppercase tracking-widest text-xs flex items-center gap-3">
                    <span className="w-8 h-px bg-amber-500" />{" "}
                    {t("card1.sub1Title")}
                  </h4>
                  <p className="text-slate-400 text-base font-light leading-relaxed">
                    {t("card1.sub1Desc")}
                  </p>
                </div>
                <div className="space-y-5">
                  <h4 className="font-bold uppercase tracking-widest text-xs flex items-center gap-3">
                    <span className="w-8 h-px bg-amber-500" />{" "}
                    {t("card1.sub2Title")}
                  </h4>
                  <p className="text-slate-400 text-base font-light leading-relaxed">
                    {t("card1.sub2Desc")}
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="relative group/btn flex items-center gap-8 text-[11px] font-black tracking-[0.3em] uppercase"
              >
                <span className="bg-white text-slate-950 px-10 py-6 group-hover/btn:bg-amber-500 transition-colors">
                  {t("card1.cta")}
                </span>
                <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center group-hover/btn:border-amber-500 transition-colors">
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </div>
              </button>
            </div>
          </motion.div>

          {/* SERVICE 2: IMMOBILIE (Modern Iconography) */}
          <motion.div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-12 lg:p-16 flex flex-col justify-between group hover:bg-slate-800/50 transition-all">
            <div className="space-y-12">
              <div className="relative inline-block">
                <Home
                  className="text-amber-500 relative z-10"
                  size={48}
                  strokeWidth={1}
                />
                <div className="absolute -inset-4 bg-amber-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] block mb-6">
                  {t("card2.label")}
                </span>
                <h3 className="text-4xl font-serif italic text-white mb-8 leading-tight">
                  {t("card2.h2")}
                </h3>
                <p className="text-slate-400 font-light text-xl leading-relaxed">
                  {t("card2.content")}
                </p>
              </div>
            </div>
            <div className="pt-12 overflow-hidden">
              <div className="h-px w-full bg-slate-800 relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-1/2"
                />
              </div>
            </div>
          </motion.div>

          {/* SERVICE 3: Hilfe bei Pfändung (The "Boutique Strategy" Row) */}
          <motion.div className="lg:col-span-12 bg-slate-900 border border-slate-800 p-10 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 border border-amber-500/30 text-amber-500 text-[9px] font-black tracking-widest uppercase">
                  {t("strategyLabel")}
                </span>
              </div>
              <h3 className="text-5xl lg:text-6xl font-serif text-white mb-8">
                {t("card3.h2")}
              </h3>
              <p className="text-slate-400 text-2xl font-light italic max-w-4xl leading-relaxed">
                {t("card3.content")}
              </p>
            </div>

            {/* THE UNUSUAL ELEMENT: Interactive Grid Shield */}
            <div className="relative w-72 h-72 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-slate-700 rounded-full"
              />
              <div
                className="relative z-10 flex flex-col items-center group cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                <Scale
                  size={60}
                  strokeWidth={1}
                  className="text-amber-500 group-hover:scale-110 transition-transform duration-500"
                />
                <span className="mt-4 text-[9px] font-black tracking-[0.4em] text-slate-500 group-hover:text-amber-500 transition-colors uppercase">
                  Mandat Erteilen
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  ArrowUpRight,
  Shield,
  Scale,
  Landmark,
  Gavel,
  Zap,
} from "lucide-react";
import gsap from "gsap";

export default function DebtWay() {
  const { t } = useTranslation("debtway");
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // For manual hover override
  const containerRef = useRef(null);

  const services = t("servicesSection.clusters", { returnObjects: true }) || [];
  const icons = [Landmark, Scale, Gavel, Shield];

  // 1. AUTO-PLAY LOGIC (4 Second Intervals)
  useEffect(() => {
    if (isPaused) return; // Stop timer if user is hovering manually

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  // 2. MOUSE MESH MOVEMENT
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".bg-mesh", {
        x: xPos,
        y: yPos,
        duration: 2.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#262B3E] text-white overflow-hidden font-sans selection:bg-[#BA8C61]"
    >
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-mesh absolute inset-[-20%] opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#BA8C61_0%,_transparent_60%)] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#262B3E_100%)] opacity-80" />
      </div>

      <div className="relative z-40 max-w-[1400px] mx-auto min-h-screen flex flex-col">
        {/* --- HEADER --- */}
        <header className="flex justify-between items-start pt-16 px-8 lg:px-0">
          <div className="space-y-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              className="h-1 bg-[#BA8C61]"
            />
            <span className="text-[#BA8C61] tracking-[0.8em] uppercase text-[11px] font-bold block">
              {t("sectionSubtitle")}
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif italic tracking-tighter leading-none text-white/95">
              {t("sectionLabel")}
            </h2>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-3">
            <div className="flex items-center gap-3 py-2 px-4 border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BA8C61] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BA8C61]"></span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-white/70">
                {t("strategyLabel")} • Auto-Sync On
              </span>
            </div>
          </div>
        </header>

        {/* --- CORE INTERACTION --- */}
        <main className="flex-grow grid lg:grid-cols-12 gap-16 items-center py-20 px-8 lg:px-0">
          {/* LEFT: THE NAVIGATOR (Handles Pause/Resume) */}
          <div
            className="lg:col-span-5 space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveTab(idx)}
                className={`group cursor-pointer relative py-8 border-b border-white/5 transition-all duration-500 ${
                  activeTab === idx
                    ? "pl-10"
                    : "pl-0 opacity-20 hover:opacity-100"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#BA8C61] shadow-[0_0_20px_#BA8C61]"
                  />
                )}

                {/* Progress Bar for the active item */}
                {activeTab === idx && !isPaused && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-[1px] bg-[#BA8C61]/50 z-10"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-black text-[#BA8C61]/60">
                    Phase 0{idx + 1}
                  </span>
                  {activeTab === idx && (
                    <ArrowUpRight className="text-[#BA8C61]" size={20} />
                  )}
                </div>
                <h3
                  className={`text-3xl lg:text-5xl font-serif italic transition-all duration-700 ${
                    activeTab === idx
                      ? "text-white translate-x-2"
                      : "text-white/30"
                  }`}
                >
                  {service.headline}
                </h3>
              </div>
            ))}
          </div>

          {/* RIGHT: THE DISPLAY VIEWPORT */}
          <div className="lg:col-span-7 relative h-[600px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40, filter: "blur(15px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -40, filter: "blur(15px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="relative p-12 lg:p-20 border border-white/10 bg-[#1e2335]/40 backdrop-blur-2xl shadow-2xl rounded-sm group overflow-hidden">
                  <div className="absolute -top-10 -right-10 pointer-events-none">
                    {React.createElement(icons[activeTab], {
                      className:
                        "text-[#BA8C61] opacity-[0.07] group-hover:opacity-15 transition-opacity duration-1000",
                      size: 320,
                      strokeWidth: 0.5,
                    })}
                  </div>

                  <div className="relative z-10 space-y-10">
                    <h4 className="text-4xl lg:text-6xl font-serif italic leading-[1.1] text-white">
                      {services[activeTab].title}
                    </h4>

                    <p className="text-xl lg:text-2xl text-white/50 font-light leading-relaxed max-w-lg">
                      {services[activeTab].content}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {services[activeTab].keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-5 py-2 bg-white/[0.03] border border-white/10 text-[10px] tracking-[0.2em] uppercase text-[#BA8C61] font-bold"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* --- FOOTER --- */}
        <footer className="pb-16 flex justify-between items-center px-8 lg:px-0 border-t border-white/5 pt-10">
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-white/20 uppercase tracking-widest">
              Master Protocol
            </span>
            <div className="flex gap-2">
              {[...Array(services.length)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-700 rounded-full ${
                    activeTab === i ? "w-16 bg-[#BA8C61]" : "w-4 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
            System Cycle: {activeTab + 1} / {services.length}
          </p>
        </footer>
      </div>
    </div>
  );
}

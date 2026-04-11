// import React, { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { ShieldCheck, Plus, ArrowUpRight, Scale } from "lucide-react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Assets
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";
// import Both_Image from "../assets/Both_Image.png";

// gsap.registerPlugin(ScrollTrigger);

// export default function Highlights() {
//   const { t } = useTranslation("highlights");
//   const containerRef = useRef(null);

//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const advantages = t("advantages.items", { returnObjects: true }) || [];

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Sophisticated line drawing
//       gsap.from(".divider-line", {
//         scaleX: 0,
//         transformOrigin: "left",
//         duration: 1.5,
//         ease: "power4.inOut",
//         stagger: 0.3,
//         scrollTrigger: { trigger: ".divider-line", start: "top 90%" },
//       });

//       // Subtle image reveal
//       gsap.from(".reveal-img", {
//         y: 50,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: { trigger: ".reveal-img", start: "top 85%" },
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="bg-[#262B3E] text-white selection:bg-[#BA8C61] font-sans antialiased"
//     >
//       <div className="max-w-[1550px] mx-auto overflow-x-hidden">
//         {/* --- SECTION 1: HERO MANIFESTO --- */}
//         <section className="relative min-h-[80vh] flex items-center px-6 lg:px-12 py-20 border-x border-white/5">
//           <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
//             <div className="lg:col-span-7 space-y-10 z-10">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-4"
//               >
//                 <span className="text-[#BA8C61] font-mono text-[11px] tracking-[0.5em] uppercase font-bold">
//                   International Jurisprudence
//                 </span>
//               </motion.div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight text-white tracking-tight">
//                 {t("intro.text1")}
//               </h1>

//               <div className="max-w-md space-y-6">
//                 <div className="divider-line h-px w-full bg-white/20" />
//                 <p className="text-white/60 font-light text-lg leading-relaxed italic">
//                   {t("intro.text2")}
//                 </p>
//               </div>
//             </div>

//             <div className="lg:col-span-5 relative">
//               <div className="aspect-[16/10] overflow-hidden border border-white/10 p-4 bg-white/5">
//                 <img
//                   src={Both_Image}
//                   className="w-full h-full object-cover brightness-90"
//                   alt="Partners"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* --- SECTION 2: VERTICAL SERVICES --- */}
//         <section className="py-24 px-6 lg:px-12 border-x border-white/5 bg-[#1E2335]">
//           <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
//             <h2 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tighter">
//               {t("servicesSection.title")}
//             </h2>
//             <div className="flex items-center gap-2 text-white/30 text-xs font-mono tracking-widest uppercase">
//               <Scale size={14} /> / 0{services.length} Core Clusters
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-[#262B3E] p-10 lg:p-14 transition-all duration-500 hover:bg-[#2e344d]"
//               >
//                 <div className="relative z-10 space-y-6">
//                   <span className="text-[#BA8C61] font-mono text-sm block mb-4">
//                     0{index + 1}
//                   </span>
//                   <h3 className="text-2xl lg:text-3xl font-serif italic text-white group-hover:text-[#BA8C61] transition-colors">
//                     {service.headline || service.title}
//                   </h3>
//                   <p className="text-white/50 leading-relaxed font-light text-sm lg:text-base">
//                     {service.content}
//                   </p>
//                   <div className="flex flex-wrap gap-2 pt-6">
//                     {service.keywords?.map((kw, i) => (
//                       <span
//                         key={i}
//                         className="text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1 group-hover:border-[#BA8C61]/30 transition-colors"
//                       >
//                         {kw}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- SECTION 3: STRATEGIC ADVANTAGES --- */}
//         <section className="py-24 lg:py-32 px-6 lg:px-12 border-x border-white/5">
//           <div className="grid lg:grid-cols-12 gap-16">
//             <div className="lg:col-span-4">
//               <h2 className="text-4xl lg:text-5xl font-serif italic text-white leading-tight sticky top-24">
//                 {t("servicesSection.legacy")}
//               </h2>
//             </div>

//             <div className="lg:col-span-8 grid md:grid-cols-2 gap-10">
//               {advantages.map((item, i) => (
//                 <div
//                   key={i}
//                   className="space-y-6 p-8 border-l border-white/5 hover:border-[#BA8C61] transition-colors duration-500"
//                 >
//                   <div className="flex items-center justify-between">
//                     <ShieldCheck
//                       className="text-[#BA8C61]"
//                       size={28}
//                       strokeWidth={1}
//                     />
//                     <span className="text-white/10 font-mono text-xs italic">
//                       A0{i + 1}
//                     </span>
//                   </div>
//                   <h4 className="text-xl font-serif italic text-white">
//                     {item.title}
//                   </h4>
//                   <p className="text-white/40 text-sm leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- SECTION 4: MINIMAL CTA --- */}
//         <section className="py-40 flex flex-col items-center justify-center border-t border-x border-white/5 text-center">
//           <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
//             <p className="text-[#BA8C61] font-mono text-[11px] tracking-[0.5em] uppercase mb-12">
//               Global Resolution
//             </p>
//             <div className="relative inline-block">
//               <h2 className="text-4xl lg:text-5xl font-serif italic text-white mb-2">
//                 {t("servicesSection.contactButton")}
//               </h2>
//               <div className="divider-line h-px w-0 group-hover:w-full bg-[#BA8C61] transition-all duration-700 mx-auto" />
//             </div>
//             <div className="mt-12 flex justify-center">
//               <Plus
//                 className="text-white/20 transition-transform group-hover:rotate-90 duration-500"
//                 size={32}
//               />
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </div>
//   );
// }

//==================================================================
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Plus, Scale, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Assets
import Both_Image from "../assets/Both_Image.png";

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const { t } = useTranslation("highlights");
  const containerRef = useRef(null);

  const services = t("servicesSection.clusters", { returnObjects: true }) || [];
  const advantages = t("advantages.items", { returnObjects: true }) || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Elegant Entrance for Cards (Scaling + Fade)
      gsap.from(".service-card", {
        y: 40,
        opacity: 0,
        scale: 0.98,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      });

      // 2. MAGNETIC EFFECT: Cards follow mouse subtly
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card) => {
        const glow = card.querySelector(".card-glow");

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Move the glow spotlight
          gsap.to(glow, {
            opacity: 1,
            x: x - 150, // center the 300px glow
            y: y - 150,
            duration: 0.4,
          });

          // Subtle tilt
          const tiltX = (y - rect.height / 2) * 0.01;
          const tiltY = (x - rect.width / 2) * -0.01;
          gsap.to(card, {
            rotateX: tiltX,
            rotateY: tiltY,
            scale: 1.01,
            duration: 0.5,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(glow, { opacity: 0, duration: 0.4 });
          gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#262B3E] text-white selection:bg-[#BA8C61] font-sans antialiased overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto ">
        {/* --- SECTION 1: HERO --- */}
        <section className="relative min-h-[70vh] flex items-center px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 space-y-10 z-10">
              <p className="text-[#BA8C61] font-mono text-[13px] tracking-[0.5em] uppercase font-bold">
                International Jurisprudence
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif italic leading-[1.1] text-white tracking-tight">
                {t("intro.text1")}
              </h1>
              <div className="max-w-md space-y-6">
                <div className="h-px w-full bg-white/50" />
                <p className="text-white/70 font-light text-[20px] leading-relaxed italic font-serif">
                  {t("intro.text2")}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[16/10] overflow-hidden rounded-sm border border-white/10 p-2 bg-white/5">
                <img
                  src={Both_Image}
                  className="w-full h-full object-cover brightness-110"
                  alt="Partners"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SERVICES (The Fixed Part) --- */}
        <section className="py-24 px-6 lg:px-12 bg-[#1E2335]/50">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif italic text-white tracking-tighter">
              {t("servicesSection.title")}
            </h2>
            <div className="hidden md:flex items-center gap-2 text-[#BA8C61]/50 font-mono text-[15px] tracking-widest uppercase">
              <Scale size={14} /> / Expertise Areas
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-[#2D334D] p-10 lg:p-14 rounded-sm border border-white/[0.05] transition-colors duration-500 hover:border-[#BA8C61]/30 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* GSAP Controlled Glow - This removes the "Gray" feeling */}
                <div className="card-glow absolute w-[300px] h-[300px] bg-[#BA8C61]/10 blur-[100px] rounded-full opacity-0 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[#BA8C61] font-mono text-xs">
                      0{index + 1}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-white/10 group-hover:text-[#BA8C61] transition-colors"
                    />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-serif italic text-white group-hover:text-white transition-colors">
                    {service.headline || service.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed font-light text-sm lg:text-lg group-hover:text-white/70 transition-colors">
                    {service.content}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.keywords?.map((kw, i) => (
                      <span
                        key={i}
                        className="text-[15px] tracking-widest uppercase text-white/70 border border-white/10 px-3 py-1 bg-[#262B3E]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: ADVANTAGES --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-serif italic text-white sticky top-24">
                {t("servicesSection.legacy")}
              </h2>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-10">
              {advantages.map((item, i) => (
                <div
                  key={i}
                  className="p-8 border-l border-white/5 hover:border-[#BA8C61] transition-all duration-500 bg-white/[0.02]"
                >
                  <ShieldCheck
                    className="text-[#BA8C61] mb-6"
                    size={24}
                    strokeWidth={1}
                  />
                  <h4 className="text-xl font-serif italic text-white mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 4: CTA --- */}
        <section className="py-40 flex flex-col items-center justify-center text-center">
          <motion.div whileHover={{ y: -5 }} className="group cursor-pointer">
            <p className="text-[#BA8C61] font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
              Ready to Connect
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif italic text-white group-hover:text-[#BA8C61] transition-colors">
              {t("servicesSection.contactButton")}
            </h2>
            <div className="mt-10 flex justify-center">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#BA8C61] group-hover:border-[#BA8C61] transition-all duration-500">
                <Plus className="text-white transition-transform group-hover:rotate-90" />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

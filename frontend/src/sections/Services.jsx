// import React from "react";
// import { useTranslation } from "react-i18next";
// import { UserCheck, Scale, Gavel, ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";

// // Assets
// import Rai_Image from "../assets/Rai_Image.jpeg";
// import Auri_Image from "../assets/Auri_Image.jpeg";

// export default function Services() {
//   const { t } = useTranslation("services");
//   const services = t("servicesSection.clusters", { returnObjects: true }) || [];
//   const icons = [UserCheck, Scale, Gavel];

//   return (
//     <section id="services" className="bg-white py-24 lg:py-44 overflow-hidden">
//       <div className="max-w-[1500px] mx-auto px-6">
//         {/* PARTNER EQUALITY HEADER */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-4">
//               <div className="h-[1px] w-12 bg-[#FE9A00]" />
//               <span className="text-[#FE9A00] font-bold tracking-[0.4em] uppercase text-[10px]">
//                 {t("servicesSection.tagline") || "Executive Partnership"}
//               </span>
//             </div>
//             <h2 className="text-6xl lg:text-8xl font-serif italic text-slate-950 leading-[0.9] tracking-tighter">
//               {t("servicesSection.title")}
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:pl-20 border-l border-slate-100"
//           >
//             <p className="text-slate-500 text-xl leading-relaxed font-light italic">
//               {t("servicesSection.sideTitle")}
//             </p>
//           </motion.div>
//         </div>

//         {/* THE TRI-BALANCE GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
//           {/* LEFT PARTNER: RAI */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="lg:col-span-3 h-[500px] lg:h-auto relative overflow-hidden group border border-slate-100"
//           >
//             <img
//               src={Rai_Image}
//               alt="Partner Rai"
//               className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[4s] group-hover:scale-110 group-hover:grayscale-0"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
//             <div className="absolute bottom-8 left-8 z-20">
//               <p className="text-[#FE9A00] text-[9px] font-bold tracking-[0.3em] uppercase mb-1">
//                 Partner
//               </p>
//               <h4 className="text-2xl font-serif italic text-white">Rai</h4>
//             </div>
//           </motion.div>

//           {/* CENTER SERVICES: ALL 3 CARDS */}
//           <div className="lg:col-span-6 flex flex-col gap-6">
//             {services.map((service, index) => {
//               const Icon = icons[index] || Gavel;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group relative bg-slate-50 p-8 border border-slate-100 overflow-hidden flex flex-col justify-center min-h-[180px]"
//                 >
//                   {/* Luxury Slide background */}
//                   <div className="absolute inset-0 bg-slate-950 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

//                   <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
//                     <div className="flex-shrink-0">
//                       <Icon
//                         className="text-[#FE9A00] w-10 h-10 group-hover:scale-110 transition-transform"
//                         strokeWidth={1}
//                       />
//                     </div>
//                     <div className="flex-grow">
//                       <h3 className="text-xl font-serif mb-2 group-hover:text-white transition-colors">
//                         {service.headline || service.title}
//                       </h3>
//                       <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-2">
//                         {service.content}
//                       </p>
//                     </div>
//                     <div className="hidden md:block">
//                       <span className="text-slate-200 font-serif italic text-4xl group-hover:text-white/10 transition-colors">
//                         0{index + 1}
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* RIGHT PARTNER: AURI */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="lg:col-span-3 h-[500px] lg:h-auto relative overflow-hidden group border border-slate-100"
//           >
//             <img
//               src={Auri_Image}
//               alt="Partner Auri"
//               className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[4s] group-hover:scale-110 group-hover:grayscale-0"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
//             <div className="absolute bottom-8 left-8 z-20">
//               <p className="text-[#FE9A00] text-[9px] font-bold tracking-[0.3em] uppercase mb-1">
//                 Partner
//               </p>
//               <h4 className="text-2xl font-serif italic text-white">Auri</h4>
//             </div>
//           </motion.div>

//           {/* BOTTOM CTA BAR */}
//           <motion.div className="lg:col-span-12 mt-8 p-12 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-8">
//             <h3 className="text-3xl font-serif italic text-white text-center md:text-left">
//               {t("servicesSection.featuredTitle") ||
//                 "Expertise meeting excellence."}
//             </h3>
//             <a
//               href="#contact"
//               className="group flex items-center gap-6 bg-[#FE9A00] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl"
//             >
//               {t("servicesSection.contactButton")}
//               <ArrowUpRight
//                 size={18}
//                 className="group-hover:rotate-45 transition-transform"
//               />
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

//========================================================
//========================================================
import React from "react";
import { useTranslation } from "react-i18next";
import { UserCheck, Scale, Gavel, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import Rai_Image from "../assets/Rai_Image.jpeg";
import Auri_Image from "../assets/Auri_Image.jpeg";

export default function Services() {
  const { t } = useTranslation("services");
  const services = t("servicesSection.clusters", { returnObjects: true }) || [];
  const icons = [UserCheck, Scale, Gavel];

  return (
    <section id="services" className="bg-white py-24 lg:py-44 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#FE9A00]" />
              <span className="text-[#FE9A00] font-bold tracking-[0.4em] uppercase text-[10px]">
                {t("servicesSection.tagline") || "Executive Partnership"}
              </span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-serif italic text-slate-950 leading-[0.9] tracking-tighter">
              {t("servicesSection.title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-20 border-l border-slate-100"
          >
            <p className="text-slate-500 text-xl leading-relaxed font-light italic">
              {t("servicesSection.sideTitle")}
            </p>
          </motion.div>
        </div>

        {/* THE 4-4-4 POWER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT PARTNER: RAI (Increased to col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[600px] lg:h-[700px] relative overflow-hidden group border border-slate-100 shadow-sm"
          >
            <img
              src={Rai_Image}
              alt="Partner Rai"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[4s] group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 z-20">
              <p className="text-[#FE9A00] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                Partner
              </p>
              <h4 className="text-4xl font-serif italic text-white">Rai</h4>
            </div>
          </motion.div>

          {/* CENTER SERVICES: (Decreased to col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = icons[index] || Gavel;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-slate-50 p-8 border border-slate-100 overflow-hidden flex flex-col justify-center flex-1 min-h-[200px]"
                >
                  <div className="absolute inset-0 bg-slate-950 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                      <Icon
                        className="text-[#FE9A00] w-10 h-10 group-hover:scale-110 transition-transform"
                        strokeWidth={1}
                      />
                      <span className="text-slate-200 font-serif italic text-4xl group-hover:text-white/10 transition-colors">
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif mb-2 group-hover:text-white transition-colors">
                        {service.headline || service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors line-clamp-3">
                        {service.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT PARTNER: AURI (Increased to col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[600px] lg:h-[700px] relative overflow-hidden group border border-slate-100 shadow-sm"
          >
            <img
              src={Auri_Image}
              alt="Partner Auri"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[4s] group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 z-20">
              <p className="text-[#FE9A00] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                Partner
              </p>
              <h4 className="text-4xl font-serif italic text-white">Auri</h4>
            </div>
          </motion.div>

          {/* BOTTOM CTA BAR */}
          <motion.div className="lg:col-span-12 mt-8 p-12 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-full bg-[#FE9A00]/5 -skew-x-12 translate-x-20" />

            <h3 className="relative z-10 text-3xl font-serif italic text-white text-center md:text-left">
              {t("servicesSection.featuredTitle") ||
                "Expertise meeting excellence."}
            </h3>
            <a
              href="#contact"
              className="relative z-10 group flex items-center gap-6 bg-[#FE9A00] text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-2xl"
            >
              {t("servicesSection.contactButton")}
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    <section
      id="services"
      className="bg-[#262B3E] py-24 lg:py-44 overflow-hidden"
    >
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
              <div className="h-[1px] w-12 bg-[#BA8C61]" />
              <span className="text-[#BA8C61] font-bold tracking-[0.4em] uppercase text-[10px]">
                {t("servicesSection.tagline") || "Executive Partnership"}
              </span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-serif italic text-white leading-[0.9] tracking-tighter">
              {t("servicesSection.title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-20 border-l border-white/20"
          >
            <p className="text-white/80 text-xl leading-relaxed font-light italic">
              {t("servicesSection.sideTitle")}
            </p>
          </motion.div>
        </div>

        {/* THE 4-4-4 POWER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT PARTNER: RAI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[600px] lg:h-[700px] relative overflow-hidden group border border-white/10 shadow-sm"
          >
            <img
              src={Rai_Image}
              alt="Partner Rai"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#262B3E]/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 z-20">
              <p className="text-[#BA8C61] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                Partner
              </p>
              <h4 className="text-4xl font-serif italic text-white">Rai</h4>
            </div>
          </motion.div>

          {/* CENTER SERVICES */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = icons[index] || Gavel;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/5 p-8 border border-white/10 overflow-hidden flex flex-col justify-center flex-1 min-h-[200px]"
                >
                  <div className="absolute inset-0 bg-[#BA8C61] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                  <div className="relative z-10 space-y-4">
                    <Icon
                      className="text-[#BA8C61] w-10 h-10 group-hover:text-white transition-colors"
                      strokeWidth={1}
                    />
                    <h3 className="text-xl font-serif mb-2 group-hover:text-white transition-colors text-white">
                      {service.headline || service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors line-clamp-3">
                      {service.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT PARTNER: AURI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 h-[600px] lg:h-[700px] relative overflow-hidden group border border-white/10 shadow-sm"
          >
            <img
              src={Auri_Image}
              alt="Partner Auri"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#262B3E]/90 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 z-20">
              <p className="text-[#BA8C61] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                Partner
              </p>
              <h4 className="text-4xl font-serif italic text-white">Auri</h4>
            </div>
          </motion.div>

          {/* BOTTOM CTA BAR */}
          <motion.div className="lg:col-span-12 mt-8 p-12 bg-black/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-full bg-[#BA8C61]/10 -skew-x-12 translate-x-20" />
            <h3 className="relative z-10 text-3xl font-serif italic text-white">
              {t("servicesSection.featuredTitle")}
            </h3>
            <a
              href="#contact"
              className="relative z-10 flex items-center gap-6 bg-[#BA8C61] text-[#262B3E] px-10 py-5 text-[11px] font-bold uppercase hover:bg-white transition-all duration-300 shadow-2xl"
            >
              {t("servicesSection.contactButton")} <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

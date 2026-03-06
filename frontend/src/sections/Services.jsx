import { useTranslation } from "react-i18next";
import { UserCheck, Scale, Gavel, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Rai_Image from "../assets/Rai_Image.jpeg";

export default function Services() {
  const { t } = useTranslation();
  const services = t("home.servicesSection.clusters", { returnObjects: true });
  const icons = [UserCheck, Scale, Gavel];

  return (
    <section className="bg-[#fcfcfc] py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* 1. THE ARCHITECTURAL HEADER */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 border-b border-slate-200 pb-12">
          <div className="lg:w-2/3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-amber-600 font-bold tracking-[0.4em] uppercase text-[10px] block mb-6"
            >
              // {t("home.servicesSection.title")}
            </motion.span>
            <h2 className="text-5xl lg:text-8xl font-serif text-slate-900 leading-[0.9] tracking-tighter">
              {t("home.hero.title")}
            </h2>
          </div>
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              {t("home.hero.subtitle")}
            </p>
          </div>
        </div>

        {/* 2. THE ASYMMETRIC FLEX FLOW */}
        <div className="flex flex-wrap gap-4">
          {/* FEATURED CASE: The "Power Card" (Wider for impact) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-grow basis-full lg:basis-[40%] h-[600px] relative overflow-hidden group"
          >
            <img
              src={Rai_Image}
              alt="Expertise"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-slate-950/60 transition-colors duration-500 group-hover:bg-slate-950/40" />

            <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
              <div className="h-12 w-12 border border-white/30 flex items-center justify-center rounded-full">
                <ArrowUpRight className="text-white w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                  {t("home.servicesSection.sideTitle")}
                </h3>
                <button className="bg-amber-600 text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all">
                  {t("home.servicesSection.contactButton")}
                </button>
              </div>
            </div>
          </motion.div>

          {/* SERVICE LIST: Dynamic width cards for long German text */}
          <div className="flex-grow basis-full lg:basis-[55%] flex flex-wrap gap-4">
            {services.map((service, index) => {
              const Icon = icons[index] || Gavel;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-grow basis-full md:basis-[48%] bg-white p-10 border border-slate-100 relative group flex flex-col justify-between overflow-hidden"
                >
                  {/* HOVER MAGIC: The Reveal Slide */}
                  <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <Icon
                        className="text-amber-600 w-10 h-10 group-hover:text-white transition-colors duration-500"
                        strokeWidth={1}
                      />
                      <span className="text-slate-200 font-serif text-4xl group-hover:text-slate-800 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 group-hover:text-white transition-colors duration-500">
                      {service.headline || service.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-500">
                      {service.content}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-slate-50 group-hover:border-slate-800 transition-colors">
                    <div className="flex flex-wrap gap-2">
                      {service.keywords?.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[8px] uppercase tracking-widest text-slate-400 group-hover:text-amber-500"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

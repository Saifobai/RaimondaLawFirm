import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Impressum() {
  const { t } = useTranslation("impressum");

  const sections = t("sections", { returnObjects: true });
  const safeSections = Array.isArray(sections) ? sections : [];

  return (
    <section className="bg-[#050c18] text-slate-300 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section with Law Firm Branding */}
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 border-l-4 border-amber-600 pl-5 md:pl-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-amber-500 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Angaben gemäß § 5 TMG
          </p>
        </motion.header>

        {/* Content Sections */}
        <div className="space-y-12 md:space-y-16">
          {safeSections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <h2 className="text-lg md:text-xl font-serif font-bold text-white mb-4 md:mb-6 flex items-start">
                {/* Visual marker consistent with Privacy page */}
                <span className="w-1 md:w-1.5 h-6 md:h-8 bg-amber-600 mr-3 md:mr-4 mt-1 shrink-0 transition-all duration-300 group-hover:bg-white group-hover:h-10 hidden sm:block" />
                <span className="leading-tight">{section.title}</span>
              </h2>

              <div className="space-y-3 md:space-y-4 leading-relaxed text-slate-400 pl-0 sm:pl-5 md:pl-6">
                {section.content.map((line, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light break-words"
                  >
                    {/* Check if line contains an email-like structure to apply subtle styling */}
                    {line.includes("@") ? (
                      <span className="text-amber-500/80">{line}</span>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Footer Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-24 h-px bg-gradient-to-r from-amber-600/50 via-slate-800 to-transparent"
        />
      </div>
    </section>
  );
}

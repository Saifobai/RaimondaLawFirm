// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Mail, Clock, ArrowRight } from "lucide-react";

// export default function Contact() {
//   const { t } = useTranslation("contact");

//   const locations = {
//     koeln: {
//       address: "Im Sionstal 3-5, 50678 Köln",
//       title: t("office.titleCologne"),
//       tel: "0221 28275740",
//       fax: "0221 28275741",
//     },
//     duesseldorf: {
//       address: "Friedrichstr. 7, 40217 Düsseldorf",
//       title: t("office.titleDuesseldorf"),
//       tel: "0211 15937650",
//       fax: "0211 15937651",
//     },
//   };

//   const [activeKey, setActiveKey] = useState("koeln");

//   return (
//     <section
//       id="contact"
//       className="bg-slate-900 py-36 text-slate-200 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="max-w-3xl mb-24"
//         >
//           <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
//             {t("title")}
//           </span>

//           <h2 className="text-5xl lg:text-6xl font-serif mt-6 leading-tight">
//             {t("subtitle")}
//           </h2>

//           <p className="text-slate-400 mt-6 text-lg leading-relaxed">
//             {t("description")}
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-20 items-start">
//           {/* FORM */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="lg:col-span-7"
//           >
//             <form className="space-y-10">
//               {/* Name */}
//               <div className="relative group">
//                 <input
//                   type="text"
//                   required
//                   placeholder=" "
//                   className="peer w-full bg-transparent border-b border-slate-700 py-4 outline-none focus:border-amber-400 transition"
//                 />
//                 <label
//                   className="absolute left-0 top-4 text-slate-500 text-sm transition-all
//                 peer-placeholder-shown:top-4
//                 peer-placeholder-shown:text-base
//                 peer-focus:-top-3
//                 peer-focus:text-xs
//                 peer-focus:text-amber-400"
//                 >
//                   {t("form.name")}
//                 </label>
//               </div>

//               {/* Email */}
//               <div className="relative group">
//                 <input
//                   type="email"
//                   required
//                   placeholder=" "
//                   className="peer w-full bg-transparent border-b border-slate-700 py-4 outline-none focus:border-amber-400 transition"
//                 />
//                 <label
//                   className="absolute left-0 top-4 text-slate-500 text-sm transition-all
//                 peer-placeholder-shown:top-4
//                 peer-placeholder-shown:text-base
//                 peer-focus:-top-3
//                 peer-focus:text-xs
//                 peer-focus:text-amber-400"
//                 >
//                   {t("form.email")}
//                 </label>
//               </div>

//               {/* Phone */}
//               <div className="relative group">
//                 <input
//                   type="tel"
//                   placeholder=" "
//                   className="peer w-full bg-transparent border-b border-slate-700 py-4 outline-none focus:border-amber-400 transition"
//                 />
//                 <label
//                   className="absolute left-0 top-4 text-slate-500 text-sm transition-all
//                 peer-placeholder-shown:top-4
//                 peer-placeholder-shown:text-base
//                 peer-focus:-top-3
//                 peer-focus:text-xs
//                 peer-focus:text-amber-400"
//                 >
//                   {t("form.phone")}
//                 </label>
//               </div>

//               {/* Message */}
//               <div className="relative group">
//                 <textarea
//                   rows={4}
//                   required
//                   placeholder=" "
//                   className="peer w-full bg-transparent border-b border-slate-700 py-4 resize-none outline-none focus:border-amber-400 transition"
//                 />
//                 <label
//                   className="absolute left-0 top-4 text-slate-500 text-sm transition-all
//                 peer-placeholder-shown:top-4
//                 peer-placeholder-shown:text-base
//                 peer-focus:-top-3
//                 peer-focus:text-xs
//                 peer-focus:text-amber-400"
//                 >
//                   {t("form.caseDescription")}
//                 </label>
//               </div>

//               {/* Consent */}
//               <div className="flex items-start gap-3 text-sm text-slate-400">
//                 <input type="checkbox" required className="mt-1" />
//                 <p>{t("consent")}</p>
//               </div>

//               {/* Button */}
//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-10 py-4 rounded-full text-sm tracking-widest uppercase transition"
//               >
//                 {t("form.send")}
//                 <ArrowRight size={16} />
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* OFFICE CARDS */}
//           <div className="lg:col-span-5 space-y-6">
//             {Object.entries(locations).map(([key, loc]) => (
//               <motion.div
//                 key={key}
//                 onClick={() => setActiveKey(key)}
//                 whileHover={{ y: -5 }}
//                 className={`cursor-pointer p-8 rounded-xl backdrop-blur-lg border transition
//                 ${
//                   activeKey === key
//                     ? "bg-white/10 border-white/20"
//                     : "bg-white/5 border-white/10 hover:bg-white/10"
//                 }`}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-2 rounded-full bg-amber-400/20">
//                     <MapPin size={16} className="text-amber-300" />
//                   </div>

//                   <h3 className="text-lg font-serif">{loc.title}</h3>
//                 </div>

//                 <p className="text-slate-400 text-sm mb-4">{loc.address}</p>

//                 <div className="text-xs text-slate-500 space-y-1">
//                   <p>T: {loc.tel}</p>
//                   <p>F: {loc.fax}</p>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Contact Info */}
//             <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
//               <div className="flex items-center gap-4 mb-3">
//                 <Mail size={18} className="text-amber-400" />
//                 <span>info@wjk-recht.de</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Clock size={18} className="text-amber-400" />
//                 <span className="text-sm text-slate-400">
//                   {t("office.hours")}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MAP */}
//         <div className="mt-28 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
//           <AnimatePresence mode="wait">
//             <motion.iframe
//               key={activeKey}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6 }}
//               title="map"
//               width="100%"
//               height="520"
//               src={`https://maps.google.com/maps?q=${encodeURIComponent(
//                 locations[activeKey].address,
//               )}&z=15&output=embed`}
//             />
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

//=============================================================
//=============================================================
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Clock, ArrowRight, Phone, Printer } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation("contact");

  const locations = {
    koeln: {
      address: "Im Sionstal 3-5, 50678 Köln",
      title: t("office.titleCologne"),
      tel: "0221 28275740",
      fax: "0221 28275741",
    },
    duesseldorf: {
      address: "Friedrichstr. 7, 40217 Düsseldorf",
      title: t("office.titleDuesseldorf"),
      tel: "0211 15937650",
      fax: "0211 15937651",
    },
  };

  const [activeKey, setActiveKey] = useState("koeln");

  return (
    <section
      id="contact"
      className="bg-[#0f172a] py-24 md:py-48 text-slate-200 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="h-px w-16 bg-[#d4af37]/40" />
              <span className="text-[#d4af37] uppercase tracking-[0.5em] text-[10px] font-bold">
                {t("title")}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter leading-[0.9]">
              {t("subtitle")}
            </h2>
          </motion.div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-slate-400 text-lg font-light leading-relaxed italic border-l border-white/10 pl-8">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          {/* LUXURY FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <form className="space-y-12">
              <div className="grid md:grid-cols-3 gap-12">
                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#d4af37] transition-colors duration-500"
                  />
                  <label className="absolute left-0 top-4 text-slate-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[#d4af37]">
                    {t("form.name")}
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#d4af37] transition-colors duration-500"
                  />
                  <label className="absolute left-0 top-4 text-slate-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[#d4af37]">
                    {t("form.email")}
                  </label>
                </div>

                {/* Phone Number */}
                <div className="relative group">
                  <input
                    type="tel"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#d4af37] transition-colors duration-500"
                  />
                  <label className="absolute left-0 top-4 text-slate-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[#d4af37]">
                    {t("form.phone") || "Phone"}
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  rows={4}
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-4 resize-none outline-none focus:border-[#d4af37] transition-colors duration-500"
                />
                <label className="absolute left-0 top-4 text-slate-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[#d4af37]">
                  {t("form.caseDescription")}
                </label>
              </div>

              <div className="flex items-start gap-4 text-[11px] text-slate-500 leading-relaxed group cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-[#d4af37]"
                  id="consent"
                />
                <label
                  htmlFor="consent"
                  className="group-hover:text-slate-300 transition-colors"
                >
                  {t("consent")}
                </label>
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-12 pt-4"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white group-hover:text-[#d4af37] transition-colors">
                  {t("form.send")}
                </span>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[#d4af37] transition-all">
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </button>
            </form>
          </motion.div>

          {/* OFFICE LOCATIONS */}
          <div className="lg:col-span-5 space-y-8">
            {Object.entries(locations).map(([key, loc]) => (
              <motion.div
                key={key}
                onClick={() => setActiveKey(key)}
                className={`group cursor-pointer p-10 border transition-all duration-700 relative overflow-hidden
                ${
                  activeKey === key
                    ? "bg-white/[0.03] border-[#d4af37]/30"
                    : "bg-transparent border-white/5 hover:border-white/20"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-[#d4af37] transition-transform duration-500 ${activeKey === key ? "translate-y-0" : "-translate-y-full"}`}
                />

                <div className="flex justify-between items-start mb-6">
                  <h3
                    className={`text-2xl font-serif italic transition-colors ${activeKey === key ? "text-[#d4af37]" : "text-white"}`}
                  >
                    {loc.title}
                  </h3>
                  <MapPin
                    size={20}
                    className={
                      activeKey === key ? "text-[#d4af37]" : "text-slate-600"
                    }
                  />
                </div>

                <p className="text-slate-400 font-light mb-8 text-sm leading-relaxed max-w-[200px]">
                  {loc.address}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-4">
                  <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-slate-500">
                    <Phone size={12} className="text-[#d4af37]/50" />
                    {loc.tel}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase text-slate-500">
                    <Printer size={12} className="text-[#d4af37]/50" />
                    {loc.fax}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="p-10 bg-[#1e293b]/50 border border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-6 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                  <Mail size={16} className="text-[#d4af37]" />
                </div>
                <span className="text-sm tracking-widest font-light">
                  info@wjk-recht.de
                </span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                  <Clock size={16} className="text-[#d4af37]" />
                </div>
                <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                  {t("office.hours")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE MAP (Always Colored) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 border border-white/10 p-2 shadow-2xl bg-[#1e293b]"
        >
          <AnimatePresence mode="wait">
            <motion.iframe
              key={activeKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-[400px] md:h-[600px]"
              title="Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(locations[activeKey].address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

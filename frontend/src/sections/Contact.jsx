import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, ArrowRight, Phone, Printer } from "lucide-react";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isMessageTooShort =
    formData.message.trim().length > 0 && formData.message.trim().length < 6;

  // Validation: Requires Name, valid Email, Phone, Message >= 6, and Consent
  const isValid =
    formData.name.trim().length > 1 &&
    emailRegex.test(formData.email) &&
    formData.phone.trim().length > 5 &&
    formData.message.trim().length >= 6 &&
    consent;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Server error.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-48 text-slate-200 overflow-hidden bg-gradient-to-b from-[#1A1E2E] via-[#262B3E] to-[#1A1E2E]"
    >
      <style>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-text-fill-color: white !important;
          -webkit-box-shadow: 0 0 0px 1000px #262B3E inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="h-px w-16 bg-[#BA8C61]/40" />
              <span className="text-[#BA8C61] uppercase tracking-[0.5em] text-[14px] font-bold">
                {t("title")}
              </span>
            </div>
            <h2 className="text-5xl md:text-5xl font-serif italic text-white tracking-tighter leading-[0.9]">
              {t("subtitle")}
            </h2>
          </motion.div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-white text-xl font-light leading-relaxed italic border-l border-white/10 pl-8">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              className="space-y-12"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              {/* INPUTS */}
              <div className="grid md:grid-cols-3 gap-12">
                {["name", "email", "phone"].map((field) => (
                  <div key={field} className="relative group">
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#BA8C61] text-white transition-all duration-500"
                    />
                    <label className="absolute left-0 top-4 text-white text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[#BA8C61] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#BA8C61]">
                      {t(`form.${field}`)}
                    </label>
                  </div>
                ))}
              </div>

              {/* TEXTAREA - STABLE LABEL */}
              <div className="relative pt-8">
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-white/[0.03] border border-white/10 p-6 rounded-sm resize-none outline-none focus:border-[#BA8C61] focus:bg-white/[0.05] text-white transition-all duration-500 shadow-inner"
                />
                <label
                  className={`absolute transition-all duration-300 pointer-events-none uppercase tracking-widest
                  ${
                    formData.message.length > 0
                      ? "-top-2 left-0 text-[#BA8C61] text-[11px]"
                      : "top-14 left-6 text-white/80 text-[14px] peer-focus:-top-2 peer-focus:left-0 peer-focus:text-[#BA8C61] peer-focus:text-[11px]"
                  }`}
                >
                  {t("form.caseDescription")}
                </label>
                {isMessageTooShort && (
                  <p className="text-[#BA8C61] text-[10px] mt-2 tracking-widest uppercase font-bold">
                    * {t("form.minCharacters")}
                  </p>
                )}
              </div>

              {/* CONSENT - STATIC LABEL */}
              <div className="flex items-start gap-4 text-[17px] text-white leading-relaxed cursor-default">
                <div className="flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="accent-[#BA8C61] w-4 h-4 cursor-pointer block"
                  />
                </div>
                <label
                  htmlFor="consent"
                  className="cursor-pointer text-white/90 select-none transition-colors duration-300 hover:text-white"
                >
                  {t("consent")}
                </label>
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                disabled={!isValid || loading}
                className={`group relative text-white inline-flex items-center gap-12 pt-4 transition-all ${
                  !isValid || loading
                    ? "opacity-30 cursor-not-allowed grayscale"
                    : "hover:gap-16 opacity-100"
                }`}
              >
                <span className="text-[13px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#BA8C61] transition-colors">
                  {loading
                    ? "Sending..."
                    : !isValid
                      ? t("form.allFieldsRequired")
                      : t("form.send")}
                </span>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white group-hover:border-[#BA8C61] transition-all">
                  <ArrowRight
                    size={22}
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
                    ? "bg-white/[0.05] border-[#BA8C61]/40"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-[#BA8C61] transition-transform duration-500 ${
                    activeKey === key ? "translate-y-0" : "-translate-y-full"
                  }`}
                />
                <div className="flex justify-between items-start mb-6">
                  <h3
                    className={`text-2xl font-serif italic transition-colors ${
                      activeKey === key ? "text-[#BA8C61]" : "text-white"
                    }`}
                  >
                    {loc.title}
                  </h3>
                  <MapPin
                    size={20}
                    className={
                      activeKey === key ? "text-[#BA8C61]" : "text-white/50"
                    }
                  />
                </div>
                <p className="text-white font-light mb-8 text-lg leading-relaxed max-w-[200px]">
                  {loc.address}
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-4">
                  <div className="flex items-center gap-3 text-[13px] lg:text-[15px] tracking-widest uppercase text-white whitespace-nowrap">
                    <Phone size={18} className="text-[#BA8C61]/80 shrink-0" />{" "}
                    {loc.tel}
                  </div>
                  <div className="flex items-center gap-3 text-[13px] lg:text-[15px] tracking-widest uppercase text-white whitespace-nowrap">
                    <Printer size={18} className="text-[#BA8C61]/80 shrink-0" />{" "}
                    {loc.fax}
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="p-10 bg-white/[0.02] border border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-6 group overflow-hidden">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#BA8C61] transition-colors shrink-0">
                  <Mail size={18} className="text-[#BA8C61]" />
                </div>
                <span className="text-sm md:text-[18px] tracking-widest font-light text-white truncate">
                  info@kanzlei-dr-jura-kraemer.de
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 border border-white/10 p-2 shadow-2xl bg-white/[0.02]"
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
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                locations[activeKey].address,
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

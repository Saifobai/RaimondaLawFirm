// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import {
//   X,
//   ShieldCheck,
//   Scale,
//   ChevronRight,
//   ArrowLeft,
//   Check,
//   Lock,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function Schuldnerberatung() {
//   const { t } = useTranslation("schuldnerberatung");
//   const navigate = useNavigate();
//   const [step, setStep] = useState(0);
//   const totalSteps = 6;

//   const [formData, setFormData] = useState({
//     debt: "",
//     claims: "",
//     income: "",
//     marital: "",
//     jobField: "",
//     job: "",
//     unemployed: false,
//     selfEmployed: false,
//     garnished: false,
//     vehicle: false,
//     property: false,
//     knowCreditors: false,
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     notes: "",
//     privacy: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
//   const back = () => setStep((s) => Math.max(s - 1, 0));

//   useEffect(() => {
//     gsap.fromTo(
//       ".animate-item",
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
//     );
//   }, [step]);

//   const submitForm = async () => {
//     try {
//       const res = await fetch(`${import.meta.env.VITE_API_URL}/contact/send`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (data.success) {
//         alert("Message sent successfully");
//       } else {
//         alert("Failed to send message");
//       }
//     } catch (error) {
//       console.error("Submit error:", error);
//       alert("Server error");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#8B806D] via-[#515565] to-[#2B3041] text-slate-100 flex flex-col lg:flex-row">
//       {/* SIDEBAR */}
//       <div className="lg:w-1/3 p-8 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#262B3D]">
//         <div>
//           <h1 className="text-3xl lg:text-5xl font-serif italic mb-4 text-white">
//             {t("title")}
//           </h1>
//           <p className="text-white/50 text-base lg:text-lg">{t("subtitle")}</p>
//         </div>
//         <div className="hidden lg:flex flex-col space-y-10 mt-10">
//           <Feature
//             icon={<ShieldCheck size={24} />}
//             title={t("features.privacyTitle")}
//             desc={t("features.privacyDesc")}
//           />
//           <Feature
//             icon={<Scale size={24} />}
//             title={t("features.legalTitle")}
//             desc={t("features.legalDesc")}
//           />
//           <Feature
//             icon={<Lock size={24} />}
//             title={t("features.confidentialTitle")}
//             desc={t("features.confidentialDesc")}
//           />
//         </div>
//       </div>

//       {/* FORM AREA */}
//       <div className="flex-1 flex flex-col justify-center p-6 lg:p-24 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-6 right-6 lg:top-12 lg:right-12 text-white/30 hover:text-white transition"
//         >
//           <X size={28} />
//         </button>

//         <div className="max-w-xl w-full mx-auto">
//           <div className="mb-10 lg:mb-16">
//             <div className="text-xs uppercase tracking-widest text-[#BA8C61] mb-4 font-bold">
//               {step + 1} / {totalSteps}
//             </div>
//             <div className="h-[2px] bg-white/10">
//               <motion.div
//                 className="h-full bg-[#BA8C61]"
//                 animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={step}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-2xl lg:text-4xl font-serif italic mb-8 lg:mb-10 text-white">
//                 {
//                   [
//                     t("situation"),
//                     t("familyStatus"),
//                     t("jobBackground"),
//                     t("statements"),
//                     t("contact"),
//                     t("notes"),
//                   ][step]
//                 }
//               </h2>

//               <div className="space-y-6 lg:space-y-8 animate-item">
//                 {step === 0 && (
//                   <>
//                     <Input
//                       label={t("debt")}
//                       name="debt"
//                       value={formData.debt}
//                       onChange={handleChange}
//                     />
//                     <Input
//                       label={t("claims")}
//                       name="claims"
//                       value={formData.claims}
//                       onChange={handleChange}
//                     />
//                     <Input
//                       label={t("income")}
//                       name="income"
//                       value={formData.income}
//                       onChange={handleChange}
//                     />
//                   </>
//                 )}
//                 {step === 1 && (
//                   <Select
//                     name="marital"
//                     label={t("familyStatus")}
//                     value={formData.marital}
//                     onChange={handleChange}
//                     options={[
//                       { val: "single", lab: t("single") },
//                       { val: "married", lab: t("married") },
//                       { val: "relationship", lab: t("relationship") },
//                       { val: "separated", lab: t("separated") },
//                       { val: "divorced", lab: t("divorced") },
//                       { val: "widowed", lab: t("widowed") },
//                     ]}
//                   />
//                 )}
//                 {step === 2 && (
//                   <>
//                     <Input
//                       label={t("jobField")}
//                       name="jobField"
//                       value={formData.jobField}
//                       onChange={handleChange}
//                     />
//                     <Input
//                       label={t("job")}
//                       name="job"
//                       value={formData.job}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="unemployed"
//                       label={t("unemployed")}
//                       checked={formData.unemployed}
//                       onChange={handleChange}
//                     />
//                   </>
//                 )}
//                 {step === 3 && (
//                   <div className="grid gap-4 lg:gap-6">
//                     <Checkbox
//                       name="selfEmployed"
//                       label={t("selfEmployed")}
//                       checked={formData.selfEmployed}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="garnished"
//                       label={t("garnished")}
//                       checked={formData.garnished}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="vehicle"
//                       label={t("vehicle")}
//                       checked={formData.vehicle}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="property"
//                       label={t("property")}
//                       checked={formData.property}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="knowCreditors"
//                       label={t("knowCreditors")}
//                       checked={formData.knowCreditors}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 )}
//                 {step === 4 && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <Input
//                       label={t("firstname")}
//                       name="firstname"
//                       value={formData.firstname}
//                       onChange={handleChange}
//                     />
//                     <Input
//                       label={t("lastname")}
//                       name="lastname"
//                       value={formData.lastname}
//                       onChange={handleChange}
//                     />
//                     <div className="md:col-span-2">
//                       <Input
//                         label={t("email")}
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="md:col-span-2">
//                       <Input
//                         label={t("phone")}
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 )}
//                 {step === 5 && (
//                   <>
//                     <textarea
//                       name="notes"
//                       value={formData.notes}
//                       onChange={handleChange}
//                       placeholder="..."
//                       className="w-full bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#BA8C61] transition-colors"
//                     />
//                     <Checkbox
//                       name="privacy"
//                       label={t("privacy")}
//                       checked={formData.privacy}
//                       onChange={handleChange}
//                     />
//                   </>
//                 )}
//               </div>

//               <div className="flex justify-between mt-12 lg:mt-16">
//                 <button
//                   onClick={back}
//                   className={`${step === 0 ? "invisible" : ""} flex items-center gap-2 text-white/40 hover:text-white transition`}
//                 >
//                   <ArrowLeft size={16} /> {t("back")}
//                 </button>
//                 <button
//                   onClick={step === 5 ? submitForm : next}
//                   className="bg-white text-[#262B3E] px-8 lg:px-10 py-3 font-bold hover:bg-[#BA8C61] hover:text-white flex items-center gap-2 transition-all"
//                 >
//                   {step === 5 ? t("submit") : t("next")}{" "}
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Input = ({ label, ...props }) => (
//   <div>
//     <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-2">
//       {label}
//     </label>
//     <input
//       {...props}
//       className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#BA8C61] transition-colors"
//     />
//   </div>
// );

// const Checkbox = ({ name, label, checked, onChange }) => (
//   <label className="flex items-center gap-3 cursor-pointer group">
//     <div
//       className={`w-6 h-6 border flex items-center justify-center transition-colors ${checked ? "bg-[#BA8C61] border-[#BA8C61]" : "border-white/20 group-hover:border-white/40"}`}
//     >
//       {checked && <Check size={14} className="text-[#262B3E]" />}
//     </div>
//     <input
//       type="checkbox"
//       name={name}
//       checked={checked}
//       onChange={onChange}
//       className="hidden"
//     />
//     <span className="text-sm text-white/60">{label}</span>
//   </label>
// );

// const Select = ({ name, label, value, onChange, options }) => (
//   <div className="space-y-4">
//     <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 block">
//       {label}
//     </label>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {options.map((opt) => {
//         const isSelected = value === opt.val;
//         return (
//           <motion.button
//             key={opt.val}
//             type="button"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => onChange({ target: { name, value: opt.val } })}
//             className={`relative p-5 text-left border transition-all duration-300 ${isSelected ? "bg-[#BA8C61]/10 border-[#BA8C61]" : "bg-white/[0.02] border-white/5 hover:border-white/10"}`}
//           >
//             <span
//               className={`text-sm font-medium ${isSelected ? "text-white" : "text-white/40"}`}
//             >
//               {opt.lab}
//             </span>
//             {isSelected && (
//               <motion.div
//                 layoutId="selection-bubble"
//                 className="absolute top-3 right-3 text-[#BA8C61]"
//               >
//                 <Check size={16} />
//               </motion.div>
//             )}
//           </motion.button>
//         );
//       })}
//     </div>
//   </div>
// );

// const Feature = ({ icon, title, desc }) => (
//   <div className="flex items-start gap-5">
//     <div className="text-[#BA8C61] mt-1">{icon}</div>
//     <div>
//       <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-white">
//         {title}
//       </h4>
//       <p className="text-white/40 text-[11px] mt-1 leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

//=================================================================
//=================================================================
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  X,
  ShieldCheck,
  Scale,
  ChevronRight,
  ArrowLeft,
  Check,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Schuldnerberatung() {
  const { t } = useTranslation("schuldnerberatung");
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const totalSteps = 6;

  const [formData, setFormData] = useState({
    debt: "",
    claims: "",
    income: "",
    marital: "",
    jobField: "",
    job: "",
    unemployed: false,
    selfEmployed: false,
    garnished: false,
    vehicle: false,
    property: false,
    knowCreditors: false,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    notes: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  useEffect(() => {
    gsap.fromTo(
      ".animate-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
    );
  }, [step]);

  const submitForm = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      data.success
        ? alert("Message sent successfully")
        : alert("Failed to send message");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B806D] via-[#515565] to-[#2B3041] text-slate-100 flex flex-col lg:flex-row">
      {/* SIDEBAR - Fixed mobile width */}
      <div className="w-full lg:w-1/3 p-8 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#262B3D]">
        <div>
          <h1 className="text-3xl lg:text-5xl font-serif italic mb-4 text-white">
            {t("title")}
          </h1>
          <p className="text-white/50 text-base lg:text-lg">{t("subtitle")}</p>
        </div>
        <div className="hidden lg:flex flex-col space-y-10 mt-10">
          <Feature
            icon={<ShieldCheck size={24} />}
            title={t("features.privacyTitle")}
            desc={t("features.privacyDesc")}
          />
          <Feature
            icon={<Scale size={24} />}
            title={t("features.legalTitle")}
            desc={t("features.legalDesc")}
          />
          <Feature
            icon={<Lock size={24} />}
            title={t("features.confidentialTitle")}
            desc={t("features.confidentialDesc")}
          />
        </div>
      </div>

      {/* FORM AREA - Added scrollable container */}
      <div className="flex-1 flex flex-col justify-start lg:justify-center p-6 lg:p-24 relative overflow-y-auto">
        <button
          onClick={() => navigate(-1)}
          className="fixed top-6 right-6 lg:absolute lg:top-12 lg:right-12 text-white/30 hover:text-white transition z-50"
        >
          <X size={28} />
        </button>

        <div className="max-w-xl w-full mx-auto mt-10 lg:mt-0">
          <div className="mb-10 lg:mb-16">
            <div className="text-xs uppercase tracking-widest text-[#BA8C61] mb-4 font-bold">
              {step + 1} / {totalSteps}
            </div>
            <div className="h-[2px] bg-white/10">
              <motion.div
                className="h-full bg-[#BA8C61]"
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl lg:text-4xl font-serif italic mb-8 lg:mb-10 text-white">
                {
                  [
                    t("situation"),
                    t("familyStatus"),
                    t("jobBackground"),
                    t("statements"),
                    t("contact"),
                    t("notes"),
                  ][step]
                }
              </h2>

              <div className="space-y-6 lg:space-y-8 animate-item">
                {step === 0 && (
                  <>
                    <Input
                      label={t("debt")}
                      name="debt"
                      value={formData.debt}
                      onChange={handleChange}
                    />
                    <Input
                      label={t("claims")}
                      name="claims"
                      value={formData.claims}
                      onChange={handleChange}
                    />
                    <Input
                      label={t("income")}
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                    />
                  </>
                )}
                {step === 1 && (
                  <Select
                    name="marital"
                    label={t("familyStatus")}
                    value={formData.marital}
                    onChange={handleChange}
                    options={[
                      { val: "single", lab: t("single") },
                      { val: "married", lab: t("married") },
                      { val: "relationship", lab: t("relationship") },
                      { val: "separated", lab: t("separated") },
                      { val: "divorced", lab: t("divorced") },
                      { val: "widowed", lab: t("widowed") },
                    ]}
                  />
                )}
                {step === 2 && (
                  <>
                    <Input
                      label={t("jobField")}
                      name="jobField"
                      value={formData.jobField}
                      onChange={handleChange}
                    />
                    <Input
                      label={t("job")}
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                    />
                    <Checkbox
                      name="unemployed"
                      label={t("unemployed")}
                      checked={formData.unemployed}
                      onChange={handleChange}
                    />
                  </>
                )}
                {step === 3 && (
                  <div className="grid gap-4 lg:gap-6">
                    <Checkbox
                      name="selfEmployed"
                      label={t("selfEmployed")}
                      checked={formData.selfEmployed}
                      onChange={handleChange}
                    />
                    <Checkbox
                      name="garnished"
                      label={t("garnished")}
                      checked={formData.garnished}
                      onChange={handleChange}
                    />
                    <Checkbox
                      name="vehicle"
                      label={t("vehicle")}
                      checked={formData.vehicle}
                      onChange={handleChange}
                    />
                    <Checkbox
                      name="property"
                      label={t("property")}
                      checked={formData.property}
                      onChange={handleChange}
                    />
                    <Checkbox
                      name="knowCreditors"
                      label={t("knowCreditors")}
                      checked={formData.knowCreditors}
                      onChange={handleChange}
                    />
                  </div>
                )}
                {step === 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t("firstname")}
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                    <Input
                      label={t("lastname")}
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                    <div className="md:col-span-2">
                      <Input
                        label={t("email")}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        label={t("phone")}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                {step === 5 && (
                  <>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="..."
                      className="w-full bg-transparent border-b border-white/20 py-4 text-lg outline-none focus:border-[#BA8C61] transition-colors"
                    />
                    <Checkbox
                      name="privacy"
                      label={t("privacy")}
                      checked={formData.privacy}
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>

              <div className="flex justify-between mt-12 lg:mt-16 pb-12 lg:pb-0">
                <button
                  onClick={back}
                  className={`${step === 0 ? "invisible" : ""} flex items-center gap-2 text-white/40 hover:text-white transition`}
                >
                  <ArrowLeft size={16} /> {t("back")}
                </button>
                <button
                  onClick={step === 5 ? submitForm : next}
                  className="bg-white text-[#262B3E] px-8 lg:px-10 py-3 font-bold hover:bg-[#BA8C61] hover:text-white flex items-center gap-2 transition-all"
                >
                  {step === 5 ? t("submit") : t("next")}{" "}
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#BA8C61] transition-colors"
    />
  </div>
);

const Checkbox = ({ name, label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      className={`w-6 h-6 border flex items-center justify-center transition-colors ${checked ? "bg-[#BA8C61] border-[#BA8C61]" : "border-white/20 group-hover:border-white/40"}`}
    >
      {checked && <Check size={14} className="text-[#262B3E]" />}
    </div>
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="hidden"
    />
    <span className="text-sm text-white/60">{label}</span>
  </label>
);

const Select = ({ name, label, value, onChange, options }) => (
  <div className="space-y-4">
    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 block">
      {label}
    </label>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((opt) => {
        const isSelected = value === opt.val;
        return (
          <motion.button
            key={opt.val}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange({ target: { name, value: opt.val } })}
            className={`relative p-5 text-left border transition-all duration-300 ${isSelected ? "bg-[#BA8C61]/10 border-[#BA8C61]" : "bg-white/[0.02] border-white/5 hover:border-white/10"}`}
          >
            <span
              className={`text-sm font-medium ${isSelected ? "text-white" : "text-white/40"}`}
            >
              {opt.lab}
            </span>
            {isSelected && (
              <motion.div
                layoutId="selection-bubble"
                className="absolute top-3 right-3 text-[#BA8C61]"
              >
                <Check size={16} />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5">
    <div className="text-[#BA8C61] mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-white">
        {title}
      </h4>
      <p className="text-white/40 text-[11px] mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

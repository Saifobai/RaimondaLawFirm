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

//   const submitForm = () => {
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 flex">
//       {/* SIDEBAR */}

//       <div className="hidden lg:flex w-1/3 p-20 flex-col justify-between border-r border-slate-800 bg-slate-900">
//         <div>
//           <h1 className="text-5xl font-serif italic mb-4 text-white">
//             {t("title")}
//           </h1>

//           <p className="text-slate-400 text-lg">{t("subtitle")}</p>
//         </div>

//         <div className="space-y-10">
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

//       <div className="flex-1 flex flex-col justify-center p-8 lg:p-24 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-12 right-12 text-slate-500 hover:text-white transition"
//         >
//           <X size={30} />
//         </button>

//         <div className="max-w-xl w-full">
//           {/* PROGRESS */}

//           <div className="mb-16">
//             <div className="text-xs uppercase tracking-widest text-amber-500 mb-4">
//               {step + 1} / {totalSteps}
//             </div>

//             <div className="h-[2px] bg-slate-800">
//               <motion.div
//                 className="h-full bg-amber-500"
//                 animate={{
//                   width: `${((step + 1) / totalSteps) * 100}%`,
//                 }}
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
//               <h2 className="text-4xl font-serif italic mb-10">
//                 {step === 0 && t("situation")}
//                 {step === 1 && t("familyStatus")}
//                 {step === 2 && t("jobBackground")}
//                 {step === 3 && t("statements")}
//                 {step === 4 && t("contact")}
//                 {step === 5 && t("notes")}
//               </h2>

//               <div className="space-y-8 animate-item">
//                 {/* STEP 1 */}

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

//                 {/* STEP 2 */}

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

//                 {/* STEP 3 */}

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

//                 {/* STEP 4 */}

//                 {step === 3 && (
//                   <div className="grid gap-6">
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

//                 {/* STEP 5 */}

//                 {step === 4 && (
//                   <div className="grid grid-cols-2 gap-6">
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

//                     <div className="col-span-2">
//                       <Input
//                         label={t("email")}
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <div className="col-span-2">
//                       <Input
//                         label={t("phone")}
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 6 */}

//                 {step === 5 && (
//                   <>
//                     <textarea
//                       name="notes"
//                       value={formData.notes}
//                       onChange={handleChange}
//                       placeholder="..."
//                       className="w-full bg-transparent border-b border-slate-700 py-4 text-lg outline-none focus:border-amber-500"
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

//               {/* BUTTONS */}

//               <div className="flex justify-between mt-16">
//                 <button
//                   onClick={back}
//                   className={`${step === 0 ? "invisible" : ""} flex items-center gap-2 text-slate-400 hover:text-white`}
//                 >
//                   <ArrowLeft size={16} /> {t("back")}
//                 </button>

//                 <button
//                   onClick={step === 5 ? submitForm : next}
//                   className="bg-white text-slate-900 px-10 py-3 font-bold hover:bg-amber-500 flex items-center gap-2"
//                 >
//                   {step === 5 ? t("submit") : t("next")}
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
//     <label className="text-xs uppercase tracking-widest text-slate-500 block mb-2">
//       {label}
//     </label>

//     <input
//       {...props}
//       className="w-full bg-transparent border-b border-slate-700 py-3 outline-none focus:border-amber-500"
//     />
//   </div>
// );

// const Checkbox = ({ name, label, checked, onChange }) => (
//   <label className="flex items-center gap-3 cursor-pointer">
//     <div
//       className={`w-6 h-6 border flex items-center justify-center ${checked ? "bg-amber-500 border-amber-500" : "border-slate-700"}`}
//     >
//       {checked && <Check size={14} className="text-slate-900" />}
//     </div>

//     <input
//       type="checkbox"
//       name={name}
//       checked={checked}
//       onChange={onChange}
//       className="hidden"
//     />

//     <span className="text-sm text-slate-400">{label}</span>
//   </label>
// );

// const Select = ({ name, label, value, onChange, options }) => (
//   <div>
//     <label className="text-xs uppercase tracking-widest text-slate-500 block mb-2">
//       {label}
//     </label>

//     <select
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full bg-slate-900 border border-slate-800 p-4 text-lg outline-none focus:border-amber-500"
//     >
//       <option value="">Select</option>

//       {options.map((opt) => (
//         <option key={opt.val} value={opt.val}>
//           {opt.lab}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// const Feature = ({ icon, title, desc }) => (
//   <div className="flex items-start gap-5">
//     <div className="text-amber-500 mt-1">{icon}</div>

//     <div>
//       <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-200">
//         {title}
//       </h4>

//       <p className="text-slate-500 text-xs mt-1">{desc}</p>
//     </div>
//   </div>
// );

//=========================================================
//=========================================================
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

  const submitForm = () => {
    console.log("Form Submitted:", formData);
    // Add your actual submission logic here
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      {/* SIDEBAR */}
      <div className="lg:w-1/3 p-8 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-900">
        <div>
          <h1 className="text-3xl lg:text-5xl font-serif italic mb-4 text-white">
            {t("title")}
          </h1>
          <p className="text-slate-400 text-base lg:text-lg">{t("subtitle")}</p>
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

      {/* FORM AREA */}
      <div className="flex-1 flex flex-col justify-center p-6 lg:p-24 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 lg:top-12 lg:right-12 text-slate-500 hover:text-white transition"
        >
          <X size={28} />
        </button>

        <div className="max-w-xl w-full mx-auto">
          <div className="mb-10 lg:mb-16">
            <div className="text-xs uppercase tracking-widest text-amber-500 mb-4">
              {step + 1} / {totalSteps}
            </div>
            <div className="h-[2px] bg-slate-800">
              <motion.div
                className="h-full bg-amber-500"
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
              <h2 className="text-2xl lg:text-4xl font-serif italic mb-8 lg:mb-10">
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
                      className="w-full bg-transparent border-b border-slate-700 py-4 text-lg outline-none focus:border-amber-500"
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

              <div className="flex justify-between mt-12 lg:mt-16">
                <button
                  onClick={back}
                  className={`${step === 0 ? "invisible" : ""} flex items-center gap-2 text-slate-400 hover:text-white transition`}
                >
                  <ArrowLeft size={16} /> {t("back")}
                </button>
                <button
                  onClick={step === 5 ? submitForm : next}
                  className="bg-white text-slate-900 px-8 lg:px-10 py-3 font-bold hover:bg-amber-500 flex items-center gap-2 transition-all"
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
    <label className="text-xs uppercase tracking-widest text-slate-500 block mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-slate-700 py-3 outline-none focus:border-amber-500"
    />
  </div>
);

const Checkbox = ({ name, label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div
      className={`w-6 h-6 border flex items-center justify-center ${checked ? "bg-amber-500 border-amber-500" : "border-slate-700"}`}
    >
      {checked && <Check size={14} className="text-slate-900" />}
    </div>
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="hidden"
    />
    <span className="text-sm text-slate-400">{label}</span>
  </label>
);

const Select = ({ name, label, value, onChange, options }) => {
  return (
    <div className="space-y-4">
      <label className="text-xs uppercase tracking-widest text-slate-500 block">
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
              className={`relative p-5 text-left border transition-all duration-300 ${
                isSelected
                  ? "bg-amber-500/10 border-amber-500"
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <span
                className={`text-sm font-medium ${isSelected ? "text-white" : "text-slate-400"}`}
              >
                {opt.lab}
              </span>

              {/* Subtle checkmark indicator for that "winning" selection feel */}
              {isSelected && (
                <motion.div
                  layoutId="selection-bubble"
                  className="absolute top-3 right-3 text-amber-500"
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
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5">
    <div className="text-amber-500 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-200">
        {title}
      </h4>
      <p className="text-slate-500 text-xs mt-1">{desc}</p>
    </div>
  </div>
);

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import {
//   X,
//   ShieldCheck,
//   Scale,
//   FileText,
//   ChevronRight,
//   ArrowLeft,
//   Check,
//   Lock,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // This simulates your JSON file being imported
// const t = {
//   title: "Anfrage Schuldnerberatung",
//   subtitle: "Ausfüllen und kostenlose Erstberatung sichern",
//   situation: "Ihre Situation",
//   select: "Bitte auswählen",
//   single: "ledig",
//   married: "verheiratet",
//   relationship: "Lebensgemeinschaft",
//   separated: "getrennt lebend",
//   divorced: "geschieden",
//   widowed: "verwitwet",
//   jobField: "Berufsfeld",
//   job: "Aktueller Beruf",
//   unemployed: "Ich bin aktuell arbeitsuchend",
//   statements: "Welche Aussagen treffen auf Sie zu?",
//   selfEmployed: "Ich bin aktuell selbstständig tätig",
//   garnished: "Bei mir wird bereits gepfändet",
//   vehicle: "Ich besitze ein Fahrzeug",
//   property: "Ich besitze eine Immobilie",
//   knowCreditors: "Ich weiß, wer meine Gläubiger sind",
//   contact: "Ihre Kontaktdaten",
//   firstname: "Vorname",
//   lastname: "Nachname",
//   email: "E-Mail",
//   phone: "Mobilnummer",
//   notes: "Ihre Anmerkungen",
//   privacy: "Ich akzeptiere die Datenschutzbestimmungen.",
//   back: "Zurück",
//   next: "Weiter",
//   submit: "Jetzt absenden",
// };

// export default function Schuldnerberatung() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(0);
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

//   const totalSteps = 6;
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
//       { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" },
//     );
//   }, [step]);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-amber-500/30">
//       {/* SIDEBAR */}
//       <div className="hidden lg:flex w-1/3 p-20 flex-col justify-between border-r border-slate-800 bg-slate-900">
//         <div>
//           <h1 className="text-5xl font-serif italic mb-4 tracking-tighter text-white">
//             {t.title}
//           </h1>
//           <p className="text-slate-400 leading-relaxed font-light text-lg">
//             {t.subtitle}. Diskret, professionell und rechtssicher.
//           </p>
//         </div>
//         <div className="space-y-10">
//           <Feature
//             icon={<ShieldCheck size={24} />}
//             title="Datenschutz"
//             desc="Ihre Daten werden nach AES-256 verschlüsselt."
//           />
//           <Feature
//             icon={<Scale size={24} />}
//             title="Rechtssicherheit"
//             desc="Beratung gemäß aktueller Insolvenzordnung (InsO)."
//           />
//           <Feature
//             icon={<Lock size={24} />}
//             title="Vertraulichkeit"
//             desc="Streng vertrauliche Behandlung Ihrer finanziellen Situation."
//           />
//         </div>
//       </div>

//       {/* FORM AREA */}
//       <div className="flex-1 flex flex-col justify-center p-8 lg:p-24 relative">
//         <button
//           onClick={() => navigate(-1)}
//           className="absolute top-12 right-12 text-slate-500 hover:text-white transition-transform hover:rotate-90"
//         >
//           <X size={32} strokeWidth={1} />
//         </button>

//         <div className="max-w-xl w-full">
//           <div className="mb-20">
//             <div className="text-[10px] uppercase tracking-[0.2em] text-amber-500 mb-4 font-semibold italic">
//               Phase 0{step + 1} / 0{totalSteps}
//             </div>
//             <div className="h-[2px] w-full bg-slate-800">
//               <motion.div
//                 className="h-full bg-amber-500"
//                 animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
//                 transition={{ duration: 0.6 }}
//               />
//             </div>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={step}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <h2 className="text-4xl font-serif italic mb-12">
//                 {step === 0 && t.situation}
//                 {step === 1 && "Familienstand"}
//                 {step === 2 && "Beruflicher Hintergrund"}
//                 {step === 3 && "Zusatzangaben"}
//                 {step === 4 && t.contact}
//                 {step === 5 && t.notes}
//               </h2>

//               <div className="space-y-8 animate-item">
//                 {step === 0 && (
//                   <>
//                     <Input
//                       label="Geschätzte Gesamtschulden"
//                       name="debt"
//                       value={formData.debt}
//                       onChange={handleChange}
//                       placeholder="z.B. 25.000 €"
//                     />
//                     <Input
//                       label="Anzahl der Gläubiger"
//                       name="claims"
//                       value={formData.claims}
//                       onChange={handleChange}
//                       placeholder="z.B. 8"
//                     />
//                     <Input
//                       label="Netto-Einkommen (Monat)"
//                       name="income"
//                       value={formData.income}
//                       onChange={handleChange}
//                       placeholder="z.B. 1.800 €"
//                     />
//                   </>
//                 )}

//                 {step === 1 && (
//                   <Select
//                     name="marital"
//                     label="Wählen Sie Ihren Stand"
//                     value={formData.marital}
//                     onChange={handleChange}
//                     options={[
//                       { val: "single", lab: t.single },
//                       { val: "married", lab: t.married },
//                       { val: "relationship", lab: t.relationship },
//                       { val: "separated", lab: t.separated },
//                       { val: "divorced", lab: t.divorced },
//                       { val: "widowed", lab: t.widowed },
//                     ]}
//                   />
//                 )}

//                 {step === 2 && (
//                   <>
//                     <Input
//                       label={t.jobField}
//                       name="jobField"
//                       value={formData.jobField}
//                       onChange={handleChange}
//                       placeholder="z.B. Handwerk, Büro..."
//                     />
//                     <Input
//                       label={t.job}
//                       name="job"
//                       value={formData.job}
//                       onChange={handleChange}
//                       placeholder="z.B. Projektleiter"
//                     />
//                     <Checkbox
//                       name="unemployed"
//                       label={t.unemployed}
//                       checked={formData.unemployed}
//                       onChange={handleChange}
//                     />
//                   </>
//                 )}

//                 {step === 3 && (
//                   <div className="grid grid-cols-1 gap-6">
//                     <Checkbox
//                       name="selfEmployed"
//                       label={t.selfEmployed}
//                       checked={formData.selfEmployed}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="garnished"
//                       label={t.garnished}
//                       checked={formData.garnished}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="vehicle"
//                       label={t.vehicle}
//                       checked={formData.vehicle}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="property"
//                       label={t.property}
//                       checked={formData.property}
//                       onChange={handleChange}
//                     />
//                     <Checkbox
//                       name="knowCreditors"
//                       label={t.knowCreditors}
//                       checked={formData.knowCreditors}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 )}

//                 {step === 4 && (
//                   <div className="grid grid-cols-2 gap-x-6 gap-y-8">
//                     <div className="col-span-1">
//                       <Input
//                         label={t.firstname}
//                         name="firstname"
//                         value={formData.firstname}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-span-1">
//                       <Input
//                         label={t.lastname}
//                         name="lastname"
//                         value={formData.lastname}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-span-2">
//                       <Input
//                         label={t.email}
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-span-2">
//                       <Input
//                         label={t.phone}
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
//                       placeholder="Beschreiben Sie kurz Ihr Anliegen..."
//                       className="w-full bg-transparent border-b border-slate-700 py-4 text-lg outline-none focus:border-amber-500 placeholder:text-slate-600 transition-all"
//                       rows={4}
//                     />
//                     <Checkbox
//                       name="privacy"
//                       label={t.privacy}
//                       checked={formData.privacy}
//                       onChange={handleChange}
//                     />
//                   </>
//                 )}
//               </div>

//               <div className="flex justify-between items-center mt-20">
//                 <button
//                   onClick={back}
//                   className={`flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[11px] tracking-widest ${step === 0 ? "invisible" : ""}`}
//                 >
//                   <ArrowLeft size={16} /> {t.back}
//                 </button>
//                 <button
//                   onClick={step === 5 ? () => console.log(formData) : next}
//                   className="group bg-white text-slate-950 px-12 py-4 font-bold uppercase tracking-[0.2em] hover:bg-amber-500 transition-all flex items-center gap-4"
//                 >
//                   {step === 5 ? t.submit : t.next} <ChevronRight size={18} />
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
//   <div className="relative group">
//     <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3 block font-bold">
//       {label}
//     </label>
//     <input
//       {...props}
//       className="w-full bg-transparent border-b border-slate-700 py-3 outline-none focus:border-amber-500 transition-all text-xl placeholder:text-slate-800"
//     />
//   </div>
// );

// const Checkbox = ({ name, label, checked, onChange }) => (
//   <label className="flex items-center gap-4 cursor-pointer group">
//     <div
//       className={`w-6 h-6 border flex items-center justify-center transition-all ${checked ? "bg-amber-500 border-amber-500" : "border-slate-700"}`}
//     >
//       {checked && <Check size={14} className="text-slate-950" />}
//     </div>
//     <span className="text-[13px] tracking-wide text-slate-400 group-hover:text-slate-200 transition-colors uppercase">
//       {label}
//     </span>
//   </label>
// );

// const Select = ({ name, label, value, onChange, options }) => (
//   <div className="relative group">
//     <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3 block font-bold">
//       {label}
//     </label>
//     <select
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full bg-slate-900 border border-slate-800 p-4 text-lg outline-none focus:border-amber-500 text-slate-100 appearance-none"
//     >
//       <option value="">{t.select}</option>
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
//       <p className="text-slate-500 text-xs mt-1 leading-relaxed font-light">
//         {desc}
//       </p>
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

  const submitForm = () => {
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* SIDEBAR */}

      <div className="hidden lg:flex w-1/3 p-20 flex-col justify-between border-r border-slate-800 bg-slate-900">
        <div>
          <h1 className="text-5xl font-serif italic mb-4 text-white">
            {t("title")}
          </h1>

          <p className="text-slate-400 text-lg">{t("subtitle")}</p>
        </div>

        <div className="space-y-10">
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

      <div className="flex-1 flex flex-col justify-center p-8 lg:p-24 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 right-12 text-slate-500 hover:text-white transition"
        >
          <X size={30} />
        </button>

        <div className="max-w-xl w-full">
          {/* PROGRESS */}

          <div className="mb-16">
            <div className="text-xs uppercase tracking-widest text-amber-500 mb-4">
              {step + 1} / {totalSteps}
            </div>

            <div className="h-[2px] bg-slate-800">
              <motion.div
                className="h-full bg-amber-500"
                animate={{
                  width: `${((step + 1) / totalSteps) * 100}%`,
                }}
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
              <h2 className="text-4xl font-serif italic mb-10">
                {step === 0 && t("situation")}
                {step === 1 && t("familyStatus")}
                {step === 2 && t("jobBackground")}
                {step === 3 && t("statements")}
                {step === 4 && t("contact")}
                {step === 5 && t("notes")}
              </h2>

              <div className="space-y-8 animate-item">
                {/* STEP 1 */}

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

                {/* STEP 2 */}

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

                {/* STEP 3 */}

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

                {/* STEP 4 */}

                {step === 3 && (
                  <div className="grid gap-6">
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

                {/* STEP 5 */}

                {step === 4 && (
                  <div className="grid grid-cols-2 gap-6">
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

                    <div className="col-span-2">
                      <Input
                        label={t("email")}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-2">
                      <Input
                        label={t("phone")}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 6 */}

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

              {/* BUTTONS */}

              <div className="flex justify-between mt-16">
                <button
                  onClick={back}
                  className={`${step === 0 ? "invisible" : ""} flex items-center gap-2 text-slate-400 hover:text-white`}
                >
                  <ArrowLeft size={16} /> {t("back")}
                </button>

                <button
                  onClick={step === 5 ? submitForm : next}
                  className="bg-white text-slate-900 px-10 py-3 font-bold hover:bg-amber-500 flex items-center gap-2"
                >
                  {step === 5 ? t("submit") : t("next")}
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

const Select = ({ name, label, value, onChange, options }) => (
  <div>
    <label className="text-xs uppercase tracking-widest text-slate-500 block mb-2">
      {label}
    </label>

    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-slate-900 border border-slate-800 p-4 text-lg outline-none focus:border-amber-500"
    >
      <option value="">Select</option>

      {options.map((opt) => (
        <option key={opt.val} value={opt.val}>
          {opt.lab}
        </option>
      ))}
    </select>
  </div>
);

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

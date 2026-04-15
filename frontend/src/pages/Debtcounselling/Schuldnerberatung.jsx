import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  X,
  ShieldCheck,
  Scale,
  ChevronRight,
  ArrowLeft,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";

const initialFormState = {
  debt: "",
  claims: "",
  income: "",
  marital: "",
  children: "",
  jobField: "",
  job: "",
  unemployed: false,
  selfEmployed: false,
  garnished: false,
  garnishType: "",
  vehicle: false,
  vehicleDocLocation: "",
  property: false,
  knowCreditors: false,
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  notes: "",
  privacy: false,
};

export default function Schuldnerberatung() {
  const { t } = useTranslation("schuldnerberatung");
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const totalSteps = 7;
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 0) {
      if (!formData.debt) newErrors.debt = t("validation.required");
      if (!formData.claims) newErrors.claims = t("validation.required");
      if (!formData.income) newErrors.income = t("validation.required");
    }
    if (step === 1 && !formData.marital)
      newErrors.marital = t("validation.required");
    if (step === 2 && !formData.children)
      newErrors.children = t("validation.required");
    if (step === 3 && !formData.jobField)
      newErrors.jobField = t("validation.required");
    if (step === 5) {
      if (!formData.firstname) newErrors.firstname = t("validation.required");
      if (!formData.lastname) newErrors.lastname = t("validation.required");
      if (!formData.email) newErrors.email = t("validation.required");
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = t("validation.invalidEmail");
      if (!formData.phone) newErrors.phone = t("validation.required");
    }
    if (step === 6 && !formData.privacy)
      newErrors.privacy = t("validation.acceptPrivacy");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () =>
    validateStep() && setStep((s) => Math.min(s + 1, totalSteps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  useEffect(() => {
    gsap.fromTo(
      ".animate-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
    );
  }, [step]);

  const submitForm = async () => {
    if (!validateStep()) return;
    const loadingToast = toast.loading("Sende Anfrage...");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/anfrage/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success(t("features.toastQuestionary"), {
          id: loadingToast,
        });
        setFormData(initialFormState);
        setStep(0);
      } else {
        toast.error(t("features.toastQuestionaryFailure"), {
          id: loadingToast,
        });
      }
    } catch (error) {
      toast.error(t("features.toastQuestionaryFailure"), { id: loadingToast });
    }
  };

  const titles = [
    t("steps.situation"),
    t("fields.marital"),
    t("fields.children"),
    t("fields.jobField"),
    t("steps.statements"),
    t("steps.contact"),
    t("steps.notes"),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8B806D] via-[#515565] to-[#2B3041] text-slate-100 flex flex-col lg:flex-row font-sans">
      <Toaster position="top-right" />

      {/* SIDEBAR */}
      <div className="w-full lg:w-1/3 p-8 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#262B3D]">
        <div>
          <h1 className="text-3xl lg:text-5xl font-serif italic mb-4 text-white">
            {t("title")}
          </h1>
          <p className="text-white text-base lg:text-2xl">{t("subtitle")}</p>
        </div>
        <div className="mt-16 space-y-10 lg:mt-10">
          <Feature
            icon={<ShieldCheck size={32} />}
            title={t("features.privacyTitle")}
            desc={t("features.privacyDesc")}
          />
          <Feature
            icon={<Scale size={32} />}
            title={t("features.legalTitle")}
            desc={t("features.legalDesc")}
          />
          <Feature
            icon={<Lock size={32} />}
            title={t("features.confidentialTitle")}
            desc={t("features.confidentialDesc")}
          />
        </div>
      </div>

      {/* MAIN FORM AREA */}
      <div className="flex-1 flex flex-col justify-start lg:justify-center p-6 lg:p-24 relative overflow-y-auto">
        <button
          onClick={() => navigate(-1)}
          className="fixed top-6 right-6 lg:absolute lg:top-12 lg:right-12 text-white hover:opacity-70 transition z-50"
        >
          <X size={28} />
        </button>

        <div className="max-w-xl w-full mx-auto mt-10 lg:mt-0">
          <div className="mb-10 lg:mb-16">
            <div className="text-2xl uppercase tracking-widest text-[#BA8C61] mb-4 font-bold">
              {step + 1} / {totalSteps}
            </div>
            <div className="h-[2px] bg-white/10">
              <motion.div
                className="h-full bg-[#BA8C61]"
                animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-2xl lg:text-4xl font-serif italic mb-10 text-white">
                {titles[step]}
              </h2>

              <div className="space-y-4 animate-item">
                {step === 0 && (
                  <>
                    <Input
                      label={t("fields.debt")}
                      name="debt"
                      value={formData.debt}
                      onChange={handleChange}
                      error={errors.debt}
                    />
                    <Input
                      label={t("fields.claims")}
                      name="claims"
                      value={formData.claims}
                      onChange={handleChange}
                      error={errors.claims}
                    />
                    <Input
                      label={t("fields.income")}
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      error={errors.income}
                    />
                  </>
                )}

                {step === 1 && (
                  <Select
                    name="marital"
                    label={t("fields.marital")}
                    value={formData.marital}
                    onChange={handleChange}
                    error={errors.marital}
                    options={Object.keys(
                      t("options.marital", { returnObjects: true }),
                    ).map((key) => ({
                      val: key,
                      lab: t(`options.marital.${key}`),
                    }))}
                  />
                )}

                {step === 2 && (
                  <Select
                    name="children"
                    label={t("fields.children")}
                    value={formData.children}
                    onChange={handleChange}
                    error={errors.children}
                    options={["0", "1", "2", "3", "4", "5", "6"].map((v) => ({
                      val: v,
                      lab: t(`options.children.${v}`),
                    }))}
                  />
                )}

                {step === 3 && (
                  <>
                    <Select
                      name="jobField"
                      label={t("fields.jobField")}
                      value={formData.jobField}
                      onChange={handleChange}
                      error={errors.jobField}
                      options={t("options.jobFields", {
                        returnObjects: true,
                      }).map((job) => ({ val: job, lab: job }))}
                    />
                    <Input
                      label={t("fields.job")}
                      name="job"
                      value={formData.job}
                      onChange={handleChange}
                    />
                    <Checkbox
                      name="unemployed"
                      label={t("extendedStatements.unemployed")}
                      checked={formData.unemployed}
                      onChange={handleChange}
                    />
                  </>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    {/* Parent Case: Self Employed */}
                    <StaticGroupCard
                      name="selfEmployed"
                      label={t("extendedStatements.selfEmployed")}
                      checked={formData.selfEmployed}
                      onChange={handleChange}
                    />

                    {/* Group Case: Garnished */}
                    <StaticGroupCard
                      name="garnished"
                      label={t("extendedStatements.garnished")}
                      checked={formData.garnished}
                      onChange={handleChange}
                    >
                      <div className="mt-4 pt-4 border-t border-white/5">
                        {/* <p
                          className={`text-xs uppercase tracking-widest font-bold mb-3 transition-colors ${formData.garnished ? "text-[#BA8C61]" : "text-white/20"}`}
                        >
                          Pfändungsart wählen:
                        </p> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {["account", "salary", "assignment", "unknown"].map(
                            (type) => (
                              <button
                                key={type}
                                type="button"
                                disabled={!formData.garnished}
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    garnishType: type,
                                  }))
                                }
                                className={`p-3 text-lg text-left border transition-all ${
                                  formData.garnishType === type
                                    ? "border-[#BA8C61] bg-[#BA8C61] text-white"
                                    : formData.garnished
                                      ? "border-white/10 bg-white/5 text-white/90 hover:border-white/30"
                                      : "border-white/30 bg-transparent text-white/50 cursor-not-allowed"
                                }`}
                              >
                                {t(`extendedStatements.garnishOptions.${type}`)}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    </StaticGroupCard>

                    {/* Group Case: Vehicle */}
                    <StaticGroupCard
                      name="vehicle"
                      label={t("extendedStatements.vehicle")}
                      checked={formData.vehicle}
                      onChange={handleChange}
                    >
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <p
                          className={`text-lg  tracking-widest  mb-3 transition-colors ${formData.vehicle ? "text-white" : "text-white/50"}`}
                        >
                          {t("extendedStatements.vehicleDocs")}
                        </p>
                        <div className="flex gap-2">
                          {["self", "bank"].map((loc) => (
                            <button
                              key={loc}
                              type="button"
                              disabled={!formData.vehicle}
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  vehicleDocLocation: loc,
                                }))
                              }
                              className={`flex-1 p-3 text-lg border transition-all ${
                                formData.vehicleDocLocation === loc
                                  ? "border-[#BA8C61] bg-[#BA8C61] text-white"
                                  : formData.vehicle
                                    ? "border-white/10 bg-white/5 text-white/90 hover:border-white/30"
                                    : "border-white/30 bg-transparent text-white/50 cursor-not-allowed"
                              }`}
                            >
                              {t(
                                `extendedStatements.vehicleDocsOptions.${loc}`,
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </StaticGroupCard>

                    <StaticGroupCard
                      name="property"
                      label={t("extendedStatements.property")}
                      checked={formData.property}
                      onChange={handleChange}
                    />
                    <StaticGroupCard
                      name="knowCreditors"
                      label={t("extendedStatements.knowCreditors")}
                      checked={formData.knowCreditors}
                      onChange={handleChange}
                    />
                  </div>
                )}

                {step === 5 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input
                      label={t("fields.firstname")}
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      error={errors.firstname}
                    />
                    <Input
                      label={t("fields.lastname")}
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      error={errors.lastname}
                    />
                    <div className="md:col-span-2">
                      <Input
                        label={t("fields.email")}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        label={t("fields.phone")}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                      />
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <>
                    <textarea
                      name="notes"
                      placeholder={t("steps.notes") + "..."}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-6 outline-none h-40 text-white text-xl focus:border-[#BA8C61] transition-all"
                    />
                    <Checkbox
                      name="privacy"
                      label={t("fields.privacy")}
                      checked={formData.privacy}
                      onChange={handleChange}
                      error={errors.privacy}
                    />
                  </>
                )}
              </div>

              <div className="flex justify-between mt-16 pb-12">
                <button
                  onClick={back}
                  className={`${step === 0 ? "invisible" : ""} flex items-center gap-2 text-white text-xl hover:opacity-50 transition`}
                >
                  <ArrowLeft size={28} /> {t("buttons.back")}
                </button>
                <button
                  onClick={step === 6 ? submitForm : next}
                  className="bg-white text-[#262B3E] px-10 py-4 font-bold hover:bg-[#BA8C61] hover:text-white flex items-center gap-2 transition-all text-xl"
                >
                  {step === 6 ? t("buttons.submit") : t("buttons.next")}
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

// --- SUB-COMPONENTS ---

/**
 * StaticGroupCard
 * Shows sub-options by default but dims them if the parent is unchecked.
 */
const StaticGroupCard = ({ name, label, checked, onChange, children }) => {
  return (
    <div
      className={`transition-all duration-500 border rounded-sm p-5 ${
        checked
          ? "bg-white/10 border-[#BA8C61]/50 shadow-lg"
          : "bg-white/5 border-white/5"
      }`}
    >
      <label className="flex items-center gap-4 cursor-pointer group">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            className="peer opacity-0 absolute h-6 w-6 cursor-pointer z-10"
          />
          <div
            className={`h-6 w-6 border-2 transition-all flex items-center justify-center ${
              checked
                ? "bg-[#BA8C61] border-[#BA8C61]"
                : "border-white/20 group-hover:border-white/40"
            }`}
          >
            {checked && (
              <div
                className="w-3 h-3 bg-white"
                style={{
                  clipPath:
                    "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
                }}
              />
            )}
          </div>
        </div>
        <span
          className={`text-xl transition-all ${checked ? "text-white font-medium" : "text-white"}`}
        >
          {label}
        </span>
      </label>

      {/* Children are always rendered, but visually dimmed if parent is unchecked */}
      <div
        className={`transition-all duration-500 ${checked ? "opacity-100 scale-100" : "opacity-90 scale-[0.98] pointer-events-none"}`}
      >
        {children}
      </div>
    </div>
  );
};

const Input = ({ label, error, ...props }) => (
  <div className="w-full">
    <label className="text-[17px] uppercase tracking-[0.2em] text-white block mb-2">
      {label}
    </label>
    <input
      {...props}
      className={`w-full bg-transparent border-b py-3 outline-none text-xl transition-colors ${error ? "border-red-400" : "border-white/20 focus:border-[#BA8C61]"}`}
    />
    {error && <p className="text-red-400 text-lg mt-2">{error}</p>}
  </div>
);

const Checkbox = ({ name, label, checked, onChange, error }) => (
  <div>
    <label className="flex items-center gap-4 cursor-pointer group">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="accent-[#BA8C61] w-6 h-6"
      />
      <span className="text-xl text-white group-hover:text-[#BA8C61] transition-colors">
        {label}
      </span>
    </label>
    {error && <p className="text-red-400 text-lg mt-2">{error}</p>}
  </div>
);

const Select = ({ name, label, value, onChange, options, error }) => (
  <div>
    <label className="text-[17px] uppercase tracking-[0.2em] text-white block mb-4">
      {label}
    </label>
    <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#BA8C61]">
      {options.map((opt) => (
        <button
          key={opt.val}
          type="button"
          onClick={() => onChange({ target: { name, value: opt.val } })}
          className={`p-4 border text-left text-xl transition-all ${value === opt.val ? "border-[#BA8C61] bg-[#BA8C61]/10 text-white" : "border-white/10 text-white/70 hover:border-white/30"}`}
        >
          {opt.lab}
        </button>
      ))}
    </div>
    {error && <p className="text-red-400 text-lg mt-2">{error}</p>}
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5">
    <div className="text-[#BA8C61] mt-1 shrink-0">{icon}</div>
    <div>
      <h4 className="font-semibold text-[17px] uppercase tracking-[0.2em] text-white">
        {title}
      </h4>
      <p className="text-white text-[17px] mt-2 leading-relaxed opacity-90">
        {desc}
      </p>
    </div>
  </div>
);

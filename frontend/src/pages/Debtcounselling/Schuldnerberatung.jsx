import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import StepProgress from "../../components/RequestQuestions/StepProgress";

export default function Schuldnerberatung() {
  const { t } = useTranslation("schuldnerberatung");

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
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
    vehicle: false,
    property: false,
    knowCreditors: false,
    salutation: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    notes: "",
    privacy: false,
  });

  const totalSteps = 6;

  const next = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitForm = () => {
    console.log(formData);
    alert("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-xl">
        <StepProgress step={step} total={totalSteps} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* STEP 1 */}

            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">{t("situation")}</h2>

                <input
                  name="debt"
                  value={formData.debt}
                  onChange={handleChange}
                  placeholder="z.B. 9.000€"
                  className="border p-3 w-full rounded"
                />

                <input
                  name="claims"
                  value={formData.claims}
                  onChange={handleChange}
                  placeholder="z.B. 4"
                  className="border p-3 w-full rounded"
                />

                <input
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  placeholder="z.B. 1.800€"
                  className="border p-3 w-full rounded"
                />

                <div className="flex justify-end">
                  <button
                    onClick={next}
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                  >
                    {t("next")}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">{t("situation")}</h2>

                <select
                  name="marital"
                  value={formData.marital}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                >
                  <option value="">{t("select")}</option>
                  <option value="single">{t("single")}</option>
                  <option value="married">{t("married")}</option>
                  <option value="relationship">{t("relationship")}</option>
                  <option value="separated">{t("separated")}</option>
                  <option value="divorced">{t("divorced")}</option>
                  <option value="widowed">{t("widowed")}</option>
                </select>

                <div className="flex justify-between">
                  <button onClick={back}>{t("back")}</button>

                  <button
                    onClick={next}
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                  >
                    {t("next")}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">{t("situation")}</h2>

                <input
                  name="jobField"
                  value={formData.jobField}
                  onChange={handleChange}
                  placeholder={t("jobField")}
                  className="border p-3 w-full rounded"
                />

                <input
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  placeholder={t("job")}
                  className="border p-3 w-full rounded"
                />

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="unemployed"
                    checked={formData.unemployed}
                    onChange={handleChange}
                  />

                  {t("unemployed")}
                </label>

                <div className="flex justify-between">
                  <button onClick={back}>{t("back")}</button>

                  <button
                    onClick={next}
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                  >
                    {t("next")}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl">{t("statements")}</h2>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="selfEmployed"
                    checked={formData.selfEmployed}
                    onChange={handleChange}
                  />

                  {t("selfEmployed")}
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="garnished"
                    checked={formData.garnished}
                    onChange={handleChange}
                  />

                  {t("garnished")}
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="vehicle"
                    checked={formData.vehicle}
                    onChange={handleChange}
                  />

                  {t("vehicle")}
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="property"
                    checked={formData.property}
                    onChange={handleChange}
                  />

                  {t("property")}
                </label>

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="knowCreditors"
                    checked={formData.knowCreditors}
                    onChange={handleChange}
                  />

                  {t("knowCreditors")}
                </label>

                <div className="flex justify-between">
                  <button onClick={back}>{t("back")}</button>

                  <button
                    onClick={next}
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                  >
                    {t("next")}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5 */}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl">{t("contact")}</h2>

                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                >
                  <option value="">{t("select")}</option>
                  <option value="mr">Herr</option>
                  <option value="mrs">Frau</option>
                </select>

                <input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder={t("firstname")}
                  className="border p-3 w-full rounded"
                />

                <input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder={t("lastname")}
                  className="border p-3 w-full rounded"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("email")}
                  className="border p-3 w-full rounded"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("phone")}
                  className="border p-3 w-full rounded"
                />

                <div className="flex justify-between">
                  <button onClick={back}>{t("back")}</button>

                  <button
                    onClick={next}
                    className="bg-blue-900 text-white px-6 py-2 rounded"
                  >
                    {t("next")}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 6 */}

            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl">{t("notes")}</h2>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="border w-full p-3 rounded"
                />

                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                  />

                  {t("privacy")}
                </label>

                <div className="flex justify-between">
                  <button onClick={back}>{t("back")}</button>

                  <button
                    onClick={submitForm}
                    className="bg-green-600 text-white px-6 py-2 rounded"
                  >
                    {t("submit")}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

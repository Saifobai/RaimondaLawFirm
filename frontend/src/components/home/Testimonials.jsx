import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Michael Weber",
      text: "Outstanding legal expertise and strategic advice. Highly recommended.",
    },
    {
      name: "Anna Müller",
      text: "Professional, reliable and extremely knowledgeable in restructuring law.",
    },
    {
      name: "Thomas Richter",
      text: "They guided our company through a difficult restructuring process successfully.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("home.testimonials.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">“{item.text}”</p>

              <div className="font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

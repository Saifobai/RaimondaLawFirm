import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ScrollToTop() {
  const { t } = useTranslation("extra");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* 1. Added "group" to the wrapper */}

      {/* THE TOOLTIP */}
      <span
        className="
        mr-3 
        bg-[#262B3E] text-white text-[16px] uppercase tracking-[0.2em] 
        px-3 py-2 rounded border border-white/10 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 
        whitespace-nowrap pointer-events-none
      "
      >
        {t("scrollToTop")}
      </span>

      {/* THE BUTTON */}
      <button
        onClick={scrollToTop}
        className="
          bg-[#BA8C61] hover:bg-[#c2a183]
          text-white
          p-3 rounded-full
          shadow-lg
          transition-all duration-300
          hover:scale-110
        "
        aria-label="Scroll to top"
      >
        <ArrowUp size={25} />
      </button>
    </div>
  );
}

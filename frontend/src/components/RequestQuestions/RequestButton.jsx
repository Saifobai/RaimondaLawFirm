import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function RequestButton() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 600px (typically after hero)
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          whileHover={{ scale: 1.1, backgroundColor: "#C9B38C" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/schuldnerberatung")}
          className="fixed right-6 md:right-6 top-1/2 -translate-y-1/2 z-[90] bg-[#BA8C61] text-[#262B3E] p-4 rounded-full shadow-[0_0_20px_rgba(186,140,97,0.3)] transition-colors group"
        >
          <FileText size={24} strokeWidth={2.5} />

          {/* Tooltip that appears on hover */}
          <span className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-[#262B3E] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-2 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Anfrage stellen
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const { t } = useTranslation("reviews");
  const items = t("reviews.items", { returnObjects: true });
  const reviews = Array.isArray(items) ? items : [];

  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollTimeout = useRef(null);

  // 1. Automatic Auto-Scroll Logic
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, ease: "linear", duration: 80 },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  // 2. Manual Arrow Logic with "Auto-Resume"
  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      // Pause auto-scroll
      controls.stop();

      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Resume auto-scroll after 3 seconds
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (!isHovered) {
          controls.start({
            x: ["0%", "-50%"],
            transition: { repeat: Infinity, ease: "linear", duration: 80 },
          });
        }
      }, 3000);
    }
  };

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[#FE9A00] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              {t("reviews.tagline")}
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif italic text-slate-950">
              {t("reviews.title")}
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full border border-slate-200 hover:border-[#FE9A00] hover:text-[#FE9A00] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full border border-slate-200 hover:border-[#FE9A00] hover:text-[#FE9A00] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Structure: 
         - Wrapper (containerRef) handles physical scrolling 
         - Motion div handles the visual loop
      */}
      <div
        className="relative max-w-6xl mx-auto cursor-grab overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide py-10"
        >
          <motion.div
            animate={controls}
            className="flex gap-8 px-6 w-max"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...reviews, ...reviews].map((item, idx) => (
              <div
                key={idx}
                className="w-[380px] flex-shrink-0 bg-white border border-slate-100 p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] rounded-sm hover:border-[#FE9A00]/40 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#FE9A00] text-[#FE9A00]"
                    />
                  ))}
                </div>
                <p className="text-slate-600 font-light italic leading-relaxed text-sm mb-10 h-20 overflow-hidden">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#FE9A00] font-serif text-sm italic">
                    {item.name.charAt(0)}
                  </div>
                  <h4 className="text-slate-950 font-serif text-sm tracking-wide">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

// import React from "react";
// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

// // Sample data structure from your images
// const reviews = [
//   {
//     name: "Sarah Ramezani",
//     text: "Freundlich, respektvoll und professionell – vermittelt Sicherheit in schwierigen Situationen. Sehr empfehlenswert.",
//     stars: 5,
//     date: "2 months ago",
//   },
//   {
//     name: "Murat Kalayci",
//     text: "Mit Geduld geholfen, großes Problem gelöst, Zukunft gerettet.",
//     stars: 5,
//     date: "6 years ago",
//   },
//   {
//     name: "Joachim Rose",
//     text: "Professionelle Prüfung, klare Besprechung, hervorragende Betreuung und Ergebnis.",
//     stars: 5,
//     date: "1 year ago",
//   },
//   // ... add more from your list
// ];

// const ReviewCard = ({ review, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: index * 0.1 }}
//     className="bg-slate-50 p-8 border border-slate-100 hover:border-[#FE9A00]/30 transition-all group relative overflow-hidden"
//   >
//     <Quote className="absolute -top-2 -right-2 w-20 h-20 text-slate-200/50 group-hover:text-[#FE9A00]/10 transition-colors" />

//     <div className="flex gap-1 mb-4">
//       {[...Array(review.stars)].map((_, i) => (
//         <Star key={i} size={14} className="fill-[#FE9A00] text-[#FE9A00]" />
//       ))}
//     </div>

//     <p className="text-slate-600 italic mb-6 leading-relaxed relative z-10">
//       "{review.text}"
//     </p>

//     <div className="flex items-center gap-4">
//       <div className="h-[1px] w-8 bg-[#FE9A00]" />
//       <div>
//         <h4 className="font-serif text-slate-950 font-bold text-sm">
//           {review.name}
//         </h4>
//         <p className="text-[10px] uppercase tracking-widest text-slate-400">
//           {review.date}
//         </p>
//       </div>
//     </div>
//   </motion.div>
// );

// export default function Testimonials() {
//   return (
//     <section className="bg-white py-24 lg:py-44 overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-6">
//         {/* SECTION HEADER */}
//         <div className="text-center mb-20">
//           <span className="text-[#FE9A00] font-bold tracking-[0.4em] uppercase text-[10px]">
//             Client Trust
//           </span>
//           <h2 className="text-5xl lg:text-7xl font-serif italic text-slate-950 mt-4 mb-8">
//             Rezensionen
//           </h2>
//           <div className="flex items-center justify-center gap-4">
//             <div className="flex gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="fill-[#FE9A00] text-[#FE9A00]"
//                   size={20}
//                 />
//               ))}
//             </div>
//             <span className="text-2xl font-serif text-slate-900 border-l border-slate-200 pl-4">
//               4.9/5.0 Based on 40+ Clients
//             </span>
//           </div>
//         </div>

//         {/* MASONRY / BENTO GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review, idx) => (
//             <ReviewCard key={idx} review={review} index={idx} />
//           ))}
//         </div>

//         {/* VIEW ALL CTA */}
//         <div className="mt-16 text-center">
//           <p className="text-slate-400 font-light mb-6">
//             Want to see all 40+ success stories?
//           </p>
//           <button className="bg-slate-950 text-white px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#FE9A00] transition-colors">
//             Read All Google Reviews
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

//=====================================================
//=====================================================
// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { motion, useAnimation } from "framer-motion";
// import { Star } from "lucide-react";

// const Reviews = () => {
//   const { t } = useTranslation("reviews");
//   const items = t("reviews.items", { returnObjects: true });
//   const reviews = Array.isArray(items) ? items : [];

//   // 1. Initialize animation controls
//   const controls = useAnimation();

//   // 2. Define animation logic
//   const startAnimation = () => {
//     controls.start({
//       x: ["0%", "-50%"],
//       transition: { repeat: Infinity, ease: "linear", duration: 80 },
//     });
//   };

//   // Run animation on mount
//   React.useEffect(() => {
//     startAnimation();
//   }, []);

//   return (
//     <section className="bg-white py-24 lg:py-32 overflow-hidden">
//       <div className="max-w-[1400px] mx-auto px-6 mb-20">
//         <span className="text-[#FE9A00] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block text-center">
//           {t("reviews.tagline")}
//         </span>
//         <h2 className="text-4xl lg:text-6xl font-serif italic text-slate-950 text-center">
//           {t("reviews.title")}
//         </h2>
//       </div>

//       <div
//         className="relative flex overflow-x-hidden max-w-6xl mx-auto cursor-pointer"
//         style={{
//           maskImage:
//             "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//         }}
//         // 3. Pause and Resume using controls
//         onMouseEnter={() => controls.stop()}
//         onMouseLeave={() => startAnimation()}
//       >
//         <motion.div
//           animate={controls} // 4. Link controls here
//           className="flex gap-8 py-10"
//         >
//           {[...reviews, ...reviews].map((item, idx) => (
//             <div
//               key={idx}
//               className="w-[380px] flex-shrink-0 bg-white border border-slate-100 p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] rounded-sm hover:border-[#FE9A00]/40 transition-all duration-500"
//             >
//               {/* ... rest of your card code remains identical ... */}
//               <div className="flex gap-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={14}
//                     className="fill-[#FE9A00] text-[#FE9A00]"
//                   />
//                 ))}
//               </div>
//               <p className="text-slate-600 font-light italic leading-relaxed text-sm mb-10 h-20 overflow-hidden">
//                 "{item.text}"
//               </p>
//               <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
//                 <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#FE9A00] font-serif text-sm italic">
//                   {item.name.charAt(0)}
//                 </div>
//                 <h4 className="text-slate-950 font-serif text-sm tracking-wide">
//                   {item.name}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

//======================================================
//======================================================
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

// import React from "react";
// import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const { t } = useTranslation("footer");

//   return (
//     <footer className="bg-[#262B3E] text-white pt-24 pb-12 px-6 border-t border-white/5">
//       <div className="max-w-[1400px] mx-auto">
//         {/* TOP SECTION */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
//           {/* BRAND */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-serif italic tracking-wider text-white">
//               {t("brand.name")}
//             </h2>
//             <p className="text-white/80 text-xl leading-relaxed max-w-xs font-light">
//               {t("brand.tagline")}
//             </p>
//           </div>

//           {/* LINKS */}
//           <div className="space-y-6">
//             <ul className="space-y-3 text-xl text-white/80 font-light">
//               <li>
//                 <Link
//                   to="/impressum"
//                   className="hover:text-[#BA8C61] transition-colors"
//                 >
//                   {t("links.legal")}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/privacy"
//                   className="hover:text-[#BA8C61] transition-colors"
//                 >
//                   {t("links.privacy")}
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* SOCIAL */}
//           <div className="space-y-6">
//             <h4 className="text-[#BA8C61] uppercase tracking-[0.2em] text-[15px] font-bold">
//               {t("social.title")}
//             </h4>
//             <div className="flex gap-4">
//               {[Linkedin, Twitter, Facebook].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="p-3 border border-white/50 rounded-full hover:border-[#BA8C61] hover:bg-white/[0.02] transition-all group"
//                 >
//                   <Icon
//                     size={18}
//                     className="text-white/70 group-hover:text-[#BA8C61] transition-colors"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM SECTION */}
//         <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-[14px] text-white/80  tracking-[0.3em] font-medium">
//             Dr. jur. Kraemer GmbH
//           </p>
//           <div className="h-px w-12 bg-[#BA8C61]/50 hidden md:block" />
//         </div>
//       </div>
//     </footer>
//   );
// }

//========================================================================
//========================================================================
import React from "react";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid rgba(27,42,74,0.08)",
      }}
    >
      {/* Subtle dot texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div className="w-full h-full bg-[radial-gradient(#1B2A4A_0.5px,transparent_0.5px)] [background-size:32px_32px]" />
      </div>

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BA8C61] to-transparent opacity-60" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 lg:px-8">
        {/* ══ MAIN CONTENT ══ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-20 pb-16 border-b border-[#1B2A4A]/08">
          {/* Brand col */}
          <div className="md:col-span-5 space-y-6">
            <h2
              className="font-serif italic text-[#1B2A4A] tracking-tight leading-none"
              style={{ fontSize: "clamp(1.4rem, 2vw, 1.8rem)" }}
            >
              {t("brand.name")}
            </h2>
            <div className="w-10 h-[2px] bg-[#BA8C61]" />
            <p
              className="text-[#1B2A4A]/90 font-medium leading-[1.85] max-w-xs"
              style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.2rem)" }}
            >
              {t("brand.tagline")}
            </p>
            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[#BA8C61] hover:bg-[#BA8C61] group"
                  style={{ borderColor: "rgba(27,42,74,0.15)" }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="text-[#1B2A4A]/90 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* Legal links */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-[#BA8C61] text-[15px] uppercase tracking-[0.15em] font-bold">
              {t("social.title") || "Rechtliches"}
            </p>
            <ul className="space-y-3">
              {[
                { to: "/impressum", label: t("links.legal") },
                { to: "/privacy", label: t("links.privacy") },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#1B2A4A]/90 font-medium text-lg hover:text-[#BA8C61] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#BA8C61] transition-all duration-300 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-[#BA8C61] text-[16px] uppercase tracking-[0.25em] font-bold">
              Kontakt
            </p>
            <ul className="space-y-3">
              {[
                {
                  Icon: Mail,
                  text: t("contact.email") || "info@kraemer-recht.de",
                },
                {
                  Icon: Phone,
                  text: t("contact.phone") || "+49 (0) 221 000 000",
                },
                {
                  Icon: MapPin,
                  text: t("contact.city") || "Köln, Deutschland",
                },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-[#BA8C61] mt-0.5 flex-shrink-0"
                  />
                  <span
                    className="text-[#1B2A4A]/90 font-bold leading-snug"
                    style={{ fontSize: "clamp(0.82rem, 0.9vw, 1.9rem)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ══ BOTTOM BAR ══ */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#1B2A4A]/90 font-bold tracking-[0.15em] uppercase"
            style={{ fontSize: "clamp(0.7rem, 0.85vw, 1.78rem)" }}
          >
            Dr. jur. Kraemer GmbH
          </p>
        </div>
      </div>
    </footer>
  );
}

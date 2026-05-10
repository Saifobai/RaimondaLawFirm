import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";
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
      {/* Dot texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div className="w-full h-full bg-[radial-gradient(#1B2A4A_0.5px,transparent_0.5px)] [background-size:32px_32px]" />
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BA8C61] to-transparent opacity-60" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* ══ MAIN CONTENT — 3 columns ══ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 pt-12 lg:pt-16 xl:pt-20 pb-10 lg:pb-14 xl:pb-16 border-b border-[#1B2A4A]/08">
          {/* ── LEFT: Brand ── */}
          <div className="space-y-4 lg:space-y-6">
            <h2
              className="font-serif italic text-[#1B2A4A] tracking-tight leading-none"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
            >
              Wirtschaftskanzlei Dr. jur. Kraemer
            </h2>
            <div className="w-8 lg:w-10 h-[2px] bg-[#BA8C61]" />
            <p
              className="text-[#1B2A4A]/90 font-medium leading-[1.85] max-w-xs"
              style={{ fontSize: "clamp(0.82rem, 1vw, 1rem)" }}
            >
              {t("brand.tagline")}
            </p>
          </div>

          {/* ── MIDDLE: Legal links ── */}
          <div className="flex flex-col items-start md:items-center space-y-4 lg:space-y-5">
            <ul className="space-y-3 lg:space-y-4 text-left md:text-center">
              {[
                { to: "/impressum", label: t("links.legal") },
                { to: "/privacy", label: t("links.privacy") },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#1B2A4A]/80 font-medium text-[13px] lg:text-[15px] hover:text-[#BA8C61] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#BA8C61] transition-all duration-300 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Social ── */}
          <div className="flex flex-col items-start md:items-end space-y-4 lg:space-y-5">
            <p className="text-[#1B2A4A] text-[11px] lg:text-[13px] uppercase tracking-[0.2em] font-bold">
              {t("social.title")}
            </p>
            <div className="flex gap-2 lg:gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center border transition-all duration-300 hover:border-[#BA8C61] hover:bg-[#BA8C61] group"
                  style={{ borderColor: "rgba(27,42,74,0.15)" }}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#1B2A4A]/80 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ══ BOTTOM BAR ══ */}
        <div className="py-5 lg:py-7 flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-4">
          <p
            className="text-[#1B2A4A]/70 font-bold tracking-[0.05em] uppercase text-center sm:text-left"
            style={{ fontSize: "clamp(0.7rem, 0.85vw, 0.9rem)" }}
          >
            © {new Date().getFullYear()} Wirtschaftskanzlei Dr. jur. Kraemer
            GmbH
          </p>
        </div>
      </div>
    </footer>
  );
}

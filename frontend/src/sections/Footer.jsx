import React from "react";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-[#262B3E] text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif italic tracking-wider text-white">
              {t("brand.name")}
            </h2>
            <p className="text-white/80 text-md leading-relaxed max-w-xs font-light">
              {t("brand.tagline")}
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h4 className="text-[#BA8C61] uppercase tracking-[0.4em] text-[15px] font-bold">
              {t("contact.title")}
            </h4>
            <div className="space-y-4 text-sm text-white/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#BA8C61]/80 shrink-0" />{" "}
                {t("contact.address")}
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#BA8C61]/80 shrink-0" />{" "}
                {t("contact.phone")}
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#BA8C61]/80 shrink-0" />{" "}
                {t("contact.email")}
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            <h4 className="text-[#BA8C61] uppercase tracking-[0.2em] text-[15px] font-bold">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/80 font-light">
              <li>
                <Link
                  to="/impressum"
                  className="hover:text-[#BA8C61] transition-colors"
                >
                  {t("links.legal")}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#BA8C61] transition-colors"
                >
                  {t("links.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#BA8C61] transition-colors">
                  {t("links.sitemap")}
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-6">
            <h4 className="text-[#BA8C61] uppercase tracking-[0.2em] text-[15px] font-bold">
              {t("social.title")}
            </h4>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 border border-white/50 rounded-full hover:border-[#BA8C61] hover:bg-white/[0.02] transition-all group"
                >
                  <Icon
                    size={18}
                    className="text-white/70 group-hover:text-[#BA8C61] transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] text-white/80 uppercase tracking-[0.3em] font-medium">
            © {new Date().getFullYear()} {t("brand.name")}.{" "}
            {t("brand.rights") || "All rights reserved."}
          </p>
          <div className="h-px w-12 bg-[#BA8C61]/50 hidden md:block" />
        </div>
      </div>
    </footer>
  );
}

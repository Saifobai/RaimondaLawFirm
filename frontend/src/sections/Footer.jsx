import React from "react";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* BRAND */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif italic tracking-wider">
              {t("brand.name")}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t("brand.tagline")}
            </p>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h4 className="text-[#FE9A00] uppercase tracking-[0.2em] text-[10px] font-bold">
              {t("contact.title")}
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FE9A00] shrink-0" />{" "}
                {t("contact.address")}
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#FE9A00] shrink-0" />{" "}
                {t("contact.phone")}
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#FE9A00] shrink-0" />{" "}
                {t("contact.email")}
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            <h4 className="text-[#FE9A00] uppercase tracking-[0.2em] text-[10px] font-bold">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  {t("links.legal")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  {t("links.privacy")}
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-white transition">
                  {t("links.sitemap")}
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-6">
            <h4 className="text-[#FE9A00] uppercase tracking-[0.2em] text-[10px] font-bold">
              {t("social.title")}
            </h4>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 border border-slate-800 rounded-full hover:border-[#FE9A00] transition-colors group"
                >
                  <Icon size={18} className="text-[#FE9A00]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} {t("brand.name")}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "../../components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

// ── Reusable block components ──────────────────────────────────────────────

const SectionHeading = ({ children }) => (
  <h2
    className="font-sans text-white mt-16 mb-3 leading-snug"
    style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}
  >
    {children}
  </h2>
);

const Body = ({ children, className = "" }) => (
  <p
    className={`font-sans text-white/90 font-semibold text-[15px] md:text-[16px] leading-[1.9] ${className}`}
  >
    {children}
  </p>
);

const ContactLine = ({ children }) => (
  <p className="font-sans text-white/90 font-semibold text-[15px] leading-[1.85] tracking-wide">
    {children}
  </p>
);

const BulletItem = ({ children }) => (
  <div className="flex items-start gap-3 pl-2">
    <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#BA8C61] flex-shrink-0" />
    <p className="font-sans text-[#C9B38C] font-medium text-[15px] leading-[1.8]">
      {children}
    </p>
  </div>
);

const Divider = () => <div className="my-8 h-px w-full bg-white/5" />;

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.3) },
});

// ── Main component ─────────────────────────────────────────────────────────

export default function Impressum() {
  const { t } = useTranslation("impressum");
  const h = (key) => t(`hero.${key}`);

  const mainOffice = t("hero.mainOffice", { returnObjects: true });
  const branchOffice = t("hero.branchOffice", { returnObjects: true });
  const tax = t("hero.tax", { returnObjects: true });
  const representation = t("hero.representation", { returnObjects: true });
  const cooperation = t("hero.cooperation", { returnObjects: true });
  const locations = t("hero.locations", { returnObjects: true });
  const chambers = t("hero.chambers", { returnObjects: true });
  const insurance = t("hero.insurance", { returnObjects: true });
  const practice = t("hero.practice", { returnObjects: true });
  const dispute = t("hero.dispute", { returnObjects: true });
  const professional = t("hero.professional", { returnObjects: true });
  const liability = t("hero.liability", { returnObjects: true });

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      className="relative min-h-screen py-28 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#1B2A4A" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(#BA8C61_0.5px,transparent_0.5px)] [background-size:36px_36px]" />
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BA8C61] to-transparent opacity-50" />

      <div className="relative z-10 max-w-[780px] mx-auto">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <h1
            className="font-sans text-white leading-[1.08] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Impressum
          </h1>
          <div className="h-px w-16 bg-[#BA8C61]" />
        </motion.div>

        {/* ── INTRO + COMPANY ── */}
        <motion.div {...fadeUp(0)} className="space-y-1">
          <Body>{h("intro")}</Body>
          <Body className="text-white font-bold text-[16px]">
            {h("companyName")}
          </Body>
          <Body>{h("registration")}</Body>
        </motion.div>

        {/* ── MAIN OFFICE ── */}
        <motion.div {...fadeUp(1)} className="space-y-1">
          <SectionHeading>{mainOffice.label}</SectionHeading>
          <ContactLine>{mainOffice.street}</ContactLine>
          <ContactLine>{mainOffice.city}</ContactLine>
          <ContactLine>{mainOffice.phone}</ContactLine>
          <ContactLine>{mainOffice.fax}</ContactLine>
          <ContactLine>{mainOffice.email}</ContactLine>
        </motion.div>

        {/* ── BRANCH OFFICE ── */}
        <motion.div {...fadeUp(2)} className="space-y-1">
          <SectionHeading>{branchOffice.label}</SectionHeading>
          <ContactLine>{branchOffice.street}</ContactLine>
          <ContactLine>{branchOffice.city}</ContactLine>
          <ContactLine>{branchOffice.phone}</ContactLine>
          <ContactLine>{branchOffice.fax}</ContactLine>
        </motion.div>

        {/* ── TAX ── */}
        <motion.div {...fadeUp(3)} className="space-y-1">
          <ContactLine>{tax.vatId}</ContactLine>
          <ContactLine>{tax.taxNumber}</ContactLine>
        </motion.div>

        {/* ── REPRESENTATION ── */}
        <motion.div {...fadeUp(4)} className="space-y-2">
          <SectionHeading>{representation.label}</SectionHeading>
          <Body>{representation.intro}</Body>
          <Body className="text-[#C9B38C]">{representation.person}</Body>
        </motion.div>

        {/* ── COOPERATION ── */}
        <motion.div {...fadeUp(5)} className="space-y-2">
          <SectionHeading>{cooperation.label}</SectionHeading>
          <Body className="text-[#C9B38C]">{cooperation.person}</Body>
          <Body>{cooperation.detail}</Body>
        </motion.div>

        {/* ── LOCATIONS ── */}
        <motion.div {...fadeUp(6)} className="space-y-2">
          <SectionHeading>{locations.label}</SectionHeading>
          <Body>{locations.description}</Body>
        </motion.div>

        {/* ── CHAMBERS ── */}
        <motion.div {...fadeUp(7)} className="space-y-1">
          <SectionHeading>{chambers.label}</SectionHeading>
          <ContactLine>{chambers.cologne.name}</ContactLine>
          <ContactLine>{chambers.cologne.street}</ContactLine>
          <ContactLine>{chambers.cologne.city}</ContactLine>
          <ContactLine>{chambers.cologne.website}</ContactLine>

          <div className="pt-4 space-y-1">
            <Body className="text-white/60 text-[14px]">
              {chambers.lithuania.label}
            </Body>
            <ContactLine>{chambers.lithuania.name}</ContactLine>
            <ContactLine>{chambers.lithuania.website}</ContactLine>
          </div>
        </motion.div>

        {/* ── INSURANCE ── */}
        <motion.div {...fadeUp(8)} className="space-y-1">
          <SectionHeading>{insurance.label}</SectionHeading>
          <ContactLine>{insurance.insurer}</ContactLine>
          <Body>{insurance.scope}</Body>
        </motion.div>

        {/* ── PRACTICE AREAS ── */}
        <motion.div {...fadeUp(9)} className="space-y-3">
          <SectionHeading>{practice.label}</SectionHeading>
          <Body>{practice.intro}</Body>
          <div className="space-y-2">
            {practice.areas.map((area, i) => (
              <BulletItem key={i}>{area}</BulletItem>
            ))}
          </div>
          <Body className="pt-2">{practice.description}</Body>
        </motion.div>

        {/* ── DISPUTE RESOLUTION ── */}
        <motion.div {...fadeUp(10)} className="space-y-3">
          <SectionHeading>{dispute.label}</SectionHeading>
          <Body>{dispute.description}</Body>
          <Body>{dispute.noParticipation}</Body>
          <Body>{dispute.euPlatform}</Body>
        </motion.div>

        {/* ── PROFESSIONAL REGULATIONS ── */}
        <motion.div {...fadeUp(11)} className="space-y-3">
          <SectionHeading>{professional.label}</SectionHeading>
          <div className="space-y-2">
            {professional.items.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </div>
        </motion.div>

        {/* ── LIABILITY ── */}
        <motion.div {...fadeUp(12)} className="space-y-3">
          <SectionHeading>{liability.label}</SectionHeading>
          <Body>{liability.text1}</Body>
          <Body>{liability.text2}</Body>
        </motion.div>

        {/* ── FOOTER RULE ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 h-px bg-gradient-to-r from-[#BA8C61]/50 via-[#BA8C61]/20 to-transparent origin-left"
        />

        <p className="mt-6 font-sans text-white/80 text-[16px] uppercase tracking-[0.1em] font-medium">
          Wirtschaftskanzlei Dr. jur. Kraemer GmbH
        </p>
      </div>

      <ScrollToTop />
    </section>
  );
}

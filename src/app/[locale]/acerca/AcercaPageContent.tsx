"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import StampBadge from "@/components/ui/StampBadge";
import DossierSection from "@/components/ui/DossierSection";
import RedTape from "@/components/ui/RedTape";
import QuoteBlock from "@/components/ui/QuoteBlock";

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function DocumentsSection() {
  const t = useTranslations("about.documents");

  return (
    <AnimatedSection>
      <DossierSection title={t("title")} stamp="desclasificado" tabLabel={t("tabLabel")}>
        <div className="space-y-4 font-body text-[var(--text-secondary)] leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p className="font-semibold text-[var(--text-primary)]">{t("p3")}</p>
        </div>
      </DossierSection>
    </AnimatedSection>
  );
}

function OrderSection() {
  const t = useTranslations("about.order");

  return (
    <AnimatedSection>
      <DossierSection title={t("title")} stamp="secreto" tabLabel={t("tabLabel")}>
        <div className="space-y-4 font-body text-[var(--text-secondary)] leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

        <QuoteBlock
          text={t("quote")}
          source={t("quoteSource")}
          context={t("quoteContext")}
          highlighted={["desclasificación", "declassification"]}
        />
      </DossierSection>
    </AnimatedSection>
  );
}

function MethodologySection() {
  const t = useTranslations("about.methodology");

  return (
    <AnimatedSection>
      <DossierSection title={t("title")} stamp="reservado" tabLabel={t("tabLabel")}>
        <div className="space-y-4 font-body text-[var(--text-secondary)] leading-relaxed">
          <p>{t("p1")}</p>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] mb-3">
              {t("steps.title")}
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>{t("steps.s1")}</li>
              <li>{t("steps.s2")}</li>
              <li>{t("steps.s3")}</li>
              <li>{t("steps.s4")}</li>
              <li>{t("steps.s5")}</li>
            </ol>
          </div>
        </div>
      </DossierSection>
    </AnimatedSection>
  );
}

function SourcesSection() {
  const t = useTranslations("about.sources");

  return (
    <AnimatedSection>
      <DossierSection title={t("title")} stamp="confidencial" tabLabel={t("tabLabel")}>
        <div className="space-y-6 font-body text-[var(--text-secondary)] leading-relaxed">
          {/* Primary sources */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] mb-3">
              {t("primary")}
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>{t("s1")}</li>
              <li>{t("s2")}</li>
              <li>{t("s3")}</li>
              <li>{t("s4")}</li>
            </ul>
          </div>

          {/* Secondary / bibliography */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] mb-3">
              {t("secondary")}
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>{t("b1")}</li>
              <li>{t("b2")}</li>
              <li>{t("b3")}</li>
              <li>{t("b4")}</li>
            </ul>
          </div>
        </div>
      </DossierSection>
    </AnimatedSection>
  );
}

function LegalSection() {
  const t = useTranslations("about.legal");

  return (
    <AnimatedSection>
      <DossierSection title={t("title")} tabLabel={t("tabLabel")}>
        <div className="space-y-4 font-body text-[var(--text-secondary)] leading-relaxed">
          <p className="font-semibold text-[var(--text-primary)]">{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </DossierSection>
    </AnimatedSection>
  );
}

function CreditsSection() {
  const t = useTranslations("about.credits");

  return (
    <AnimatedSection>
      <DossierSection title={t("title")} tabLabel={t("tabLabel")}>
        <div className="space-y-3 font-body text-[var(--text-secondary)] leading-relaxed">
          <p>{t("concept")}</p>
          <p>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)]">
              {t("tech")}
            </span>{" "}
            {t("techStack")}
          </p>
          <p className="italic text-sm">{t("openSource")}</p>
        </div>
      </DossierSection>
    </AnimatedSection>
  );
}

// ---------------------------------------------------------------------------
// Main Export
// ---------------------------------------------------------------------------

export default function AcercaPageContent() {
  const t = useTranslations("about");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <motion.h1
            className="font-serif text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="font-body text-lg text-[var(--text-secondary)] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("subtitle")}
          </motion.p>
        </div>
        <motion.div
          className="flex-shrink-0 mt-2"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 18 }}
        >
          <StampBadge type="desclasificado" size="md" />
        </motion.div>
      </div>

      {/* Sections */}
      <DocumentsSection />

      <RedTape />

      <OrderSection />

      <RedTape />

      <MethodologySection />

      <RedTape />

      <SourcesSection />

      <RedTape />

      <LegalSection />

      <RedTape />

      <CreditsSection />
    </div>
  );
}

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
      <DossierSection title={t("title")} tabLabel={t("tabLabel")}>
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
      <DossierSection title={t("title")} tabLabel={t("tabLabel")}>
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
      <DossierSection title={t("title")} tabLabel={t("tabLabel")}>
        <div className="space-y-4 font-body text-[var(--text-secondary)] leading-relaxed">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] mb-3">
              {t("primary")}
            </p>
            <p className="text-sm">{t("s1")}</p>
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
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/miguelrzazo/23f-desclasificado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-classified-red dark:text-classified-brightred hover:underline underline-offset-4 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://ko-fi.com/miguelrosa52805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-classified-red dark:text-classified-brightred hover:underline underline-offset-4 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
              </svg>
              Ko-fi
            </a>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">{t("support")}</p>
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

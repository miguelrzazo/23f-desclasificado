import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function PrisionerosEN() {
  return (
    <>
      {/* ── Section 1: Tejero in prison ── */}
      <DossierSection
        title="Tejero in prison"
        stamp="secreto"
        tabLabel="DETENTION"
      >
        <p>
          After the surrender on February 24, Antonio Tejero was arrested and
          transferred to military facilities. Documents from Folder 21802 detail
          the lifting of his incommunicado status, security protocols for
          visits, communication restrictions ordered by the Minister of Defense,
          and his subsequent transfer to the naval prison in Cartagena.
        </p>

        <p>
          Tejero&apos;s custody received special attention: he was simultaneously
          the most visible plotter — the man with the pistol in Congress — and
          the detainee with the greatest ability to mobilize sympathy in the
          barracks.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Folder 21802
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 2: Milans del Bosch ── */}
      <DossierSection
        title="Milans del Bosch: detention and complaints"
        stamp="secreto"
        tabLabel="MILANS"
      >
        <p>
          The Chief of the Army General Staff prepared a detailed report on the
          circumstances of Milans del Bosch&apos;s detention at EME headquarters.
          Milans complained about the treatment he received. The Royal Household
          intervened to review his detention conditions — a revealing detail of
          the political complexity of the moment: the same King who had thwarted
          the coup had to manage the dignity of an imprisoned Lieutenant
          General.
        </p>

        <p>
          Milans del Bosch was finally confined to the Naval Prison of Caranza,
          where he would remain for years. His defiant attitude during detention
          and the trial was a constant reflection of his conviction that he had
          acted for patriotic reasons.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Folder 21804
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 3: The 33 defendants ── */}
      <DossierSection
        title="The 33 defendants: distribution"
        stamp="reservado"
        tabLabel="DEFENDANTS"
      >
        <p>
          The 33 defendants — 32 military officers and one civilian — were
          distributed among various military installations during the trial.
          Folder 21804 contains the complete list with names and destinations.
          The distribution was not random: separating the defendants was a
          security measure to prevent coordination of testimony and the
          organization of new conspiracies from within prison itself.
        </p>

        <p>
          The documents reveal the logistics of a state that had to try its own
          military officers while managing the real possibility that the army
          guarding the prisoners sympathized with them.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Carpeta_21804_distribucion_procesados.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 4: The fugitive ── */}
      <DossierSection
        title="The fugitive: Captain Sánchez Valiente"
        stamp="secreto"
        tabLabel="FUGITIVE"
      >
        <p>
          The most novelistic case in the corpus. Civil Guard Captain Gil
          Sánchez Valiente Portillo was last seen near Congress on the morning of
          February 24, 1981. After that, he vanished without a trace.
        </p>

        <p>
          Intelligence documents reconstruct his escape: he traveled with an
          Argentine passport obtained through his brother, a resident of Rome.
          He crossed several countries in Latin America and Europe. The last
          reported sighting was in Greece — although intelligence suspected it
          could be deliberate disinformation to conceal his real location. His
          wife was in London.
        </p>

        <p>
          He was charged with &ldquo;abandonment of post&rdquo; in Case 9481.
          His service record was reviewed by the Office of the Attorney General.
          The Sánchez Valiente case reveals the international support networks
          that protected the plotters — forged passports, prepared escape routes,
          contacts in multiple countries.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Doc_77_R.txt, Case 9481
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 5: The prosecutions ── */}
      <DossierSection
        title="The prosecutions"
        stamp="reservado"
        tabLabel="LEGAL"
      >
        <p>
          Folders 21800 contain the prosecution communications for the main
          defendants: Milans del Bosch, Torres Rojas, Menéndez Vives, Cortina
          Prieto, Gómez Iglesias, and Batista González. They also include a
          recusal motion against the Minister of Defense filed by Cid Fortea&apos;s
          defense, a collective protest from the defense attorneys, and the
          petitions of the convicted.
        </p>

        <p>
          The judicial process was itself a battlefield: the defense tried to
          turn the trial into a political trial, the prosecutors fought to keep
          it within the realm of military rebellion, and the judges operated
          under pressure that culminated in the sanctioning of two of them.
        </p>

        <h3>The sanctioned judges</h3>

        <p>
          On June 17, 1982, two Legal Counselors of the tribunal were sanctioned
          for disrespect toward the Court President, General Gómez de Salazar:
          General Barcina Rodríguez (8 days of arrest) and General Carrero Ramos
          (14 days of arrest). The document recording the sanctions is classified
          as <strong>SECRET</strong>.
        </p>

        <p>
          Even within the tribunal judging the plotters, there were tensions that
          reflected the fracture of the military establishment. The judges were
          not immune to the pressures that intelligence documents monitored week
          after week.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Folder 21800, Carpeta_21801_sancion.txt
        </p>
      </DossierSection>
    </>
  );
}

import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function InternacionalEN() {
  return (
    <>
      {/* ── Section 1: United States ── */}
      <DossierSection
        title="United States: from indifference to correction"
        stamp="reservado"
        tabLabel="USA"
      >
        <h3>The Haig controversy</h3>

        <p>
          Secretary of State Alexander Haig initially characterized the coup as
          an &ldquo;internal matter of Spain.&rdquo; The statement provoked a
          diplomatic storm. The <em>New York Times</em> published an article
          criticizing the position. Felipe González, visiting the United Kingdom,
          contrasted &ldquo;European attitudes of support&rdquo; with
          &ldquo;insensitive American attitudes.&rdquo;
        </p>

        <h3>The correction</h3>

        <p>
          On February 24, Reagan called King Juan Carlos by telephone at 10:35
          AM (Spanish time). That same day, the State Department issued a
          statement:
        </p>

        <QuoteBlock
          text="The role and leadership of King Juan Carlos were clearly instrumental."
          source="US State Department, 02/24/1981 — D.3"
        />

        <p>
          On March 4, 1981, the United States Congress approved a resolution
          congratulating Spain:
        </p>

        <QuoteBlock
          text="Continued democratic political development in Spain makes an important contribution to US foreign policy interests."
          source="US Congressional Resolution, 03/04/1981 — D.8"
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: D.1, D.3, D.8, D.14
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 2: Europe ── */}
      <DossierSection
        title="Europe: democratic solidarity"
        stamp="reservado"
        tabLabel="EUROPE"
      >
        <h3>United Kingdom</h3>

        <p>
          Queen Elizabeth II sent a message saying she was &ldquo;strongly
          impressed&rdquo; and congratulating King Juan Carlos. The Speaker of
          the House of Commons congratulated Lavilla, president of the Spanish
          Congress, for conduct during the &ldquo;indignity.&rdquo;
        </p>

        <h3>West Germany</h3>

        <p>
          Foreign Minister Hans-Dietrich Genscher wrote to Spanish Minister
          Pérez-Llorca on February 25, expressing satisfaction at the resolution
          of the crisis.
        </p>

        <h3>Portugal</h3>

        <p>
          The city council of Elvas (APU — Aliança Povo Unido) approved a motion
          on February 26 condemning the &ldquo;fascist-inspired&rdquo; attempt
          and expressing solidarity with Spanish democracy. The Portuguese
          reaction was especially significant: the country had lived through its
          own democratic revolution just seven years earlier.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: D.28, D.29, D.15
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 3: Latin America and Cuba ── */}
      <DossierSection
        title="Latin America and Cuba"
        stamp="reservado"
        tabLabel="LATAM"
      >
        <p>
          Fidel Castro sent a message of concern to King Juan Carlos. The King
          formally responded on April 3, 1981 through the Cuban embassy,
          thanking him for the message and expressing confidence in bilateral
          relations. The Castro-Juan Carlos exchange is one of the most
          surprising documents in the corpus: a communist leader backing a
          monarch against a right-wing military coup.
        </p>

        <p>
          The newspaper <em>Granma</em> subsequently published a satirical
          article about an incident during the trial, comparing the defendants
          to &ldquo;peninsular gorillas.&rdquo;
        </p>

        <p>
          The Argentine Socialist Party expressed solidarity. The philosopher
          Julián Marías published an article in Mexico on the &ldquo;National
          Monarchy,&rdquo; analyzing the constitutional role of the Crown in the
          crisis.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: D.21, D.25, D.18-D.24
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 4: The King as diplomat ── */}
      <DossierSection
        title="The King as diplomat"
        tabLabel="CORRESPONDENCE"
      >
        <p>
          Juan Carlos I personally responded to several world leaders:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Recipient</th>
                <th className="text-left font-mono py-2 pr-4">Date</th>
                <th className="text-left font-mono py-2">Content</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Fidel Castro</td>
                <td className="py-2 pr-4 font-mono text-xs">Apr 3, 1981</td>
                <td className="py-2">Thanks for message of concern</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Queen Elizabeth II</td>
                <td className="py-2 pr-4 font-mono text-xs">Feb 1981</td>
                <td className="py-2">Thanks for congratulations</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">President of West Germany</td>
                <td className="py-2 pr-4 font-mono text-xs">Feb 1981</td>
                <td className="py-2">Thanks for support during the &ldquo;thwarted attack against constitutional Spain&rdquo;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: D.21, D.26, D.27
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 5: The declassification ── */}
      <DossierSection
        title="The declassification (2026)"
        stamp="desclasificado"
        tabLabel="FEB 2026"
      >
        <p>
          Order PJC/125/2026 of the Council of Ministers, published in the BOE
          (Official State Gazette) on February 24, 2026 — exactly 45 years after
          the coup — declassified all the documents. The decree invokes the
          Official Secrets Act of 1968 (Ley 9/1968), cites previous
          classification agreements from 1986, 1996, 2010, and 2014, and
          establishes the legal framework for public access to the documents.
        </p>

        <p>
          The coincidence with the 45th anniversary is not accidental. Spain
          chose the symbolism: on the very day Tejero burst into Congress with
          his Civil Guards, four and a half decades later, the documents the
          State had kept secret were opened to public scrutiny.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: BOE-A-2026-4351.txt
        </p>
      </DossierSection>
    </>
  );
}

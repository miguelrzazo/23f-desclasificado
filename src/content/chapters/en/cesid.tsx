import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function CesidEN() {
  return (
    <>
      <DossierSection
        title="The Letter from Sabino Fern\u00e1ndez Campo"
        stamp="reservado"
        tabLabel="DEC 1981"
      >
        <p>
          On December 14, 1981, the Secretary General of the Royal Household,
          Sabino Fern\u00e1ndez Campo, sent a personal and classified letter to
          CESID Director Emilio Alonso Manglano. The letter transmitted two
          items: the report used by the King in his meeting with the Prime
          Minister, the Defense Minister, and the Joint Chiefs of Staff; and
          suspicious visiting cards from a tailor shop that, read as an
          acrostic, spelled &ldquo;TEJERO.&rdquo;
        </p>

        <p>
          The letter was sent &ldquo;at the instruction of H.M. the King.&rdquo;
          The fact that the King ordered intelligence about covert threats
          transmitted to CESID reveals both the persistence of the coup threat
          and the Crown&apos;s active role in safeguarding democracy.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Doc_1_R.txt
        </p>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="The AOME: A Secret Service Within the Secret Service"
        stamp="secreto"
        tabLabel="INTERNAL INVESTIGATION"
      >
        <p>
          The most explosive revelation in the declassified corpus is CESID&apos;s
          internal investigation into its own special operations unit, the{" "}
          <strong>AOME</strong> (Special Operations and Means Group), commanded
          by Commander Jos\u00e9 Cortina Prieto.
        </p>

        <h3>AOME participants in the coup</h3>

        <p>
          The investigation identified <strong>6 AOME members</strong> with
          active participation:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Member</th>
                <th className="text-left font-mono py-2 pr-4">Rank</th>
                <th className="text-left font-mono py-2">Involvement</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Capt. Garc\u00eda Almenta</td>
                <td className="py-2 pr-4">Captain</td>
                <td className="py-2">Provided vehicles, radios and equipment for the column that stormed Congress. <strong className="text-[var(--accent)]">Prior knowledge</strong></td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Capt. G\u00f3mez Iglesias</td>
                <td className="py-2 pr-4">Captain</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Prior knowledge</strong> of the coup</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Sgt. Miguel Sales</td>
                <td className="py-2 pr-4">Sergeant</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Prior knowledge</strong></td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Cpl. Monge Segura</td>
                <td className="py-2 pr-4">Corporal</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Prior knowledge</strong></td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Cmdr. Cortina</td>
                <td className="py-2 pr-4">Commander (AOME chief)</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Suspect</strong>. Met Tejero the day before the coup</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Others</td>
                <td className="py-2 pr-4">\u2014</td>
                <td className="py-2">Under investigation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>&ldquo;Operation M\u00edster&rdquo;: the cover-up</h3>

        <p>
          After the coup failed, the AOME activated{" "}
          <strong>&ldquo;Operation M\u00edster&rdquo;</strong> and falsified the
          dates of its members&apos; movements on February 23 to cover up their
          participation. A state intelligence service covering up the
          involvement of its own agents in a coup d&apos;\u00e9tat: the gravity
          of this fact is difficult to overstate.
        </p>

        <h3>The internal investigation (Doc_7_R)</h3>

        <p>
          The longest document in the corpus (1,736 lines) contains the
          investigation order, code names of those investigated, sequential
          statements from multiple AOME members about their movements on
          February 23\u201324, contradictions between statements, and evidence
          of prior coordination with Tejero.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Doc_6_R.txt, Doc_7_R.txt
        </p>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="Cortina: The Man in the Shadows"
        stamp="secreto"
        tabLabel="CORTINA"
      >
        <p>
          Commander Jos\u00e9 Cortina Prieto, AOME chief, Infantry, General
          Staff, is the most enigmatic figure of 23-F. The declassified
          documents reveal multiple connections:
        </p>

        <ul className="list-disc pl-6 space-y-3 my-4">
          <li><strong>Day before the coup</strong>: According to Captain Abad&apos;s testimony at trial, Cortina met with Tejero</li>
          <li><strong>Operational link</strong>: Cortina directed the unit that provided vehicles and equipment for the assault</li>
          <li><strong>Prosecution</strong>: Cortina&apos;s prosecution was formally communicated. Discretion was requested</li>
          <li><strong>Judicial inquiry</strong>: The Supreme Military Court asked CESID what unit Cortina commanded, whether it produced intelligence reports, held digital records, or had interception systems</li>
        </ul>

        <QuoteBlock
          text="TODO PARECE ULTIMADO [...] sobre GOLPE INSTITUCIONAL o GOLPE A LA TURCA."
          source="4_Planificacion_golpe.txt \u2014 Section 'Cortina (the military man)'"
          context="Translation: 'EVERYTHING APPEARS FINALIZED [...] regarding an INSTITUTIONAL COUP or a TURKISH-STYLE COUP.'"
          highlighted={["GOLPE INSTITUCIONAL", "GOLPE A LA TURCA"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Doc_8_R.txt, Doc_75_R.txt, Doc_80_R.txt
        </p>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="Unanswered Questions"
        tabLabel="CONCLUSION"
      >
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>Did CESID Director Alonso Manglano know of AOME&apos;s participation before the coup?</li>
          <li>Was &ldquo;Operation M\u00edster&rdquo; ordered by the chain of command or on Cortina&apos;s initiative?</li>
          <li>To what extent was &ldquo;Operation Ariete&rdquo; \u2014 designed by CESID in the Carrero Blanco era \u2014 the operational model for 23-F?</li>
          <li>What did the AOME intelligence reports requested by the court contain?</li>
          <li>Was Cortina a link between the military conspiracy and the CESID leadership, or did he act alone?</li>
        </ol>

        <p>
          The declassified documents provide these questions with unprecedented
          clarity. The answers, 45 years later, remain elusive.
        </p>
      </DossierSection>
    </>
  );
}

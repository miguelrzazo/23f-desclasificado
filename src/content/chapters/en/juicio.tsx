import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function JuicioEN() {
  return (
    <>
      <DossierSection
        title="Framework of the Trial: Case 2/81"
        stamp="reservado"
        tabLabel="FEB 1982"
      >
        <p>
          The trial for the events of 23-F was prosecuted under Case 2/81, for
          military rebellion, before the Supreme Council of Military Justice. It
          was held at the Army Geographic Service in Campamento (Madrid) between
          February and June 1982. Sixteen Council members judged{" "}
          <strong>33 defendants</strong>: 32 military officers and one civilian.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Defendant</th>
                <th className="text-left font-mono py-2 pr-4">Rank</th>
                <th className="text-left font-mono py-2 pr-4">Sentence</th>
                <th className="text-left font-mono py-2">Defense strategy</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Jaime Milans del Bosch</td>
                <td className="py-2 pr-4">Lt. General</td>
                <td className="py-2 pr-4 text-[var(--accent)] font-bold">30 years</td>
                <td className="py-2">&ldquo;Redirecting&rdquo; more radical coups</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Antonio Tejero Molina</td>
                <td className="py-2 pr-4">Lt. Colonel, GC</td>
                <td className="py-2 pr-4 text-[var(--accent)] font-bold">30 years</td>
                <td className="py-2">&ldquo;National Operation on the King&apos;s Orders&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Alfonso Armada Comyn</td>
                <td className="py-2 pr-4">General</td>
                <td className="py-2 pr-4 text-[var(--accent)]">6 years</td>
                <td className="py-2">Went to Congress &ldquo;in a personal capacity&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">20 officers + 1 civilian</td>
                <td className="py-2 pr-4">Various</td>
                <td className="py-2 pr-4">1\u20136 years</td>
                <td className="py-2">Due obedience, state of necessity</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">11 GC lieutenants</td>
                <td className="py-2 pr-4">Lieutenants</td>
                <td className="py-2 pr-4 text-green-600 font-bold">Acquitted</td>
                <td className="py-2">Following superior officers&apos; orders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="Key Testimonies"
        stamp="secreto"
        tabLabel="STATEMENTS"
      >
        <h3>Tejero (March 17, 1982)</h3>

        <p>
          Tejero admitted planning the seizure of Congress. He stated that
          Cortina set the date of the coup. He affirmed that Armada confirmed
          it was a &ldquo;National Operation on the King&apos;s Orders.&rdquo;
          He rejected the coalition government proposed by Armada because it
          included socialists.
        </p>

        <p>
          In his final statement, Tejero expressed &ldquo;deep contempt&rdquo;
          for the military leadership that, according to him, had used and
          abandoned him.
        </p>

        <h3>Milans del Bosch (March 9, 1982)</h3>

        <p>
          Milans argued that 23-F was a &ldquo;redirection&rdquo; of more
          radical coups in preparation. He claimed to have acted on the
          King&apos;s orders transmitted through Armada. He denied knowing
          Colonel Manchado. He maintained a defiant attitude throughout.
        </p>

        <h3>Armada (March 9, 1982)</h3>

        <p>
          Armada denied all prior conspiracy. He said he went to Congress
          &ldquo;in a personal capacity&rdquo; to propose a government. He
          denied carrying a list of government members. He denied the King
          authorized anything. When his testimony was cross-referenced with
          Tejero&apos;s: total contradiction.
        </p>

        <h3>General Aramburu (April 5, 1982)</h3>

        <QuoteBlock
          text="Antes le mato y despu\u00e9s me pego un tiro"
          source="Tejero&apos;s threat to General Aramburu \u2014 Doc_40_R.txt"
          context="Translation: 'First I'll kill you and then I'll shoot myself'"
          highlighted={["mato", "pego un tiro"]}
        />

        <h3>General S\u00e1enz de Santamar\u00eda (April 5, 1982)</h3>

        <p>
          S\u00e1enz de Santamar\u00eda used the word{" "}
          <strong>&ldquo;hostages&rdquo;</strong> to refer to the detained
          deputies. The defendants and their families erupted in protest.{" "}
          <strong>The session was suspended.</strong> He confirmed that Armada
          proposed a provisional government and falsely told him the 2nd, 5th,
          and 7th Military Regions supported the coup.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Doc_55_R.txt, Doc_60_R.txt, Doc_40_R.txt, Doc_50_R.txt
        </p>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="The 'Redirection' Strategy"
        stamp="reservado"
        tabLabel="DEFENSE"
      >
        <p>
          Milans del Bosch&apos;s defense argued 23-F was not a coup but a
          &ldquo;redirection&rdquo; of more radical conspiracies, citing
          Article 8 of the Constitution (the Armed Forces guarantee Spain&apos;s
          sovereignty and territorial integrity).
        </p>

        <p>
          This strategy had a calculated side effect: naming the King as the
          source of orders. H.M. was mentioned more than{" "}
          <strong>96 times in a single session</strong> by defense lawyers, in
          what intelligence identified as a coordinated campaign to implicate
          the Crown.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Doc_33_R.txt
        </p>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="Incidents During the Trial"
        stamp="confidencial"
        tabLabel="INCIDENTS"
      >
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Date</th>
                <th className="text-left font-mono py-2">Incident</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Mar 1982</td>
                <td className="py-2">Military commissions from various regions show sympathy with the accused: applause, heckling journalists. CESID recommends weekly rotation.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Apr 5, 1982</td>
                <td className="py-2"><strong>&ldquo;Hostages&rdquo; incident</strong>: S\u00e1enz de Santamar\u00eda uses the word, session suspended.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Apr 28, 1982</td>
                <td className="py-2"><strong>Press incident</strong>: Cabeza Calahorra insults the press; journalist Pilar Urbano (ABC) attempts to organize a walkout.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Jun 17, 1982</td>
                <td className="py-2"><strong>Judges sanctioned</strong>: Barcina Rodr\u00edguez (8 days arrest) and Carrero Ramos (14 days) for disrespect to the Court President.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Ongoing</td>
                <td className="py-2">UME propaganda distributed in barracks: &ldquo;YOUR HOMELAND DEMANDS A GREAT SACRIFICE, KEEP YOUR MORALE HIGH AND WAIT AT YOUR POST. WE WILL CALL YOU.&rdquo;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: 3_Juicio_23F.txt, Doc_9_R.txt through Doc_65_R.txt
        </p>
      </DossierSection>

      <RedTape />

      <DossierSection
        title="Intelligence Assessment During the Trial"
        tabLabel="CESID"
      >
        <p>
          CESID produced weekly integrated assessments monitoring the
          paradoxically low public interest in the trial, far-right group
          activity (Fuerza Nueva, FE-JONS), propaganda targeting military
          units, psychological pressure on the judges, risk of incidents at
          the Victory parade in Zaragoza with the King present, and a
          &ldquo;Military Letter to the King&rdquo; circulating in military
          circles.
        </p>

        <p>
          The trial was itself a theater of tension where the coup threat
          remained present. The intelligence documents reveal that the State
          was fully aware that prosecuting the coup plotters could provoke
          another coup.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Doc_30_R.txt, Doc_45_R.txt, Doc_65_R.txt
        </p>
      </DossierSection>
    </>
  );
}

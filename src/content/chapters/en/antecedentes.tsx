import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function AntecedentesEN() {
  return (
    <>
      {/* ── Section 1: The Málaga incident ── */}
      <DossierSection
        title="The M\u00e1laga Incident: Seed of Sedition"
        stamp="confidencial"
        tabLabel="OCT 1977"
      >
        <p>
          On October 8, 1977, Lieutenant Colonel Antonio Tejero Molina, First
          Commander of the 251st Civil Guard Command in M\u00e1laga, disobeyed
          Civil Governor Enrique Riverola and ordered his forces to block an
          authorized youth demonstration demanding the right to vote at 18.
          Approximately 2,000 demonstrators were surrounded by civil guards
          armed with submachine guns and assault rifles.
        </p>

        <QuoteBlock
          text="Un solo provocador que hubiera arrojado un ladrillo y se hubiera producido una matanza. No son balas de goma."
          source="Armed Police present at the incident \u2014 11_Nota_prensa_arresto.txt"
          context="Translation: 'A single provocateur throwing a brick and there would have been a massacre. These aren't rubber bullets.'"
          highlighted={["matanza", "balas de goma"]}
        />

        <QuoteBlock
          text="Cre\u00edamos que la Guardia Civil se hab\u00eda sublevado cuando los manifestantes nos vimos rodeados por metralletas y fusiles. Lo primero que pensamos fue dirigirnos a los locales y quemar los archivos."
          source="Young member of the 'Joven Guardia Roja' \u2014 Cambio 16"
          context="Translation: 'We believed the Civil Guard had revolted when we demonstrators found ourselves surrounded by submachine guns and rifles. The first thing we thought was to go to our offices and burn the archives.'"
          highlighted={["sublevado", "metralletas y fusiles"]}
        />

        <p>
          Tejero was arrested and dismissed. But the Corps&apos; reaction was
          revealing: Commands across all of Spain \u2014 Alicante, Valladolid,
          Pontevedra, Orense, C\u00f3rdoba, Valencia, Barcelona, Oviedo,
          Seville, Zaragoza \u2014 filed Intelligence Notes to the SIGC
          reporting &ldquo;deep unease&rdquo; over the publicity given to the
          arrest.
        </p>

        <p>
          On October 12, the Feast of El Pilar and Patron Saint of the Civil
          Guard, Tejero attended ceremonies at the Los \u00c1ngeles barracks in
          M\u00e1laga. A voice shouted <strong>&ldquo;\u00a1VIVA EL TENIENTE
          CORONEL TEJERO!&rdquo;</strong> and a &ldquo;solid round of
          applause&rdquo; lasting approximately one minute followed.
          Agust\u00edn Utrera Mart\u00edn, provincial delegate of Fuerza Nueva,
          led a 50-person delegation to Tejero&apos;s home to express &ldquo;total
          support and loyalty.&rdquo;
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: 11_Nota_prensa_arresto.txt (2,469 lines, CONFIDENTIAL)
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 2: Operation Galaxia ── */}
      <DossierSection
        title="Operation Galaxia: First Rehearsal"
        stamp="secreto"
        tabLabel="NOV 1978"
      >
        <p>
          On November 10, 1978, a group of military officers met at the
          Cafeter\u00eda Galaxia in Madrid. Attendees included Tejero, Captain
          Inestrillas (Armed Police), Commander Vidal Franc\u00e9s, Commander
          Rodr\u00edguez Solano (Army Chief of Staff), and possibly Captain
          Alem\u00e1n.
        </p>

        <p>
          Six days later, on November 16 at 18:30, Tejero was interrogated in
          Toledo by Colonel Sergio Gallego Ronquillo and Lieutenant Colonel
          Andr\u00e9s Cassinello P\u00e9rez. The interrogators already knew of
          a coup planned for the following day.
        </p>

        <QuoteBlock
          text="Preguntado si hab\u00eda tratado sobre un posible golpe de estado o golpe de fuerza contra la Moncloa, manifiesta que no y que no trat\u00f3 para nada ese tema."
          source="Tejero interrogation \u2014 10_Nota_Tejero_Galaxia.txt"
          context="Translation: 'Asked whether he had discussed a possible coup d'\u00e9tat or use of force against Moncloa, he states no and that he did not discuss that topic at all.'"
          highlighted={["golpe de estado", "golpe de fuerza"]}
        />

        <p>
          Tejero denied knowing Colonel Quintero (&ldquo;knows of him by
          hearsay&rdquo;), Colonel Mateo (Alc\u00e1zar de Toledo Regiment), and
          Colonel Maizterra (&ldquo;from his cadet days&rdquo;). The
          interrogation reveals that military intelligence was already tracking
          a network of contacts among conspiratorial officers \u2014 a network
          Tejero denied again and again, but which the documents prove existed.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: 10_Nota_Tejero_Galaxia.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 3: The nuclear document ── */}
      <DossierSection
        title="Planning Formalized: The Nuclear Document"
        stamp="secreto"
        tabLabel="NOV 1980"
      >
        <p>
          In November 1980, the most revealing document in the entire
          declassified corpus was drafted: a complete politico-military plan
          that systematically analyzes every possible scenario for regime
          change. It is a clandestine document, unsigned, without official
          classification \u2014 which makes it all the more disturbing.
        </p>

        <h3>Political scenario analysis</h3>

        <p>The document evaluates five paths to power:</p>

        <p>
          <strong>1. Civilian government without military component</strong> \u2014
          Christian Democrat, Liberal, Socialist options: all rated &ldquo;VERY
          LOW&rdquo; viability.
        </p>

        <p>
          <strong>2. Civilian government with military complement</strong> \u2014
          &ldquo;Credibility before all&rdquo; but &ldquo;probably null
          viability.&rdquo;
        </p>

        <QuoteBlock
          text="La intervenci\u00f3n ser\u00eda de forma INSTITUCIONAL, mediante PRONUNCIAMIENTO. VIABILIDAD DEL INTENTO: Si deterioro lento de la situaci\u00f3n \u2014 NINGUNA. Si deterioro r\u00e1pido de la situaci\u00f3n \u2014 MUY PROBABLE. La dimisi\u00f3n de Su\u00e1rez ser\u00eda inmediatamente la clave."
          source="4_Planificacion_golpe.txt \u2014 Scenario 3: The Lieutenant Generals"
          context="Translation: 'The intervention would be INSTITUTIONAL, through PRONOUNCEMENT. VIABILITY: Slow deterioration \u2014 NONE. Rapid deterioration \u2014 VERY LIKELY. Su\u00e1rez's resignation would immediately be the key.'"
          highlighted={["PRONUNCIAMIENTO", "MUY PROBABLE"]}
        />

        <h3>Operational plan: from D-40 to H-Hour</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Phase</th>
                <th className="text-left font-mono py-2 pr-4">Timeline</th>
                <th className="text-left font-mono py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-40</td>
                <td className="py-2 pr-4">Designation</td>
                <td className="py-2">Group leaders, missions, liaison</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-7</td>
                <td className="py-2 pr-4">Readiness</td>
                <td className="py-2">Radio frequencies to monitor, orders</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-4</td>
                <td className="py-2 pr-4">Briefing</td>
                <td className="py-2">Sympathetic senior commanders</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 font-bold text-[var(--accent)]">
                <td className="py-2 pr-4">H-Hour</td>
                <td className="py-2 pr-4">02:00</td>
                <td className="py-2">Disable communications, patrol, seize objectives</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">D+1</td>
                <td className="py-2 pr-4">Broadcast</td>
                <td className="py-2">Radio announcement \u2014 operation complete</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Five commando groups</h3>

        <p>
          <strong>Group A</strong>: TVE, RNE, Communications Palace,
          Telef\u00f3nica, media outlets.{" "}
          <strong>Group B</strong>: Radio stations, news agencies, Atocha
          station, airport.{" "}
          <strong>Group C</strong>: Military high command, General Staff,
          Security HQ, ministries.{" "}
          <strong>Group D</strong>: Presidency, military chiefs, brigade
          commanders.{" "}
          <strong>Group E</strong>: Prime Minister, Defense, Interior, Foreign
          Affairs ministries.
        </p>

        <h3>The trigger</h3>

        <QuoteBlock
          text="DETONANTE FINAL: Casual acci\u00f3n violenta provocada por ETA, GRAPO."
          source="4_Planificacion_golpe.txt"
          context="Translation: 'FINAL TRIGGER: Casual violent action provoked by ETA, GRAPO [terrorist organizations].'"
          highlighted={["DETONANTE FINAL", "ETA, GRAPO"]}
        />

        <p>
          A terrorist attack to serve as pretext for military intervention.
          The cynicism of the approach is revealing: the conspirators needed
          others&apos; blood to justify their seizure of power.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: 4_Planificacion_golpe.txt, 5_Manuscrito_planificacion.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 4: Operation Ariete ── */}
      <DossierSection
        title="Operation Ariete: The Shadow of CESID"
        stamp="reservado"
        tabLabel="MAR 1981"
      >
        <QuoteBlock
          text="Los autores del libro barajan la tesis de que el golpe militar estuvo basado en la 'Operaci\u00f3n Ariete', dise\u00f1ada por el CESID en la \u00e9poca de Carrero Blanco."
          source="18-03-81_Op_Ariete.txt \u2014 Information Brigade"
          context="Translation: 'The book's authors consider the thesis that the military coup was based on Operation Ariete, designed by CESID during the Carrero Blanco era.'"
          highlighted={["Operaci\u00f3n Ariete", "CESID"]}
        />

        <p>The operation comprised two phases:</p>

        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Power vacuum</strong>: neutralization of state decision centers</li>
          <li><strong>Mass disorder</strong>: provocation of street riots</li>
        </ol>

        <QuoteBlock
          text="La operaci\u00f3n se calcul\u00f3 que supondr\u00eda entre 80 y 110 muertos."
          source="18-03-81_Op_Ariete.txt"
          context="Translation: 'The operation was estimated to result in between 80 and 110 dead.'"
          highlighted={["80 y 110 muertos"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: 18-03-81_Op_Ariete.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 5: Conclusion ── */}
      <DossierSection
        title="From Insubordination to Coup d'\u00c9tat"
        tabLabel="CONCLUSION"
      >
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Year</th>
                <th className="text-left font-mono py-2 pr-4">Stage</th>
                <th className="text-left font-mono py-2">Scope</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">1977</td>
                <td className="py-2 pr-4">Individual insubordination</td>
                <td className="py-2">One officer, one city</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">1978</td>
                <td className="py-2 pr-4">Group conspiracy</td>
                <td className="py-2">5 officers in a caf\u00e9</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">1980</td>
                <td className="py-2 pr-4">Complete politico-military plan</td>
                <td className="py-2">9 regions, 5 commando groups, timeline</td>
              </tr>
              <tr className="font-bold text-[var(--accent)]">
                <td className="py-2 pr-4 font-mono">1981</td>
                <td className="py-2 pr-4">Execution</td>
                <td className="py-2">Congress of Deputies stormed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Relative impunity \u2014 Tejero was arrested but not prosecuted in
          1977, given a light sentence for Galaxia \u2014 allowed the
          conspiracy to mature into the most serious attack on Spanish
          democracy. Each station was a stepping stone, each station was an
          ignored warning.
        </p>
      </DossierSection>
    </>
  );
}

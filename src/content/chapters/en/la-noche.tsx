import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function LaNocheEN() {
  return (
    <>
      {/* ── Section 1: Minute-by-minute ── */}
      <DossierSection
        title="Minute-by-Minute Chronology"
        stamp="secreto"
        tabLabel="23 FEB 1981"
      >
        <p>
          The reconstruction of the night of 23-F comes from cross-referencing
          six simultaneous documents: the Civil Guard HQ intelligence log,
          phone intercepts (Garc\u00eda Carr\u00e9s-Tejero, Garc\u00eda
          Carr\u00e9s-unknown, the El Pardo military unit), the DDI (CESID)
          operations chronology, and the Zarzuela Palace timeline.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4 w-20">Time</th>
                <th className="text-left font-mono py-2">Event</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-[var(--accent)]">17:00</td>
                <td className="py-2">Confinement order for the Armored Division (DAC)</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono text-[var(--accent)] font-bold">18:20</td>
                <td className="py-2 font-bold">Radio reports the assault on Congress during the investiture vote for Calvo-Sotelo</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">18:22</td>
                <td className="py-2">The King hears the news on radio at Zarzuela Palace</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">18:25</td>
                <td className="py-2">7 buses with armed Civil Guard personnel arrive at Congress</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">18:30</td>
                <td className="py-2">CESID checks with all agencies: &ldquo;nobody knew anything&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono">18:30&ndash;18:45</td>
                <td className="py-2 font-bold">General Armada calls Zarzuela asking to come. The King denies him.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono">~18:45</td>
                <td className="py-2 font-bold">General Juste (DAC chief) asks if Armada is at Zarzuela. Learning he is not: &ldquo;This completely changes the situation&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">19:00</td>
                <td className="py-2">CESID operations center established</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">19:00&ndash;19:15</td>
                <td className="py-2">The King speaks with Milans del Bosch in Valencia. Milans says he is &ldquo;at the King&apos;s orders&rdquo; but asks him to speak with Armada</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono font-bold">~21:00</td>
                <td className="py-2 font-bold">State of exception declared in Valencia by Milans del Bosch. Tanks in the streets.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">21:00&ndash;22:00</td>
                <td className="py-2">Garc\u00eda Carr\u00e9s telephoning Tejero inside Congress. Tejero agitated, cursing.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">00:07</td>
                <td className="py-2">Civilians released from Congress</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono font-bold">01:14</td>
                <td className="py-2 font-bold">The King&apos;s televised message broadcast</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">03:20</td>
                <td className="py-2">Intercepts from El Pardo: soldiers identify cavalry at TVE as Villaviciosa, ask about Milans</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono">Dawn</td>
                <td className="py-2">The coup collapses. Milans reverses course.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DossierSection>

      <RedTape />

      {/* ── Section 2: Voices of the night ── */}
      <DossierSection
        title="Voices of the Night: Phone Intercepts"
        stamp="secreto"
        tabLabel="INTERCEPTS"
      >
        <h3>Garc\u00eda Carr\u00e9s \u2014 Tejero (inside Congress)</h3>

        <p>
          The intercepted conversation reveals absolute chaos inside Congress.
          Tejero is agitated, cursing, unable to move. Garc\u00eda Carr\u00e9s
          acts as external liaison, reporting troop movements. References to
          &ldquo;Alfonso&rdquo; (Armada) attempting to negotiate with Carrillo
          and the ministers.
        </p>

        <QuoteBlock
          text="Un regimiento va para all\u00e1..."
          source="Garc\u00eda Carr\u00e9s to Tejero \u2014 1_Conv_GARCIA_CARRES_Tejero.txt"
          context="Translation: 'A regiment is heading your way...'"
        />

        <p>
          The exchanges are tense, vulgar, revealing of the operation&apos;s
          lack of control. The image that emerges is not of a disciplined
          military coup, but of a chaotic improvisation sustained by the
          inertia of terror.
        </p>

        <h3>Garc\u00eda Carr\u00e9s \u2014 Unknown interlocutor</h3>

        <p>
          In a second intercepted conversation, Garc\u00eda Carr\u00e9s
          mentions the Villaviciosa and Pav\u00eda regiments, a manifesto the
          Civil Guard inside the Cortes wants to transmit through the newspaper{" "}
          <em>El Alc\u00e1zar</em>, journalist Juan Pla, and &ldquo;the Abad
          connection.&rdquo; The conversation reveals direct coordination
          between media and coup plotters.
        </p>

        <h3>El Pardo Barracks (03:20 AM, February 24)</h3>

        <p>
          Soldiers and officers discuss the situation in the small hours.
          They identify the cavalry at TVE as belonging to the Villaviciosa
          Regiment. They ask about Captain Corcuero and Milans del Bosch. The
          conversation reveals total confusion within military units about who
          had ordered what.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: 1_Conv_GARCIA_CARRES_Tejero.txt, 2_Conv_GARCIA_CARRES.txt,
          3_Conv_unidad_militar_El_Pardo.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 3: Zarzuela ── */}
      <DossierSection
        title="Zarzuela: The Palace Account"
        stamp="secreto"
        tabLabel="ZARZUELA"
      >
        <p>
          Document <span className="font-mono text-xs">Doc_20_R.txt</span> \u2014
          titled <em>&ldquo;Brief Account of the Events of February 23 and 24,
          1981, as Known at Zarzuela Palace&rdquo;</em> \u2014 is the most
          important document in the corpus. It is the Royal Household&apos;s
          official account of the night of the coup.
        </p>

        <h3>Armada wants to go to Zarzuela \u2014 the King says no</h3>

        <p>
          General Armada calls asking to present himself at the Palace. The
          King refuses. This is crucial: the conspirators had built their plan
          on the premise that Armada was acting with royal authorization. By
          denying him entry, the King cuts that narrative.
        </p>

        <h3>&ldquo;This completely changes the situation&rdquo;</h3>

        <p>
          General Juste, commander of the Brunete Armored Division, insistently
          asks whether Armada is at Zarzuela. When told no, he responds with
          that revealing phrase. This suggests the DAC was prepared to move if
          Armada had been with the King — that is, if the King had provided
          institutional cover for the coup.
        </p>

        <h3>The King&apos;s calls to the Captain Generals</h3>

        <p>
          The King personally called each Captain General, one by one. Milans
          del Bosch said he was &ldquo;at the King&apos;s orders&rdquo; but asked
          him to speak with Armada. The King ordered all troops back to barracks.
          In that call, the King made his position unmistakable:
        </p>

        <QuoteBlock
          text="Juro que ni abdicaré la Corona, ni abandonaré España. Quien se subleve, está dispuesto a provocar y será responsable de ello, una nueva guerra civil"
          source="Juan Carlos I — Doc_20_R.txt"
          context="To Milans del Bosch by phone, February 23, 1981, ~19:00h. Translation: 'I swear I will neither abdicate the Crown nor abandon Spain. Whoever rebels is prepared to provoke and will be responsible for a new civil war.'"
          highlighted={["ni abdicaré la Corona, ni abandonaré España", "nueva guerra civil"]}
        />

        <h3>Armada at Congress: &ldquo;I have failed&rdquo;</h3>

        <p>
          General Aramburu (Director General of the Civil Guard) escorts Armada
          to the door of Congress. An officer receives him — not Tejero.
          Armada proposes a coalition government. Upon leaving, he says:
        </p>

        <QuoteBlock
          text="He fracasado."
          source="General Armada, leaving Congress \u2014 Doc_20_R.txt"
          context="Translation: 'I have failed.'"
          highlighted={["He fracasado"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Doc_20_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 4: CESID ── */}
      <DossierSection
        title="CESID in the Night: Acting Without Chain of Command"
        stamp="reservado"
        tabLabel="CESID"
      >
        <p>
          CESID (Superior Defense Intelligence Center) was cut off from its
          natural chain of command by events. At 18:30, they checked with all
          agencies: &ldquo;nobody knew anything.&rdquo; At 19:00, operations
          center established. At 20:00, all sectors on green alert. At
          midnight, a call to the 3rd Military Region (Valencia) suggesting
          they reconsider.
        </p>

        <p>CESID recommended to the JUJEM (Joint Chiefs):</p>

        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Assume military control of the situation</li>
          <li>Psychological operations inside Congress</li>
          <li>Isolate the Congress area</li>
          <li>Share intelligence across all military regions</li>
        </ol>

        <p>
          CESID agents entered Congress to negotiate with the occupiers. The
          paradox is evident: the same intelligence service from which AOME
          members had participated in the conspiracy was now acting to resolve
          the crisis.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: Doc_4_R.txt, Doc_5_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 5: Cross-references ── */}
      <DossierSection
        title="Six Documents, Six Perspectives"
        tabLabel="ANALYSIS"
      >
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Document</th>
                <th className="text-left font-mono py-2">Unique perspective</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">GC Notes</td>
                <td className="py-2">Operational detail: numbers of buses, trucks, units</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Garc\u00eda Carr\u00e9s-Tejero</td>
                <td className="py-2">Emotional state and discoordination inside Congress</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Garc\u00eda Carr\u00e9s-X</td>
                <td className="py-2">Coordination with media and existence of a &ldquo;manifesto&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">El Pardo</td>
                <td className="py-2">Confusion in barracks \u2014 soldiers don&apos;t know who&apos;s in charge</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Doc_4_R (DDI)</td>
                <td className="py-2">CESID actions and communication with Valencia</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Doc_20_R (Zarzuela)</td>
                <td className="py-2">The King&apos;s role: his decisions, calls, rejection of Armada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Key contradiction</strong>: Milans del Bosch tells the King
          he is &ldquo;at his orders,&rdquo; but has simultaneously declared a
          state of exception in Valencia without royal authorization and
          deployed tanks. Colonel Manchado, Milans&apos; subordinate, refuses
          orders from anyone but Milans.
        </p>
      </DossierSection>
    </>
  );
}

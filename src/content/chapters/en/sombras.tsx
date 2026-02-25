import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function SombrasEN() {
  return (
    <>
      {/* ── Section 1: The threat that didn't end ── */}
      <DossierSection
        title="The threat that didn't end"
        stamp="secreto"
        tabLabel="1981–1983"
      >
        <p>
          Post-coup intelligence documents reveal that the threat to Spanish
          democracy did not end on February 24, 1981. It continued for years.
        </p>

        <h3>The three military factions</h3>

        <p>
          An intelligence report identified three military factions that
          continued conspiring, meeting in Valladolid:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Faction</th>
                <th className="text-left font-mono py-2 pr-4">Characteristics</th>
                <th className="text-left font-mono py-2">Meeting place</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">&ldquo;Los Inestrillos&rdquo;</td>
                <td className="py-2 pr-4">Open advocates of violent action. Led by Cdr. Sáenz de Inestrillas</td>
                <td className="py-2">Club La Hípica (military)</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">&ldquo;Los Almendros&rdquo;</td>
                <td className="py-2 pr-4">Intellectual faction, operating clandestinely through pamphlets</td>
                <td className="py-2">Clandestine</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold">Opus Dei current</td>
                <td className="py-2 pr-4">Ideological, more subtle</td>
                <td className="py-2">Institutional networks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          All three shared a common objective and could unite under the right
          circumstances.
        </p>

        <h3>Subversion classification system</h3>

        <p>
          A secret document established a taxonomy of subversive phases within
          the Armed Forces: the initial phase (political groups, rumors,
          pamphlets), the challenge-to-authority phase (graffiti such as
          &ldquo;THE KING MUST DECLARE&rdquo; or &ldquo;ARMY WAKE UP&rdquo;),
          the intimidation phase (threats, press attacks against commanders),
          and the active phase (riotous meetings, signed manifestos).
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: 5_Involucionismo_politico.txt, 2_Indices_subversion_FAS.txt (SECRET)
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 2: The campaign against the King ── */}
      <DossierSection
        title="The campaign against the King"
        stamp="reservado"
        tabLabel="DISINFORMATION"
      >
        <p>
          A disinformation campaign sought to implicate King Juan Carlos in the
          coup through three claims: that the King conspired with Armada in
          Baqueira (a ski resort), that the King forced Suárez&apos;s resignation,
          and that Armada acted with royal authorization.
        </p>

        <p>
          According to the intelligence report, the campaign served a dual
          purpose: reducing the defendants&apos; criminal liability (if they acted
          on the King&apos;s orders, there is no rebellion) and undermining the
          Crown as an institution to facilitate future coups.
        </p>

        <QuoteBlock
          text="La extrema derecha quiere implicar a la Monarquía y destruirla como institución democrática."
          source="4_Campana_contra_SM.txt"
          context="The far right wants to implicate the Monarchy and destroy it as a democratic institution."
          highlighted={["implicar a la Monarquía", "destruirla"]}
        />

        <p>
          The PCE (Spanish Communist Party), in an internal confidential note
          analyzed by police, warned clearly:
        </p>

        <QuoteBlock
          text="La sombra del golpe no se ha alejado."
          source="11-05-81_PCE.txt — Internal confidential PCE note"
          context="The shadow of the coup has not receded."
          highlighted={["sombra del golpe"]}
        />

        <QuoteBlock
          text="La extrema derecha domina el 'mercado negro del rumor'. Es un jaque mate contra la Monarquía del que no hay vuelta atrás."
          source="11-05-81_PCE.txt"
          context="The far right dominates the 'black market of rumor.' It is a checkmate against the Monarchy from which there is no turning back."
          highlighted={["mercado negro del rumor", "jaque mate contra la Monarquía"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: 4_Campana_contra_SM.txt, 11-05-81_PCE.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 3: Armed civilian networks ── */}
      <DossierSection
        title="Armed civilian networks"
        stamp="secreto"
        tabLabel="GUNMEN"
      >
        <p>
          A CESID document reveals that José Antonio Assiego, who controlled
          approximately <strong>40 professional gunmen</strong>{" "}
          (&ldquo;strikebreakers&rdquo;), was connected to Colonel Garchitorena
          (Army, Military Government of Madrid). On the night of 23-F, Assiego
          was prepared to deploy armed civilians on Garchitorena&apos;s orders.
        </p>

        <p>
          The document also connects Garchitorena to Commander Inestrillas and
          to armed groups created for operations in the Basque Country. The
          plotters&apos; network was not limited to the Army: it included civilian
          gunmen, financing networks, and connections to state terrorism.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: Doc_73_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 4: Support networks ── */}
      <DossierSection
        title="Support networks for the plotters"
        stamp="reservado"
        tabLabel="SUPPORT"
      >
        <h3>Financial aid to families</h3>

        <p>
          On March 18, 1981, senior military officials organized campaigns to
          provide financial support to the families of soldiers and Civil Guards
          involved in the coup. There was a &ldquo;firm conviction&rdquo; within
          a sector of the Army &ldquo;not to tolerate any persecution&rdquo; of
          these families.
        </p>

        <p>
          On March 27, 1981, the Association of Military and Police Spouses
          received substantial donations, deposited in a Banco Central account.
          The account was frozen by ministerial order.
        </p>

        <p>
          In May 1983, a group of businessmen and sympathizers formed a monthly
          common fund to support the families of those who lost their military
          status due to convictions.
        </p>

        <h3>Celebration of released convicts</h3>

        <p>
          In 1983, four Civil Guard captains (Lázaro Corthay, Pérez de la
          Lastra, Acera Martín, Bobis González) were released from the Castle of
          La Palma. A celebration banquet was organized with sympathizer
          networks, including connections to Commander Inestrillas.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Sources: 18-03-81_Ayuda_implicados.txt, 27-03-81_Bloqueo_cuenta.txt,
          10-05-83_Apoyo_economico.txt, 7_Notas_1983.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Section 5: Hostility toward the loyal ── */}
      <DossierSection
        title="Hostility toward the loyal"
        stamp="reservado"
        tabLabel="NOV 1981"
      >
        <p>
          A report classified as RESERVED-CONFIDENTIAL from November 1981
          documents that National Police officers who remained loyal to the King
          during 23-F were being ostracized and threatened within the military
          world, and attacked by the far-right press (<em>El Alcázar</em>,{" "}
          <em>Heraldo</em>, <em>Fuerza Nueva</em>).
        </p>

        <p>
          Generals Sáenz de Santamaría and Alcalá Galiano were specifically
          targeted. An officer of the Armored Division told a police officer:
        </p>

        <QuoteBlock
          text="No te preocupes, la próxima vez no te pasará nada."
          source="1_Informe_Situacion.txt (RESERVED-CONFIDENTIAL)"
          context="Don't worry, next time nothing will happen to you."
          highlighted={["la próxima vez"]}
        />

        <p>
          The phrase is chilling: &ldquo;next time&rdquo; implies the plotters
          took for granted that there would be another attempt.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Source: 1_Informe_Situacion.txt
        </p>
      </DossierSection>
    </>
  );
}

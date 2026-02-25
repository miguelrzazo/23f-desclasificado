import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function SombrasES() {
  return (
    <>
      {/* ── Sección 1: La amenaza que no terminó ── */}
      <DossierSection
        title="La amenaza que no terminó"
        stamp="secreto"
        tabLabel="1981–1983"
      >
        <p>
          Los documentos de inteligencia post-golpe revelan que la amenaza a la
          democracia española no terminó el 24 de febrero de 1981. Continuó
          durante años.
        </p>

        <h3>Las tres facciones militares</h3>

        <p>
          Un informe de inteligencia identificó tres facciones militares que
          seguían conspirando, reuniéndose en Valladolid:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Facción</th>
                <th className="text-left font-mono py-2 pr-4">Características</th>
                <th className="text-left font-mono py-2">Reunión</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">&ldquo;Los Inestrillos&rdquo;</td>
                <td className="py-2 pr-4">Abiertos defensores de la acción violenta. Liderados por el Cte. Sáenz de Inestrillas</td>
                <td className="py-2">Club La Hípica militar</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">&ldquo;Los Almendros&rdquo;</td>
                <td className="py-2 pr-4">Facción intelectual, operan clandestinamente a través de panfletos</td>
                <td className="py-2">Clandestino</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold">Corriente Opus Dei</td>
                <td className="py-2 pr-4">Ideológica, más sutil</td>
                <td className="py-2">Redes institucionales</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Las tres compartían un objetivo común y podían unirse bajo las
          circunstancias adecuadas.
        </p>

        <h3>Sistema de clasificación de la subversión</h3>

        <p>
          Un documento secreto estableció una taxonomía de fases subversivas
          dentro de las Fuerzas Armadas: la fase inicial (grupos políticos,
          rumores, panfletos), la fase de desafío a la autoridad (graffitis
          como &ldquo;EL REY DEBE DECLARAR&rdquo; o &ldquo;EJÉRCITO
          DESPIERTA&rdquo;), la fase de intimidación (amenazas, ataques en
          prensa contra mandos), y la fase activa (reuniones tumultuarias,
          manifiestos firmados).
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: 5_Involucionismo_politico.txt, 2_Indices_subversion_FAS.txt (SECRETO)
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: La campaña contra el Rey ── */}
      <DossierSection
        title="La campaña contra el Rey"
        stamp="reservado"
        tabLabel="DESINFORMACIÓN"
      >
        <p>
          Una campaña de desinformación buscaba implicar al Rey Juan Carlos en
          el golpe con tres afirmaciones: que el Rey conspiró con Armada en
          Baqueira (estación de esquí), que el Rey forzó la dimisión de Suárez,
          y que Armada actuó con autorización real.
        </p>

        <p>
          Según el informe de inteligencia, la campaña servía a un doble
          propósito: reducir la responsabilidad penal de los acusados (si
          actuaron por orden del Rey, no hay rebelión) y minar la Corona como
          institución para facilitar futuros golpes.
        </p>

        <QuoteBlock
          text="La extrema derecha quiere implicar a la Monarquía y destruirla como institución democrática."
          source="4_Campana_contra_SM.txt"
          highlighted={["implicar a la Monarquía", "destruirla"]}
        />

        <p>
          El PCE, en una nota confidencial interna analizada por la policía,
          advirtió con claridad:
        </p>

        <QuoteBlock
          text="La sombra del golpe no se ha alejado."
          source="11-05-81_PCE.txt — Nota confidencial interna del PCE"
          highlighted={["sombra del golpe"]}
        />

        <QuoteBlock
          text="La extrema derecha domina el 'mercado negro del rumor'. Es un jaque mate contra la Monarquía del que no hay vuelta atrás."
          source="11-05-81_PCE.txt"
          highlighted={["mercado negro del rumor", "jaque mate contra la Monarquía"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: 4_Campana_contra_SM.txt, 11-05-81_PCE.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: Redes civiles armadas ── */}
      <DossierSection
        title="Redes civiles armadas"
        stamp="secreto"
        tabLabel="PISTOLEROS"
      >
        <p>
          Un documento del CESID revela que José Antonio Assiego, quien
          controlaba aproximadamente <strong>40 pistoleros profesionales</strong>{" "}
          (&ldquo;rompehuelgas&rdquo;), estaba conectado con el Coronel
          Garchitorena (Ejército, Gobierno Militar de Madrid). La noche del
          23-F, Assiego estaba preparado para desplegar civiles armados por
          orden de Garchitorena.
        </p>

        <p>
          El documento también conecta a Garchitorena con el Comandante
          Inestrillas y con grupos armados creados para operaciones en el País
          Vasco. La red de los golpistas no se limitaba al Ejército: incluía
          pistoleros civiles, redes de financiación y conexiones con el
          terrorismo de Estado.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Doc_73_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: Redes de apoyo ── */}
      <DossierSection
        title="Redes de apoyo a los golpistas"
        stamp="reservado"
        tabLabel="APOYO"
      >
        <h3>Ayuda económica a las familias</h3>

        <p>
          El 18 de marzo de 1981, altos mandos militares organizaron campañas
          de apoyo económico a las familias de soldados y guardias civiles
          implicados. Existía una &ldquo;firme convicción&rdquo; en un sector
          del Ejército de &ldquo;no tolerar ninguna persecución&rdquo; de estas
          familias.
        </p>

        <p>
          El 27 de marzo de 1981, la Asociación de Esposas de Militares y
          Policías recibió donaciones sustanciales, depositadas en una cuenta
          del Banco Central. La cuenta fue congelada por orden ministerial.
        </p>

        <p>
          En mayo de 1983, un grupo de empresarios y simpatizantes formó un
          fondo mensual común para sostener a las familias de los que perdieron
          su condición militar por las condenas.
        </p>

        <h3>Celebración de la liberación de convictos</h3>

        <p>
          En 1983, cuatro capitanes de la Guardia Civil (Lázaro Corthay, Pérez
          de la Lastra, Acera Martín, Bobis González) fueron liberados del
          Castillo de La Palma. Se organizó un banquete de celebración con redes
          de simpatizantes, incluyendo conexiones con el Comandante Inestrillas.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: 18-03-81_Ayuda_implicados.txt, 27-03-81_Bloqueo_cuenta.txt,
          10-05-83_Apoyo_economico.txt, 7_Notas_1983.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 5: Hostilidad hacia los leales ── */}
      <DossierSection
        title="La hostilidad hacia los leales"
        stamp="reservado"
        tabLabel="NOV 1981"
      >
        <p>
          Un informe clasificado como RESERVADO-CONFIDENCIAL de noviembre de
          1981 documenta que los oficiales de la Policía Nacional que
          permanecieron leales al Rey durante el 23-F estaban siendo
          ostracizados y amenazados dentro del mundo militar, y atacados por la
          prensa de ultraderecha (<em>El Alcázar</em>, <em>Heraldo</em>,{" "}
          <em>Fuerza Nueva</em>).
        </p>

        <p>
          Los Generales Sáenz de Santamaría y Alcalá Galiano fueron
          específicamente señalados. Un oficial de la División Acorazada le
          dijo a un policía:
        </p>

        <QuoteBlock
          text="No te preocupes, la próxima vez no te pasará nada."
          source="1_Informe_Situacion.txt (RESERVADO-CONFIDENCIAL)"
          highlighted={["la próxima vez"]}
        />

        <p>
          La frase es escalofriante: &ldquo;la próxima vez&rdquo; implica que
          los golpistas daban por sentado que habría otro intento.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: 1_Informe_Situacion.txt
        </p>
      </DossierSection>
    </>
  );
}

import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function CesidES() {
  return (
    <>
      {/* ── Sección 1: La carta de Sabino ── */}
      <DossierSection
        title="La carta de Sabino Fernández Campo"
        stamp="reservado"
        tabLabel="DIC 1981"
      >
        <p>
          El 14 de diciembre de 1981, el Secretario General de la Casa Real,
          Sabino Fernández Campo, envió una carta personal y reservada al
          Director del CESID, Emilio Alonso Manglano. La carta transmitía dos
          elementos: el informe utilizado por el Rey en su reunión con el
          Presidente del Gobierno, el Ministro de Defensa y la Junta de Jefes
          de Estado Mayor; y unas tarjetas de visita sospechosas procedentes de
          una sastrería que, en acróstico, deletreaban &ldquo;TEJERO&rdquo;.
        </p>

        <p>
          La carta fue enviada &ldquo;por indicación de S.M. el Rey&rdquo;. El
          hecho de que el Rey ordenara transmitir al CESID información sobre
          amenazas encubiertas revela tanto la persistencia de la amenaza
          golpista como el papel activo de la Corona en la vigilancia de la
          democracia.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Doc_1_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: La AOME ── */}
      <DossierSection
        title="La AOME: el servicio secreto dentro del servicio secreto"
        stamp="secreto"
        tabLabel="INVESTIGACIÓN INTERNA"
      >
        <p>
          La revelación más explosiva del corpus desclasificado es la
          investigación interna del CESID sobre su propia unidad de operaciones
          especiales, la <strong>AOME</strong> (Agrupación de Operaciones y
          Medios Especiales), comandada por el Comandante José Cortina Prieto.
        </p>

        <h3>Participantes de la AOME en el golpe</h3>

        <p>
          La investigación identificó a <strong>6 miembros de la AOME</strong>{" "}
          con participación activa:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Miembro</th>
                <th className="text-left font-mono py-2 pr-4">Rango</th>
                <th className="text-left font-mono py-2">Participación</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Capitán García Almenta</td>
                <td className="py-2 pr-4">Capitán</td>
                <td className="py-2">Proporcionó vehículos, radios y equipo para la columna que asaltó el Congreso. <strong className="text-[var(--accent)]">Conocimiento previo</strong></td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Capitán Gómez Iglesias</td>
                <td className="py-2 pr-4">Capitán</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Conocimiento previo</strong> del golpe</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Sargento Miguel Sales</td>
                <td className="py-2 pr-4">Sargento</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Conocimiento previo</strong></td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Cabo Monge Segura</td>
                <td className="py-2 pr-4">Cabo</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Conocimiento previo</strong></td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Comandante Cortina</td>
                <td className="py-2 pr-4">Comandante (Jefe AOME)</td>
                <td className="py-2"><strong className="text-[var(--accent)]">Sospechoso</strong>. Reunión con Tejero el día antes del golpe</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Otros</td>
                <td className="py-2 pr-4">&mdash;</td>
                <td className="py-2">Investigados</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>&ldquo;Operación Míster&rdquo;: el encubrimiento</h3>

        <p>
          Tras el fracaso del golpe, la AOME activó la{" "}
          <strong>&ldquo;Operación Míster&rdquo;</strong> y falsificó las fechas
          de los movimientos de sus miembros el 23 de febrero para encubrir su
          participación. Un servicio de inteligencia del Estado encubriendo la
          participación de sus propios agentes en un golpe de Estado: la
          gravedad de este hecho es difícil de sobreestimar.
        </p>

        <h3>La investigación interna (Doc_7_R)</h3>

        <p>
          El documento más extenso del corpus (1.736 líneas) contiene la orden
          de investigación, los nombres en clave de los investigados,
          declaraciones secuenciales de múltiples miembros de la AOME sobre sus
          movimientos el 23-24 de febrero, contradicciones entre declaraciones,
          y evidencias de coordinación previa con Tejero.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Doc_6_R.txt, Doc_7_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: Cortina ── */}
      <DossierSection
        title="Cortina: el hombre en la sombra"
        stamp="secreto"
        tabLabel="CORTINA"
      >
        <p>
          El Comandante José Cortina Prieto, Jefe de la AOME, Infantería,
          Estado Mayor, es la figura más enigmática del 23-F. Los documentos
          desclasificados revelan múltiples conexiones:
        </p>

        <ul className="list-disc pl-6 space-y-3 my-4">
          <li>
            <strong>Día anterior al golpe</strong>: Según el testimonio del
            Capitán Abad en el juicio, Cortina se reunió con Tejero
          </li>
          <li>
            <strong>Conexión operativa</strong>: Cortina dirigía la unidad que
            proporcionó vehículos y equipo para el asalto
          </li>
          <li>
            <strong>Procesamiento</strong>: Se comunicó formalmente el
            procesamiento de Cortina en relación con los hechos del 23-24 de
            febrero. Se pidió discreción
          </li>
          <li>
            <strong>Consulta judicial</strong>: El Consejo Supremo de Justicia
            Militar preguntó al CESID: (a) qué órgano mandaba Cortina y si
            producía informes de inteligencia; (b) si el CESID tenía registros
            informáticos conectados a los hechos del 23-F; (c) si la unidad
            disponía de sistema de interceptación
          </li>
        </ul>

        <p>
          El documento de planificación del golpe incluye una sección titulada
          &ldquo;Cortina (el militar)&rdquo;, fechada entre el 23-F y julio de
          1981:
        </p>

        <QuoteBlock
          text="González del Yerro [...] antes de fin de Mayo va a pasar [...] CAOS METIBLE PREVEÍA ARMADA."
          source="4_Planificacion_golpe.txt — Sección 'Cortina (el militar)'"
          highlighted={["CAOS METIBLE", "ARMADA"]}
        />

        <QuoteBlock
          text="TODO PARECE ULTIMADO [...] sobre GOLPE INSTITUCIONAL o GOLPE A LA TURCA."
          source="4_Planificacion_golpe.txt — Sección 'Cortina (el militar)'"
          highlighted={["GOLPE INSTITUCIONAL", "GOLPE A LA TURCA"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Doc_8_R.txt, Doc_75_R.txt, Doc_80_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: Preguntas sin respuesta ── */}
      <DossierSection
        title="Preguntas sin respuesta"
        tabLabel="CONCLUSIÓN"
      >
        <p>
          Incluso después de la desclasificación, quedan interrogantes
          fundamentales sin resolver:
        </p>

        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>
            ¿Sabía el Director del CESID, Alonso Manglano, de la participación
            de la AOME antes del golpe?
          </li>
          <li>
            ¿Fue la &ldquo;Operación Míster&rdquo; ordenada por la cadena de
            mando o por iniciativa de Cortina?
          </li>
          <li>
            ¿Hasta qué punto la &ldquo;Operación Ariete&rdquo; — diseñada por
            el CESID en época de Carrero Blanco — fue el modelo operativo del
            23-F?
          </li>
          <li>
            ¿Qué contenían los informes de inteligencia de la AOME que el
            tribunal solicitó?
          </li>
          <li>
            ¿Fue Cortina un eslabón entre la conspiración militar y la cúpula
            del CESID, o actuó por su cuenta?
          </li>
        </ol>

        <p>
          Los documentos desclasificados proporcionan las preguntas con una
          claridad sin precedentes. Las respuestas, 45 años después, siguen
          sin llegar.
        </p>
      </DossierSection>
    </>
  );
}

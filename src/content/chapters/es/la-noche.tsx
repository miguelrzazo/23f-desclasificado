import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function LaNocheES() {
  return (
    <>
      {/* ── Sección 1: Cronología minuto a minuto ── */}
      <DossierSection
        title="Cronología minuto a minuto"
        stamp="secreto"
        tabLabel="23 FEB 1981"
      >
        <p>
          La reconstrucción de la noche del 23-F procede del cruce de seis
          documentos simultáneos: el log de inteligencia del Cuartel General de
          la Guardia Civil, las interceptaciones telefónicas (García
          Carrés-Tejero, García Carrés-desconocido, la unidad militar de El
          Pardo), la cronología de operaciones del DDI (CESID), y el relato
          cronológico del Palacio de la Zarzuela.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4 w-20">Hora</th>
                <th className="text-left font-mono py-2">Evento</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-[var(--accent)]">17:00</td>
                <td className="py-2">Orden de acuartelamiento para la División Acorazada (DAC)</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono text-[var(--accent)] font-bold">18:20</td>
                <td className="py-2 font-bold">Radio informa del asalto al Congreso durante la votación de investidura de Calvo-Sotelo</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">18:22</td>
                <td className="py-2">El Rey escucha la noticia por radio en la Zarzuela</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">18:25</td>
                <td className="py-2">7 autobuses del Parque con personal armado de la GC llegan al Congreso</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">18:30</td>
                <td className="py-2">CESID comprueba con todas las agencias: &ldquo;nadie sabía nada&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono">18:30&ndash;18:45</td>
                <td className="py-2 font-bold">El General Armada llama a Zarzuela pidiendo ir al Palacio. El Rey se lo deniega.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono">~18:45</td>
                <td className="py-2 font-bold">El General Juste (Jefe DAC) pregunta si Armada está en Zarzuela. Al saber que no: &ldquo;Esto cambia completamente la situación&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">19:00</td>
                <td className="py-2">Centro de operaciones del CESID establecido</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">19:00&ndash;19:15</td>
                <td className="py-2">El Rey habla con Milans del Bosch en Valencia. Milans dice estar &ldquo;a las órdenes del Rey&rdquo; pero le pide que hable con Armada</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">~19:30</td>
                <td className="py-2">Decisión de grabar el mensaje televisado del Rey</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">20:00</td>
                <td className="py-2">Todos los sectores del CESID en alerta verde</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">20:00&ndash;21:00</td>
                <td className="py-2">Caballería del Regimiento Villaviciosa 14 ocupa TVE bajo el mando del Capitán Merlo. Rechaza órdenes de retirarse.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">20:15</td>
                <td className="py-2">22 camiones militares entran en Madrid por la N-1</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">20:30</td>
                <td className="py-2">La BRIPAC (Brigada Paracaidista) toca generala</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono font-bold">~21:00</td>
                <td className="py-2 font-bold">Estado de excepción declarado en Valencia por Milans del Bosch. Tanques en las calles.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">21:00&ndash;22:00</td>
                <td className="py-2">García Carrés telefoneando a Tejero dentro del Congreso. Tejero agitado. García Carrés le informa de un regimiento en dirección al Congreso.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">00:00</td>
                <td className="py-2">CESID llama a Valencia sugiriendo que reconsidere sus acciones</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">00:07</td>
                <td className="py-2">Civiles liberados del Congreso</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 bg-[var(--accent)]/5">
                <td className="py-2 pr-4 font-mono font-bold">01:14</td>
                <td className="py-2 font-bold">Mensaje televisado del Rey emitido</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">03:20</td>
                <td className="py-2">Interceptaciones desde El Pardo: soldados identifican caballería en TVE como Villaviciosa, preguntan por Milans del Bosch</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono">Madrugada</td>
                <td className="py-2">El golpe se desmorona. Milans da marcha atrás.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: Las voces de la noche ── */}
      <DossierSection
        title="Las voces de la noche: interceptaciones telefónicas"
        stamp="secreto"
        tabLabel="INTERCEPTACIONES"
      >
        <h3>García Carrés — Tejero (dentro del Congreso)</h3>

        <p>
          La conversación interceptada revela el caos absoluto dentro del
          Congreso. Tejero está agitado, maldiciendo, sin poder moverse. García
          Carrés actúa como enlace externo, informando sobre movimientos de
          tropas. Se mencionan referencias a &ldquo;Alfonso&rdquo; (Armada) intentando
          negociar con Carrillo y los ministros.
        </p>

        <QuoteBlock
          text="Un regimiento va para allá..."
          source="García Carrés a Tejero — 1_Conv_GARCIA_CARRES_Tejero.txt"
        />

        <p>
          Los intercambios son tensos, vulgares, reveladores del descontrol de
          la operación. La imagen que emerge no es la de un golpe militar
          disciplinado, sino la de una improvisación caótica mantenida por la
          inercia del terror.
        </p>

        <h3>García Carrés — Interlocutor desconocido</h3>

        <p>
          En una segunda conversación interceptada, García Carrés menciona los
          regimientos Villaviciosa y Pavía, un manifiesto que la Guardia Civil
          dentro de las Cortes quiere transmitir a través del periódico{" "}
          <em>El Alcázar</em>. Menciona al periodista Juan Pla y &ldquo;la
          conexión Abad&rdquo;. La conversación revela la coordinación directa
          entre medios de comunicación y golpistas.
        </p>

        <h3>Cuartel de El Pardo (03:20 AM, 24 de febrero)</h3>

        <p>
          Soldados y oficiales discuten la situación en la madrugada. Identifican
          las unidades de caballería en TVE como pertenecientes al Regimiento
          Villaviciosa. Preguntan por el Capitán Corcuero y por Milans del
          Bosch. La conversación revela la confusión total dentro de las
          unidades militares sobre quién había ordenado qué — nadie tiene claro
          si están actuando por órdenes legítimas o participando en un golpe.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: 1_Conv_GARCIA_CARRES_Tejero.txt, 2_Conv_GARCIA_CARRES.txt,
          3_Conv_unidad_militar_El_Pardo.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: La Zarzuela ── */}
      <DossierSection
        title="La Zarzuela: el relato del Palacio del Rey"
        stamp="secreto"
        tabLabel="ZARZUELA"
      >
        <p>
          El documento <span className="font-mono text-xs">Doc_20_R.txt</span>{" "}
          — titulado <em>&ldquo;Sucinta relación de los hechos del 23 y 24 de
          febrero de 1981 según fueron conocidos en el Palacio de la
          Zarzuela&rdquo;</em> — es el documento más importante del corpus. Es
          el relato oficial de la Casa Real sobre la noche del golpe.
        </p>

        <h3>Armada quiere ir a Zarzuela — el Rey dice no</h3>

        <p>
          El General Armada llama pidiendo presentarse en el Palacio. El Rey se
          niega. Esto es crucial: los conspiradores habían construido su plan
          sobre la premisa de que Armada actuaba con autorización real. Al
          negarle la entrada, el Rey corta esa línea argumental.
        </p>

        <h3>&ldquo;Esto cambia completamente la situación&rdquo;</h3>

        <p>
          El General Juste, Jefe de la División Acorazada Brunete, pregunta
          insistentemente si Armada está en Zarzuela. Cuando le dicen que no,
          responde con esa frase reveladora. Esto sugiere que la DAC estaba
          dispuesta a moverse si Armada hubiera estado con el Rey — es decir, si
          el Rey hubiera dado cobertura institucional al golpe.
        </p>

        <h3>Las llamadas del Rey a los Capitanes Generales</h3>

        <p>
          El Rey llama personalmente a todos los Capitanes Generales, uno por
          uno. Milans del Bosch dice estar &ldquo;a las órdenes del Rey&rdquo;
          pero le pide que hable con Armada. El Rey ordena el acuartelamiento de
          las tropas.
        </p>

        <QuoteBlock
          text="Juro que ni abdicaré la Corona, ni abandonaré España. Quien se subleve, está dispuesto a provocar y será responsable de ello, una nueva guerra civil"
          source="Juan Carlos I — Doc_20_R.txt"
          context="A Milans del Bosch por teléfono, 23 de febrero de 1981, ~19:00h"
          highlighted={["ni abdicaré la Corona, ni abandonaré España", "nueva guerra civil"]}
        />

        <h3>TVE ocupada — el mensaje retrasado</h3>

        <p>
          El Capitán Merlo, del Regimiento Villaviciosa 14, ocupa las
          instalaciones de TVE con caballería y rechaza retirarse. Esto retrasa
          la emisión del mensaje del Rey hasta la 01:14 de la madrugada — casi
          siete horas después del asalto al Congreso.
        </p>

        <h3>Armada en el Congreso: &ldquo;He fracasado&rdquo;</h3>

        <p>
          El General Aramburu (Director General de la Guardia Civil) escolta a
          Armada hasta la puerta del Congreso. Un oficial lo recibe — no es
          Tejero. Armada propone un gobierno de concentración. Al salir, dice:
        </p>

        <QuoteBlock
          text="He fracasado."
          source="General Armada, al salir del Congreso — Doc_20_R.txt"
          highlighted={["He fracasado"]}
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Doc_20_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: El CESID en la noche ── */}
      <DossierSection
        title="El CESID en la noche: actuando sin cadena de mando"
        stamp="reservado"
        tabLabel="CESID"
      >
        <p>
          El CESID (Centro Superior de Información de la Defensa) quedó cortado
          de su cadena de mando natural por los acontecimientos. A las 18:30,
          comprobación con todas las agencias: &ldquo;nadie sabía nada&rdquo;. A
          las 19:00, centro de operaciones establecido. A las 20:00, todos los
          sectores en alerta verde. A medianoche, llamada a la 3.ª Región
          Militar (Valencia) sugiriendo que reconsidere sus acciones.
        </p>

        <p>El CESID recomendó al JUJEM:</p>

        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Asumir el control militar de la situación</li>
          <li>Operaciones psicológicas dentro del Congreso</li>
          <li>Aislar la zona del Congreso</li>
          <li>Compartir inteligencia sobre la situación en todas las regiones militares</li>
        </ol>

        <p>
          Agentes del CESID entraron al Congreso para negociar con los
          ocupantes. La paradoja es evidente: el mismo servicio de inteligencia
          del que habían participado miembros de la AOME en la conspiración
          estaba ahora actuando para resolver la crisis.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Doc_4_R.txt, Doc_5_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 5: Contradicciones cruzadas ── */}
      <DossierSection
        title="Seis documentos, seis perspectivas"
        tabLabel="ANÁLISIS"
      >
        <p>
          Los seis documentos de la noche se corroboran mutuamente en los
          tiempos y los hechos, pero cada uno revela algo que los demás no:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Documento</th>
                <th className="text-left font-mono py-2">Perspectiva única</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Notas GC</td>
                <td className="py-2">Detalle operativo: números de autobuses, camiones, unidades</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">García Carrés-Tejero</td>
                <td className="py-2">El estado emocional y la descoordinación dentro del Congreso</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">García Carrés-X</td>
                <td className="py-2">Coordinación con medios y existencia de un &ldquo;manifiesto&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">El Pardo</td>
                <td className="py-2">Confusión en los cuarteles — los soldados no saben quién manda</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Doc_4_R (DDI)</td>
                <td className="py-2">Actuación del CESID y comunicación con Valencia</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Doc_20_R (Zarzuela)</td>
                <td className="py-2">El papel del Rey: sus decisiones, llamadas, el rechazo a Armada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Contradicción clave</strong>: Milans del Bosch dice al Rey
          estar &ldquo;a sus órdenes&rdquo;, pero simultáneamente ha declarado
          el estado de excepción en Valencia sin autorización real y ha
          desplegado tanques. El Coronel Manchado, subordinado de Milans,
          rechaza órdenes de cualquiera salvo de Milans.
        </p>
      </DossierSection>
    </>
  );
}

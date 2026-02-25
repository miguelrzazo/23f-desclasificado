import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function PrisionerosES() {
  return (
    <>
      {/* ── Sección 1: Tejero en prisión ── */}
      <DossierSection
        title="Tejero en prisión"
        stamp="secreto"
        tabLabel="DETENCIÓN"
      >
        <p>
          Tras la rendición del 24 de febrero, Antonio Tejero fue detenido y
          trasladado a instalaciones militares. Los documentos de la Carpeta
          21802 detallan el levantamiento de la incomunicación, los protocolos
          de seguridad para las visitas, las restricciones de comunicación
          ordenadas por el Ministro de Defensa, y el posterior traslado a la
          prisión naval de Cartagena.
        </p>

        <p>
          La custodia de Tejero fue objeto de especial atención: representaba
          simultáneamente al golpista más visible — el hombre de la pistola en
          el Congreso — y al detenido con mayor capacidad de movilización de
          simpatías en los cuarteles.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Carpeta 21802
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: Milans del Bosch ── */}
      <DossierSection
        title="Milans del Bosch: detención y quejas"
        stamp="secreto"
        tabLabel="MILANS"
      >
        <p>
          El Jefe del Estado Mayor del Ejército elaboró un informe detallado
          sobre las circunstancias de la detención de Milans del Bosch en la
          sede del EME. Milans se quejó del trato recibido. La Casa Real
          intervino para revisar las condiciones de su detención — un dato
          revelador de la complejidad política del momento: el mismo Rey que
          había frustrado el golpe tenía que gestionar la dignidad de un
          Teniente General preso.
        </p>

        <p>
          Milans del Bosch fue finalmente recluido en la Prisión Naval de
          Caranza, donde permanecería durante años. Su actitud desafiante
          durante la detención y el juicio fue un reflejo constante de su
          convicción de haber actuado por motivos patrióticos.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Carpeta 21804
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: Los 33 procesados ── */}
      <DossierSection
        title="Los 33 procesados: distribución"
        stamp="reservado"
        tabLabel="PROCESADOS"
      >
        <p>
          Los 33 procesados — 32 militares y un civil — fueron distribuidos
          entre diversas instalaciones militares durante el juicio. La Carpeta
          21804 contiene la lista completa con nombres y destinos. La
          distribución no fue casual: separar a los acusados era una medida de
          seguridad para evitar la coordinación de testimonios y la organización
          de nuevas conspiraciones desde la propia prisión.
        </p>

        <p>
          Los documentos revelan la logística de un Estado que tenía que juzgar
          a sus propios militares mientras gestionaba la posibilidad real de que
          el ejército que custodiaba a los presos simpatizara con ellos.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Carpeta_21804_distribucion_procesados.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: El fugitivo ── */}
      <DossierSection
        title="El fugitivo: Capitán Sánchez Valiente"
        stamp="secreto"
        tabLabel="PRÓFUGO"
      >
        <p>
          El caso más novelesco del corpus. El Capitán de la Guardia Civil Gil
          Sánchez Valiente Portillo fue visto por última vez en las cercanías del
          Congreso la mañana del 24 de febrero de 1981. Después, desapareció sin
          dejar rastro.
        </p>

        <p>
          Los documentos de inteligencia reconstruyen su huida: viajaba con un
          pasaporte argentino obtenido a través de su hermano, residente en Roma.
          Cruzó varios países de América Latina y Europa. El último avistamiento
          reportado fue en Grecia — aunque la inteligencia sospechaba que podía
          ser desinformación deliberada para ocultar su ubicación real. Su esposa
          estaba en Londres.
        </p>

        <p>
          Fue acusado de &ldquo;abandono de destino&rdquo; en la Causa 9481. Su
          hoja de servicios fue revisada por la Asesoría Jurídica General. El
          caso Sánchez Valiente revela las redes internacionales de apoyo que
          protegieron a los golpistas — pasaportes falsos, rutas de escape
          preparadas, contactos en múltiples países.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Doc_77_R.txt, Causa_9481
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 5: Los procesamientos ── */}
      <DossierSection
        title="Los procesamientos"
        stamp="reservado"
        tabLabel="JURÍDICO"
      >
        <p>
          Las Carpetas 21800 contienen las comunicaciones de procesamiento de
          los principales implicados: Milans del Bosch, Torres Rojas, Menéndez
          Vives, Cortina Prieto, Gómez Iglesias y Batista González. También
          incluyen un recurso de recusación contra el Ministro de Defensa
          interpuesto por la defensa de Cid Fortea, una protesta colectiva de
          los abogados defensores, y las peticiones de los condenados.
        </p>

        <p>
          El proceso judicial fue en sí mismo un campo de batalla: los
          defensores intentaron convertir el juicio en un juicio político, los
          fiscales lucharon por mantenerlo en el ámbito de la rebelión militar,
          y los jueces operaron bajo una presión que culminó en la sanción de
          dos de ellos.
        </p>

        <h3>Los jueces sancionados</h3>

        <p>
          El 17 de junio de 1982, dos Consejeros Togados del tribunal fueron
          sancionados por falta de respeto al Presidente del Tribunal, General
          Gómez de Salazar: el General Barcina Rodríguez (8 días de arresto) y
          el General Carrero Ramos (14 días de arresto). El documento que
          registra las sanciones está clasificado como <strong>SECRETO</strong>.
        </p>

        <p>
          Incluso dentro del tribunal que juzgaba a los golpistas había
          tensiones que reflejaban la fractura del estamento militar. Los jueces
          no eran inmunes a las presiones que los documentos de inteligencia
          monitorizaban semana a semana.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Carpeta 21800, Carpeta_21801_sancion.txt
        </p>
      </DossierSection>
    </>
  );
}

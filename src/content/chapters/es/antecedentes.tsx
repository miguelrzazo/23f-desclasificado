import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import StampBadge from "@/components/ui/StampBadge";
import RedTape from "@/components/ui/RedTape";

export default function AntecedentesES() {
  return (
    <>
      {/* ── Sección 1: El incidente de Málaga ── */}
      <DossierSection
        title="El incidente de Málaga: el embrión de la sedición"
        stamp="confidencial"
        tabLabel="OCT 1977"
      >
        <p>
          El 8 de octubre de 1977, el Teniente Coronel Antonio Tejero Molina,
          Primer Jefe de la 251 Comandancia de la Guardia Civil de Málaga,
          desobedeció al Gobernador Civil Enrique Riverola y ordenó a sus
          fuerzas impedir una manifestación juvenil autorizada que pedía el
          derecho a voto a los 18 años. Aproximadamente 2.000 manifestantes
          fueron rodeados por guardias civiles armados con metralletas y
          subfusiles.
        </p>

        <QuoteBlock
          text="Un solo provocador que hubiera arrojado un ladrillo y se hubiera producido una matanza. No son balas de goma."
          source="Policía Armada presente en el incidente — 11_Nota_prensa_arresto.txt"
          highlighted={["matanza", "balas de goma"]}
        />

        <QuoteBlock
          text="Creíamos que la Guardia Civil se había sublevado cuando los manifestantes nos vimos rodeados por metralletas y fusiles. Lo primero que pensamos fue dirigirnos a los locales y quemar los archivos."
          source="Joven de la 'Joven Guardia Roja' — Cambio 16"
          highlighted={["sublevado", "metralletas y fusiles"]}
        />

        <p>
          Tejero fue arrestado y destituido. Pero la reacción del Cuerpo fue
          reveladora: las Comandancias de toda España — Alicante, Valladolid,
          Pontevedra, Orense, Córdoba, Valencia, Barcelona, Oviedo, Sevilla,
          Zaragoza — remitieron Notas Informativas al SIGC reportando
          &ldquo;profundo malestar&rdquo; por la publicidad dada al arresto.
        </p>

        <p>
          El 12 de octubre, Festividad del Pilar y Patrona de la Guardia Civil,
          Tejero asistió a los actos del cuartel de Los Ángeles de Málaga. Una
          voz gritó <strong>&ldquo;¡VIVA EL TENIENTE CORONEL TEJERO!&rdquo;</strong> y se
          produjo un &ldquo;cerrado aplauso&rdquo; de aproximadamente un minuto.
          Agustín Utrera Martín, delegado provincial de Fuerza Nueva, encabezó
          una comitiva de 50 personas que visitó el domicilio de Tejero para
          expresarle &ldquo;su total adhesión y apoyo&rdquo;.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: 11_Nota_prensa_arresto.txt (2.469 líneas, CONFIDENCIAL)
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: Operación Galaxia ── */}
      <DossierSection
        title="Operación Galaxia: primer ensayo"
        stamp="secreto"
        tabLabel="NOV 1978"
      >
        <p>
          El 10 de noviembre de 1978, un grupo de militares se reunió en la
          Cafetería Galaxia de Madrid. Los asistentes incluían a Tejero,
          el Capitán Inestrillas (Policía Armada), el Comandante Vidal Francés,
          el Comandante Rodríguez Solano (Estado Mayor del JEME) y posiblemente
          el Capitán Alemán.
        </p>

        <p>
          Seis días después, el 16 de noviembre a las 18:30 horas, Tejero fue
          interrogado en Toledo por el Coronel Sergio Gallego Ronquillo y el
          Teniente Coronel Andrés Cassinello Pérez. Los interrogadores ya sabían
          de un golpe previsto para el día siguiente.
        </p>

        <QuoteBlock
          text="Preguntado si había tratado sobre un posible golpe de estado o golpe de fuerza contra la Moncloa, manifiesta que no y que no trató para nada ese tema."
          source="Interrogatorio de Tejero — 10_Nota_Tejero_Galaxia.txt"
          highlighted={["golpe de estado", "golpe de fuerza"]}
        />

        <QuoteBlock
          text="Reiterándole la pregunta de si conoce la noticia de un posible y próximo golpe militar, o de fuerza, en Madrid y que tendría lugar el próximo día 17 de este mes, manifiesta no conocer ninguno, ni en esa fecha ni en ninguna."
          source="Interrogatorio de Tejero — 10_Nota_Tejero_Galaxia.txt"
          highlighted={["próximo día 17"]}
        />

        <p>
          Tejero negó conocer al Coronel Quintero (&ldquo;lo conoce de oídas&rdquo;),
          al Coronel Mateo (Regimiento Alcázar de Toledo) y al Coronel
          Maizterra (&ldquo;de sus tiempos de cadete&rdquo;). El interrogatorio
          revela que la inteligencia militar ya rastreaba una red de contactos
          entre oficiales conspirativos — una red que Tejero negaba una y otra
          vez, pero que los documentos demuestran que existía.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: 10_Nota_Tejero_Galaxia.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: El documento nuclear ── */}
      <DossierSection
        title="La planificación se formaliza: el documento nuclear"
        stamp="secreto"
        tabLabel="NOV 1980"
      >
        <p>
          En noviembre de 1980, se redactó el documento más revelador de todo el
          corpus desclasificado: un plan político-militar completo que analiza
          sistemáticamente todos los escenarios posibles para un cambio de
          régimen. Es un documento clandestino, sin firma, sin clasificación
          oficial — lo cual lo hace aún más inquietante.
        </p>

        <h3>Análisis de escenarios políticos</h3>

        <p>El documento evalúa cinco vías para la toma del poder:</p>

        <p>
          <strong>1. Gobierno civil sin componente militar</strong> —
          Democristiano (Herrero, Oreja, Álvarez, Landelino): &ldquo;Se probó
          con la UCD. Viabilidad: ESCASA&rdquo;. Liberal: &ldquo;Viabilidad MUY
          ESCASA&rdquo;. Socialista: &ldquo;Viabilidad MUY ESCASA&rdquo;.
        </p>

        <p>
          <strong>2. Gobierno civil con complemento militar</strong> — Con
          Gutiérrez Mellado, Villaescusa, Del Alegría. &ldquo;Credibilidad ante
          todos&rdquo; pero &ldquo;viabilidad probablemente nula&rdquo;.
        </p>

        <QuoteBlock
          text="La intervención sería de forma INSTITUCIONAL, mediante PRONUNCIAMIENTO. VIABILIDAD DEL INTENTO: Si deterioro lento de la situación — NINGUNA. Si deterioro rápido de la situación — MUY PROBABLE. La dimisión de Suárez sería inmediatamente la clave."
          source="4_Planificacion_golpe.txt — Escenario 3: Los Tenientes Generales"
          highlighted={["PRONUNCIAMIENTO", "MUY PROBABLE", "dimisión de Suárez"]}
        />

        <p>
          <strong>4. Los Coroneles — vía gradualista</strong>: &ldquo;No operan
          con prisas ya que tienen que el deterioro progresivo de la situación
          vaya pasando la línea de lo irreversible.&rdquo;
        </p>

        <p>
          <strong>5. Los Espontáneos — el grupo de Tejero</strong>: Con un
          antecedente en la Operación Galaxia, &ldquo;están convencidos de que la
          &lsquo;situación&rsquo; (núcleo hecho) atraerá al menos lo que de una
          fuerte reacción de mando.&rdquo;
        </p>

        <h3>Plan operativo: del D-40 a la Hora H</h3>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Fase</th>
                <th className="text-left font-mono py-2 pr-4">Plazo</th>
                <th className="text-left font-mono py-2">Acción</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-40</td>
                <td className="py-2 pr-4">Designación</td>
                <td className="py-2">Jefes de grupo, misiones, enlace</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-7</td>
                <td className="py-2 pr-4">Disposición</td>
                <td className="py-2">Emisiones a sintonizar, órdenes</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-4</td>
                <td className="py-2 pr-4">Información</td>
                <td className="py-2">A mandos superiores afines</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">D-2</td>
                <td className="py-2 pr-4">Reunión</td>
                <td className="py-2">Con comprometidos — confirmación</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30 font-bold text-[var(--accent)]">
                <td className="py-2 pr-4">Hora H</td>
                <td className="py-2 pr-4">02:00</td>
                <td className="py-2">Desactivación comunicaciones, patrullaje, ocupación de objetivos</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">D+1</td>
                <td className="py-2 pr-4">Comunicación</td>
                <td className="py-2">Por radio — fase terminada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Cinco grupos de comandos</h3>

        <p>
          <strong>Grupo A</strong>: TVE, RNE, Palacio de Comunicaciones, Telefónica, medios de difusión.{" "}
          <strong>Grupo B</strong>: Emisoras de radio (Radio España, SER, Radio Intercontinental), agencias de prensa, Estación de Atocha, Aeropuerto.{" "}
          <strong>Grupo C</strong>: JUJEM, Cuarteles Generales, Estado Mayor, DGS, DG Guardia Civil, Ministerios.{" "}
          <strong>Grupo D</strong>: Presidencia, JEME, AJEMA, Capitán General, Jefe DAC, Jefes de Brigada.{" "}
          <strong>Grupo E</strong>: Presidente del Gobierno, Ministerios de Defensa, Interior, Autonomías, Exteriores.
        </p>

        <h3>Personas a detener</h3>

        <p className="font-mono text-sm text-[var(--accent)]">
          Lavina, Sahagún, E. González, Gabino, Fraga, Suárez, Gutiérrez
          Mellado, Tierno Galván, Camacho, Redondo, Zabarte
        </p>

        <h3>Regiones militares comprometidas</h3>

        <p>
          Nueve regiones militares aparecen con responsables asignados:
          la 1.ª (Arboledas), la 2.ª (Saavedra), la 3.ª (Buelensalazar,
          con General de la Guardia Civil), la 5.ª (Santamaría), la 6.ª
          (Erroana/Cabezas), la 7.ª (Ruiz de Oña), la 8.ª (Soteras) y
          la 9.ª (Oñate). Cada una con enlaces de Estado Mayor y, en
          varios casos, comandantes de apoyo.
        </p>

        <h3>El detonante</h3>

        <QuoteBlock
          text="DETONANTE FINAL: Casual acción violenta provocada por ETA, GRAPO."
          source="4_Planificacion_golpe.txt"
          highlighted={["DETONANTE FINAL", "ETA, GRAPO"]}
        />

        <p>
          Una acción terrorista que sirviera de pretexto para la intervención
          militar. El cinismo del planteamiento es revelador: los conspiradores
          necesitaban sangre ajena para justificar su asalto al poder.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: 4_Planificacion_golpe.txt, 5_Manuscrito_planificacion.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: Operación Ariete ── */}
      <DossierSection
        title="La Operación Ariete: la sombra del CESID"
        stamp="reservado"
        tabLabel="MAR 1981"
      >
        <p>
          Un informe policial del 18 de marzo de 1981 analizaba un libro en
          preparación por el director de <em>Cambio-16</em> y el jefe de prensa
          del Ministerio del Interior. Los autores barajaban una tesis
          explosiva:
        </p>

        <QuoteBlock
          text="Los autores del libro barajan la tesis de que el golpe militar estuvo basado en la 'Operación Ariete', diseñada por el CESID en la época de Carrero Blanco."
          source="18-03-81_Op_Ariete.txt — Brigada de Información"
          highlighted={["Operación Ariete", "CESID", "Carrero Blanco"]}
        />

        <p>La operación constaba de dos fases:</p>

        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Vacío de poder</strong>: neutralización de los centros de
            decisión del Estado
          </li>
          <li>
            <strong>Desórdenes de masas</strong>: provocación de disturbios
            callejeros
          </li>
        </ol>

        <QuoteBlock
          text="La operación se calculó que supondría entre 80 y 110 muertos."
          source="18-03-81_Op_Ariete.txt"
          highlighted={["80 y 110 muertos"]}
        />

        <p>
          La segunda fase &ldquo;fue frenada en Barcelona pasadas las siete de la
          madrugada, en que se emuló una convocatoria callejera de CC.OO. y
          UGT.&rdquo; La conexión entre un plan del CESID de la época de Carrero
          Blanco y los hechos del 23-F constituye una de las líneas de
          investigación más inquietantes del corpus desclasificado.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: 18-03-81_Op_Ariete.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 5: Conclusión ── */}
      <DossierSection
        title="De la insubordinación al golpe de Estado"
        tabLabel="CONCLUSIÓN"
      >
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Año</th>
                <th className="text-left font-mono py-2 pr-4">Estadio</th>
                <th className="text-left font-mono py-2">Alcance</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">1977</td>
                <td className="py-2 pr-4">Insubordinación individual</td>
                <td className="py-2">Un oficial, una ciudad</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">1978</td>
                <td className="py-2 pr-4">Conspiración de grupo</td>
                <td className="py-2">5 oficiales en una cafetería</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono">1980</td>
                <td className="py-2 pr-4">Plan político-militar completo</td>
                <td className="py-2">9 regiones, 5 grupos de comandos, cronograma</td>
              </tr>
              <tr className="font-bold text-[var(--accent)]">
                <td className="py-2 pr-4 font-mono">1981</td>
                <td className="py-2 pr-4">Ejecución</td>
                <td className="py-2">Congreso de los Diputados asaltado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          La impunidad relativa — Tejero fue arrestado pero no procesado en
          1977, condenado a pena leve por Galaxia — permitió que la conspiración
          madurara hasta convertirse en el ataque más grave contra la democracia
          española. Cada estación fue un escalón, cada estación fue una
          advertencia ignorada.
        </p>
      </DossierSection>
    </>
  );
}

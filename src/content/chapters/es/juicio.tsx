import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function JuicioES() {
  return (
    <>
      {/* ── Sección 1: Marco del juicio ── */}
      <DossierSection
        title="Marco del juicio: Causa 2/81"
        stamp="reservado"
        tabLabel="FEB 1982"
      >
        <p>
          El juicio por los hechos del 23-F fue instruido bajo la Causa 2/81,
          por rebelión militar, ante el Consejo Supremo de Justicia Militar.
          Se celebró en el Servicio Geográfico del Ejército, en Campamento
          (Madrid), entre febrero y junio de 1982. Dieciséis miembros del
          Consejo juzgaron a <strong>33 procesados</strong>: 32 militares y
          un civil.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Acusado</th>
                <th className="text-left font-mono py-2 pr-4">Rango</th>
                <th className="text-left font-mono py-2 pr-4">Condena</th>
                <th className="text-left font-mono py-2">Defensa</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Jaime Milans del Bosch</td>
                <td className="py-2 pr-4">Tte. General</td>
                <td className="py-2 pr-4 text-[var(--accent)] font-bold">30 años</td>
                <td className="py-2">&ldquo;Reconducción&rdquo; de golpes más radicales</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Antonio Tejero Molina</td>
                <td className="py-2 pr-4">Tte. Coronel, GC</td>
                <td className="py-2 pr-4 text-[var(--accent)] font-bold">30 años</td>
                <td className="py-2">&ldquo;Operación Nacional a las Órdenes del Rey&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-bold">Alfonso Armada Comyn</td>
                <td className="py-2 pr-4">General</td>
                <td className="py-2 pr-4 text-[var(--accent)]">6 años</td>
                <td className="py-2">Fue al Congreso &ldquo;a título personal&rdquo;</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">20 oficiales + 1 civil</td>
                <td className="py-2 pr-4">Varios</td>
                <td className="py-2 pr-4">1&ndash;6 años</td>
                <td className="py-2">Obediencia debida, estado de necesidad</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">11 tenientes de la GC</td>
                <td className="py-2 pr-4">Tenientes</td>
                <td className="py-2 pr-4 text-green-600 font-bold">Absueltos</td>
                <td className="py-2">Cumplimiento de órdenes de sus superiores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: Testimonios clave ── */}
      <DossierSection
        title="Testimonios clave"
        stamp="secreto"
        tabLabel="DECLARACIONES"
      >
        <h3>Tejero (17 de marzo de 1982)</h3>

        <p>
          Tejero admitió planificar la toma del Congreso. Declaró que Cortina
          fijó la fecha del golpe. Afirmó que Armada le confirmó que era una
          &ldquo;Operación Nacional a las Órdenes del Rey&rdquo;. Rechazó el
          gobierno de concentración propuesto por Armada porque incluía
          socialistas.
        </p>

        <p>
          En su declaración final, Tejero expresó &ldquo;profundo desprecio&rdquo;
          por la cúpula militar que, según él, lo había utilizado y abandonado.
        </p>

        <h3>Milans del Bosch (9 de marzo de 1982)</h3>

        <p>
          Milans argumentó que el 23-F fue una &ldquo;reconducción&rdquo; de
          golpes más radicales en preparación. Dijo haber actuado por órdenes
          del Rey transmitidas a través de Armada. Alegó no conocer al Coronel
          Manchado. Mantuvo una actitud desafiante durante todo el juicio.
        </p>

        <h3>Armada (9 de marzo de 1982)</h3>

        <p>
          Armada negó toda conspiración previa. Dijo haber ido al Congreso
          &ldquo;a título personal&rdquo; a proponer un gobierno. Negó llevar
          lista de miembros del gobierno. Negó que el Rey autorizara nada.
          Cuando se cruzó su testimonio con el de Tejero: contradicción total.
        </p>

        <h3>General Aramburu (5 de abril de 1982)</h3>

        <QuoteBlock
          text="Antes le mato y después me pego un tiro"
          source="Amenaza de Tejero al General Aramburu — Doc_40_R.txt"
          highlighted={["mato", "pego un tiro"]}
        />

        <p>
          Aramburu confirmó que escoltó a Armada hasta la puerta del Congreso.
          Armada, al salir, dijo: &ldquo;He fracasado.&rdquo;
        </p>

        <h3>General Sáenz de Santamaría (5 de abril de 1982)</h3>

        <p>
          Sáenz de Santamaría usó la palabra <strong>&ldquo;rehenes&rdquo;</strong>{" "}
          para referirse a los diputados retenidos. Los acusados y sus familias
          estallaron en protesta. La sesión fue suspendida. Confirmó que Armada
          propuso un gobierno provisional y que Armada le dijo falsamente que la
          2.ª, 5.ª y 7.ª Regiones Militares apoyaban el golpe.
        </p>

        <h3>Capitán Abad (26 de marzo de 1982)</h3>

        <p>
          Testificó que Cortina se reunió con Tejero el día anterior al golpe.
          Declaró que el Coronel Manchado, Tejero y el Capitán Gómez Iglesias
          fueron determinantes en su decisión de participar.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Doc_55_R.txt, Doc_60_R.txt, Doc_40_R.txt, Doc_50_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: La estrategia de la reconducción ── */}
      <DossierSection
        title="La estrategia de la 'reconducción'"
        stamp="reservado"
        tabLabel="DEFENSA"
      >
        <p>
          La defensa de Milans del Bosch, a cargo del General Cabeza Calahorra
          y del abogado Escandell, sostuvo que el 23-F no fue un golpe de Estado
          sino una &ldquo;reconducción&rdquo; de conspiraciones más radicales.
          Milans habría actuado para canalizar las fuerzas golpistas hacia una
          salida constitucional, citando el Artículo 8 de la Constitución (las
          FAS garantizan la soberanía e integridad de España) y las Reales
          Ordenanzas.
        </p>

        <p>
          Esta estrategia tenía un efecto secundario calculado: nombrar al Rey
          como fuente de las órdenes. S.M. fue mencionado más de{" "}
          <strong>96 veces en una sola sesión</strong> por los abogados
          defensores, en lo que la inteligencia identificó como una campaña
          coordinada para implicar a la Corona.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: Doc_33_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: Incidentes ── */}
      <DossierSection
        title="Incidentes en el juicio"
        stamp="confidencial"
        tabLabel="INCIDENTES"
      >
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Fecha</th>
                <th className="text-left font-mono py-2">Incidente</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">Mar 1982</td>
                <td className="py-2">Comisiones militares de diversas regiones muestran simpatía con los acusados: aplausos, abucheos a periodistas, fraternización. El CESID recomienda rotación semanal.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">5 abr 1982</td>
                <td className="py-2"><strong>Incidente &ldquo;rehenes&rdquo;</strong>: Sáenz de Santamaría usa la palabra y provoca la suspensión de la sesión.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">28 abr 1982</td>
                <td className="py-2"><strong>Incidente con la prensa</strong>: Cabeza Calahorra insulta a la prensa; la periodista Pilar Urbano (ABC) intenta organizar un plante.</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4 font-mono text-xs">17 jun 1982</td>
                <td className="py-2"><strong>Jueces sancionados</strong>: Barcina Rodríguez (8 días de arresto) y Carrero Ramos (14 días) por falta de respeto al Presidente del Tribunal.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Todo el juicio</td>
                <td className="py-2">Propaganda de la UME distribuida en cuarteles: &ldquo;TU PATRIA EXIGE UN GRAN SACRIFICIO, MANTÉN TU MORAL ALTA Y ESPERA EN TU PUESTO. TE LLAMAREMOS.&rdquo;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: 3_Juicio_23F.txt, Doc_9_R.txt a Doc_65_R.txt
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 5: Valoración de inteligencia ── */}
      <DossierSection
        title="Valoración de inteligencia durante el juicio"
        tabLabel="CESID"
      >
        <p>
          El CESID produjo valoraciones integradas semanales que monitorizaban
          el bajo interés público en el juicio (paradójicamente), la actividad
          de grupos de extrema derecha (Fuerza Nueva, FE-JONS), la propaganda
          dirigida a unidades militares, la presión psicológica sobre los
          jueces, el riesgo de incidentes en el desfile de la Victoria en
          Zaragoza con presencia del Rey, y una &ldquo;Carta Militar al
          Rey&rdquo; circulando en círculos militares.
        </p>

        <p>
          El juicio fue, en sí mismo, un escenario de tensión donde la amenaza
          golpista continuaba presente. Los documentos de inteligencia revelan
          que el Estado era plenamente consciente de que juzgar a los golpistas
          podía provocar un nuevo golpe.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: Doc_30_R.txt, Doc_45_R.txt, Doc_65_R.txt
        </p>
      </DossierSection>
    </>
  );
}

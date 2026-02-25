import DossierSection from "@/components/ui/DossierSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import RedTape from "@/components/ui/RedTape";

export default function InternacionalES() {
  return (
    <>
      {/* ── Sección 1: Estados Unidos ── */}
      <DossierSection
        title="Estados Unidos: de la indiferencia a la rectificación"
        stamp="reservado"
        tabLabel="EEUU"
      >
        <h3>La controversia de Haig</h3>

        <p>
          El Secretario de Estado Alexander Haig caracterizó inicialmente el
          golpe como un &ldquo;asunto interno de España&rdquo;. La declaración
          provocó una tormenta diplomática. El <em>New York Times</em> publicó
          un artículo criticando la posición. Felipe González, de visita en el
          Reino Unido, contrastó las &ldquo;actitudes europeas de apoyo&rdquo;
          con las &ldquo;insensibles actitudes americanas&rdquo;.
        </p>

        <h3>La rectificación</h3>

        <p>
          El 24 de febrero, Reagan llamó por teléfono al Rey Juan Carlos a las
          10:35 de la mañana (hora española). Ese mismo día, el Departamento de
          Estado emitió una declaración:
        </p>

        <QuoteBlock
          text="The role and leadership of King Juan Carlos were clearly instrumental."
          source="Departamento de Estado de EEUU, 24/02/1981 — D.3"
        />

        <p>
          El 4 de marzo de 1981, el Congreso de los Estados Unidos aprobó una
          resolución congratulando a España:
        </p>

        <QuoteBlock
          text="Continued democratic political development in Spain makes an important contribution to US foreign policy interests."
          source="Resolución del Congreso de EEUU, 4/03/1981 — D.8"
        />

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: D.1, D.3, D.8, D.14
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 2: Europa ── */}
      <DossierSection
        title="Europa: solidaridad democrática"
        stamp="reservado"
        tabLabel="EUROPA"
      >
        <h3>Reino Unido</h3>

        <p>
          La Reina Isabel II envió un mensaje diciendo estar &ldquo;fuertemente
          impresionada&rdquo; y felicitando al Rey Juan Carlos. El Presidente
          de la Cámara de los Comunes congratuló a Lavilla, presidente del
          Congreso español, por la conducta durante la &ldquo;indignidad&rdquo;.
        </p>

        <h3>Alemania Federal</h3>

        <p>
          El Ministro de Asuntos Exteriores Hans-Dietrich Genscher escribió al
          Ministro español Pérez-Llorca el 25 de febrero, expresando
          satisfacción por la resolución de la crisis.
        </p>

        <h3>Portugal</h3>

        <p>
          El ayuntamiento de Elvas (APU — Aliança Povo Unido) aprobó una moción
          el 26 de febrero condenando el intento &ldquo;de inspiración
          fascista&rdquo; y expresando solidaridad con la democracia española.
          La reacción portuguesa fue especialmente significativa: el país había
          vivido su propia revolución democrática apenas siete años antes.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: D.28, D.29, D.15
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 3: América Latina y Cuba ── */}
      <DossierSection
        title="América Latina y Cuba"
        stamp="reservado"
        tabLabel="LATAM"
      >
        <p>
          Fidel Castro envió un mensaje de preocupación al Rey Juan Carlos. El
          Rey respondió formalmente el 3 de abril de 1981 a través de la
          embajada cubana, agradeciendo el mensaje y expresando confianza en las
          relaciones bilaterales. El intercambio Castro-Juan Carlos es uno de
          los documentos más sorprendentes del corpus: un líder comunista
          respaldando a un monarca contra un golpe militar de derechas.
        </p>

        <p>
          El periódico <em>Granma</em> publicó posteriormente un artículo
          burlesco sobre un incidente durante el juicio, comparando a los
          acusados con &ldquo;gorilas peninsulares&rdquo;.
        </p>

        <p>
          El Partido Socialista Argentino expresó solidaridad. El filósofo
          Julián Marías publicó un artículo en México sobre la &ldquo;Monarquía
          Nacional&rdquo;, analizando el papel constitucional de la Corona en
          la crisis.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: D.21, D.25, D.18-D.24
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 4: El Rey como diplomático ── */}
      <DossierSection
        title="El Rey como diplomático"
        tabLabel="CORRESPONDENCIA"
      >
        <p>
          Juan Carlos I respondió personalmente a varios líderes mundiales:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left font-mono py-2 pr-4">Destinatario</th>
                <th className="text-left font-mono py-2 pr-4">Fecha</th>
                <th className="text-left font-mono py-2">Contenido</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Fidel Castro</td>
                <td className="py-2 pr-4 font-mono text-xs">3 abr 1981</td>
                <td className="py-2">Agradecimiento por mensaje de preocupación</td>
              </tr>
              <tr className="border-b border-[var(--border)]/30">
                <td className="py-2 pr-4">Reina Isabel II</td>
                <td className="py-2 pr-4 font-mono text-xs">Feb 1981</td>
                <td className="py-2">Agradecimiento por felicitaciones</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Presidente de Alemania Federal</td>
                <td className="py-2 pr-4 font-mono text-xs">Feb 1981</td>
                <td className="py-2">Agradecimiento por apoyo al &ldquo;ataque frustrado contra la España constitucional&rdquo;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuentes: D.21, D.26, D.27
        </p>
      </DossierSection>

      <RedTape />

      {/* ── Sección 5: La desclasificación ── */}
      <DossierSection
        title="La desclasificación (2026)"
        stamp="desclasificado"
        tabLabel="FEB 2026"
      >
        <p>
          La Orden PJC/125/2026 del Consejo de Ministros, publicada en el BOE
          el 24 de febrero de 2026 — exactamente 45 años después del golpe —
          desclasificó la totalidad de los documentos. El decreto se ampara en
          la Ley 9/1968 de Secretos Oficiales, cita acuerdos de clasificación
          previos de 1986, 1996, 2010 y 2014, y establece el marco legal para
          el acceso público a los documentos.
        </p>

        <p>
          La coincidencia del 45.º aniversario no es casual. España eligió el
          simbolismo: en el mismo día en que Tejero irrumpió con sus guardias
          civiles en el Congreso, cuatro décadas y media después, los
          documentos que el Estado mantuvo en secreto quedaron abiertos al
          escrutinio público.
        </p>

        <p className="font-mono text-xs text-[var(--text-secondary)] mt-4">
          Fuente: BOE-A-2026-4351.txt
        </p>
      </DossierSection>
    </>
  );
}

// =============================================================================
// documents.ts — Index of all 154 declassified source documents
// Source: docs/plans/sintesis-documental.md (Fichas Documentales Completas)
// =============================================================================

export interface Document {
  id: string;
  filename: string;
  ministry:
    | "boe"
    | "defensa-cni"
    | "defensa-causas"
    | "exteriores"
    | "interior-archivo"
    | "interior-gc"
    | "interior-policia";
  classification:
    | "secreto"
    | "reservado"
    | "confidencial"
    | "sin-clasificar";
  date?: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  chapters: string[]; // chapter slugs where referenced
}

export const documents: Document[] = [
  // ===========================================================================
  // BOE (1 document)
  // ===========================================================================
  {
    id: "boe-desclasificacion",
    filename: "BOE-A-2026-4351.txt",
    ministry: "boe",
    classification: "sin-clasificar",
    date: "2026-02-24",
    title: {
      es: "Orden de desclasificación PJC/125/2026",
      en: "Declassification Order PJC/125/2026",
    },
    summary: {
      es: "Orden del Consejo de Ministros que desclasifica la totalidad de los documentos del 23-F. Amparada en la Ley 9/1968 de Secretos Oficiales. Cita acuerdos previos de 1986, 1996, 2010 y 2014",
      en: "Council of Ministers order declassifying all 23-F documents. Based on the 1968 Official Secrets Act. References prior agreements from 1986, 1996, 2010, and 2014",
    },
    chapters: ["desclasificacion"],
  },

  // ===========================================================================
  // INTERIOR — ARCHIVO (7 documents)
  // ===========================================================================
  {
    id: "informe-situacion",
    filename: "1_Informe_Situacion.txt",
    ministry: "interior-archivo",
    classification: "reservado",
    date: "1981-11",
    title: {
      es: "Informe de situación: hostilidad hacia oficiales leales",
      en: "Situation report: hostility toward loyal officers",
    },
    summary: {
      es: "Hostilidad hacia oficiales leales al Rey. Ataques de prensa ultraderechista (El Alcázar, Heraldo, Fuerza Nueva) contra Sáenz de Santamaría y Alcalá Galiano. Oficiales ostracizados y amenazados",
      en: "Hostility toward officers loyal to the King. Far-right press attacks (El Alcázar, Heraldo, Fuerza Nueva) against Sáenz de Santamaría and Alcalá Galiano. Officers ostracized and threatened",
    },
    chapters: ["sombras"],
  },
  {
    id: "indices-subversion",
    filename: "2_Indices_subversion_FAS.txt",
    ministry: "interior-archivo",
    classification: "secreto",
    date: "1981",
    title: {
      es: "Índices de subversión en las Fuerzas Armadas",
      en: "Subversion indices in the Armed Forces",
    },
    summary: {
      es: "Taxonomía de fases subversivas en las FAS: grupos políticos, rumores, panfletos → graffiti, desafío a la autoridad → intimidación, amenazas → reuniones tumultuarias, manifiestos firmados",
      en: "Taxonomy of subversive phases in the Armed Forces: political groups, rumors, pamphlets → graffiti, authority defiance → intimidation, threats → tumultuous meetings, signed manifestos",
    },
    chapters: ["sombras"],
  },
  {
    id: "juicio-compilacion",
    filename: "3_Juicio_23F.txt",
    ministry: "interior-archivo",
    classification: "sin-clasificar",
    date: "1982",
    title: {
      es: "Compilación del juicio del 23-F",
      en: "23-F trial compilation",
    },
    summary: {
      es: "Compilación: análisis procesal, notas sobre casación, artículo de Time, registros de visitas a presos (1985)",
      en: "Compilation: procedural analysis, cassation notes, Time magazine article, prisoner visit records (1985)",
    },
    chapters: ["juicio", "prisioneros"],
  },
  {
    id: "campana-contra-sm",
    filename: "4_Campana_contra_SM.txt",
    ministry: "interior-archivo",
    classification: "sin-clasificar",
    date: "1982",
    title: {
      es: "Campaña de desinformación contra S.M. el Rey",
      en: "Disinformation campaign against H.M. the King",
    },
    summary: {
      es: "Análisis de la campaña para implicar al Rey: presunta reunión Baqueira, forzar dimisión de Suárez, autorizar a Armada. Doble propósito: reducir responsabilidad penal + minar la Corona",
      en: "Analysis of campaign to implicate the King: alleged Baqueira meeting, forcing Suárez's resignation, authorizing Armada. Dual purpose: reduce criminal liability + undermine the Crown",
    },
    chapters: ["sombras"],
  },
  {
    id: "involucionismo",
    filename: "5_Involucionismo_politico.txt",
    ministry: "interior-archivo",
    classification: "sin-clasificar",
    date: "1981",
    title: {
      es: "Involucionismo político: facciones militares",
      en: "Political involution: military factions",
    },
    summary: {
      es: 'Tres facciones militares en Valladolid: "Los Inestrillos" (acción violenta, Club La Hípica), "Los Almendros" (intelectuales, panfletos), corriente Opus Dei. Las tres compartían objetivo común',
      en: "Three military factions in Valladolid: \"The Inestrillos\" (violent action, La Hípica Club), \"The Almendros\" (intellectuals, pamphlets), Opus Dei current. All three shared a common goal",
    },
    chapters: ["sombras"],
  },
  {
    id: "posible-golpe",
    filename: "6_Posible_golpe_estado.txt",
    ministry: "interior-archivo",
    classification: "sin-clasificar",
    date: "1981",
    title: {
      es: "Investigación de posible golpe de estado",
      en: "Investigation of possible coup d'état",
    },
    summary: {
      es: "Investigación de nuevos sospechosos. Partido Nacional Independiente (monárquico marginal, rama dinástica rival). Conexiones familiares con inteligencia militar",
      en: "Investigation of new suspects. National Independent Party (marginal monarchist, rival dynastic branch). Family connections to military intelligence",
    },
    chapters: ["sombras"],
  },
  {
    id: "notas-1983",
    filename: "7_Notas_1983.txt",
    ministry: "interior-archivo",
    classification: "sin-clasificar",
    date: "1983",
    title: {
      es: "Notas informativas 1983: liberación de condenados",
      en: "1983 informative notes: release of convicted",
    },
    summary: {
      es: "Liberación de cuatro capitanes de GC del Castillo de La Palma (Lázaro Corthay, Pérez de la Lastra, Acera, Bobis). Banquete celebratorio. Milans en Caranza. Conexiones con Inestrillas",
      en: "Release of four Civil Guard captains from La Palma Castle (Lázaro Corthay, Pérez de la Lastra, Acera, Bobis). Celebratory banquet. Milans at Caranza. Connections with Inestrillas",
    },
    chapters: ["prisioneros", "sombras"],
  },

  // ===========================================================================
  // INTERIOR — GUARDIA CIVIL (10 documents)
  // ===========================================================================
  {
    id: "conv-garcia-carres-tejero",
    filename: "1_Conv_GARCIA_CARRES_Tejero.txt",
    ministry: "interior-gc",
    classification: "confidencial",
    date: "1981-02-23",
    title: {
      es: "Interceptación telefónica: García Carrés — Tejero",
      en: "Phone intercept: García Carrés — Tejero",
    },
    summary: {
      es: 'Tejero dentro del Congreso, agitado, maldiciendo. García Carrés informa de tropas en movimiento. Referencias a "Alfonso" (Armada) intentando negociar con Carrillo. Enlace exterior durante el golpe',
      en: "Tejero inside Congress, agitated, cursing. García Carrés reports troop movements. References to \"Alfonso\" (Armada) trying to negotiate with Carrillo. External link during the coup",
    },
    chapters: ["noche"],
  },
  {
    id: "conv-garcia-carres-2",
    filename: "2_Conv_GARCIA_CARRES.txt",
    ministry: "interior-gc",
    classification: "confidencial",
    date: "1981-02-23",
    title: {
      es: "Interceptación telefónica: García Carrés — Desconocido",
      en: "Phone intercept: García Carrés — Unknown",
    },
    summary: {
      es: "Menciona regimientos Villaviciosa y Pavía, manifiesto GC para El Alcázar, periodista Juan Pla. Coordinación directa entre medios de comunicación y golpistas",
      en: "Mentions Villaviciosa and Pavía regiments, Civil Guard manifesto for El Alcázar, journalist Juan Pla. Direct coordination between media and coup plotters",
    },
    chapters: ["noche"],
  },
  {
    id: "conv-el-pardo",
    filename: "3_Conv_unidad_militar_El_Pardo.txt",
    ministry: "interior-gc",
    classification: "confidencial",
    date: "1981-02-24",
    title: {
      es: "Interceptación telefónica: unidad militar de El Pardo",
      en: "Phone intercept: El Pardo military unit",
    },
    summary: {
      es: "Confusión total en cuarteles sobre quién manda. Soldados identifican caballería en TVE como Villaviciosa. Preguntan por Capitán Corcuero y Milans del Bosch. Grabado a las 03:20",
      en: "Total confusion in barracks about who is in command. Soldiers identify cavalry at TVE as Villaviciosa. Ask about Captain Corcuero and Milans del Bosch. Recorded at 03:20",
    },
    chapters: ["noche"],
  },
  {
    id: "planificacion-golpe",
    filename: "4_Planificacion_golpe.txt",
    ministry: "interior-gc",
    classification: "sin-clasificar",
    date: "1980-11",
    title: {
      es: "Documento nuclear: planificación político-militar del golpe",
      en: "Core document: political-military coup planning",
    },
    summary: {
      es: "DOCUMENTO NUCLEAR. 5 escenarios políticos, plan operativo D-40 a D+1, 5 grupos de comandos (A-E), lista de detenidos, 9 regiones militares comprometidas. Sin firma, sin clasificación — clandestino",
      en: "CORE DOCUMENT. 5 political scenarios, D-40 to D+1 operative plan, 5 commando groups (A-E), detainee list, 9 committed military regions. Unsigned, unclassified — clandestine",
    },
    chapters: ["antecedentes"],
  },
  {
    id: "manuscrito-planificacion",
    filename: "5_Manuscrito_planificacion.txt",
    ministry: "interior-gc",
    classification: "sin-clasificar",
    date: "1980",
    title: {
      es: "Notas manuscritas complementarias de planificación",
      en: "Complementary handwritten planning notes",
    },
    summary: {
      es: "Notas manuscritas complementarias al documento de planificación. Cronograma D-3 a D-1. 43 líneas",
      en: "Handwritten notes complementing the planning document. D-3 to D-1 timeline. 43 lines",
    },
    chapters: ["antecedentes"],
  },
  {
    id: "notas-informativas-gc",
    filename: "7_Notas_Informativas.txt",
    ministry: "interior-gc",
    classification: "confidencial",
    date: "1981-02-23",
    title: {
      es: "Notas informativas en tiempo real de la Guardia Civil",
      en: "Real-time Civil Guard informative notes",
    },
    summary: {
      es: "Log minuto a minuto desde las 18:20. Detalle operativo: 7 autobuses, 22 camiones, BRIPAC, estado de excepción en Valencia, capitanes generales",
      en: "Minute-by-minute log from 18:20. Operational detail: 7 buses, 22 trucks, BRIPAC, state of emergency in Valencia, captain generals",
    },
    chapters: ["noche"],
  },
  {
    id: "telex-agencias",
    filename: "8_Telex_interiores_Agencias.txt",
    ministry: "interior-gc",
    classification: "sin-clasificar",
    title: {
      es: "Télex internos de agencias",
      en: "Internal agency telex messages",
    },
    summary: {
      es: "Archivo vacío (OCR fallido)",
      en: "Empty file (OCR failure)",
    },
    chapters: [],
  },
  {
    id: "oficio-pais-vasco",
    filename: "9_Oficio_Pais_Vasco.txt",
    ministry: "interior-gc",
    classification: "sin-clasificar",
    title: {
      es: "Oficio sobre situación en País Vasco",
      en: "Official letter on Basque Country situation",
    },
    summary: {
      es: "OCR muy degradado. Informe sobre la situación en el País Vasco",
      en: "Heavily degraded OCR. Report on the situation in the Basque Country",
    },
    chapters: [],
  },
  {
    id: "nota-tejero-galaxia",
    filename: "10_Nota_Tejero_Galaxia.txt",
    ministry: "interior-gc",
    classification: "confidencial",
    date: "1978-11-16",
    title: {
      es: "Interrogatorio de Tejero sobre la Operación Galaxia",
      en: "Tejero interrogation about Operation Galaxia",
    },
    summary: {
      es: "Interrogatorio de Tejero por Gallego Ronquillo y Cassinello en Toledo. Niega todo. Los interrogadores sabían de golpe previsto para el día 17",
      en: "Tejero's interrogation by Gallego Ronquillo and Cassinello in Toledo. Denies everything. Interrogators knew of a coup planned for the 17th",
    },
    chapters: ["antecedentes"],
  },
  {
    id: "nota-prensa-arresto",
    filename: "11_Nota_prensa_arresto.txt",
    ministry: "interior-gc",
    classification: "confidencial",
    date: "1977-10",
    title: {
      es: "Dossier de repercusiones del arresto de Tejero en Málaga",
      en: "Dossier on repercussions of Tejero's arrest in Málaga",
    },
    summary: {
      es: '2.469 líneas. Dossier completo de repercusiones del arresto de Tejero en Málaga. "Profundo malestar" en las Comandancias de toda España. Fuerza Nueva expresa adhesión',
      en: "2,469 lines. Complete dossier on repercussions of Tejero's arrest in Málaga. \"Deep unease\" in Commands across Spain. Fuerza Nueva expresses support",
    },
    chapters: ["antecedentes"],
  },

  // ===========================================================================
  // INTERIOR — POLICÍA (9 documents)
  // ===========================================================================
  {
    id: "sit-reg-24-02",
    filename: "Sit_Reg_24-02-81.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-02-24",
    title: {
      es: "Informe de situación regional: 24 de febrero de 1981",
      en: "Regional situation report: February 24, 1981",
    },
    summary: {
      es: "Huelgas CC.OO./UGT, propaganda PCE, manifestaciones dispersas. Normalidad general en la mayoría de las regiones",
      en: "CC.OO./UGT strikes, PCE propaganda, scattered demonstrations. General normality in most regions",
    },
    chapters: ["sombras"],
  },
  {
    id: "sit-reg-25-02",
    filename: "Sit_Reg_25-02-81.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-02-25",
    title: {
      es: "Informe de situación regional: 25 de febrero de 1981",
      en: "Regional situation report: February 25, 1981",
    },
    summary: {
      es: 'Amenaza de bomba falsa en Congreso. 50 jóvenes gritan "Libertad para Tejero" frente al cuartel de la GC. Movimiento Comunista convoca concentraciones',
      en: "False bomb threat at Congress. 50 youths shout \"Free Tejero\" outside Civil Guard barracks. Communist Movement calls rallies",
    },
    chapters: ["sombras"],
  },
  {
    id: "sit-reg-26-02",
    filename: "Sit_Reg_26-02-81.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-02-26",
    title: {
      es: "Informe de situación regional: 26 de febrero de 1981",
      en: "Regional situation report: February 26, 1981",
    },
    summary: {
      es: "Graffitis ultraderechistas exigiendo libertad de Tejero. Intensa contramovilización de izquierdas. Propaganda de Liga Comunista Revolucionaria",
      en: "Far-right graffiti demanding Tejero's freedom. Intense left-wing counter-mobilization. Revolutionary Communist League propaganda",
    },
    chapters: ["sombras"],
  },
  {
    id: "op-ariete",
    filename: "18-03-81_Op_Ariete.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-03-18",
    title: {
      es: "Operación Ariete del CESID (época Carrero Blanco)",
      en: "CESID Operation Ariete (Carrero Blanco era)",
    },
    summary: {
      es: "Informe policial sobre Operación Ariete del CESID, diseñada en época de Carrero Blanco. Dos fases: vacío de poder + desórdenes de masas. 80-110 muertos estimados. Barcelona frenada",
      en: "Police report on CESID Operation Ariete, designed during Carrero Blanco era. Two phases: power vacuum + mass disturbances. 80-110 estimated deaths. Barcelona stopped",
    },
    chapters: ["antecedentes", "cesid"],
  },
  {
    id: "ayuda-implicados",
    filename: "18-03-81_Ayuda_implicados.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-03-18",
    title: {
      es: "Campañas de apoyo económico a familias de implicados",
      en: "Financial support campaigns for families of those implicated",
    },
    summary: {
      es: 'Altos mandos organizan apoyo económico a familias. "Firme convicción" de no tolerar persecución',
      en: "High command organizes financial support for families. \"Firm conviction\" of not tolerating persecution",
    },
    chapters: ["sombras"],
  },
  {
    id: "fuerza-nueva",
    filename: "12-03-81_Fuerza_Nueva.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-03-12",
    title: {
      es: "Informe sobre Fuerza Nueva y Blas Piñar",
      en: "Report on Fuerza Nueva and Blas Piñar",
    },
    summary: {
      es: 'Blas Piñar: "la sombra del golpe no se ha alejado". Querella contra Sábado Gráfico. Actos de Fuerza Nueva en Baleares',
      en: "Blas Piñar: \"the shadow of the coup has not gone away.\" Lawsuit against Sábado Gráfico. Fuerza Nueva events in the Balearics",
    },
    chapters: ["sombras"],
  },
  {
    id: "pce-advertencia",
    filename: "11-05-81_PCE.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-05",
    title: {
      es: "Nota del PCE: advertencia sobre amenaza golpista",
      en: "PCE note: warning about coup threat",
    },
    summary: {
      es: 'PCE advierte: ultraderecha domina el "mercado negro del rumor". "Jaque mate contra la Monarquía". La sombra del golpe no se ha alejado',
      en: "PCE warns: far right dominates the \"black market of rumor.\" \"Checkmate against the Monarchy.\" The shadow of the coup has not gone away",
    },
    chapters: ["sombras"],
  },
  {
    id: "apoyo-economico-1983",
    filename: "10-05-83_Apoyo_economico.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1983-05-10",
    title: {
      es: "Fondo mensual de empresarios para familias de condenados",
      en: "Monthly fund from businessmen for families of convicted",
    },
    summary: {
      es: "Grupo de empresarios y simpatizantes forman fondo mensual para familias de los que perdieron condición militar",
      en: "Group of businessmen and sympathizers form monthly fund for families of those who lost military status",
    },
    chapters: ["sombras", "prisioneros"],
  },
  {
    id: "bloqueo-cuenta",
    filename: "27-03-81_Bloqueo_cuenta.txt",
    ministry: "interior-policia",
    classification: "sin-clasificar",
    date: "1981-03-27",
    title: {
      es: "Bloqueo de cuenta de la Asociación de Esposas",
      en: "Freezing of Military Wives Association account",
    },
    summary: {
      es: "Cuenta del Banco Central de la Asociación de Esposas de Militares y Policías congelada por orden ministerial",
      en: "Banco Central account of Military and Police Wives Association frozen by ministerial order",
    },
    chapters: ["sombras"],
  },

  // ===========================================================================
  // DEFENSA — CNI (84 documents — key documents listed individually,
  // remaining grouped by range)
  // ===========================================================================
  {
    id: "doc-1-r",
    filename: "Doc_1_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1981-12-14",
    title: {
      es: "Carta de Sabino Fernández Campo a Alonso Manglano",
      en: "Letter from Sabino Fernández Campo to Alonso Manglano",
    },
    summary: {
      es: 'Carta personal y reservada transmitiendo informe del Rey y tarjetas de visita sospechosas con acróstico "TEJERO". Enviada "por indicación de S.M. el Rey"',
      en: "Personal and classified letter transmitting King's report and suspicious business cards with \"TEJERO\" acrostic. Sent \"at H.M. the King's indication\"",
    },
    chapters: ["cesid"],
  },
  {
    id: "doc-2-r",
    filename: "Doc_2_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1981-02",
    title: {
      es: "CESID-Estado Mayor: recomendaciones de control militar",
      en: "CESID-General Staff: military control recommendations",
    },
    summary: {
      es: "Recomendaciones del CESID al Estado Mayor sobre control militar y seguimiento de la DAC",
      en: "CESID recommendations to General Staff on military control and DAC monitoring",
    },
    chapters: ["noche", "cesid"],
  },
  {
    id: "doc-3-r",
    filename: "Doc_3_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1981-02",
    title: {
      es: "CESID-JUJEM: asumir control, operaciones psicológicas",
      en: "CESID-JUJEM: assume control, psychological operations",
    },
    summary: {
      es: "Recomendaciones: asumir control militar, operaciones psicológicas dentro del Congreso, aislar zona del Congreso, compartir inteligencia",
      en: "Recommendations: assume military control, psychological operations inside Congress, isolate Congress area, share intelligence",
    },
    chapters: ["noche", "cesid"],
  },
  {
    id: "doc-4-r",
    filename: "Doc_4_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1981-02-23",
    title: {
      es: "DDI cronología operativa: 17:00-00:00",
      en: "DDI operational chronology: 17:00-00:00",
    },
    summary: {
      es: "Cronología operativa del DDI (CESID) de la noche del golpe: desde las 17:00 hasta medianoche. Incluye llamada a Valencia",
      en: "DDI (CESID) operational chronology for the night of the coup: from 17:00 to midnight. Includes call to Valencia",
    },
    chapters: ["noche", "cesid"],
  },
  {
    id: "doc-5-r",
    filename: "Doc_5_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Cuenta oficial del CESID de la noche del golpe",
      en: "CESID official account of the night of the coup",
    },
    summary: {
      es: "Relato oficial: CESID actuó sin cadena de mando, estableció centro de operaciones, envió agentes al Congreso para negociar",
      en: "Official account: CESID acted without chain of command, established operations center, sent agents to Congress to negotiate",
    },
    chapters: ["noche", "cesid"],
  },
  {
    id: "doc-6-r",
    filename: "Doc_6_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "AOME: 6 miembros identificados. Operación Míster",
      en: "AOME: 6 members identified. Operation Míster",
    },
    summary: {
      es: '6 miembros de AOME con participación activa identificados. "Operación Míster" activada para encubrir: falsificación de fechas de movimientos el 23-F',
      en: "6 AOME members with active participation identified. \"Operation Míster\" activated to cover up: falsification of movement dates on 23-F",
    },
    chapters: ["cesid"],
  },
  {
    id: "doc-7-r",
    filename: "Doc_7_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Investigación interna completa de la AOME",
      en: "Complete internal AOME investigation",
    },
    summary: {
      es: "1.736 líneas. Documento más extenso del corpus. Orden de investigación, nombres en clave, declaraciones, contradicciones, evidencias de coordinación previa con Tejero",
      en: "1,736 lines. Longest document in the corpus. Investigation order, code names, statements, contradictions, evidence of prior coordination with Tejero",
    },
    chapters: ["cesid"],
  },
  {
    id: "doc-8-r",
    filename: "Doc_8_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Documento de/sobre Cortina",
      en: "Document about/from Cortina",
    },
    summary: {
      es: "Documento sobre Cortina. OCR muy degradado",
      en: "Document about Cortina. Heavily degraded OCR",
    },
    chapters: ["cesid"],
  },
  {
    id: "doc-9-r",
    filename: "Doc_9_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-03-10",
    title: {
      es: "Comisiones militares simpatizan con acusados en juicio",
      en: "Military commissions sympathize with defendants at trial",
    },
    summary: {
      es: "Comisiones militares de varias regiones muestran simpatía: aplausos, abucheos a periodistas, fraternización con los acusados",
      en: "Military commissions from various regions show sympathy: applause, booing of journalists, fraternization with defendants",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-10-r",
    filename: "Doc_10_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-03",
    title: {
      es: "Aplausos y abucheos de comisiones militares en juicio",
      en: "Applause and boos from military commissions at trial",
    },
    summary: {
      es: "Registro de los aplausos a acusados y abucheos a periodistas por comisiones militares durante el juicio",
      en: "Record of applause for defendants and booing of journalists by military commissions during trial",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-11-r",
    filename: "Doc_11_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-02-25",
    title: {
      es: "Carta sobre atmósfera en el Ejército durante el juicio",
      en: "Letter about atmosphere in the Army during the trial",
    },
    summary: {
      es: "Carta reportando la atmósfera tensa en el Ejército al inicio del juicio de la Causa 2/81",
      en: "Letter reporting the tense atmosphere in the Army at the start of Case 2/81 trial",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-12-r",
    filename: "Doc_12_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-04-19",
    title: {
      es: "Análisis de decisiones de libertad provisional",
      en: "Analysis of provisional release decisions",
    },
    summary: {
      es: "Análisis del CESID sobre las implicaciones de las decisiones de libertad provisional de los procesados",
      en: "CESID analysis of the implications of defendants' provisional release decisions",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-15-r",
    filename: "Doc_15_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-04-28",
    title: {
      es: "Incidente prensa: Pilar Urbano vs Cabeza Calahorra",
      en: "Press incident: Pilar Urbano vs Cabeza Calahorra",
    },
    summary: {
      es: "Cabeza Calahorra insulta a la prensa durante su defensa de Milans. Pilar Urbano (ABC) intenta organizar un plante de periodistas. General Toquero interviene",
      en: "Cabeza Calahorra insults the press during his defense of Milans. Pilar Urbano (ABC) attempts to organize journalist walkout. General Toquero intervenes",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-20-r",
    filename: "Doc_20_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "DOCUMENTO CLAVE: Relato de Zarzuela del 23-24 de febrero",
      en: "KEY DOCUMENT: Zarzuela account of February 23-24",
    },
    summary: {
      es: '"Sucinta relación de los hechos del 23 y 24 de febrero de 1981 según fueron conocidos en el Palacio de la Zarzuela". Relato oficial de la Casa Real. Incluye notas del juicio (marzo 1982)',
      en: '"Brief account of events of February 23-24, 1981 as known at Zarzuela Palace." Official Royal Household account. Includes trial notes (March 1982)',
    },
    chapters: ["noche", "juicio"],
  },
  {
    id: "doc-25-r",
    filename: "Doc_25_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-05-10",
    title: {
      es: "Defensa de Lázaro Corthay, Bobis, Cid Fortea",
      en: "Defense of Lázaro Corthay, Bobis, Cid Fortea",
    },
    summary: {
      es: "Defensa de Lázaro Corthay, Bobis y Cid Fortea. El fiscal solicita 5 años de prisión",
      en: "Defense of Lázaro Corthay, Bobis, and Cid Fortea. Prosecutor requests 5 years imprisonment",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-30-r",
    filename: "Doc_30_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-05-17",
    title: {
      es: "Valoración integrada: ultraderecha, propaganda, riesgo Zaragoza",
      en: "Integrated assessment: far right, propaganda, Zaragoza risk",
    },
    summary: {
      es: 'Valoración semanal del CESID: actividad de ultraderecha, propaganda UME en cuarteles ("TE LLAMAREMOS"), riesgo en desfile de la Victoria en Zaragoza con presencia del Rey',
      en: "CESID weekly assessment: far-right activity, UME propaganda in barracks (\"WE WILL CALL YOU\"), risk at Victory parade in Zaragoza with the King present",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-33-r",
    filename: "Doc_33_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-04-28",
    title: {
      es: "Defensa de Milans por Cabeza Calahorra y Escandell",
      en: "Defense of Milans by Cabeza Calahorra and Escandell",
    },
    summary: {
      es: 'Estrategia de defensa de Milans: "reconducción" de golpes más radicales. Art. 8 Constitución. S.M. mencionado más de 96 veces — campaña coordinada para implicar a la Corona',
      en: "Milans defense strategy: \"redirection\" of more radical coups. Art. 8 Constitution. H.M. mentioned over 96 times — coordinated campaign to implicate the Crown",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-35-r",
    filename: "Doc_35_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-04-20",
    title: {
      es: "Testimonio Múgica Herzog. Fin de fase probatoria",
      en: "Múgica Herzog testimony. End of evidentiary phase",
    },
    summary: {
      es: "Testimonio de Múgica Herzog. Fin de la fase probatoria del juicio de la Causa 2/81",
      en: "Múgica Herzog testimony. End of the evidentiary phase of Case 2/81 trial",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-40-r",
    filename: "Doc_40_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-04-05",
    title: {
      es: "Testimonios Aramburu y Sáenz de Santamaría. Incidente 'rehenes'",
      en: "Aramburu and Sáenz de Santamaría testimonies. 'Hostages' incident",
    },
    summary: {
      es: 'Aramburu y Sáenz de Santamaría testifican. Sáenz de Santamaría usa "rehenes" — acusados y familias estallan — sesión suspendida. Armada en el Congreso: "He fracasado"',
      en: "Aramburu and Sáenz de Santamaría testify. Sáenz de Santamaría uses \"hostages\" — defendants and families erupt — session suspended. Armada at Congress: \"I have failed\"",
    },
    chapters: ["juicio", "noche"],
  },
  {
    id: "doc-45-r",
    filename: "Doc_45_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-04-29",
    title: {
      es: "Valoración integrada de la fase de defensa",
      en: "Integrated assessment of the defense phase",
    },
    summary: {
      es: "Valoración integrada del CESID sobre el desarrollo de la fase de defensa en el juicio",
      en: "CESID integrated assessment of the defense phase development at trial",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-50-r",
    filename: "Doc_50_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-03-26",
    title: {
      es: "Interrogatorios de Abad, Muñecas, Dusmet",
      en: "Interrogations of Abad, Muñecas, Dusmet",
    },
    summary: {
      es: "Abad testifica que Cortina se reunió con Tejero el día anterior al golpe. Manchado, Tejero y Gómez Iglesias fueron determinantes",
      en: "Abad testifies Cortina met Tejero the day before the coup. Manchado, Tejero, and Gómez Iglesias were decisive",
    },
    chapters: ["juicio", "cesid"],
  },
  {
    id: "doc-55-r",
    filename: "Doc_55_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-03-17",
    title: {
      es: "Interrogatorio completo de Tejero",
      en: "Full Tejero interrogation",
    },
    summary: {
      es: 'Interrogatorio completo de Tejero. Cortina fijó la fecha. "Operación Nacional a las Órdenes del Rey". Rechazó gobierno con socialistas. "Profundo desprecio" por cúpula militar',
      en: "Full Tejero interrogation. Cortina set the date. \"National Operation Under the King's Orders.\" Rejected government with socialists. \"Deep contempt\" for military leadership",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-60-r",
    filename: "Doc_60_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-03-09",
    title: {
      es: "Interrogatorios de Milans del Bosch y Armada",
      en: "Interrogations of Milans del Bosch and Armada",
    },
    summary: {
      es: 'Milans: "reconducción" de golpes más radicales, actuó por orden del Rey a través de Armada, negó conocer a Manchado. Armada: negó toda conspiración, fue "a título personal"',
      en: "Milans: \"redirection\" of more radical coups, acted on King's orders through Armada, denied knowing Manchado. Armada: denied all conspiracy, went \"in a personal capacity\"",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-65-r",
    filename: "Doc_65_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1982-03-11",
    title: {
      es: "Valoración integrada de inteligencia",
      en: "Integrated intelligence assessment",
    },
    summary: {
      es: "Valoración integrada semanal del CESID: bajo interés público en el juicio, actividad de extrema derecha, presión psicológica sobre jueces",
      en: "CESID weekly integrated assessment: low public interest in trial, far-right activity, psychological pressure on judges",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-73-r",
    filename: "Doc_73_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    date: "1981-04-14",
    title: {
      es: "Informe: Assiego (40 pistoleros) y red Garchitorena",
      en: "Report: Assiego (40 gunmen) and Garchitorena network",
    },
    summary: {
      es: "José Antonio Assiego controlaba 40 pistoleros profesionales, conectado con Coronel Garchitorena (Gobierno Militar de Madrid). Preparados para actuar la noche del 23-F. Conexiones con País Vasco",
      en: "José Antonio Assiego controlled 40 professional gunmen, connected to Colonel Garchitorena (Madrid Military Government). Ready to act on the night of 23-F. Connections to Basque Country",
    },
    chapters: ["sombras"],
  },
  {
    id: "doc-75-r",
    filename: "Doc_75_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Procesamiento de Cortina. Se pide discreción",
      en: "Cortina prosecution. Discretion requested",
    },
    summary: {
      es: "Comunicación formal del procesamiento de Cortina por los hechos del 23-24 de febrero. Se solicita discreción",
      en: "Formal communication of Cortina's prosecution for events of February 23-24. Discretion requested",
    },
    chapters: ["cesid", "juicio"],
  },
  {
    id: "doc-77-r",
    filename: "Doc_77_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Fugitivo Sánchez Valiente: pasaporte argentino, Grecia, Londres",
      en: "Fugitive Sánchez Valiente: Argentine passport, Greece, London",
    },
    summary: {
      es: "Capitán Sánchez Valiente desaparecido. Pasaporte argentino obtenido por hermano en Roma. Cruzó América Latina y Europa. Último reporte: Grecia (posible desinformación). Esposa en Londres",
      en: "Captain Sánchez Valiente missing. Argentine passport obtained by brother in Rome. Crossed Latin America and Europe. Last report: Greece (possible disinformation). Wife in London",
    },
    chapters: ["prisioneros"],
  },
  {
    id: "doc-80-r",
    filename: "Doc_80_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Consulta judicial al CESID sobre AOME y Cortina",
      en: "Judicial inquiry to CESID about AOME and Cortina",
    },
    summary: {
      es: "El Consejo Supremo de Justicia Militar pregunta al CESID: qué mandaba Cortina, si producía informes de inteligencia, si tenía sistema de interceptación",
      en: "Supreme Military Council asks CESID: what Cortina commanded, whether he produced intelligence reports, whether he had an interception system",
    },
    chapters: ["cesid"],
  },
  // Remaining CNI documents (Doc_14_R through Doc_84_R — many with degraded OCR)
  // Listed as a range since individual details are not available
  {
    id: "doc-14-r",
    filename: "Doc_14_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Notas adicionales del juicio",
      en: "Additional trial notes",
    },
    summary: {
      es: "Notas adicionales del juicio de la Causa 2/81. OCR parcialmente degradado",
      en: "Additional notes from Case 2/81 trial. Partially degraded OCR",
    },
    chapters: ["juicio"],
  },
  {
    id: "doc-84-r",
    filename: "Doc_84_R.txt",
    ministry: "defensa-cni",
    classification: "secreto",
    title: {
      es: "Seguimiento de propaganda y valoraciones de inteligencia",
      en: "Propaganda monitoring and intelligence assessments",
    },
    summary: {
      es: "Valoraciones de inteligencia y seguimiento de propaganda militar durante y después del juicio",
      en: "Intelligence assessments and military propaganda monitoring during and after the trial",
    },
    chapters: ["juicio"],
  },

  // ===========================================================================
  // DEFENSA — CAUSAS-CARPETAS (24 documents)
  // ===========================================================================
  // Carpeta 21800 (14 documents)
  {
    id: "carpeta-21800-procesamientos",
    filename: "Carpeta_21800_procesamientos.txt",
    ministry: "defensa-causas",
    classification: "secreto",
    title: {
      es: "Carpeta 21800: Procesamientos múltiples",
      en: "Folder 21800: Multiple prosecutions",
    },
    summary: {
      es: "Comunicaciones de procesamiento de Milans del Bosch, Torres Rojas, Menéndez Vives, Cortina, Gómez Iglesias, Batista González. Recurso de recusación contra Ministro de Defensa, protesta de abogados",
      en: "Prosecution communications for Milans del Bosch, Torres Rojas, Menéndez Vives, Cortina, Gómez Iglesias, Batista González. Recusal motion against Defense Minister, lawyers' protest",
    },
    chapters: ["juicio", "prisioneros"],
  },
  // Carpeta 21801
  {
    id: "carpeta-21801-sancion",
    filename: "Carpeta_21801_sancion.txt",
    ministry: "defensa-causas",
    classification: "secreto",
    date: "1982-06-17",
    title: {
      es: "Carpeta 21801: Sanción a Consejeros Togados",
      en: "Folder 21801: Sanctioning of Military Judges",
    },
    summary: {
      es: "Sanción a Consejeros Togados Barcina Rodríguez (8 días arresto) y Carrero Ramos (14 días) por falta de respeto al Presidente del Tribunal, General Gómez de Salazar",
      en: "Sanctioning of Military Judges Barcina Rodríguez (8 days arrest) and Carrero Ramos (14 days) for disrespect to Tribunal President, General Gómez de Salazar",
    },
    chapters: ["juicio"],
  },
  // Carpeta 21802
  {
    id: "carpeta-21802-tejero",
    filename: "Carpeta_21802_visitas_Tejero.txt",
    ministry: "defensa-causas",
    classification: "secreto",
    title: {
      es: "Carpeta 21802: Visitas a Tejero, seguridad, incomunicación",
      en: "Folder 21802: Visits to Tejero, security, isolation",
    },
    summary: {
      es: "Télex sobre visitas a Tejero, protocolos de seguridad, levantamiento de incomunicación, restricciones de comunicación, traslado a prisión naval de Cartagena",
      en: "Telex about visits to Tejero, security protocols, lifting of isolation, communication restrictions, transfer to Cartagena naval prison",
    },
    chapters: ["prisioneros"],
  },
  // Carpeta 21804
  {
    id: "carpeta-21804-milans",
    filename: "Carpeta_21804_detencion_Milans.txt",
    ministry: "defensa-causas",
    classification: "secreto",
    title: {
      es: "Carpeta 21804: Detención de Milans, distribución de procesados",
      en: "Folder 21804: Milans detention, distribution of defendants",
    },
    summary: {
      es: "Informe detallado de detención de Milans en sede del EME. Quejas sobre trato. Casa Real revisa condiciones. Distribución completa de los 33 procesados",
      en: "Detailed report on Milans' detention at Army HQ. Complaints about treatment. Royal Household reviews conditions. Complete distribution of 33 defendants",
    },
    chapters: ["prisioneros"],
  },
  // Causa 9481
  {
    id: "causa-9481",
    filename: "Causa_9481_Sanchez_Valiente.txt",
    ministry: "defensa-causas",
    classification: "sin-clasificar",
    title: {
      es: "Causa 9481: Sánchez Valiente — abandono de destino",
      en: "Case 9481: Sánchez Valiente — desertion",
    },
    summary: {
      es: "Hoja de servicios, informe de abandono de destino, informe de Asesoría Jurídica General sobre el Capitán Sánchez Valiente",
      en: "Service record, desertion report, Legal Advisory General report on Captain Sánchez Valiente",
    },
    chapters: ["prisioneros"],
  },

  // ===========================================================================
  // EXTERIORES (19 documents)
  // ===========================================================================
  {
    id: "d-1",
    filename: "D.1",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02",
    title: {
      es: "Índice cronológico: reacción de EEUU",
      en: "Chronological index: US reaction",
    },
    summary: {
      es: "Índice cronológico de la reacción estadounidense: declaración de Haig, llamada de Reagan, resolución del Congreso",
      en: "Chronological index of US reaction: Haig statement, Reagan call, Congressional resolution",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-3",
    filename: "D.3",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02-24",
    title: {
      es: "Declaración del Departamento de Estado de EEUU",
      en: "US State Department declaration",
    },
    summary: {
      es: '"The role and leadership of King Juan Carlos were clearly instrumental." Declaración alabando al Rey y al pueblo español',
      en: '"The role and leadership of King Juan Carlos were clearly instrumental." Statement praising the King and the Spanish people',
    },
    chapters: ["internacional"],
  },
  {
    id: "d-8",
    filename: "D.8",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-03-04",
    title: {
      es: "Resolución del Congreso de EEUU",
      en: "US Congressional resolution",
    },
    summary: {
      es: '"Continued democratic political development in Spain makes an important contribution to US foreign policy interests." Resolución congratulando a España',
      en: '"Continued democratic political development in Spain makes an important contribution to US foreign policy interests." Resolution congratulating Spain',
    },
    chapters: ["internacional"],
  },
  {
    id: "d-14",
    filename: "D.14",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-03",
    title: {
      es: "NYT critica a Haig. Felipe González contrasta Europa con EEUU",
      en: "NYT criticizes Haig. Felipe González contrasts Europe with US",
    },
    summary: {
      es: 'New York Times critica declaración de Haig. Felipe González en Londres contrasta las "actitudes europeas de apoyo" con las "insensibles actitudes americanas"',
      en: "New York Times criticizes Haig's statement. Felipe González in London contrasts \"supportive European attitudes\" with \"insensitive American attitudes\"",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-15",
    filename: "D.15",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02-26",
    title: {
      es: "Moción de Elvas (Portugal) condenando el golpe",
      en: "Elvas (Portugal) motion condemning the coup",
    },
    summary: {
      es: 'Moción del ayuntamiento de Elvas (APU) condenando el intento "de inspiración fascista" y expresando solidaridad con la democracia española',
      en: "Elvas city council (APU) motion condemning the \"fascist-inspired\" attempt and expressing solidarity with Spanish democracy",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-18",
    filename: "D.18",
    ministry: "exteriores",
    classification: "sin-clasificar",
    title: {
      es: "Despacho diplomático de Córdoba (Argentina)",
      en: "Diplomatic dispatch from Córdoba (Argentina)",
    },
    summary: {
      es: "Despacho de la legación española en Córdoba, Argentina. Prensa y solidaridad latinoamericana",
      en: "Dispatch from Spanish legation in Córdoba, Argentina. Latin American press and solidarity",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-19",
    filename: "D.19",
    ministry: "exteriores",
    classification: "sin-clasificar",
    title: {
      es: "Despacho diplomático de México",
      en: "Diplomatic dispatch from Mexico",
    },
    summary: {
      es: "Despacho de la representación española en México. Artículo de Julián Marías sobre la Monarquía Nacional",
      en: "Dispatch from Spanish representation in Mexico. Julián Marías article on the National Monarchy",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-20",
    filename: "D.20",
    ministry: "exteriores",
    classification: "sin-clasificar",
    title: {
      es: "Despacho diplomático de Buenos Aires",
      en: "Diplomatic dispatch from Buenos Aires",
    },
    summary: {
      es: "Despacho de la embajada española en Buenos Aires. Partido Socialista Argentino expresa solidaridad",
      en: "Dispatch from Spanish embassy in Buenos Aires. Argentine Socialist Party expresses solidarity",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-21",
    filename: "D.21",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-04-03",
    title: {
      es: "Respuesta del Rey a Fidel Castro",
      en: "King's response to Fidel Castro",
    },
    summary: {
      es: "Respuesta formal del Rey Juan Carlos a Fidel Castro agradeciendo mensaje de preocupación. Expresando confianza en relaciones bilaterales",
      en: "Formal response from King Juan Carlos to Fidel Castro thanking his concern message. Expressing confidence in bilateral relations",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-24",
    filename: "D.24",
    ministry: "exteriores",
    classification: "sin-clasificar",
    title: {
      es: "Despachos latinoamericanos adicionales",
      en: "Additional Latin American dispatches",
    },
    summary: {
      es: "Despachos diplomáticos adicionales de representaciones españolas en América Latina",
      en: "Additional diplomatic dispatches from Spanish representations in Latin America",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-25",
    filename: "D.25",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1982-04-07",
    title: {
      es: "Granma (Cuba): 'gorilas peninsulares'",
      en: "Granma (Cuba): 'peninsular gorillas'",
    },
    summary: {
      es: 'Periódico cubano Granma publica artículo burlesco sobre incidente durante el juicio, comparando a los acusados con "gorilas peninsulares"',
      en: "Cuban newspaper Granma publishes mocking article about trial incident, comparing defendants to \"peninsular gorillas\"",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-26",
    filename: "D.26",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02",
    title: {
      es: "Telegrama del Rey al Presidente de Alemania Federal",
      en: "King's telegram to West German President",
    },
    summary: {
      es: 'Telegrama del Rey Juan Carlos al Presidente de la RFA agradeciendo apoyo al "ataque frustrado contra la España constitucional"',
      en: "King Juan Carlos' telegram to West German President thanking support for the \"frustrated attack against constitutional Spain\"",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-27",
    filename: "D.27",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02",
    title: {
      es: "Respuesta del Rey a Isabel II",
      en: "King's response to Elizabeth II",
    },
    summary: {
      es: "Respuesta del Rey Juan Carlos a la Reina Isabel II agradeciendo sus felicitaciones por la defensa de la democracia",
      en: "King Juan Carlos' response to Queen Elizabeth II thanking her congratulations for defending democracy",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-28",
    filename: "D.28",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02-25",
    title: {
      es: "Mensaje de Isabel II y Speaker de los Comunes a Lavilla",
      en: "Elizabeth II's message and Speaker of the Commons to Lavilla",
    },
    summary: {
      es: 'Isabel II dice estar "fuertemente impresionada". El Speaker de los Comunes felicita a Lavilla por la "conducta del Congreso durante la indignidad"',
      en: "Elizabeth II says she is \"strongly impressed.\" Speaker of the Commons congratulates Lavilla for \"Congress's conduct during the indignity\"",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-29",
    filename: "D.29",
    ministry: "exteriores",
    classification: "sin-clasificar",
    date: "1981-02-25",
    title: {
      es: "Carta de Genscher a Pérez-Llorca",
      en: "Genscher's letter to Pérez-Llorca",
    },
    summary: {
      es: "Carta del Ministro de Asuntos Exteriores de la RFA Hans-Dietrich Genscher al Ministro español Pérez-Llorca expresando satisfacción por la resolución de la crisis",
      en: "Letter from West German Foreign Minister Hans-Dietrich Genscher to Spanish Minister Pérez-Llorca expressing satisfaction at the crisis resolution",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-30",
    filename: "D.30",
    ministry: "exteriores",
    classification: "sin-clasificar",
    title: {
      es: "Intercambios diplomáticos europeos adicionales",
      en: "Additional European diplomatic exchanges",
    },
    summary: {
      es: "Intercambios diplomáticos adicionales con gobiernos europeos tras el 23-F",
      en: "Additional diplomatic exchanges with European governments after 23-F",
    },
    chapters: ["internacional"],
  },
  {
    id: "d-31",
    filename: "D.31",
    ministry: "exteriores",
    classification: "sin-clasificar",
    title: {
      es: "Intercambios diplomáticos europeos adicionales (cont.)",
      en: "Additional European diplomatic exchanges (cont.)",
    },
    summary: {
      es: "Continuación de los intercambios diplomáticos con gobiernos europeos",
      en: "Continuation of diplomatic exchanges with European governments",
    },
    chapters: ["internacional"],
  },
];

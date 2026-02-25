// =============================================================================
// characters.ts — All character profiles from the 23-F declassified documents
// Source: docs/plans/personajes.md
// =============================================================================

export interface Character {
  id: string;
  name: string;
  rank: string;
  category: "conspirador" | "leal" | "politico" | "internacional";
  role: { es: string; en: string };
  bio: { es: string; en: string };
  quotes: Array<{
    text: string;
    source: string;
    context: { es: string; en: string };
  }>;
  trial?: { sentence: string; defense: { es: string; en: string } };
  connections: Array<{
    targetId: string;
    relation: { es: string; en: string };
  }>;
  documents: string[];
  image?: string;
}

export const characters: Character[] = [
  // ===========================================================================
  // CONSPIRADORES
  // ===========================================================================
  {
    id: "tejero",
    name: "Antonio Tejero Molina",
    rank: "Teniente Coronel de la Guardia Civil",
    category: "conspirador",
    role: {
      es: "Ejecutor principal. Lideró el asalto armado al Congreso de los Diputados",
      en: "Lead executor. Led the armed assault on the Congress of Deputies",
    },
    bio: {
      es: 'Clasificado entre "Los Espontáneos" — vía directa, convencidos de que la acción arrastraría al resto de las FAS. Antecedentes: incidente de Málaga (oct. 1977), donde ordenó a la GC armada con metralletas impedir una manifestación autorizada. Operación Galaxia (nov. 1978): reunión conspirativa en cafetería de Madrid. Trasladado a situación de "disponible" en Badajoz tras el incidente de Málaga.',
      en: 'Classified among "The Spontaneous" — direct action group, convinced their move would drag the rest of the Armed Forces along. Background: Málaga incident (Oct. 1977), where he ordered armed Civil Guard to block an authorized demonstration. Operation Galaxia (Nov. 1978): conspiratorial meeting at a Madrid café. Transferred to "available" status in Badajoz after the Málaga incident.',
    },
    quotes: [
      {
        text: "Antes le mato y después me pego un tiro",
        source: "Doc_40_R.txt",
        context: {
          es: "Amenaza de Tejero al General Aramburu dentro del Congreso",
          en: "Tejero's threat to General Aramburu inside Congress",
        },
      },
    ],
    trial: {
      sentence: "30 años (máxima)",
      defense: {
        es: 'Admitió planificar la toma del Congreso. Declaró que Cortina fijó la fecha. Armada le confirmó "Operación Nacional a las Órdenes del Rey". Rechazó el gobierno de Armada por incluir socialistas. Expresó "profundo desprecio" por la cúpula militar.',
        en: 'Admitted planning the seizure of Congress. Declared Cortina set the date. Armada confirmed "National Operation Under the King\'s Orders." Rejected Armada\'s government for including socialists. Expressed "deep contempt" for military leadership.',
      },
    },
    connections: [
      {
        targetId: "cortina",
        relation: {
          es: "Cortina fijó la fecha del golpe",
          en: "Cortina set the date for the coup",
        },
      },
      {
        targetId: "armada",
        relation: {
          es: "Armada le confirmó la operación",
          en: "Armada confirmed the operation to him",
        },
      },
      {
        targetId: "garcia-carres",
        relation: {
          es: "Enlace telefónico durante la noche del golpe",
          en: "Telephone link during the night of the coup",
        },
      },
      {
        targetId: "inestrillas",
        relation: {
          es: "Juntos en la Operación Galaxia",
          en: "Together in Operation Galaxia",
        },
      },
      {
        targetId: "manchado",
        relation: {
          es: "Conexión conspirativa",
          en: "Conspiratorial connection",
        },
      },
      {
        targetId: "gomez-iglesias",
        relation: {
          es: "Conexión a través de la AOME",
          en: "Connected through AOME",
        },
      },
    ],
    documents: [
      "10_Nota_Tejero_Galaxia.txt",
      "11_Nota_prensa_arresto.txt",
      "1_Conv_GARCIA_CARRES_Tejero.txt",
      "Doc_55_R.txt",
      "Carpeta_21802_*.txt",
    ],
  },
  {
    id: "milans",
    name: "Jaime Milans del Bosch y Ussía",
    rank: "Teniente General. Capitán General de la 3ª Región Militar (Valencia)",
    category: "conspirador",
    role: {
      es: "Declaró el estado de excepción en Valencia. Desplegó tanques en las calles. Proclamó su propia autoridad sobre la región",
      en: "Declared state of emergency in Valencia. Deployed tanks on the streets. Proclaimed his own authority over the region",
    },
    bio: {
      es: 'Clasificado entre "Los Tenientes Generales" — vía institucional, mediante pronunciamiento. Detenido en la sede del EME (Palacio de Buenavista). Se quejó del trato. La Casa Real revisó sus condiciones. Preso en la Prisión Naval de Caranza (El Ferrol).',
      en: 'Classified among "The Lieutenant Generals" — institutional route, through military pronouncement. Detained at Army HQ (Buenavista Palace). Complained about treatment. The Royal Household reviewed his conditions. Imprisoned at Caranza Naval Prison (El Ferrol).',
    },
    quotes: [
      {
        text: "Estoy a las órdenes de Su Majestad",
        source: "Doc_20_R.txt",
        context: {
          es: "Al Rey por teléfono, mientras tenía tanques en las calles de Valencia",
          en: "To the King by phone, while his tanks were on the streets of Valencia",
        },
      },
    ],
    trial: {
      sentence: "30 años (máxima)",
      defense: {
        es: 'Argumentó la "reconducción" de golpes más radicales. Alegó actuar por orden del Rey a través de Armada. Negó conocer a Manchado. Actitud desafiante.',
        en: "Argued the \"redirection\" of more radical coups. Claimed to act on the King's orders through Armada. Denied knowing Manchado. Defiant attitude.",
      },
    },
    connections: [
      {
        targetId: "armada",
        relation: {
          es: "Intermediario con el Rey",
          en: "Intermediary with the King",
        },
      },
      {
        targetId: "manchado",
        relation: {
          es: "Manchado solo obedecía a Milans",
          en: "Manchado only obeyed Milans",
        },
      },
      {
        targetId: "tejero",
        relation: {
          es: "Tejero como ejecutor del golpe",
          en: "Tejero as coup executor",
        },
      },
    ],
    documents: [
      "Doc_60_R.txt",
      "Doc_33_R.txt",
      "Carpeta_21804_*.txt",
      "7_Notas_Informativas.txt",
    ],
  },
  {
    id: "armada",
    name: "Alfonso Armada Comyn",
    rank: "General del Ejército",
    category: "conspirador",
    role: {
      es: 'El "cerebro político". Intentó llegar a Zarzuela (rechazado por el Rey). Fue al Congreso a proponer un gobierno de concentración. Dijo a Tejero que era "Operación Nacional a las Órdenes del Rey"',
      en: 'The "political brain." Tried to reach Zarzuela (rejected by the King). Went to Congress to propose a unity government. Told Tejero it was "National Operation Under the King\'s Orders"',
    },
    bio: {
      es: 'Negó toda conspiración previa en el juicio. Dijo ir al Congreso "a título personal". Negó llevar lista de gobierno. Negó autorización real. Contradicción total con Tejero. Mintió a Sáenz de Santamaría diciendo que la 2ª, 5ª y 7ª Regiones Militares apoyaban el golpe.',
      en: 'Denied all prior conspiracy at trial. Said he went to Congress "in a personal capacity." Denied carrying a government list. Denied royal authorization. Total contradiction with Tejero. Lied to Sáenz de Santamaría claiming the 2nd, 5th, and 7th Military Regions supported the coup.',
    },
    quotes: [
      {
        text: "He fracasado.",
        source: "Doc_40_R.txt",
        context: {
          es: "Al salir del Congreso, según testimonio del General Aramburu",
          en: "Upon leaving Congress, per General Aramburu's testimony",
        },
      },
    ],
    trial: {
      sentence: "6 años",
      defense: {
        es: 'Negó toda conspiración previa. Dijo ir al Congreso "a título personal". Negó llevar lista de gobierno. Negó autorización real.',
        en: 'Denied all prior conspiracy. Said he went to Congress "in a personal capacity." Denied carrying a government list. Denied royal authorization.',
      },
    },
    connections: [
      {
        targetId: "rey-juan-carlos",
        relation: {
          es: "Pidió ir a Zarzuela — rechazado por el Rey",
          en: "Asked to go to Zarzuela — rejected by the King",
        },
      },
      {
        targetId: "milans",
        relation: {
          es: "Intermediario entre Milans y el Rey",
          en: "Intermediary between Milans and the King",
        },
      },
      {
        targetId: "tejero",
        relation: {
          es: "Le confirmó la operación",
          en: "Confirmed the operation to him",
        },
      },
      {
        targetId: "aramburu",
        relation: {
          es: "Aramburu lo escoltó al Congreso",
          en: "Aramburu escorted him to Congress",
        },
      },
      {
        targetId: "saenz-santamaria",
        relation: {
          es: "Le mintió sobre el apoyo de regiones militares",
          en: "Lied to him about military region support",
        },
      },
    ],
    documents: [
      "Doc_20_R.txt",
      "Doc_60_R.txt",
      "Doc_40_R.txt",
      "4_Campana_contra_SM.txt",
    ],
  },
  {
    id: "cortina",
    name: "José Cortina Prieto",
    rank: "Comandante de Infantería, Estado Mayor. Jefe de la AOME (CESID)",
    category: "conspirador",
    role: {
      es: "Sospechoso de organizar la participación del CESID. Se reunió con Tejero el día anterior al golpe. Su unidad proporcionó vehículos, radios y equipo. Activó la Operación Míster para encubrir",
      en: "Suspected of organizing CESID participation. Met with Tejero the day before the coup. His unit provided vehicles, radios, and equipment. Activated Operation Míster to cover up",
    },
    bio: {
      es: 'Jefe de la AOME (Agrupación de Operaciones y Medios Especiales) del CESID. Formalmente procesado tras el golpe. Se pidió discreción. El tribunal preguntó al CESID qué mandaba Cortina, si producía informes, y si tenía sistema de interceptación. Activó la "Operación Míster" y falsificó las fechas de movimientos de sus miembros el 23 de febrero.',
      en: 'Head of AOME (Special Operations and Resources Group) at CESID. Formally prosecuted after the coup. Discretion was requested. The tribunal asked CESID what Cortina commanded, whether he produced reports, and whether he had an interception system. Activated "Operation Míster" and falsified the dates of his members\' movements on February 23.',
    },
    quotes: [],
    connections: [
      {
        targetId: "tejero",
        relation: {
          es: "Reunión con Tejero el día anterior al golpe",
          en: "Met Tejero the day before the coup",
        },
      },
      {
        targetId: "garcia-almenta",
        relation: {
          es: "Subordinado en la AOME",
          en: "Subordinate in AOME",
        },
      },
      {
        targetId: "gomez-iglesias",
        relation: {
          es: "Subordinado en la AOME",
          en: "Subordinate in AOME",
        },
      },
      {
        targetId: "alonso-manglano",
        relation: {
          es: "Director del CESID, su superior",
          en: "CESID Director, his superior",
        },
      },
    ],
    documents: [
      "Doc_6_R.txt",
      "Doc_7_R.txt",
      "Doc_8_R.txt",
      "Doc_75_R.txt",
      "Doc_80_R.txt",
      "Doc_50_R.txt",
    ],
  },
  {
    id: "garcia-almenta",
    name: "García Almenta",
    rank: "Capitán, AOME (CESID)",
    category: "conspirador",
    role: {
      es: "Proporcionó vehículos, radios y equipo para la columna que asaltó el Congreso. Conocimiento previo del golpe",
      en: "Provided vehicles, radios, and equipment for the column that assaulted Congress. Prior knowledge of the coup",
    },
    bio: {
      es: "Capitán de la AOME (Agrupación de Operaciones y Medios Especiales) del CESID. Identificado en la investigación interna como uno de los 6 miembros de la AOME con participación activa en el golpe.",
      en: "Captain in AOME (Special Operations and Resources Group) at CESID. Identified in the internal investigation as one of 6 AOME members with active participation in the coup.",
    },
    quotes: [],
    connections: [
      {
        targetId: "cortina",
        relation: { es: "Superior en la AOME", en: "Superior in AOME" },
      },
    ],
    documents: ["Doc_6_R.txt", "Doc_7_R.txt"],
  },
  {
    id: "gomez-iglesias",
    name: "Gómez Iglesias",
    rank: "Capitán, AOME (CESID)",
    category: "conspirador",
    role: {
      es: "Conocimiento previo del golpe. Fue determinante en la decisión del Capitán Abad de participar",
      en: "Had prior knowledge of the coup. Was decisive in Captain Abad's decision to participate",
    },
    bio: {
      es: "Capitán de la AOME del CESID. Procesado formalmente. Identificado como determinante en la participación de otros oficiales.",
      en: "AOME Captain at CESID. Formally prosecuted. Identified as decisive in other officers' participation.",
    },
    quotes: [],
    connections: [
      {
        targetId: "cortina",
        relation: { es: "Superior en la AOME", en: "Superior in AOME" },
      },
      {
        targetId: "tejero",
        relation: {
          es: "Conexión conspirativa",
          en: "Conspiratorial connection",
        },
      },
      {
        targetId: "manchado",
        relation: {
          es: "Conexión conspirativa",
          en: "Conspiratorial connection",
        },
      },
    ],
    documents: [
      "Doc_6_R.txt",
      "Doc_7_R.txt",
      "Doc_50_R.txt",
      "Carpeta_21800_*.txt",
    ],
  },
  {
    id: "manchado",
    name: "Coronel Manchado",
    rank: "Coronel",
    category: "conspirador",
    role: {
      es: "Se negó a obedecer órdenes salvo las de Milans del Bosch. Fue determinante en la decisión de otros oficiales de participar",
      en: "Refused to obey orders except from Milans del Bosch. Was decisive in other officers' decision to participate",
    },
    bio: {
      es: "Milans negó conocerlo en el juicio, lo cual fue contradecido por otros testimonios. Su lealtad exclusiva a Milans del Bosch fue un elemento clave de la cadena de mando conspirativa.",
      en: "Milans denied knowing him at trial, which was contradicted by other testimonies. His exclusive loyalty to Milans del Bosch was a key element of the conspiratorial chain of command.",
    },
    quotes: [],
    connections: [
      {
        targetId: "milans",
        relation: {
          es: "Solo obedecía a Milans del Bosch",
          en: "Only obeyed Milans del Bosch",
        },
      },
      {
        targetId: "tejero",
        relation: {
          es: "Conexión conspirativa",
          en: "Conspiratorial connection",
        },
      },
    ],
    documents: [
      "7_Notas_Informativas.txt",
      "Doc_50_R.txt",
      "Doc_55_R.txt",
    ],
  },
  {
    id: "garcia-carres",
    name: "García Carrés",
    rank: "Civil",
    category: "conspirador",
    role: {
      es: "Intermediario civil. Enlace telefónico con Tejero durante la noche del golpe",
      en: "Civilian intermediary. Telephone link with Tejero during the night of the coup",
    },
    bio: {
      es: "Informó a Tejero sobre movimientos de tropas. Mencionó regimientos, manifiesto para El Alcázar, periodistas. Actúo como enlace externo, informando sobre movimientos de tropas durante la noche del golpe.",
      en: "Informed Tejero about troop movements. Mentioned regiments, manifesto for El Alcázar, journalists. Acted as external link, reporting on troop movements during the night of the coup.",
    },
    quotes: [
      {
        text: "Un regimiento va para allá...",
        source: "1_Conv_GARCIA_CARRES_Tejero.txt",
        context: {
          es: "García Carrés informa a Tejero de tropas en movimiento hacia el Congreso",
          en: "García Carrés informs Tejero of troops moving toward Congress",
        },
      },
    ],
    connections: [
      {
        targetId: "tejero",
        relation: {
          es: "Enlace telefónico durante el golpe",
          en: "Telephone link during the coup",
        },
      },
    ],
    documents: [
      "1_Conv_GARCIA_CARRES_Tejero.txt",
      "2_Conv_GARCIA_CARRES.txt",
    ],
  },
  {
    id: "merlo",
    name: "Capitán Merlo",
    rank: "Capitán del Regimiento Villaviciosa 14",
    category: "conspirador",
    role: {
      es: "Ocupó las instalaciones de TVE con caballería. Rechazó órdenes de retirarse excepto las de su coronel. Retrasó la emisión del mensaje del Rey",
      en: "Occupied TVE facilities with cavalry. Refused withdrawal orders except from his colonel. Delayed broadcast of the King's message",
    },
    bio: {
      es: "Capitán del Regimiento de Caballería Villaviciosa 14. Ocupó TVE en Prado del Rey con sus tropas. Su negativa a retirarse retrasó la emisión del mensaje televisado del Rey hasta la 01:14 de la madrugada.",
      en: "Captain of the Villaviciosa 14 Cavalry Regiment. Occupied TVE at Prado del Rey with his troops. His refusal to withdraw delayed the broadcast of the King's televised message until 01:14 AM.",
    },
    quotes: [],
    connections: [],
    documents: [
      "Doc_20_R.txt",
      "7_Notas_Informativas.txt",
      "3_Conv_unidad_militar_El_Pardo.txt",
    ],
  },
  {
    id: "garchitorena",
    name: "Coronel Garchitorena",
    rank: "Coronel del Ejército, Gobierno Militar de Madrid",
    category: "conspirador",
    role: {
      es: "Conectado con redes civiles armadas. La noche del 23-F, Assiego (40 pistoleros) estaba preparado para actuar por su orden",
      en: "Connected with armed civilian networks. On the night of 23-F, Assiego (40 gunmen) was ready to act on his orders",
    },
    bio: {
      es: "Coronel del Gobierno Militar de Madrid. Conectado con José Antonio Assiego, quien controlaba aproximadamente 40 pistoleros profesionales. También conectado con grupos armados creados para operaciones en el País Vasco.",
      en: "Colonel at Madrid Military Government. Connected with José Antonio Assiego, who controlled approximately 40 professional gunmen. Also connected with armed groups created for operations in the Basque Country.",
    },
    quotes: [],
    connections: [
      {
        targetId: "inestrillas",
        relation: {
          es: "Conexión conspirativa",
          en: "Conspiratorial connection",
        },
      },
    ],
    documents: ["Doc_73_R.txt"],
  },
  {
    id: "inestrillas",
    name: "Comandante Sáenz de Inestrillas",
    rank: "Comandante",
    category: "conspirador",
    role: {
      es: 'Líder de la facción "Los Inestrillos" (abiertos defensores de acción violenta). Presente en Operación Galaxia. Conexiones con redes de apoyo a convictos',
      en: 'Leader of the "Inestrillos" faction (open advocates of violent action). Present at Operation Galaxia. Connections with convict support networks',
    },
    bio: {
      es: 'Líder de una de las tres facciones militares que seguían conspirando tras el golpe: "Los Inestrillos", abiertos defensores de la acción violenta, que se reunían en el Club La Hípica militar. Participó en la Operación Galaxia de 1978.',
      en: 'Leader of one of three military factions that continued conspiring after the coup: "The Inestrillos," open advocates of violent action who met at the military La Hípica Club. Participated in the 1978 Operation Galaxia.',
    },
    quotes: [],
    connections: [
      {
        targetId: "tejero",
        relation: {
          es: "Juntos en la Operación Galaxia",
          en: "Together at Operation Galaxia",
        },
      },
      {
        targetId: "garchitorena",
        relation: {
          es: "Conexión con redes civiles armadas",
          en: "Connection to armed civilian networks",
        },
      },
    ],
    documents: [
      "10_Nota_Tejero_Galaxia.txt",
      "5_Involucionismo_politico.txt",
      "7_Notas_1983.txt",
      "Doc_73_R.txt",
    ],
  },
  {
    id: "sanchez-valiente",
    name: "Capitán Gil Sánchez Valiente Portillo",
    rank: "Capitán de la Guardia Civil",
    category: "conspirador",
    role: {
      es: "Participante en el golpe. Desapareció. El fugitivo del 23-F",
      en: "Coup participant. Disappeared. The 23-F fugitive",
    },
    bio: {
      es: "Última vez visto en cercanías del Congreso la mañana del 24 de febrero. Huyó con pasaporte argentino obtenido por su hermano en Roma. Cruzó América Latina y Europa. Último reporte: Grecia (posible desinformación). Esposa en Londres. Acusado de abandono de destino (Causa 9481).",
      en: "Last seen near Congress on the morning of February 24. Fled with an Argentine passport obtained by his brother in Rome. Crossed Latin America and Europe. Last report: Greece (possible disinformation). Wife in London. Charged with desertion (Case 9481).",
    },
    quotes: [],
    connections: [],
    documents: ["Doc_77_R.txt", "Causa_9481_*.txt"],
  },
  {
    id: "blas-pinar",
    name: "Blas Piñar",
    rank: "Líder político",
    category: "conspirador",
    role: {
      es: "Líder de Fuerza Nueva (partido de extrema derecha)",
      en: "Leader of Fuerza Nueva (far-right party)",
    },
    bio: {
      es: 'Nombrado como posible miembro de una Junta Cívico-Militar planificada. Después del golpe dijo: "la sombra del golpe no se ha alejado" y habló del "divorcio del Rey del Ejército". Apoyó públicamente a Tejero desde 1977.',
      en: "Named as potential member of a planned Civic-Military Junta. After the coup said: \"the shadow of the coup has not gone away\" and spoke of \"the King's divorce from the Army.\" Publicly supported Tejero since 1977.",
    },
    quotes: [
      {
        text: "La sombra del golpe no se ha alejado",
        source: "12-03-81_Fuerza_Nueva.txt",
        context: {
          es: "Declaraciones de Blas Piñar tras el golpe",
          en: "Blas Piñar's statements after the coup",
        },
      },
    ],
    connections: [
      {
        targetId: "tejero",
        relation: {
          es: "Apoyo público desde 1977",
          en: "Public support since 1977",
        },
      },
    ],
    documents: ["12-03-81_Fuerza_Nueva.txt", "11_Nota_prensa_arresto.txt"],
  },

  // ===========================================================================
  // LEALES
  // ===========================================================================
  {
    id: "rey-juan-carlos",
    name: "Rey Juan Carlos I",
    rank: "Rey de España",
    category: "leal",
    role: {
      es: "Pieza central de la resistencia al golpe. Rechazó a Armada. Llamó personalmente a todos los Capitanes Generales. Ordenó el acuartelamiento. Grabó y emitió el mensaje televisado",
      en: "Central figure in resistance to the coup. Rejected Armada. Personally called all Captain Generals. Ordered troops to barracks. Recorded and broadcast the televised message",
    },
    bio: {
      es: "Decisiones clave: 1) Negar la entrada a Armada en Zarzuela (cortó la cobertura institucional del golpe). 2) Llamar uno a uno a los Capitanes Generales. 3) Ordenar la emisión del mensaje televisado. Sufrió una campaña de desinformación para implicarlo: presunta reunión con Armada en Baqueira, forzar dimisión de Suárez, autorizar a Armada. Desmentido sistemáticamente. Respondió personalmente a Reagan, Elizabeth II, Castro, Presidente alemán.",
      en: "Key decisions: 1) Deny Armada entry to Zarzuela (cut off the coup's institutional cover). 2) Call each Captain General one by one. 3) Order the broadcast of the televised message. Suffered a disinformation campaign to implicate him: alleged meeting with Armada in Baqueira, forcing Suárez's resignation, authorizing Armada. Systematically denied. Personally responded to Reagan, Elizabeth II, Castro, German President.",
    },
    quotes: [],
    connections: [
      {
        targetId: "fernandez-campo",
        relation: {
          es: "Secretario General de la Casa Real, coordinó la respuesta",
          en: "Secretary General of the Royal Household, coordinated the response",
        },
      },
      {
        targetId: "armada",
        relation: {
          es: "Rechazó su entrada a Zarzuela",
          en: "Rejected his entry to Zarzuela",
        },
      },
      {
        targetId: "milans",
        relation: {
          es: "Habló con él por teléfono ordenando acuartelamiento",
          en: "Spoke with him by phone ordering troops to barracks",
        },
      },
    ],
    documents: [
      "Doc_20_R.txt",
      "Doc_1_R.txt",
      "4_Campana_contra_SM.txt",
      "D.21",
      "D.26",
      "D.27",
    ],
  },
  {
    id: "fernandez-campo",
    name: "Sabino Fernández Campo",
    rank: "Secretario General de la Casa Real",
    category: "leal",
    role: {
      es: 'Coordinador principal de la respuesta del Rey. Transmitió el informe del Rey al CESID. Envió las tarjetas sospechosas "TEJERO"',
      en: 'Main coordinator of the King\'s response. Transmitted the King\'s report to CESID. Sent the suspicious "TEJERO" cards',
    },
    bio: {
      es: 'El 14 de diciembre de 1981 envió carta personal y reservada al Director del CESID con el informe del Rey y tarjetas de visita sospechosas que deletreaban "TEJERO" en acróstico. Coordinó la respuesta del Rey durante la noche del golpe.',
      en: 'On December 14, 1981, sent a personal and classified letter to the CESID Director with the King\'s report and suspicious business cards that spelled "TEJERO" in acrostic. Coordinated the King\'s response during the night of the coup.',
    },
    quotes: [],
    connections: [
      {
        targetId: "rey-juan-carlos",
        relation: {
          es: "Coordinó la respuesta del Rey",
          en: "Coordinated the King's response",
        },
      },
      {
        targetId: "alonso-manglano",
        relation: {
          es: "Le transmitió el informe del Rey",
          en: "Transmitted the King's report to him",
        },
      },
    ],
    documents: ["Doc_1_R.txt", "Doc_20_R.txt"],
  },
  {
    id: "aramburu",
    name: "General José Aramburu Topete",
    rank: "Director General de la Guardia Civil",
    category: "leal",
    role: {
      es: "Escoltó a Armada hasta el Congreso. Testificó en el juicio. Relató la amenaza de Tejero",
      en: "Escorted Armada to Congress. Testified at trial. Reported Tejero's threat",
    },
    bio: {
      es: "Director General de la Guardia Civil. Escoltó a Armada hasta la puerta del Congreso. Testificó en el juicio sobre la amenaza de Tejero y sobre la declaración de Armada al salir: 'He fracasado.'",
      en: "Director General of the Civil Guard. Escorted Armada to the Congress entrance. Testified at trial about Tejero's threat and Armada's statement upon leaving: 'I have failed.'",
    },
    quotes: [],
    connections: [
      {
        targetId: "armada",
        relation: {
          es: "Lo escoltó al Congreso",
          en: "Escorted him to Congress",
        },
      },
      {
        targetId: "tejero",
        relation: {
          es: "Recibió amenaza de muerte de Tejero",
          en: "Received death threat from Tejero",
        },
      },
    ],
    documents: ["Doc_40_R.txt"],
  },
  {
    id: "saenz-santamaria",
    name: "General Sáenz de Santamaría",
    rank: "General de la Policía Nacional",
    category: "leal",
    role: {
      es: 'Leal al Rey. Atacado por prensa ultraderechista tras el golpe. Provocó incidente "rehenes" en el juicio',
      en: 'Loyal to the King. Attacked by far-right press after the coup. Triggered the "hostages" incident at trial',
    },
    bio: {
      es: 'Confirmó que Armada le mintió sobre apoyo de regiones militares. En el juicio usó la palabra "rehenes" para referirse a los diputados retenidos, lo que provocó una protesta de los acusados y la suspensión de la sesión. Tras el golpe fue ostracizado y amenazado.',
      en: 'Confirmed Armada lied to him about military region support. At trial, used the word "hostages" for the detained deputies, provoking protest from defendants and session suspension. Was ostracized and threatened after the coup.',
    },
    quotes: [],
    connections: [
      {
        targetId: "armada",
        relation: {
          es: "Armada le mintió sobre apoyo de regiones militares",
          en: "Armada lied to him about military region support",
        },
      },
    ],
    documents: ["Doc_40_R.txt", "1_Informe_Situacion.txt"],
  },
  {
    id: "alonso-manglano",
    name: "Emilio Alonso Manglano",
    rank: "Director del CESID",
    category: "leal",
    role: {
      es: "Receptor de la carta de Sabino Fernández Campo. Dirigió la respuesta del CESID durante la noche",
      en: "Recipient of Sabino Fernández Campo's letter. Led the CESID response during the night",
    },
    bio: {
      es: "Director del CESID. Ordenó (o no) la investigación de la AOME. Pregunta sin respuesta: ¿sabía de la participación de la AOME antes del golpe? Recibió el informe del Rey y las tarjetas sospechosas 'TEJERO'.",
      en: "CESID Director. Ordered (or not) the AOME investigation. Unanswered question: did he know about AOME participation before the coup? Received the King's report and suspicious 'TEJERO' cards.",
    },
    quotes: [],
    connections: [
      {
        targetId: "fernandez-campo",
        relation: {
          es: "Recibió carta con informe del Rey",
          en: "Received letter with the King's report",
        },
      },
      {
        targetId: "cortina",
        relation: {
          es: "Cortina era su subordinado en el CESID",
          en: "Cortina was his subordinate at CESID",
        },
      },
    ],
    documents: ["Doc_1_R.txt", "Doc_5_R.txt"],
  },
  {
    id: "laina",
    name: "Francisco Laína",
    rank: "Director General de Seguridad del Estado",
    category: "leal",
    role: {
      es: "Coordinó la respuesta civil del gobierno mientras los ministros estaban retenidos",
      en: "Coordinated the civilian government response while ministers were held hostage",
    },
    bio: {
      es: "Director General de Seguridad del Estado. Con los ministros retenidos en el Congreso, coordinó la respuesta civil del gobierno desde el exterior.",
      en: "Director General of State Security. With ministers held at Congress, coordinated the civilian government response from outside.",
    },
    quotes: [],
    connections: [],
    documents: ["Doc_4_R.txt"],
  },

  // ===========================================================================
  // POLÍTICOS (REHENES EN EL CONGRESO)
  // ===========================================================================
  {
    id: "suarez",
    name: "Adolfo Suárez",
    rank: "Presidente del Gobierno (saliente)",
    category: "politico",
    role: {
      es: "Retenido como rehén dentro del Congreso durante la votación de investidura de su sucesor",
      en: "Held hostage inside Congress during the investiture vote for his successor",
    },
    bio: {
      es: 'Su dimisión (29 enero 1981) fue identificada por los conspiradores como "la clave" para la intervención. Retenido en el hemiciclo durante toda la noche del golpe.',
      en: "His resignation (January 29, 1981) was identified by conspirators as \"the key\" for intervention. Held in the chamber throughout the night of the coup.",
    },
    quotes: [],
    connections: [],
    documents: ["4_Planificacion_golpe.txt", "Doc_20_R.txt"],
  },
  {
    id: "calvo-sotelo",
    name: "Leopoldo Calvo-Sotelo",
    rank: "Candidato a la Presidencia del Gobierno",
    category: "politico",
    role: {
      es: "Retenido como rehén durante la votación de investidura en curso",
      en: "Held hostage during the ongoing investiture vote",
    },
    bio: {
      es: "Candidato cuya investidura estaba siendo votada cuando se produjo el asalto. Retenido como rehén. Reagan le escribió tras el golpe.",
      en: "Candidate whose investiture was being voted on when the assault occurred. Held hostage. Reagan wrote to him after the coup.",
    },
    quotes: [],
    connections: [],
    documents: ["D.1", "D.3"],
  },
  {
    id: "felipe-gonzalez",
    name: "Felipe González",
    rank: "Líder del PSOE",
    category: "politico",
    role: {
      es: "Retenido como rehén. Desde Londres, criticó la respuesta de EEUU frente a la solidaridad europea",
      en: "Held hostage. From London, criticized the US response versus European solidarity",
    },
    bio: {
      es: 'Líder del PSOE retenido como rehén en el Congreso. En un viaje posterior a Londres, criticó la respuesta "insensible" de EEUU frente a la "solidaridad europea".',
      en: 'PSOE leader held hostage in Congress. On a subsequent trip to London, criticized the "insensitive" US response versus "European solidarity."',
    },
    quotes: [],
    connections: [],
    documents: ["D.14"],
  },
  {
    id: "carrillo",
    name: "Santiago Carrillo",
    rank: "Líder del PCE",
    category: "politico",
    role: {
      es: "Retenido como rehén. Referido en interceptaciones sobre intentos de negociación de Armada",
      en: "Held hostage. Referenced in intercepts about Armada's negotiation attempts",
    },
    bio: {
      es: "Líder del PCE retenido como rehén. Mencionado en la conversación interceptada García Carrés-Tejero: Armada intenta negociar con Carrillo.",
      en: "PCE leader held hostage. Mentioned in the intercepted García Carrés-Tejero conversation: Armada attempts to negotiate with Carrillo.",
    },
    quotes: [],
    connections: [],
    documents: ["1_Conv_GARCIA_CARRES_Tejero.txt"],
  },
  {
    id: "gutierrez-mellado",
    name: "Gutiérrez Mellado",
    rank: "Vicepresidente del Gobierno",
    category: "politico",
    role: {
      es: "Se enfrentó físicamente a Tejero dentro del Congreso",
      en: "Physically confronted Tejero inside Congress",
    },
    bio: {
      es: "Vicepresidente del Gobierno que se enfrentó físicamente a Tejero dentro del hemiciclo. Incluido en la lista de personas a detener según el plan de golpe.",
      en: "Vice President who physically confronted Tejero inside the chamber. Included in the list of people to detain according to the coup plan.",
    },
    quotes: [],
    connections: [
      {
        targetId: "tejero",
        relation: {
          es: "Se enfrentó físicamente a Tejero",
          en: "Physically confronted Tejero",
        },
      },
    ],
    documents: ["4_Planificacion_golpe.txt"],
  },
  {
    id: "lavilla",
    name: "Landelino Lavilla",
    rank: "Presidente del Congreso",
    category: "politico",
    role: {
      es: "Presidente del Congreso durante el asalto",
      en: "President of Congress during the assault",
    },
    bio: {
      es: 'El Speaker de los Comunes británico lo felicitó por la "conducta del Congreso durante la indignidad".',
      en: 'The British Speaker of the Commons congratulated him for the "conduct of Congress during the indignity."',
    },
    quotes: [],
    connections: [],
    documents: ["D.28"],
  },

  // ===========================================================================
  // INTERNACIONALES
  // ===========================================================================
  {
    id: "reagan",
    name: "Ronald Reagan",
    rank: "Presidente de los Estados Unidos",
    category: "internacional",
    role: {
      es: "Llamó al Rey Juan Carlos el 24 de febrero a las 10:35 AM. Escribió cartas al Rey y a Calvo-Sotelo",
      en: "Called King Juan Carlos on February 24 at 10:35 AM. Wrote letters to the King and Calvo-Sotelo",
    },
    bio: {
      es: "Presidente de los EEUU. Llamó al Rey Juan Carlos la mañana del 24 de febrero para expresar apoyo. Escribió cartas al Rey y a Calvo-Sotelo.",
      en: "US President. Called King Juan Carlos on the morning of February 24 to express support. Wrote letters to the King and Calvo-Sotelo.",
    },
    quotes: [],
    connections: [
      {
        targetId: "rey-juan-carlos",
        relation: {
          es: "Llamó al Rey el 24 de febrero",
          en: "Called the King on February 24",
        },
      },
    ],
    documents: ["D.1", "D.3"],
  },
  {
    id: "haig",
    name: "Alexander Haig",
    rank: "Secretario de Estado de EEUU",
    category: "internacional",
    role: {
      es: 'Calificó el golpe como "asunto interno de España". Provocó tormenta mediática y diplomática',
      en: 'Called the coup "an internal matter for Spain." Triggered media and diplomatic storm',
    },
    bio: {
      es: 'Calificó el golpe como "asunto interno de España", lo que provocó una tormenta mediática y diplomática. Criticado por el NYT y por Felipe González.',
      en: "Called the coup \"an internal matter for Spain,\" triggering a media and diplomatic storm. Criticized by the NYT and by Felipe González.",
    },
    quotes: [],
    connections: [],
    documents: ["D.1", "D.14"],
  },
  {
    id: "elizabeth-ii",
    name: "Reina Isabel II",
    rank: "Reina del Reino Unido",
    category: "internacional",
    role: {
      es: 'Envió mensaje diciendo estar "fuertemente impresionada". Felicitó al Rey',
      en: 'Sent message saying she was "strongly impressed." Congratulated the King',
    },
    bio: {
      es: "La Reina Isabel II envió un mensaje al Rey Juan Carlos expresando estar 'fuertemente impresionada' por su actuación. Felicitó al Rey por la defensa de la democracia.",
      en: "Queen Elizabeth II sent a message to King Juan Carlos expressing she was 'strongly impressed' by his actions. Congratulated the King for defending democracy.",
    },
    quotes: [],
    connections: [
      {
        targetId: "rey-juan-carlos",
        relation: {
          es: "Felicitó al Rey por su actuación",
          en: "Congratulated the King for his actions",
        },
      },
    ],
    documents: ["D.27", "D.28"],
  },
  {
    id: "genscher",
    name: "Hans-Dietrich Genscher",
    rank: "Ministro de Asuntos Exteriores de Alemania Federal",
    category: "internacional",
    role: {
      es: "Escribió carta a Pérez-Llorca expresando satisfacción (25 febrero)",
      en: "Wrote letter to Pérez-Llorca expressing satisfaction (February 25)",
    },
    bio: {
      es: "Ministro de Asuntos Exteriores de la RFA. Escribió carta al Ministro español Pérez-Llorca expresando satisfacción por la resolución de la crisis el 25 de febrero.",
      en: "Foreign Minister of West Germany. Wrote letter to Spanish Minister Pérez-Llorca expressing satisfaction at the resolution of the crisis on February 25.",
    },
    quotes: [],
    connections: [],
    documents: ["D.29"],
  },
  {
    id: "castro",
    name: "Fidel Castro",
    rank: "Presidente de Cuba",
    category: "internacional",
    role: {
      es: "Envió mensaje de preocupación al Rey. Juan Carlos respondió el 3 de abril",
      en: "Sent message of concern to the King. Juan Carlos responded on April 3",
    },
    bio: {
      es: "Envió mensaje de preocupación al Rey Juan Carlos. El Rey respondió el 3 de abril de 1981 agradeciendo y expresando confianza en las relaciones bilaterales.",
      en: "Sent message of concern to King Juan Carlos. The King responded on April 3, 1981, thanking him and expressing confidence in bilateral relations.",
    },
    quotes: [],
    connections: [
      {
        targetId: "rey-juan-carlos",
        relation: {
          es: "Intercambio de mensajes tras el golpe",
          en: "Exchange of messages after the coup",
        },
      },
    ],
    documents: ["D.21"],
  },
];

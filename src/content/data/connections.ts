// =============================================================================
// connections.ts — Network of connections between 23-F characters
// Source: docs/plans/personajes.md (Mapa de conexiones) + characters.ts
// =============================================================================

export interface Connection {
  source: string; // characterId
  target: string; // characterId
  type: "conspiracion" | "cadena-mando" | "oposicion" | "lealtad" | "juicio";
  label: { es: string; en: string };
  strength: number; // 1-10
}

export const connections: Connection[] = [
  // ===========================================================================
  // CONSPIRACY CORE: Tejero – Armada – Milans triangle
  // ===========================================================================
  {
    source: "tejero",
    target: "armada",
    type: "conspiracion",
    label: {
      es: 'Armada confirmó "Operación Nacional a las Órdenes del Rey"',
      en: 'Armada confirmed "National Operation Under the King\'s Orders"',
    },
    strength: 10,
  },
  {
    source: "tejero",
    target: "milans",
    type: "conspiracion",
    label: {
      es: "Tejero como ejecutor del golpe planificado por Milans",
      en: "Tejero as executor of the coup planned by Milans",
    },
    strength: 9,
  },
  {
    source: "armada",
    target: "milans",
    type: "conspiracion",
    label: {
      es: "Armada como intermediario entre Milans y el Rey",
      en: "Armada as intermediary between Milans and the King",
    },
    strength: 10,
  },

  // ===========================================================================
  // CESID / AOME: Cortina's network
  // ===========================================================================
  {
    source: "cortina",
    target: "tejero",
    type: "conspiracion",
    label: {
      es: "Cortina fijó la fecha del golpe y se reunió con Tejero el día anterior",
      en: "Cortina set the coup date and met Tejero the day before",
    },
    strength: 9,
  },
  {
    source: "cortina",
    target: "garcia-almenta",
    type: "cadena-mando",
    label: {
      es: "Subordinado de Cortina en la AOME",
      en: "Cortina's subordinate in AOME",
    },
    strength: 8,
  },
  {
    source: "cortina",
    target: "gomez-iglesias",
    type: "cadena-mando",
    label: {
      es: "Subordinado de Cortina en la AOME",
      en: "Cortina's subordinate in AOME",
    },
    strength: 8,
  },
  {
    source: "cortina",
    target: "alonso-manglano",
    type: "cadena-mando",
    label: {
      es: "Alonso Manglano era el Director del CESID, superior de Cortina",
      en: "Alonso Manglano was CESID Director, Cortina's superior",
    },
    strength: 7,
  },

  // ===========================================================================
  // AOME operatives – lateral connections
  // ===========================================================================
  {
    source: "gomez-iglesias",
    target: "tejero",
    type: "conspiracion",
    label: {
      es: "Conexión conspirativa directa",
      en: "Direct conspiratorial connection",
    },
    strength: 6,
  },
  {
    source: "gomez-iglesias",
    target: "manchado",
    type: "conspiracion",
    label: {
      es: "Conexión conspirativa",
      en: "Conspiratorial connection",
    },
    strength: 5,
  },
  {
    source: "tejero",
    target: "gomez-iglesias",
    type: "conspiracion",
    label: {
      es: "Conexión a través de la AOME",
      en: "Connected through AOME",
    },
    strength: 6,
  },

  // ===========================================================================
  // Milans – Manchado: exclusive obedience chain
  // ===========================================================================
  {
    source: "manchado",
    target: "milans",
    type: "cadena-mando",
    label: {
      es: "Manchado solo obedecía a Milans del Bosch",
      en: "Manchado only obeyed Milans del Bosch",
    },
    strength: 9,
  },
  {
    source: "manchado",
    target: "tejero",
    type: "conspiracion",
    label: {
      es: "Conexión conspirativa",
      en: "Conspiratorial connection",
    },
    strength: 5,
  },

  // ===========================================================================
  // García Carrés: civilian intermediary
  // ===========================================================================
  {
    source: "garcia-carres",
    target: "tejero",
    type: "conspiracion",
    label: {
      es: "Enlace telefónico durante la noche del golpe",
      en: "Telephone link during the night of the coup",
    },
    strength: 8,
  },

  // ===========================================================================
  // Operación Galaxia (1978): Tejero – Inestrillas
  // ===========================================================================
  {
    source: "tejero",
    target: "inestrillas",
    type: "conspiracion",
    label: {
      es: "Juntos en la Operación Galaxia (1978)",
      en: "Together in Operation Galaxia (1978)",
    },
    strength: 7,
  },

  // ===========================================================================
  // Far-right civilian networks
  // ===========================================================================
  {
    source: "inestrillas",
    target: "garchitorena",
    type: "conspiracion",
    label: {
      es: "Conexión con redes civiles armadas",
      en: "Connection to armed civilian networks",
    },
    strength: 6,
  },
  {
    source: "blas-pinar",
    target: "tejero",
    type: "conspiracion",
    label: {
      es: "Apoyo público a Tejero desde 1977 — Fuerza Nueva",
      en: "Public support for Tejero since 1977 — Fuerza Nueva",
    },
    strength: 5,
  },

  // ===========================================================================
  // OPOSICIÓN: Rey Juan Carlos vs. conspirators
  // ===========================================================================
  {
    source: "rey-juan-carlos",
    target: "armada",
    type: "oposicion",
    label: {
      es: "Rechazó la entrada de Armada a Zarzuela",
      en: "Rejected Armada's entry to Zarzuela",
    },
    strength: 10,
  },
  {
    source: "rey-juan-carlos",
    target: "milans",
    type: "oposicion",
    label: {
      es: "Habló con Milans por teléfono ordenando acuartelamiento",
      en: "Spoke with Milans by phone ordering troops to barracks",
    },
    strength: 10,
  },

  // ===========================================================================
  // LEALTAD: Royal Household & institutional response
  // ===========================================================================
  {
    source: "rey-juan-carlos",
    target: "fernandez-campo",
    type: "lealtad",
    label: {
      es: "Fernández Campo coordinó la respuesta del Rey durante la noche",
      en: "Fernández Campo coordinated the King's response during the night",
    },
    strength: 10,
  },
  {
    source: "fernandez-campo",
    target: "alonso-manglano",
    type: "lealtad",
    label: {
      es: "Transmitió el informe del Rey y tarjetas sospechosas al Director del CESID",
      en: "Transmitted the King's report and suspicious cards to the CESID Director",
    },
    strength: 8,
  },

  // ===========================================================================
  // Armada lies to Sáenz de Santamaría
  // ===========================================================================
  {
    source: "armada",
    target: "saenz-santamaria",
    type: "conspiracion",
    label: {
      es: "Armada mintió sobre el apoyo de las regiones militares 2ª, 5ª y 7ª",
      en: "Armada lied about support from the 2nd, 5th, and 7th Military Regions",
    },
    strength: 7,
  },

  // ===========================================================================
  // Armada – Aramburu: escort to Congress
  // ===========================================================================
  {
    source: "aramburu",
    target: "armada",
    type: "lealtad",
    label: {
      es: "Aramburu escoltó a Armada al Congreso",
      en: "Aramburu escorted Armada to Congress",
    },
    strength: 6,
  },
  {
    source: "aramburu",
    target: "tejero",
    type: "oposicion",
    label: {
      es: "Recibió amenaza de muerte de Tejero dentro del Congreso",
      en: "Received death threat from Tejero inside Congress",
    },
    strength: 7,
  },

  // ===========================================================================
  // Gutiérrez Mellado vs. Tejero: physical confrontation
  // ===========================================================================
  {
    source: "gutierrez-mellado",
    target: "tejero",
    type: "oposicion",
    label: {
      es: "Se enfrentó físicamente a Tejero dentro del hemiciclo",
      en: "Physically confronted Tejero inside the chamber",
    },
    strength: 8,
  },

  // ===========================================================================
  // JUICIO (Trial connections)
  // ===========================================================================
  {
    source: "tejero",
    target: "armada",
    type: "juicio",
    label: {
      es: "Contradicción total en el juicio: Tejero acusó a Armada; Armada negó todo",
      en: "Total contradiction at trial: Tejero accused Armada; Armada denied everything",
    },
    strength: 10,
  },
  {
    source: "milans",
    target: "manchado",
    type: "juicio",
    label: {
      es: "Milans negó conocer a Manchado en el juicio — contradecido por testimonios",
      en: "Milans denied knowing Manchado at trial — contradicted by testimonies",
    },
    strength: 7,
  },
  {
    source: "saenz-santamaria",
    target: "tejero",
    type: "juicio",
    label: {
      es: 'Usó la palabra "rehenes" en el juicio — provocó protesta de los acusados',
      en: 'Used the word "hostages" at trial — provoked protest from defendants',
    },
    strength: 6,
  },

  // ===========================================================================
  // INTERNATIONAL: reactions to the coup
  // ===========================================================================
  {
    source: "reagan",
    target: "rey-juan-carlos",
    type: "lealtad",
    label: {
      es: "Llamó al Rey el 24 de febrero a las 10:35 AM",
      en: "Called the King on February 24 at 10:35 AM",
    },
    strength: 5,
  },
  {
    source: "elizabeth-ii",
    target: "rey-juan-carlos",
    type: "lealtad",
    label: {
      es: 'Envió mensaje expresando estar "fuertemente impresionada"',
      en: 'Sent message saying she was "strongly impressed"',
    },
    strength: 4,
  },
  {
    source: "castro",
    target: "rey-juan-carlos",
    type: "lealtad",
    label: {
      es: "Intercambio de mensajes tras el golpe",
      en: "Exchange of messages after the coup",
    },
    strength: 3,
  },

  // ===========================================================================
  // Tejero – Manchado (via characters.ts)
  // ===========================================================================
  {
    source: "tejero",
    target: "manchado",
    type: "conspiracion",
    label: {
      es: "Conexión conspirativa",
      en: "Conspiratorial connection",
    },
    strength: 5,
  },
];

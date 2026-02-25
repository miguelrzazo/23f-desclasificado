// =============================================================================
// locations.ts — All locations referenced in the 23-F declassified documents
// Source: docs/plans/sintesis-documental.md (Apéndice: Mapa de Localizaciones)
// =============================================================================

export interface Location {
  id: string;
  name: { es: string; en: string };
  coordinates: [number, number]; // [lat, lng]
  description: { es: string; en: string };
  relevance: { es: string; en: string };
  events: string[]; // timelineEventIds
}

export const locations: Location[] = [
  {
    id: "congreso",
    name: {
      es: "Congreso de los Diputados",
      en: "Congress of Deputies",
    },
    coordinates: [40.4163, -3.6965],
    description: {
      es: "Carrera de San Jerónimo, Madrid. Sede del Congreso de los Diputados, cámara baja del Parlamento español",
      en: "Carrera de San Jerónimo, Madrid. Seat of the Congress of Deputies, lower chamber of the Spanish Parliament",
    },
    relevance: {
      es: "Escenario principal del golpe. Tejero y guardias civiles armados asaltaron el hemiciclo durante la votación de investidura de Calvo-Sotelo, reteniendo como rehenes a los diputados durante toda la noche",
      en: "Main scene of the coup. Tejero and armed civil guards stormed the chamber during Calvo-Sotelo's investiture vote, holding deputies hostage throughout the night",
    },
    events: [
      "asalto-congreso",
      "autobuses-congreso",
      "garcia-carres-tejero-llamada",
      "armada-congreso",
      "armada-he-fracasado",
      "civiles-liberados",
      "tejero-rendicion",
      "amenaza-bomba-congreso",
    ],
  },
  {
    id: "zarzuela",
    name: {
      es: "Palacio de la Zarzuela",
      en: "Zarzuela Palace",
    },
    coordinates: [40.4714, -3.7858],
    description: {
      es: "Palacio de la Zarzuela, residencia oficial de la Familia Real española, al noroeste de Madrid",
      en: "Zarzuela Palace, official residence of the Spanish Royal Family, northwest of Madrid",
    },
    relevance: {
      es: "Centro de mando del Rey Juan Carlos durante la noche del golpe. Desde aquí el Rey rechazó a Armada, llamó a todos los Capitanes Generales y grabó su mensaje televisado",
      en: "King Juan Carlos's command center during the night of the coup. From here the King rejected Armada, called all Captain Generals, and recorded his televised message",
    },
    events: [
      "rey-radio",
      "armada-zarzuela-denegado",
      "rey-milans-telefono",
      "decision-mensaje-tv",
      "reagan-llama-rey",
      "rey-responde-castro",
      "carta-sabino-cesid",
    ],
  },
  {
    id: "valencia",
    name: {
      es: "Capitanía General de Valencia (3ª Región Militar)",
      en: "Valencia General Captaincy (3rd Military Region)",
    },
    coordinates: [39.4699, -0.3763],
    description: {
      es: "Sede de la Capitanía General de la 3ª Región Militar en Valencia",
      en: "Headquarters of the 3rd Military Region General Captaincy in Valencia",
    },
    relevance: {
      es: "Milans del Bosch declaró el estado de excepción desde aquí y desplegó tanques en las calles de Valencia. Fue la única región donde el golpe se materializó visiblemente en las calles",
      en: "Milans del Bosch declared a state of emergency from here and deployed tanks on Valencia's streets. It was the only region where the coup visibly materialized on the streets",
    },
    events: ["valencia-excepcion", "milans-marcha-atras"],
  },
  {
    id: "brunete",
    name: {
      es: "División Acorazada Brunete",
      en: "Brunete Armored Division",
    },
    coordinates: [40.5161, -3.774],
    description: {
      es: "Cuartel de la División Acorazada Brunete, El Pardo, Madrid",
      en: "Brunete Armored Division headquarters, El Pardo, Madrid",
    },
    relevance: {
      es: "Base de la División Acorazada (DAC). El General Juste preguntó si Armada estaba en Zarzuela — al saber que no, dijo: 'Esto cambia completamente la situación', sugiriendo que la DAC estaba dispuesta a moverse solo si el Rey respaldaba el golpe",
      en: "Base of the Armored Division (DAC). General Juste asked if Armada was at Zarzuela — upon learning he was not, said: 'This completely changes the situation,' suggesting the DAC would only move if the King backed the coup",
    },
    events: ["acuartelamiento-dac", "juste-esto-cambia"],
  },
  {
    id: "cesid-hq",
    name: {
      es: "Cuartel General del CESID",
      en: "CESID Headquarters",
    },
    coordinates: [40.4203, -3.6936],
    description: {
      es: "Sede del Centro Superior de Información de la Defensa (CESID), servicio de inteligencia militar, Madrid",
      en: "Headquarters of the Superior Defense Intelligence Center (CESID), military intelligence service, Madrid",
    },
    relevance: {
      es: "Centro neurálgico de la inteligencia durante la noche del golpe. El CESID operó sin cadena de mando, estableció centro de operaciones y envió agentes al Congreso. La AOME de Cortina operaba desde aquí",
      en: "Intelligence nerve center during the night of the coup. CESID operated without chain of command, established operations center, and sent agents to Congress. Cortina's AOME operated from here",
    },
    events: [
      "cesid-nadie-sabia",
      "cesid-centro-ops",
      "cesid-alerta-verde",
      "cesid-llama-valencia",
      "valoracion-inteligencia",
      "valoracion-fase-defensa",
      "libertad-provisional",
    ],
  },
  {
    id: "el-pardo",
    name: {
      es: "Cuartel de El Pardo",
      en: "El Pardo Barracks",
    },
    coordinates: [40.5205, -3.7736],
    description: {
      es: "Cuartel militar de El Pardo, en las afueras de Madrid",
      en: "El Pardo military barracks, on the outskirts of Madrid",
    },
    relevance: {
      es: "Interceptaciones telefónicas a las 03:20 del 24 de febrero revelaron la confusión total entre los soldados sobre quién mandaba y qué unidades estaban movilizadas",
      en: "Phone intercepts at 03:20 on February 24 revealed total confusion among soldiers about who was in command and which units were mobilized",
    },
    events: ["interceptaciones-pardo"],
  },
  {
    id: "tve-prado-del-rey",
    name: {
      es: "TVE Prado del Rey",
      en: "TVE Prado del Rey",
    },
    coordinates: [40.4101, -3.7914],
    description: {
      es: "Instalaciones de Televisión Española en Prado del Rey, Pozuelo de Alarcón, Madrid",
      en: "Spanish Television facilities at Prado del Rey, Pozuelo de Alarcón, Madrid",
    },
    relevance: {
      es: "Ocupada por el Regimiento de Caballería Villaviciosa 14 bajo el mando del Capitán Merlo, que rechazó retirarse. La ocupación retrasó la emisión del mensaje del Rey hasta la 01:14",
      en: "Occupied by the Villaviciosa 14 Cavalry Regiment under Captain Merlo, who refused to withdraw. The occupation delayed the King's message broadcast until 01:14",
    },
    events: ["tve-ocupada", "mensaje-rey-tv"],
  },
  {
    id: "campamento",
    name: {
      es: "Servicio Geográfico del Ejército, Campamento",
      en: "Army Geographic Service, Campamento",
    },
    coordinates: [40.3815, -3.7742],
    description: {
      es: "Servicio Geográfico del Ejército en la zona de Campamento, Madrid. Sede del juicio de la Causa 2/81",
      en: "Army Geographic Service in the Campamento area, Madrid. Venue for Case 2/81 trial",
    },
    relevance: {
      es: "Sede del juicio de la Causa 2/81, donde se juzgó a los 33 procesados por rebelión militar ante el Consejo Supremo de Justicia Militar durante los meses de febrero a junio de 1982",
      en: "Venue for the Case 2/81 trial, where 33 defendants were tried for military rebellion before the Supreme Military Council from February to June 1982",
    },
    events: [
      "carta-atmosfera-ejercito",
      "primeras-sesiones-juicio",
      "interrogatorios-milans-armada",
      "comisiones-simpatia",
      "interrogatorio-completo-tejero",
      "interrogatorios-abad",
      "aramburu-santamaria-testifican",
      "sesion-aramburu",
      "mugica-herzog",
      "defensa-milans-art8",
      "defensa-lazaro-bobis",
      "jueces-sancionados",
      "sentencias",
    ],
  },
  {
    id: "cafeteria-galaxia",
    name: {
      es: "Cafetería Galaxia",
      en: "Cafetería Galaxia",
    },
    coordinates: [40.42, -3.7],
    description: {
      es: "Cafetería en Madrid donde tuvo lugar la reunión conspirativa de la Operación Galaxia en noviembre de 1978",
      en: "Café in Madrid where the conspiratorial meeting for Operation Galaxia took place in November 1978",
    },
    relevance: {
      es: "Escenario de la primera conspiración formal documentada para un golpe de Estado, reuniendo a Tejero, Inestrillas y otros en noviembre de 1978",
      en: "Scene of the first documented formal conspiracy for a coup d'état, bringing together Tejero, Inestrillas, and others in November 1978",
    },
    events: ["operacion-galaxia"],
  },
  {
    id: "malaga",
    name: {
      es: "Málaga — 251 Comandancia de la Guardia Civil",
      en: "Málaga — 251st Civil Guard Command",
    },
    coordinates: [36.7213, -4.4214],
    description: {
      es: "Comandancia de la Guardia Civil en Málaga, donde Tejero era Primer Jefe",
      en: "Civil Guard Command in Málaga, where Tejero was First Commander",
    },
    relevance: {
      es: "Escenario del incidente de octubre de 1977, embrión de la sedición: Tejero ordenó a la GC armada impedir una manifestación autorizada, siendo arrestado y desencadenando un movimiento de solidaridad en todo el Cuerpo",
      en: "Scene of the October 1977 incident, embryo of the sedition: Tejero ordered the armed Civil Guard to block an authorized demonstration, was arrested, triggering a solidarity movement across the Corps",
    },
    events: [
      "malaga-incident",
      "malaga-arrest-order",
      "fuerza-nueva-adhesion",
      "pilar-viva-tejero",
    ],
  },
  {
    id: "eme-buenavista",
    name: {
      es: "EME / Cuartel General del Ejército (Palacio de Buenavista)",
      en: "Army HQ / Army General Staff (Buenavista Palace)",
    },
    coordinates: [40.4203, -3.6936],
    description: {
      es: "Palacio de Buenavista, sede del Cuartel General del Estado Mayor del Ejército, en la Plaza de Cibeles, Madrid",
      en: "Buenavista Palace, headquarters of the Army General Staff, at Plaza de Cibeles, Madrid",
    },
    relevance: {
      es: "Lugar de detención de Milans del Bosch tras el golpe. Milans se quejó del trato y la Casa Real intervino para revisar sus condiciones",
      en: "Detention site of Milans del Bosch after the coup. Milans complained about treatment and the Royal Household intervened to review his conditions",
    },
    events: [],
  },
  {
    id: "castillo-la-palma",
    name: {
      es: "Castillo de La Palma",
      en: "La Palma Castle",
    },
    coordinates: [43.463, -8.233],
    description: {
      es: "Castillo de La Palma, El Ferrol, utilizado como prisión militar",
      en: "La Palma Castle, El Ferrol, used as military prison",
    },
    relevance: {
      es: "Prisión de cuatro capitanes de la Guardia Civil condenados por el 23-F (Lázaro Corthay, Pérez de la Lastra, Acera, Bobis), liberados en 1983",
      en: "Prison for four Civil Guard captains convicted for 23-F (Lázaro Corthay, Pérez de la Lastra, Acera, Bobis), released in 1983",
    },
    events: ["liberacion-capitanes-palma"],
  },
  {
    id: "caranza",
    name: {
      es: "Prisión Naval de Caranza",
      en: "Caranza Naval Prison",
    },
    coordinates: [43.485, -8.225],
    description: {
      es: "Prisión Naval de Caranza, El Ferrol, Galicia",
      en: "Caranza Naval Prison, El Ferrol, Galicia",
    },
    relevance: {
      es: "Prisión donde cumplió condena el Teniente General Milans del Bosch, condenado a 30 años",
      en: "Prison where Lieutenant General Milans del Bosch served his 30-year sentence",
    },
    events: [],
  },
  {
    id: "dgs-puerta-sol",
    name: {
      es: "Dirección General de Seguridad (Puerta del Sol)",
      en: "General Security Directorate (Puerta del Sol)",
    },
    coordinates: [40.4169, -3.7035],
    description: {
      es: "Sede de la Dirección General de Seguridad en la Puerta del Sol, Madrid",
      en: "Headquarters of the General Security Directorate at Puerta del Sol, Madrid",
    },
    relevance: {
      es: "Objetivo estratégico del plan operativo golpista: incluida en el Grupo C de objetivos a ocupar",
      en: "Strategic target of the coup operative plan: included in Group C of objectives to occupy",
    },
    events: [],
  },
  {
    id: "cibeles",
    name: {
      es: "Palacio de Comunicaciones / Cibeles",
      en: "Communications Palace / Cibeles",
    },
    coordinates: [40.4189, -3.6925],
    description: {
      es: "Palacio de Comunicaciones en la Plaza de Cibeles, Madrid. Sede central de Correos",
      en: "Communications Palace at Plaza de Cibeles, Madrid. Central post office headquarters",
    },
    relevance: {
      es: "Objetivo estratégico del plan operativo golpista: incluida en el Grupo A de objetivos a ocupar para controlar las comunicaciones",
      en: "Strategic target of the coup operative plan: included in Group A of objectives to occupy for communications control",
    },
    events: [],
  },
  {
    id: "moncloa",
    name: {
      es: "Palacio de la Moncloa",
      en: "Moncloa Palace",
    },
    coordinates: [40.4385, -3.7178],
    description: {
      es: "Palacio de la Moncloa, residencia oficial y sede de la Presidencia del Gobierno de España",
      en: "Moncloa Palace, official residence and headquarters of the Spanish Prime Ministry",
    },
    relevance: {
      es: "Objetivo estratégico del plan golpista. La dimisión de Suárez en enero de 1981 desde este palacio fue identificada como el detonante clave",
      en: "Strategic target of the coup plan. Suárez's resignation from this palace in January 1981 was identified as the key trigger",
    },
    events: ["dimision-suarez"],
  },
  {
    id: "baqueira",
    name: {
      es: "Baqueira (Valle de Arán)",
      en: "Baqueira (Aran Valley)",
    },
    coordinates: [42.693, 0.943],
    description: {
      es: "Estación de esquí de Baqueira, Valle de Arán, Lérida",
      en: "Baqueira ski resort, Aran Valley, Lérida",
    },
    relevance: {
      es: "Escenario de la presunta reunión entre el Rey y Armada, utilizada en la campaña de desinformación para implicar al Rey en el golpe. Desmentida sistemáticamente",
      en: "Scene of the alleged meeting between the King and Armada, used in the disinformation campaign to implicate the King in the coup. Systematically denied",
    },
    events: [],
  },
  {
    id: "valladolid",
    name: {
      es: "Valladolid",
      en: "Valladolid",
    },
    coordinates: [41.6523, -4.7245],
    description: {
      es: "Ciudad de Valladolid, Castilla y León",
      en: "City of Valladolid, Castile and León",
    },
    relevance: {
      es: 'Sede de tres facciones militares que seguían conspirando tras el golpe: "Los Inestrillos" (violentos), "Los Almendros" (intelectuales), y la corriente Opus Dei',
      en: "Base of three military factions that continued conspiring after the coup: \"The Inestrillos\" (violent), \"The Almendros\" (intellectuals), and the Opus Dei current",
    },
    events: [],
  },
  {
    id: "barcelona",
    name: {
      es: "Barcelona",
      en: "Barcelona",
    },
    coordinates: [41.3874, 2.1686],
    description: {
      es: "Ciudad de Barcelona, Cataluña",
      en: "City of Barcelona, Catalonia",
    },
    relevance: {
      es: "La segunda fase de la Operación Ariete fue frenada en Barcelona pasadas las siete de la madrugada",
      en: "The second phase of Operation Ariete was stopped in Barcelona after seven in the morning",
    },
    events: [],
  },
  {
    id: "zaragoza",
    name: {
      es: "Zaragoza",
      en: "Zaragoza",
    },
    coordinates: [41.6488, -0.8891],
    description: {
      es: "Ciudad de Zaragoza, Aragón",
      en: "City of Zaragoza, Aragón",
    },
    relevance: {
      es: "El CESID identificó riesgo de incidentes durante el desfile de la Victoria en Zaragoza con presencia del Rey durante el periodo del juicio",
      en: "CESID identified risk of incidents during the Victory parade in Zaragoza with the King present during the trial period",
    },
    events: [],
  },

  // International locations
  {
    id: "washington",
    name: {
      es: "Washington D.C.",
      en: "Washington D.C.",
    },
    coordinates: [38.9072, -77.0369],
    description: {
      es: "Capital de los Estados Unidos. Sede del Departamento de Estado y el Congreso",
      en: "Capital of the United States. Seat of the State Department and Congress",
    },
    relevance: {
      es: 'Haig calificó el golpe como "asunto interno de España", provocando una tormenta diplomática. El Congreso aprobó resolución congratulando a España',
      en: "Haig called the coup \"an internal matter for Spain,\" triggering a diplomatic storm. Congress passed resolution congratulating Spain",
    },
    events: [
      "declaracion-dept-estado",
      "resolucion-congreso-eeuu",
    ],
  },
  {
    id: "londres",
    name: {
      es: "Londres",
      en: "London",
    },
    coordinates: [51.5074, -0.1278],
    description: {
      es: "Capital del Reino Unido",
      en: "Capital of the United Kingdom",
    },
    relevance: {
      es: "Elizabeth II envió mensaje de apoyo al Rey. El Speaker felicitó a Lavilla. Felipe González criticó desde allí la postura de EEUU",
      en: "Elizabeth II sent message of support to the King. The Speaker congratulated Lavilla. Felipe González criticized the US stance from there",
    },
    events: ["elizabeth-ii-mensaje"],
  },
  {
    id: "bonn",
    name: {
      es: "Bonn",
      en: "Bonn",
    },
    coordinates: [50.7374, 7.0982],
    description: {
      es: "Capital de la República Federal de Alemania",
      en: "Capital of the Federal Republic of Germany",
    },
    relevance: {
      es: "Genscher escribió carta a Pérez-Llorca expresando satisfacción por la resolución de la crisis",
      en: "Genscher wrote letter to Pérez-Llorca expressing satisfaction at the crisis resolution",
    },
    events: ["genscher-carta"],
  },
  {
    id: "havana",
    name: {
      es: "La Habana",
      en: "Havana",
    },
    coordinates: [23.1136, -82.3666],
    description: {
      es: "Capital de Cuba",
      en: "Capital of Cuba",
    },
    relevance: {
      es: 'Castro envió mensaje de preocupación al Rey. El periódico Granma publicó artículo burlesco sobre "gorilas peninsulares" durante el juicio',
      en: "Castro sent message of concern to the King. Granma newspaper published mocking article about \"peninsular gorillas\" during the trial",
    },
    events: ["granma-gorilas"],
  },
  {
    id: "elvas",
    name: {
      es: "Elvas, Portugal",
      en: "Elvas, Portugal",
    },
    coordinates: [38.881, -7.163],
    description: {
      es: "Ciudad fronteriza portuguesa",
      en: "Portuguese border town",
    },
    relevance: {
      es: 'El ayuntamiento de Elvas (APU) aprobó moción condenando el intento "de inspiración fascista" y expresando solidaridad con la democracia española',
      en: "Elvas city council (APU) passed motion condemning the \"fascist-inspired\" attempt and expressing solidarity with Spanish democracy",
    },
    events: ["mocion-elvas"],
  },

  // Generic locations
  {
    id: "madrid-generico",
    name: {
      es: "Madrid",
      en: "Madrid",
    },
    coordinates: [40.4168, -3.7038],
    description: {
      es: "Capital de España",
      en: "Capital of Spain",
    },
    relevance: {
      es: "Escenario principal de los acontecimientos del 23-F y sus secuelas: sede del Congreso, Zarzuela, CESID, y los principales cuarteles militares",
      en: "Main setting for 23-F events and their aftermath: seat of Congress, Zarzuela, CESID, and the main military barracks",
    },
    events: [
      "malaga-malestar",
      "plan-politico-militar",
      "fecha-operativa-oct80",
      "camiones-n1",
      "bripac-generala",
      "garcia-carres-desconocido",
      "huelgas-post-golpe",
      "graffitis-pro-tejero",
      "investigacion-sanchez-valiente",
      "pinar-sombra-golpe",
      "operacion-ariete",
      "apoyo-economico-familias",
      "cuenta-esposas-congelada",
      "assiego-pistoleros",
      "pce-jaque-mate",
      "leales-ostracizados",
      "procesamiento-cortina",
      "sanchez-valiente-huye",
      "consulta-cesid-aome",
      "fondo-empresarios",
      "propaganda-te-llamaremos",
      "tejero-disponible",
    ],
  },
];

// =============================================================================
// timeline.ts — Complete chronology of 23-F events (82 events)
// Source: docs/plans/cronologia.md
// =============================================================================

export interface TimelineEvent {
  id: string;
  datetime: string; // ISO or "1977-10-08"
  time?: string; // "18:20" for La Noche events
  title: { es: string; en: string };
  description: { es: string; en: string };
  location: string; // locationId
  characters: string[]; // characterIds
  source: string; // source document
  category:
    | "antecedentes"
    | "noche"
    | "juicio"
    | "secuelas"
    | "internacional"
    | "desclasificacion";
  quote?: { text: string; source: string };
}

export const timelineEvents: TimelineEvent[] = [
  // ===========================================================================
  // ERA I: LOS ANTECEDENTES (1977-1981) — 11 events
  // ===========================================================================

  // 1977
  {
    id: "malaga-incident",
    datetime: "1977-10-08",
    title: {
      es: "Incidente de Málaga: Tejero ordena impedir manifestación autorizada",
      en: "Málaga Incident: Tejero orders blockade of authorized demonstration",
    },
    description: {
      es: "Tejero ordena a la GC armada con metralletas impedir manifestación juvenil autorizada. 2.000 manifestantes rodeados",
      en: "Tejero orders armed Civil Guard with submachine guns to block authorized youth demonstration. 2,000 protesters surrounded",
    },
    location: "malaga",
    characters: ["tejero"],
    source: "11_Nota_prensa_arresto.txt",
    category: "antecedentes",
    quote: {
      text: "Un solo provocador que hubiera arrojado un ladrillo y se hubiera producido una matanza. No son balas de goma.",
      source: "11_Nota_prensa_arresto.txt",
    },
  },
  {
    id: "malaga-arrest-order",
    datetime: "1977-10-08",
    time: "21:00",
    title: {
      es: "Gobernador Civil ordena arresto de Tejero",
      en: "Civil Governor orders Tejero's arrest",
    },
    description: {
      es: "Gobernador Civil contacta con Ministro del Interior Martín Villa. Se ordena arresto de Tejero",
      en: "Civil Governor contacts Interior Minister Martín Villa. Tejero's arrest is ordered",
    },
    location: "malaga",
    characters: ["tejero"],
    source: "11_Nota_prensa_arresto.txt",
    category: "antecedentes",
  },
  {
    id: "malaga-malestar",
    datetime: "1977-10-09",
    title: {
      es: "Comandancias de toda España reportan 'profundo malestar'",
      en: "Commands across Spain report 'deep unease'",
    },
    description: {
      es: "Agencia Cifra difunde noticia del arresto. Comandancias de toda España reportan 'profundo malestar' por la publicidad dada al arresto",
      en: "Cifra news agency reports the arrest. Commands across Spain report 'deep unease' over the publicity given to the arrest",
    },
    location: "madrid-generico",
    characters: ["tejero"],
    source: "11_Nota_prensa_arresto.txt",
    category: "antecedentes",
  },
  {
    id: "fuerza-nueva-adhesion",
    datetime: "1977-10-10",
    title: {
      es: "50 simpatizantes de Fuerza Nueva visitan domicilio de Tejero",
      en: "50 Fuerza Nueva sympathizers visit Tejero's home",
    },
    description: {
      es: '50 simpatizantes de Fuerza Nueva visitan domicilio de Tejero para expresar "total adhesión"',
      en: "50 Fuerza Nueva sympathizers visit Tejero's home to express \"total support\"",
    },
    location: "malaga",
    characters: ["tejero", "blas-pinar"],
    source: "11_Nota_prensa_arresto.txt",
    category: "antecedentes",
  },
  {
    id: "pilar-viva-tejero",
    datetime: "1977-10-12",
    title: {
      es: "Festividad del Pilar: '¡VIVA TEJERO!' con aplauso de un minuto",
      en: "Pilar holiday: '¡VIVA TEJERO!' with one-minute applause",
    },
    description: {
      es: 'Festividad del Pilar. Voz grita "¡VIVA TEJERO!" en cuartel de Los Ángeles. Aplauso cerrado de un minuto',
      en: 'Pilar holiday. Voice shouts "¡VIVA TEJERO!" at Los Ángeles barracks. One-minute standing ovation',
    },
    location: "malaga",
    characters: ["tejero"],
    source: "11_Nota_prensa_arresto.txt",
    category: "antecedentes",
  },
  {
    id: "tejero-disponible",
    datetime: "1977-10-15",
    title: {
      es: "Tejero trasladado a situación de 'disponible' en Badajoz",
      en: "Tejero transferred to 'available' status in Badajoz",
    },
    description: {
      es: "Tejero trasladado a situación de 'disponible' en Badajoz. Sin pasaporte ni dietas",
      en: "Tejero transferred to 'available' status in Badajoz. No passport or allowances",
    },
    location: "madrid-generico",
    characters: ["tejero"],
    source: "11_Nota_prensa_arresto.txt",
    category: "antecedentes",
  },

  // 1978
  {
    id: "operacion-galaxia",
    datetime: "1978-11-10",
    title: {
      es: "Operación Galaxia: reunión conspirativa en cafetería",
      en: "Operation Galaxia: conspiratorial meeting at café",
    },
    description: {
      es: "Reunión en Cafetería Galaxia. Conspiración para golpe de fuerza. Asisten Tejero, Inestrillas, Vidal Francés, Rodríguez Solano",
      en: "Meeting at Cafetería Galaxia. Conspiracy for coup by force. Attendees: Tejero, Inestrillas, Vidal Francés, Rodríguez Solano",
    },
    location: "cafeteria-galaxia",
    characters: ["tejero", "inestrillas"],
    source: "10_Nota_Tejero_Galaxia.txt",
    category: "antecedentes",
  },
  {
    id: "interrogatorio-tejero-toledo",
    datetime: "1978-11-16",
    time: "18:30",
    title: {
      es: "Interrogatorio de Tejero en Toledo",
      en: "Tejero's interrogation in Toledo",
    },
    description: {
      es: "Interrogatorio de Tejero en Toledo. Niega todo. Los interrogadores saben de golpe previsto para el día 17",
      en: "Tejero's interrogation in Toledo. Denies everything. Interrogators know of a coup planned for the 17th",
    },
    location: "madrid-generico",
    characters: ["tejero"],
    source: "10_Nota_Tejero_Galaxia.txt",
    category: "antecedentes",
    quote: {
      text: "Preguntado si había tratado sobre un posible golpe de estado o golpe de fuerza contra la Moncloa, manifiesta que no y que no trató para nada ese tema.",
      source: "10_Nota_Tejero_Galaxia.txt",
    },
  },

  // 1980
  {
    id: "plan-politico-militar",
    datetime: "1980-11-01",
    title: {
      es: "Documento de planificación político-militar completo",
      en: "Complete political-military planning document",
    },
    description: {
      es: "Documento de planificación completo: 5 escenarios, cronograma D-40 a D+1, 5 grupos de comandos, 9 regiones comprometidas",
      en: "Complete planning document: 5 scenarios, D-40 to D+1 timeline, 5 commando groups, 9 committed regions",
    },
    location: "madrid-generico",
    characters: [],
    source: "4_Planificacion_golpe.txt",
    category: "antecedentes",
    quote: {
      text: "La dimisión de Suárez sería inmediatamente la clave.",
      source: "4_Planificacion_golpe.txt",
    },
  },
  {
    id: "fecha-operativa-oct80",
    datetime: "1980-10-28",
    title: {
      es: "Fecha operativa referenciada en el plan: '28 OCTUBRE'",
      en: "Operative date referenced in plan: 'OCTOBER 28'",
    },
    description: {
      es: "Fecha operativa referenciada en el plan de golpe",
      en: "Operative date referenced in the coup plan",
    },
    location: "madrid-generico",
    characters: [],
    source: "4_Planificacion_golpe.txt",
    category: "antecedentes",
  },

  // Enero 1981
  {
    id: "dimision-suarez",
    datetime: "1981-01-29",
    title: {
      es: "Dimisión de Adolfo Suárez como Presidente del Gobierno",
      en: "Adolfo Suárez resigns as Prime Minister",
    },
    description: {
      es: 'Dimisión de Adolfo Suárez. Los conspiradores la habían identificado como "la clave" para la intervención',
      en: "Suárez resigns. Conspirators had identified this as \"the key\" for intervention",
    },
    location: "moncloa",
    characters: ["suarez"],
    source: "4_Planificacion_golpe.txt",
    category: "antecedentes",
  },

  // ===========================================================================
  // ERA II: LA NOCHE (23-24 febrero 1981) — 22 events
  // ===========================================================================

  // 23 febrero — Tarde
  {
    id: "acuartelamiento-dac",
    datetime: "1981-02-23",
    time: "17:00",
    title: {
      es: "Orden de acuartelamiento para la División Acorazada",
      en: "Confinement order for Armored Division",
    },
    description: {
      es: "Orden de acuartelamiento para la División Acorazada (DAC)",
      en: "Confinement to barracks order for the Armored Division (DAC)",
    },
    location: "brunete",
    characters: [],
    source: "Doc_4_R.txt",
    category: "noche",
  },
  {
    id: "asalto-congreso",
    datetime: "1981-02-23",
    time: "18:20",
    title: {
      es: "Asalto armado al Congreso de los Diputados",
      en: "Armed assault on the Congress of Deputies",
    },
    description: {
      es: "Radio informa del asalto armado al Congreso durante votación de investidura de Calvo-Sotelo. Guardias civiles armados irrumpen disparando al techo",
      en: "Radio reports armed assault on Congress during Calvo-Sotelo's investiture vote. Armed civil guards burst in firing at the ceiling",
    },
    location: "congreso",
    characters: ["tejero"],
    source: "7_Notas_Informativas.txt",
    category: "noche",
  },
  {
    id: "rey-radio",
    datetime: "1981-02-23",
    time: "18:22",
    title: {
      es: "El Rey escucha la noticia por radio en Zarzuela",
      en: "The King hears the news on radio at Zarzuela",
    },
    description: {
      es: "El Rey escucha la noticia por radio en el Palacio de la Zarzuela",
      en: "The King hears the news on radio at the Zarzuela Palace",
    },
    location: "zarzuela",
    characters: ["rey-juan-carlos"],
    source: "Doc_20_R.txt",
    category: "noche",
  },
  {
    id: "autobuses-congreso",
    datetime: "1981-02-23",
    time: "18:25",
    title: {
      es: "7 autobuses con personal armado de la GC llegan al Congreso",
      en: "7 buses with armed Civil Guard personnel arrive at Congress",
    },
    description: {
      es: "7 autobuses del Parque con personal armado de la GC llegan al Congreso",
      en: "7 buses from the Depot with armed Civil Guard personnel arrive at Congress",
    },
    location: "congreso",
    characters: [],
    source: "7_Notas_Informativas.txt",
    category: "noche",
  },
  {
    id: "cesid-nadie-sabia",
    datetime: "1981-02-23",
    time: "18:30",
    title: {
      es: "CESID comprueba: 'nadie sabía nada'",
      en: "CESID checks: 'nobody knew anything'",
    },
    description: {
      es: 'CESID comprueba con todas las agencias: "nadie sabía nada"',
      en: "CESID checks with all agencies: \"nobody knew anything\"",
    },
    location: "cesid-hq",
    characters: [],
    source: "Doc_4_R.txt",
    category: "noche",
  },
  {
    id: "armada-zarzuela-denegado",
    datetime: "1981-02-23",
    time: "18:35",
    title: {
      es: "Armada pide ir a Zarzuela — El Rey SE LO DENIEGA",
      en: "Armada asks to go to Zarzuela — The King DENIES him",
    },
    description: {
      es: "Armada llama a Zarzuela pidiendo ir al Palacio. El Rey SE LO DENIEGA. Corta la cobertura institucional del golpe",
      en: "Armada calls Zarzuela asking to go to the Palace. The King DENIES him. Cuts the coup's institutional cover",
    },
    location: "zarzuela",
    characters: ["armada", "rey-juan-carlos"],
    source: "Doc_20_R.txt",
    category: "noche",
  },
  {
    id: "juste-esto-cambia",
    datetime: "1981-02-23",
    time: "18:45",
    title: {
      es: "General Juste: 'Esto cambia completamente la situación'",
      en: "General Juste: 'This completely changes the situation'",
    },
    description: {
      es: 'General Juste (Jefe DAC) pregunta si Armada está en Zarzuela. Al saber que no: "Esto cambia completamente la situación"',
      en: "General Juste (DAC Commander) asks if Armada is at Zarzuela. Upon learning he is not: \"This completely changes the situation\"",
    },
    location: "brunete",
    characters: [],
    source: "Doc_20_R.txt",
    category: "noche",
    quote: {
      text: "Esto cambia completamente la situación",
      source: "Doc_20_R.txt",
    },
  },

  // 23 febrero — Noche
  {
    id: "cesid-centro-ops",
    datetime: "1981-02-23",
    time: "19:00",
    title: {
      es: "Centro de operaciones del CESID establecido",
      en: "CESID operations center established",
    },
    description: {
      es: "Centro de operaciones del CESID establecido bajo la dirección de Alonso Manglano",
      en: "CESID operations center established under the direction of Alonso Manglano",
    },
    location: "cesid-hq",
    characters: ["alonso-manglano"],
    source: "Doc_4_R.txt",
    category: "noche",
  },
  {
    id: "rey-milans-telefono",
    datetime: "1981-02-23",
    time: "19:00",
    title: {
      es: "Rey habla con Milans del Bosch por teléfono",
      en: "King speaks with Milans del Bosch by phone",
    },
    description: {
      es: "Rey habla con Milans del Bosch. Milans dice estar 'a las órdenes del Rey' pero pide que hable con Armada",
      en: "King speaks with Milans del Bosch. Milans says he is 'at the King's orders' but asks him to speak with Armada",
    },
    location: "zarzuela",
    characters: ["rey-juan-carlos", "milans"],
    source: "Doc_20_R.txt",
    category: "noche",
    quote: {
      text: "Juro que ni abdicaré la Corona, ni abandonaré España. Quien se subleve, está dispuesto a provocar y será responsable de ello, una nueva guerra civil",
      source: "Doc_20_R.txt",
    },
  },
  {
    id: "decision-mensaje-tv",
    datetime: "1981-02-23",
    time: "19:30",
    title: {
      es: "Decisión de grabar mensaje televisado del Rey",
      en: "Decision to record the King's televised message",
    },
    description: {
      es: "Se toma la decisión de grabar el mensaje televisado del Rey en Zarzuela",
      en: "Decision is made to record the King's televised message at Zarzuela",
    },
    location: "zarzuela",
    characters: ["rey-juan-carlos", "fernandez-campo"],
    source: "Doc_20_R.txt",
    category: "noche",
  },
  {
    id: "cesid-alerta-verde",
    datetime: "1981-02-23",
    time: "20:00",
    title: {
      es: "Todos los sectores del CESID en alerta verde",
      en: "All CESID sectors on green alert",
    },
    description: {
      es: "Todos los sectores del CESID puestos en alerta verde",
      en: "All CESID sectors placed on green alert",
    },
    location: "cesid-hq",
    characters: [],
    source: "Doc_4_R.txt",
    category: "noche",
  },
  {
    id: "tve-ocupada",
    datetime: "1981-02-23",
    time: "20:00",
    title: {
      es: "Caballería del Regimiento Villaviciosa 14 ocupa TVE",
      en: "Villaviciosa 14 Regiment cavalry occupies TVE",
    },
    description: {
      es: "Caballería del Regimiento Villaviciosa 14 ocupa TVE en Prado del Rey. El capitán Merlo rechaza órdenes de retirarse salvo las de su coronel. Mientras los soldados toman el edificio, el director general de RTVE, Fernando Castedo, arranca el cuero de su silla y esconde bajo el forro la cinta original con la grabación del asalto al Congreso. Jesús Arilla Pérez, periodista navarro encargado de relaciones territoriales de TVE, distrae a los militares ofreciéndoles café, dando tiempo a los técnicos de RNE para lanzar un micrófono que grabará en sonido ambiente las más de 20 horas del secuestro parlamentario. Sin su ingenio, las imágenes icónicas del 23-F —Tejero pistola en mano, el '¡Quieto todo el mundo!'— se habrían perdido para siempre. (Fuente: Noticias de Navarra, 24/02/2026 — https://www.noticiasdenavarra.com/politica/2026/02/24/navarro-distrajo-militares-cafe-salvo-10741136.html)",
      en: "Villaviciosa 14 Regiment cavalry occupies TVE at Prado del Rey. Captain Merlo refuses withdrawal orders except from his colonel. As soldiers seize the building, RTVE director general Fernando Castedo rips the leather from his chair and hides the original tape of the Congress assault beneath the cover. Jesús Arilla Pérez, a Navarrese journalist in charge of TVE's regional relations, distracts the soldiers by offering them coffee, buying time for RNE technicians to drop a microphone that will record over 20 hours of ambient sound from the parliamentary siege. Without their ingenuity, the iconic images of 23-F —Tejero with pistol in hand, the '¡Quieto todo el mundo!'— would have been lost forever. (Source: Noticias de Navarra, 24/02/2026 — https://www.noticiasdenavarra.com/politica/2026/02/24/navarro-distrajo-militares-cafe-salvo-10741136.html)",
    },
    location: "tve-prado-del-rey",
    characters: ["merlo"],
    source: "Doc_20_R.txt",
    category: "noche",
  },
  {
    id: "camiones-n1",
    datetime: "1981-02-23",
    time: "20:15",
    title: {
      es: "22 camiones militares entran en Madrid por la N-1",
      en: "22 military trucks enter Madrid via the N-1",
    },
    description: {
      es: "22 camiones militares sin identificar entran en Madrid por la carretera N-1",
      en: "22 unidentified military trucks enter Madrid via the N-1 highway",
    },
    location: "madrid-generico",
    characters: [],
    source: "7_Notas_Informativas.txt",
    category: "noche",
  },
  {
    id: "bripac-generala",
    datetime: "1981-02-23",
    time: "20:30",
    title: {
      es: "La BRIPAC (Brigada Paracaidista) toca generala",
      en: "BRIPAC (Paratrooper Brigade) sounds general alert",
    },
    description: {
      es: "La Brigada Paracaidista (BRIPAC) toca generala, movilizando a sus tropas",
      en: "The Paratrooper Brigade (BRIPAC) sounds the general alert, mobilizing its troops",
    },
    location: "madrid-generico",
    characters: [],
    source: "7_Notas_Informativas.txt",
    category: "noche",
  },
  {
    id: "valencia-excepcion",
    datetime: "1981-02-23",
    time: "21:00",
    title: {
      es: "Estado de excepción declarado en Valencia. Tanques en las calles",
      en: "State of emergency declared in Valencia. Tanks on the streets",
    },
    description: {
      es: "Milans del Bosch declara el estado de excepción en Valencia. Tanques desplegados en las calles",
      en: "Milans del Bosch declares state of emergency in Valencia. Tanks deployed on the streets",
    },
    location: "valencia",
    characters: ["milans"],
    source: "7_Notas_Informativas.txt",
    category: "noche",
  },
  {
    id: "garcia-carres-tejero-llamada",
    datetime: "1981-02-23",
    time: "21:00",
    title: {
      es: "García Carrés telefoneando a Tejero dentro del Congreso",
      en: "García Carrés calling Tejero inside Congress",
    },
    description: {
      es: "García Carrés telefoneando a Tejero dentro del Congreso. Tejero agitado, maldiciendo. García Carrés informa de regimiento en camino",
      en: "García Carrés calling Tejero inside Congress. Tejero agitated, cursing. García Carrés reports regiment on the way",
    },
    location: "congreso",
    characters: ["garcia-carres", "tejero"],
    source: "1_Conv_GARCIA_CARRES_Tejero.txt",
    category: "noche",
  },
  {
    id: "garcia-carres-desconocido",
    datetime: "1981-02-23",
    time: "22:00",
    title: {
      es: "García Carrés habla con desconocido: Villaviciosa, Pavía, manifiesto",
      en: "García Carrés speaks with unknown: Villaviciosa, Pavía, manifesto",
    },
    description: {
      es: "García Carrés habla con desconocido. Menciona Villaviciosa, Pavía, manifiesto para El Alcázar. Coordinación directa entre medios y golpistas",
      en: "García Carrés speaks with unknown party. Mentions Villaviciosa, Pavía, manifesto for El Alcázar. Direct coordination between media and coup plotters",
    },
    location: "madrid-generico",
    characters: ["garcia-carres"],
    source: "2_Conv_GARCIA_CARRES.txt",
    category: "noche",
  },
  {
    id: "armada-congreso",
    datetime: "1981-02-23",
    time: "23:00",
    title: {
      es: "Armada llega al Congreso. Propone gobierno de concentración. Tejero lo rechaza",
      en: "Armada arrives at Congress. Proposes unity government. Tejero rejects it",
    },
    description: {
      es: "Armada llega al Congreso escoltado por Aramburu. Propone gobierno de concentración. Tejero lo rechaza por incluir socialistas",
      en: "Armada arrives at Congress escorted by Aramburu. Proposes unity government. Tejero rejects it for including socialists",
    },
    location: "congreso",
    characters: ["armada", "aramburu", "tejero"],
    source: "Doc_40_R.txt",
    category: "noche",
  },
  {
    id: "armada-he-fracasado",
    datetime: "1981-02-23",
    time: "23:30",
    title: {
      es: "Armada sale del Congreso: 'He fracasado'",
      en: "Armada leaves Congress: 'I have failed'",
    },
    description: {
      es: "Armada sale del Congreso tras el rechazo de Tejero y declara: 'He fracasado'",
      en: "Armada leaves Congress after Tejero's rejection and declares: 'I have failed'",
    },
    location: "congreso",
    characters: ["armada", "aramburu"],
    source: "Doc_40_R.txt",
    category: "noche",
    quote: {
      text: "He fracasado.",
      source: "Doc_40_R.txt",
    },
  },

  // 24 febrero — Madrugada
  {
    id: "cesid-llama-valencia",
    datetime: "1981-02-24",
    time: "00:00",
    title: {
      es: "CESID llama a Valencia sugiriendo que reconsideren",
      en: "CESID calls Valencia suggesting they reconsider",
    },
    description: {
      es: "CESID llama a Valencia (3ª Región Militar) sugiriendo que reconsideren sus acciones",
      en: "CESID calls Valencia (3rd Military Region) suggesting they reconsider their actions",
    },
    location: "cesid-hq",
    characters: [],
    source: "Doc_4_R.txt",
    category: "noche",
  },
  {
    id: "civiles-liberados",
    datetime: "1981-02-24",
    time: "00:07",
    title: {
      es: "Civiles liberados del Congreso",
      en: "Civilians released from Congress",
    },
    description: {
      es: "Civiles (no diputados) liberados del Congreso",
      en: "Civilians (non-deputies) released from Congress",
    },
    location: "congreso",
    characters: [],
    source: "7_Notas_Informativas.txt",
    category: "noche",
  },
  {
    id: "mensaje-rey-tv",
    datetime: "1981-02-24",
    time: "01:14",
    title: {
      es: "Mensaje televisado del Rey emitido. Ordena acuartelamiento",
      en: "King's televised message broadcast. Orders troops to barracks",
    },
    description: {
      es: "Mensaje televisado del Rey emitido a las 01:14. Ordena acuartelamiento. Defiende la Constitución",
      en: "King's televised message broadcast at 01:14. Orders troops to barracks. Defends the Constitution",
    },
    location: "tve-prado-del-rey",
    characters: ["rey-juan-carlos"],
    source: "Doc_20_R.txt",
    category: "noche",
  },
  {
    id: "interceptaciones-pardo",
    datetime: "1981-02-24",
    time: "03:20",
    title: {
      es: "Interceptaciones telefónicas desde El Pardo: soldados confusos",
      en: "Phone intercepts from El Pardo: confused soldiers",
    },
    description: {
      es: "Interceptaciones telefónicas desde El Pardo. Soldados confusos sobre quién manda. Identifican caballería en TVE como Villaviciosa",
      en: "Phone intercepts from El Pardo. Soldiers confused about who is in command. Identify cavalry at TVE as Villaviciosa",
    },
    location: "el-pardo",
    characters: [],
    source: "3_Conv_unidad_militar_El_Pardo.txt",
    category: "noche",
  },
  {
    id: "milans-marcha-atras",
    datetime: "1981-02-24",
    time: "04:00",
    title: {
      es: "Milans del Bosch da marcha atrás. El golpe se desmorona",
      en: "Milans del Bosch backs down. The coup collapses",
    },
    description: {
      es: "Milans del Bosch da marcha atrás en Valencia. El golpe se desmorona",
      en: "Milans del Bosch backs down in Valencia. The coup collapses",
    },
    location: "valencia",
    characters: ["milans"],
    source: "Doc_20_R.txt",
    category: "noche",
  },
  {
    id: "tejero-rendicion",
    datetime: "1981-02-24",
    time: "08:00",
    title: {
      es: "Tejero se rinde. Sánchez Valiente desaparece",
      en: "Tejero surrenders. Sánchez Valiente disappears",
    },
    description: {
      es: "Tejero se rinde. Última vez visto el Capitán Sánchez Valiente cerca del Congreso",
      en: "Tejero surrenders. Captain Sánchez Valiente last seen near Congress",
    },
    location: "congreso",
    characters: ["tejero", "sanchez-valiente"],
    source: "Doc_77_R.txt",
    category: "noche",
  },

  // ===========================================================================
  // ERA III: DÍAS POSTERIORES — secuelas + internacional (16 events)
  // ===========================================================================
  {
    id: "huelgas-post-golpe",
    datetime: "1981-02-24",
    title: {
      es: "Huelgas CC.OO./UGT. Normalidad general tras el golpe",
      en: "CC.OO./UGT strikes. General normality after the coup",
    },
    description: {
      es: "Huelgas CC.OO./UGT. Propaganda PCE. Normalidad general en la mayoría de las regiones",
      en: "CC.OO./UGT strikes. PCE propaganda. General normality in most regions",
    },
    location: "madrid-generico",
    characters: [],
    source: "Sit_Reg_24-02-81.txt",
    category: "secuelas",
  },
  {
    id: "reagan-llama-rey",
    datetime: "1981-02-24",
    time: "10:35",
    title: {
      es: "Reagan llama al Rey Juan Carlos",
      en: "Reagan calls King Juan Carlos",
    },
    description: {
      es: "Reagan llama por teléfono al Rey Juan Carlos a las 10:35 hora española",
      en: "Reagan calls King Juan Carlos at 10:35 AM Spanish time",
    },
    location: "zarzuela",
    characters: ["reagan", "rey-juan-carlos"],
    source: "D.1",
    category: "internacional",
  },
  {
    id: "declaracion-dept-estado",
    datetime: "1981-02-24",
    title: {
      es: "Declaración del Departamento de Estado de EEUU",
      en: "US State Department declaration",
    },
    description: {
      es: 'Declaración del Departamento de Estado: "Role of King clearly instrumental"',
      en: 'State Department declaration: "Role of King clearly instrumental"',
    },
    location: "washington",
    characters: ["haig"],
    source: "D.3",
    category: "internacional",
    quote: {
      text: "The role and leadership of King Juan Carlos were clearly instrumental.",
      source: "D.3",
    },
  },
  {
    id: "amenaza-bomba-congreso",
    datetime: "1981-02-25",
    title: {
      es: "Amenaza de bomba (falsa) en Congreso. 50 jóvenes gritan 'LIBERTAD PARA TEJERO'",
      en: "Bomb threat (false) at Congress. 50 youths shout 'FREE TEJERO'",
    },
    description: {
      es: 'Amenaza de bomba (falsa) en Congreso. 50 jóvenes gritan "LIBERTAD PARA TEJERO" frente al cuartel de la GC',
      en: "False bomb threat at Congress. 50 youths shout \"FREE TEJERO\" outside Civil Guard barracks",
    },
    location: "congreso",
    characters: [],
    source: "Sit_Reg_25-02-81.txt",
    category: "secuelas",
  },
  {
    id: "elizabeth-ii-mensaje",
    datetime: "1981-02-25",
    title: {
      es: "Mensaje de Elizabeth II: 'fuertemente impresionada'",
      en: "Elizabeth II's message: 'strongly impressed'",
    },
    description: {
      es: 'Mensaje de Elizabeth II: "fuertemente impresionada". Speaker felicita a Lavilla por la conducta del Congreso',
      en: "Elizabeth II's message: \"strongly impressed.\" Speaker congratulates Lavilla for Congress's conduct",
    },
    location: "londres",
    characters: ["elizabeth-ii", "lavilla"],
    source: "D.28",
    category: "internacional",
  },
  {
    id: "genscher-carta",
    datetime: "1981-02-25",
    title: {
      es: "Carta de Genscher a Pérez-Llorca",
      en: "Genscher's letter to Pérez-Llorca",
    },
    description: {
      es: "Carta del Ministro de Exteriores alemán Genscher a Pérez-Llorca expresando satisfacción por la resolución de la crisis",
      en: "Letter from German Foreign Minister Genscher to Pérez-Llorca expressing satisfaction at crisis resolution",
    },
    location: "bonn",
    characters: ["genscher"],
    source: "D.29",
    category: "internacional",
  },
  {
    id: "graffitis-pro-tejero",
    datetime: "1981-02-26",
    title: {
      es: "Graffitis pro-Tejero. Contramovilización de izquierdas",
      en: "Pro-Tejero graffiti. Left-wing counter-mobilization",
    },
    description: {
      es: "Graffitis de ultraderecha pro-Tejero. Intensa contramovilización de izquierdas",
      en: "Far-right pro-Tejero graffiti. Intense left-wing counter-mobilization",
    },
    location: "madrid-generico",
    characters: [],
    source: "Sit_Reg_26-02-81.txt",
    category: "secuelas",
  },
  {
    id: "mocion-elvas",
    datetime: "1981-02-26",
    title: {
      es: "Moción de Elvas (Portugal) condenando el golpe",
      en: "Elvas (Portugal) motion condemning the coup",
    },
    description: {
      es: 'Moción del ayuntamiento de Elvas (APU) condenando el intento "de inspiración fascista"',
      en: "Motion by Elvas city council (APU) condemning the \"fascist-inspired\" attempt",
    },
    location: "elvas",
    characters: [],
    source: "D.15",
    category: "internacional",
  },
  {
    id: "resolucion-congreso-eeuu",
    datetime: "1981-03-04",
    title: {
      es: "Resolución del Congreso de EEUU congratulando a España",
      en: "US Congress resolution congratulating Spain",
    },
    description: {
      es: "Resolución del Congreso de EEUU congratulando a España por la defensa de la democracia",
      en: "US Congress resolution congratulating Spain for its defense of democracy",
    },
    location: "washington",
    characters: [],
    source: "D.8",
    category: "internacional",
    quote: {
      text: "Continued democratic political development in Spain makes an important contribution to US foreign policy interests.",
      source: "D.8",
    },
  },
  {
    id: "investigacion-sanchez-valiente",
    datetime: "1981-03-09",
    title: {
      es: "Investigación del Capitán Sánchez Valiente por abandono de destino",
      en: "Investigation of Captain Sánchez Valiente for desertion",
    },
    description: {
      es: "Investigación del Capitán Sánchez Valiente por abandono de destino. Causa 9481",
      en: "Investigation of Captain Sánchez Valiente for desertion. Case 9481",
    },
    location: "madrid-generico",
    characters: ["sanchez-valiente"],
    source: "Causa_9481_*.txt",
    category: "secuelas",
  },
  {
    id: "pinar-sombra-golpe",
    datetime: "1981-03-12",
    title: {
      es: "Blas Piñar: 'la sombra del golpe no se ha alejado'",
      en: "Blas Piñar: 'the shadow of the coup has not gone away'",
    },
    description: {
      es: 'Blas Piñar declara: "la sombra del golpe no se ha alejado" y habla del "divorcio del Rey del Ejército"',
      en: "Blas Piñar declares: \"the shadow of the coup has not gone away\" and speaks of \"the King's divorce from the Army\"",
    },
    location: "madrid-generico",
    characters: ["blas-pinar"],
    source: "12-03-81_Fuerza_Nueva.txt",
    category: "secuelas",
  },
  {
    id: "operacion-ariete",
    datetime: "1981-03-18",
    title: {
      es: "Informe sobre Operación Ariete (CESID, época Carrero Blanco)",
      en: "Report on Operation Ariete (CESID, Carrero Blanco era)",
    },
    description: {
      es: "Informe sobre Operación Ariete del CESID, diseñada en época de Carrero Blanco. 80-110 muertos estimados",
      en: "Report on CESID's Operation Ariete, designed during Carrero Blanco era. 80-110 estimated deaths",
    },
    location: "madrid-generico",
    characters: [],
    source: "18-03-81_Op_Ariete.txt",
    category: "secuelas",
  },
  {
    id: "apoyo-economico-familias",
    datetime: "1981-03-18",
    title: {
      es: "Campaña de apoyo económico a familias de implicados",
      en: "Financial support campaign for families of those implicated",
    },
    description: {
      es: 'Altos mandos organizan campañas de apoyo económico. "Firme convicción" de no tolerar persecución de familias',
      en: "High command organizes financial support campaigns. \"Firm conviction\" of not tolerating persecution of families",
    },
    location: "madrid-generico",
    characters: [],
    source: "18-03-81_Ayuda_implicados.txt",
    category: "secuelas",
  },
  {
    id: "cuenta-esposas-congelada",
    datetime: "1981-03-27",
    title: {
      es: "Cuenta bancaria de Asociación de Esposas congelada",
      en: "Military Wives Association bank account frozen",
    },
    description: {
      es: "Cuenta del Banco Central de la Asociación de Esposas de Militares y Policías congelada por orden ministerial",
      en: "Banco Central account of Military and Police Wives Association frozen by ministerial order",
    },
    location: "madrid-generico",
    characters: [],
    source: "27-03-81_Bloqueo_cuenta.txt",
    category: "secuelas",
  },
  {
    id: "rey-responde-castro",
    datetime: "1981-04-03",
    title: {
      es: "Rey responde a Fidel Castro agradeciendo mensaje de preocupación",
      en: "King responds to Fidel Castro thanking concern message",
    },
    description: {
      es: "El Rey responde a Fidel Castro agradeciendo su mensaje de preocupación por el golpe",
      en: "The King responds to Fidel Castro thanking his message of concern about the coup",
    },
    location: "zarzuela",
    characters: ["rey-juan-carlos", "castro"],
    source: "D.21",
    category: "internacional",
  },
  {
    id: "assiego-pistoleros",
    datetime: "1981-04-14",
    title: {
      es: "Informe sobre Assiego (40 pistoleros) y conexión Garchitorena",
      en: "Report on Assiego (40 gunmen) and Garchitorena connection",
    },
    description: {
      es: "Informe revela que Assiego (40 pistoleros profesionales) estaba conectado con Garchitorena y preparado para actuar la noche del 23-F",
      en: "Report reveals Assiego (40 professional gunmen) was connected to Garchitorena and ready to act on the night of 23-F",
    },
    location: "madrid-generico",
    characters: ["garchitorena"],
    source: "Doc_73_R.txt",
    category: "secuelas",
  },
  {
    id: "pce-jaque-mate",
    datetime: "1981-05-01",
    title: {
      es: "PCE advierte: 'jaque mate contra la Monarquía'",
      en: "PCE warns: 'checkmate against the Monarchy'",
    },
    description: {
      es: 'PCE advierte en nota interna: "jaque mate contra la Monarquía". La extrema derecha domina el "mercado negro del rumor"',
      en: "PCE warns in internal note: \"checkmate against the Monarchy.\" The far right dominates the \"black market of rumor\"",
    },
    location: "madrid-generico",
    characters: [],
    source: "11-05-81_PCE.txt",
    category: "secuelas",
  },
  {
    id: "leales-ostracizados",
    datetime: "1981-11-01",
    title: {
      es: "Oficiales leales al Rey ostracizados y amenazados",
      en: "Officers loyal to the King ostracized and threatened",
    },
    description: {
      es: 'Oficiales leales al Rey ostracizados y amenazados. "No te preocupes, la próxima vez no te pasará nada"',
      en: "Officers loyal to the King ostracized and threatened. \"Don't worry, next time nothing will happen to you\"",
    },
    location: "madrid-generico",
    characters: ["saenz-santamaria"],
    source: "1_Informe_Situacion.txt",
    category: "secuelas",
    quote: {
      text: "No te preocupes, la próxima vez no te pasará nada.",
      source: "1_Informe_Situacion.txt",
    },
  },
  {
    id: "carta-sabino-cesid",
    datetime: "1981-12-14",
    title: {
      es: "Carta de Sabino Fernández Campo al Director del CESID",
      en: "Sabino Fernández Campo's letter to the CESID Director",
    },
    description: {
      es: 'Carta con informe del Rey y tarjetas "TEJERO" en acróstico enviadas al Director del CESID',
      en: "Letter with King's report and \"TEJERO\" acrostic cards sent to CESID Director",
    },
    location: "zarzuela",
    characters: ["fernandez-campo", "alonso-manglano"],
    source: "Doc_1_R.txt",
    category: "secuelas",
  },

  // ===========================================================================
  // ERA IV: EL JUICIO — CAUSA 2/81 (1982) — 18 events
  // ===========================================================================
  {
    id: "carta-atmosfera-ejercito",
    datetime: "1982-02-25",
    title: {
      es: "Carta sobre atmósfera en el Ejército durante inicio del juicio",
      en: "Letter about atmosphere in the Army at trial start",
    },
    description: {
      es: "Carta reportando la atmósfera tensa en el Ejército coincidiendo con el inicio del juicio de la Causa 2/81",
      en: "Letter reporting tense atmosphere in the Army coinciding with the start of Case 2/81 trial",
    },
    location: "campamento",
    characters: [],
    source: "Doc_11_R.txt",
    category: "juicio",
  },
  {
    id: "primeras-sesiones-juicio",
    datetime: "1982-03-01",
    title: {
      es: "Primeras sesiones del juicio. 33 procesados, 16 jueces",
      en: "First trial sessions. 33 defendants, 16 judges",
    },
    description: {
      es: "Primeras sesiones del juicio de la Causa 2/81 en el Servicio Geográfico del Ejército, Campamento. 33 procesados ante 16 jueces del Consejo Supremo de Justicia Militar",
      en: "First sessions of Case 2/81 trial at Army Geographic Service, Campamento. 33 defendants before 16 judges of the Supreme Military Council",
    },
    location: "campamento",
    characters: [],
    source: "Doc_20_R.txt",
    category: "juicio",
  },
  {
    id: "interrogatorios-milans-armada",
    datetime: "1982-03-09",
    title: {
      es: "Interrogatorios de Milans del Bosch y Armada",
      en: "Interrogations of Milans del Bosch and Armada",
    },
    description: {
      es: 'Milans argumenta "reconducción" de golpes más radicales. Armada niega todo',
      en: "Milans argues \"redirection\" of more radical coups. Armada denies everything",
    },
    location: "campamento",
    characters: ["milans", "armada"],
    source: "Doc_60_R.txt",
    category: "juicio",
  },
  {
    id: "comisiones-simpatia",
    datetime: "1982-03-10",
    title: {
      es: "Comisiones militares muestran simpatía con acusados",
      en: "Military commissions show sympathy with defendants",
    },
    description: {
      es: "Comisiones militares de diversas regiones muestran simpatía con los acusados: aplausos, abucheos a periodistas, fraternización",
      en: "Military commissions from various regions show sympathy with defendants: applause, booing of journalists, fraternization",
    },
    location: "campamento",
    characters: [],
    source: "Doc_9_R.txt",
    category: "juicio",
  },
  {
    id: "valoracion-inteligencia",
    datetime: "1982-03-11",
    title: {
      es: "Valoración integrada de inteligencia del CESID",
      en: "CESID integrated intelligence assessment",
    },
    description: {
      es: "Valoración integrada de inteligencia del CESID sobre el desarrollo del juicio y riesgos de desestabilización",
      en: "CESID integrated intelligence assessment on trial development and destabilization risks",
    },
    location: "cesid-hq",
    characters: [],
    source: "Doc_65_R.txt",
    category: "juicio",
  },
  {
    id: "interrogatorio-completo-tejero",
    datetime: "1982-03-17",
    title: {
      es: "Interrogatorio completo de Tejero: Cortina fijó fecha",
      en: "Full Tejero interrogation: Cortina set the date",
    },
    description: {
      es: 'Interrogatorio completo de Tejero. Declara que Cortina fijó la fecha del golpe y que era "Operación Nacional a las Órdenes del Rey"',
      en: "Full Tejero interrogation. Declares Cortina set the date and it was \"National Operation Under the King's Orders\"",
    },
    location: "campamento",
    characters: ["tejero", "manchado"],
    source: "Doc_55_R.txt",
    category: "juicio",
  },
  {
    id: "interrogatorios-abad",
    datetime: "1982-03-26",
    title: {
      es: "Interrogatorios de Abad, Muñecas, Dusmet",
      en: "Interrogations of Abad, Muñecas, Dusmet",
    },
    description: {
      es: "Abad testifica que Cortina se reunió con Tejero el día anterior. Manchado, Tejero y Gómez Iglesias fueron determinantes en su decisión",
      en: "Abad testifies Cortina met Tejero the day before. Manchado, Tejero, and Gómez Iglesias were decisive in his decision",
    },
    location: "campamento",
    characters: ["cortina", "tejero", "gomez-iglesias"],
    source: "Doc_50_R.txt",
    category: "juicio",
  },
  {
    id: "aramburu-santamaria-testifican",
    datetime: "1982-04-05",
    title: {
      es: "Aramburu y Sáenz de Santamaría testifican. Incidente 'rehenes'",
      en: "Aramburu and Sáenz de Santamaría testify. 'Hostages' incident",
    },
    description: {
      es: 'Aramburu y Sáenz de Santamaría testifican. Sáenz de Santamaría usa la palabra "rehenes" — sesión suspendida. Armada: "He fracasado"',
      en: "Aramburu and Sáenz de Santamaría testify. Sáenz de Santamaría uses the word \"hostages\" — session suspended. Armada: \"I have failed\"",
    },
    location: "campamento",
    characters: ["aramburu", "saenz-santamaria", "armada"],
    source: "Doc_40_R.txt",
    category: "juicio",
  },
  {
    id: "granma-gorilas",
    datetime: "1982-04-07",
    title: {
      es: "Granma (Cuba) publica artículo burlesco: 'gorilas peninsulares'",
      en: "Granma (Cuba) publishes mocking article: 'peninsular gorillas'",
    },
    description: {
      es: 'Granma, periódico cubano, publica artículo burlesco sobre el juicio: "gorilas peninsulares"',
      en: "Granma, Cuban newspaper, publishes mocking article about the trial: \"peninsular gorillas\"",
    },
    location: "havana",
    characters: [],
    source: "D.25",
    category: "internacional",
  },
  {
    id: "sesion-aramburu",
    datetime: "1982-04-13",
    title: {
      es: "Sesión sobre testimonio de general respecto a Aramburu",
      en: "Session on general's testimony regarding Aramburu",
    },
    description: {
      es: "Sesión del juicio sobre el testimonio de un general respecto a los hechos relatados por Aramburu",
      en: "Trial session on a general's testimony regarding events reported by Aramburu",
    },
    location: "campamento",
    characters: ["aramburu"],
    source: "3_Juicio_23F.txt",
    category: "juicio",
  },
  {
    id: "libertad-provisional",
    datetime: "1982-04-19",
    title: {
      es: "Análisis de decisiones de libertad provisional",
      en: "Analysis of provisional release decisions",
    },
    description: {
      es: "Análisis del CESID sobre las decisiones de libertad provisional de los procesados",
      en: "CESID analysis of defendants' provisional release decisions",
    },
    location: "cesid-hq",
    characters: [],
    source: "Doc_12_R.txt",
    category: "juicio",
  },
  {
    id: "mugica-herzog",
    datetime: "1982-04-20",
    title: {
      es: "Testimonio Múgica Herzog. Fin de fase probatoria",
      en: "Múgica Herzog testimony. End of evidentiary phase",
    },
    description: {
      es: "Testimonio de Múgica Herzog. Finaliza la fase probatoria del juicio",
      en: "Múgica Herzog testimony. Evidentiary phase of trial concludes",
    },
    location: "campamento",
    characters: [],
    source: "Doc_35_R.txt",
    category: "juicio",
  },
  {
    id: "defensa-milans-art8",
    datetime: "1982-04-28",
    title: {
      es: "Defensa de Milans por Cabeza Calahorra. Insulta a la prensa",
      en: "Defense of Milans by Cabeza Calahorra. Insults the press",
    },
    description: {
      es: "Defensa de Milans por Cabeza Calahorra y Escandell. Insulta a la prensa. Pilar Urbano intenta plante. Cita Art. 8 Constitución. S.M. mencionado más de 96 veces",
      en: "Defense of Milans by Cabeza Calahorra and Escandell. Insults the press. Pilar Urbano attempts walkout. Cites Art. 8 Constitution. H.M. mentioned over 96 times",
    },
    location: "campamento",
    characters: ["milans"],
    source: "Doc_33_R.txt",
    category: "juicio",
  },
  {
    id: "valoracion-fase-defensa",
    datetime: "1982-04-29",
    title: {
      es: "Valoración integrada fase de defensa",
      en: "Integrated assessment of defense phase",
    },
    description: {
      es: "Valoración integrada del CESID sobre la fase de defensa del juicio",
      en: "CESID integrated assessment of the trial's defense phase",
    },
    location: "cesid-hq",
    characters: [],
    source: "Doc_45_R.txt",
    category: "juicio",
  },
  {
    id: "defensa-lazaro-bobis",
    datetime: "1982-05-10",
    title: {
      es: "Defensa de Lázaro Corthay, Bobis, Cid Fortea. Fiscal pide 5 años",
      en: "Defense of Lázaro Corthay, Bobis, Cid Fortea. Prosecutor requests 5 years",
    },
    description: {
      es: "Defensa de Lázaro Corthay, Bobis y Cid Fortea. El fiscal pide 5 años de prisión",
      en: "Defense of Lázaro Corthay, Bobis, and Cid Fortea. Prosecutor requests 5 years imprisonment",
    },
    location: "campamento",
    characters: [],
    source: "Doc_25_R.txt",
    category: "juicio",
  },
  {
    id: "propaganda-te-llamaremos",
    datetime: "1982-05-17",
    title: {
      es: "Propaganda UME: 'TE LLAMAREMOS'. Riesgo desfile Zaragoza",
      en: "UME propaganda: 'WE WILL CALL YOU.' Zaragoza parade risk",
    },
    description: {
      es: 'Valoración del CESID: ultraderecha, propaganda militar en cuarteles. UME distribuye "TU PATRIA EXIGE UN GRAN SACRIFICIO... TE LLAMAREMOS". Riesgo en desfile de Zaragoza',
      en: "CESID assessment: far right, military propaganda in barracks. UME distributes \"YOUR COUNTRY DEMANDS A GREAT SACRIFICE... WE WILL CALL YOU.\" Risk at Zaragoza parade",
    },
    location: "madrid-generico",
    characters: [],
    source: "Doc_30_R.txt",
    category: "juicio",
    quote: {
      text: "TU PATRIA EXIGE UN GRAN SACRIFICIO, MANTÉN TU MORAL ALTA Y ESPERA EN TU PUESTO. TE LLAMAREMOS.",
      source: "Doc_30_R.txt",
    },
  },
  {
    id: "jueces-sancionados",
    datetime: "1982-06-17",
    title: {
      es: "Jueces Barcina y Carrero sancionados por falta de respeto",
      en: "Judges Barcina and Carrero sanctioned for disrespect",
    },
    description: {
      es: "Consejeros Togados Barcina (8 días arresto) y Carrero (14 días) sancionados por falta de respeto al presidente del tribunal",
      en: "Judges Barcina (8 days arrest) and Carrero (14 days) sanctioned for disrespect to tribunal president",
    },
    location: "campamento",
    characters: [],
    source: "Carpeta_21801_*.txt",
    category: "juicio",
  },
  {
    id: "sentencias",
    datetime: "1982-06-30",
    title: {
      es: "Sentencias: Milans y Tejero 30 años; Armada 6 años; 11 absueltos",
      en: "Sentences: Milans and Tejero 30 years; Armada 6 years; 11 acquitted",
    },
    description: {
      es: "Sentencias del juicio: Milans y Tejero condenados a 30 años (máxima); Armada a 6 años; 11 tenientes absueltos por obediencia debida",
      en: "Trial sentences: Milans and Tejero sentenced to 30 years (maximum); Armada to 6 years; 11 lieutenants acquitted for obedience to orders",
    },
    location: "campamento",
    characters: ["milans", "tejero", "armada"],
    source: "3_Juicio_23F.txt",
    category: "juicio",
  },

  // ===========================================================================
  // ERA V: SECUELAS (1982-1983) — 6 events
  // ===========================================================================
  {
    id: "procesamiento-cortina",
    datetime: "1982-07-01",
    title: {
      es: "Procesamiento formal de Cortina. Se pide discreción",
      en: "Formal prosecution of Cortina. Discretion requested",
    },
    description: {
      es: "Comunicación formal del procesamiento de Cortina en relación con los hechos del 23-24 de febrero. Se pide discreción",
      en: "Formal communication of Cortina's prosecution regarding events of February 23-24. Discretion requested",
    },
    location: "madrid-generico",
    characters: ["cortina"],
    source: "Doc_75_R.txt",
    category: "secuelas",
  },
  {
    id: "sanchez-valiente-huye",
    datetime: "1982-07-01",
    title: {
      es: "Sánchez Valiente huye con pasaporte argentino",
      en: "Sánchez Valiente flees with Argentine passport",
    },
    description: {
      es: "Sánchez Valiente huye con pasaporte argentino obtenido por su hermano en Roma. Cruzó América Latina y Europa. Último reporte: Grecia. Esposa en Londres",
      en: "Sánchez Valiente flees with Argentine passport obtained by his brother in Rome. Crossed Latin America and Europe. Last report: Greece. Wife in London",
    },
    location: "madrid-generico",
    characters: ["sanchez-valiente"],
    source: "Doc_77_R.txt",
    category: "secuelas",
  },
  {
    id: "consulta-cesid-aome",
    datetime: "1982-09-01",
    title: {
      es: "Consulta judicial al CESID sobre AOME y Cortina",
      en: "Judicial inquiry to CESID about AOME and Cortina",
    },
    description: {
      es: "El Consejo Supremo de Justicia Militar pregunta al CESID sobre la AOME: qué mandaba Cortina, si producía informes, si tenía sistema de interceptación",
      en: "Supreme Military Council asks CESID about AOME: what Cortina commanded, whether he produced reports, whether he had an interception system",
    },
    location: "madrid-generico",
    characters: ["cortina"],
    source: "Doc_80_R.txt",
    category: "secuelas",
  },
  {
    id: "fondo-empresarios",
    datetime: "1983-05-10",
    title: {
      es: "Fondo mensual de empresarios para familias de condenados",
      en: "Monthly fund from businessmen for families of convicted",
    },
    description: {
      es: "Grupo de empresarios y simpatizantes forman un fondo mensual común para sostener a las familias de los condenados",
      en: "Group of businessmen and sympathizers form a monthly common fund to support families of the convicted",
    },
    location: "madrid-generico",
    characters: [],
    source: "10-05-83_Apoyo_economico.txt",
    category: "secuelas",
  },
  {
    id: "liberacion-capitanes-palma",
    datetime: "1983-06-01",
    title: {
      es: "Liberación de 4 capitanes GC del Castillo de La Palma. Banquete celebratorio",
      en: "Release of 4 Civil Guard captains from La Palma Castle. Celebratory banquet",
    },
    description: {
      es: "Cuatro capitanes de la Guardia Civil (Lázaro Corthay, Pérez de la Lastra, Acera, Bobis) liberados del Castillo de La Palma. Banquete celebratorio con redes de simpatizantes",
      en: "Four Civil Guard captains (Lázaro Corthay, Pérez de la Lastra, Acera, Bobis) released from La Palma Castle. Celebratory banquet with sympathizer networks",
    },
    location: "castillo-la-palma",
    characters: [],
    source: "7_Notas_1983.txt",
    category: "secuelas",
  },
  {
    id: "visitas-presos",
    datetime: "1985-10-01",
    title: {
      es: "Registros de visitas a presos del 23-F",
      en: "Records of visits to 23-F prisoners",
    },
    description: {
      es: "Registros documentados de las visitas a los presos condenados por el 23-F en diversas prisiones",
      en: "Documented records of visits to prisoners convicted for 23-F in various prisons",
    },
    location: "madrid-generico",
    characters: [],
    source: "3_Juicio_23F.txt",
    category: "secuelas",
  },

  // ===========================================================================
  // ERA VI: DESCLASIFICACIÓN (2026) — 1 event
  // ===========================================================================
  {
    id: "desclasificacion-2026",
    datetime: "2026-02-24",
    title: {
      es: "Orden de desclasificación: 154 documentos desclasificados. 45º aniversario",
      en: "Declassification order: 154 documents declassified. 45th anniversary",
    },
    description: {
      es: "Orden PJC/125/2026 del Consejo de Ministros desclasifica la totalidad de los documentos del 23-F. 45º aniversario del intento de golpe",
      en: "Order PJC/125/2026 from the Council of Ministers declassifies all 23-F documents. 45th anniversary of the coup attempt",
    },
    location: "madrid-generico",
    characters: [],
    source: "BOE-A-2026-4351.txt",
    category: "desclasificacion",
  },
];

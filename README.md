# 23-F Desclasificado

**[23f-desclasificado.vercel.app](https://23f-desclasificado.vercel.app)**

A las 18:23 del 23 de febrero de 1981, el teniente coronel Antonio Tejero irrumpió en el Congreso de los Diputados con casi doscientos guardias civiles. Durante 18 horas, España contuvo la respiración. Cuarenta y cinco años después, el Consejo de Ministros desclasificó 154 documentos que habían permanecido bajo sello de "SECRETO" y "RESERVADO" en los archivos del CNI, el Ministerio de Defensa, Interior y Exteriores.

Este proyecto convierte esos 154 documentos en una experiencia digital interactiva: siete capítulos narrativos, treinta personajes con sus conexiones, ochenta eventos en una cronología navegable, y un mapa con veintiséis ubicaciones clave. Todo bilingue (ES/EN), todo construido sobre los textos OCR de los originales.

---

## Que contiene

- **154 documentos** indexados con metadatos completos (titulo, resumen, clasificacion, fecha, capitulos relacionados, enlace al PDF original en lamoncloa.gob.es)
- **7 capitulos** narrativos: Antecedentes, El Asalto, La Noche, El CESID, La Conspiracion, El Juicio, Consecuencias
- **30 personajes** con biografias, citas de documentos originales, y un grafo SVG de conexiones
- **80 eventos** en una cronologia filtrable por persona y con enlaces cruzados a ubicaciones
- **26 ubicaciones** en un mapa interactivo Leaflet con eventos asociados
- **Modo claro/oscuro** con estetica de dossier desclasificado: sellos "DESCLASIFICADO", fotos censuradas, tipografia Instrument Serif

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v3 |
| Animaciones | Framer Motion |
| Mapa | Leaflet + react-leaflet |
| i18n | next-intl (ES/EN) |
| Deploy | Vercel |

## Desarrollo local

```bash
git clone https://github.com/miguelrzazo/23f-desclasificado.git
cd 23f-desclasificado
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
src/
  app/              # Paginas (App Router con [locale])
  components/       # Componentes React (timeline, map, characters, chapters, ui)
  content/data/     # Datos: documents.ts (154), characters.ts (30), timeline.ts (80),
                    #        locations.ts (26), connections.ts (31), chapters.ts (7)
  messages/         # Traducciones ES/EN
  styles/           # Tailwind globals + tokens de diseno
public/             # Assets estaticos, OG image
```

## Corpus documental

Los 154 documentos provienen de cinco ministerios:

| Origen | Documentos | Clasificacion predominante |
|---|---|---|
| Defensa — CNI (CESID) | 84 | Reservado / Secreto |
| Defensa — Causas y Carpetas | 24 | Secreto |
| Interior — Archivo General | 7 | Sin clasificar |
| Interior — Guardia Civil | 10 | Reservado |
| Interior — Policia | 10 | Reservado |
| Exteriores (AGMAE) | 19 | Sin clasificar |

Los PDFs originales estan alojados en [lamoncloa.gob.es](https://www.lamoncloa.gob.es) y cada entrada en la web enlaza directamente al documento fuente.

## Licencia

El codigo fuente de este proyecto es open source. Los documentos desclasificados son de dominio publico, publicados por el Gobierno de Espana.

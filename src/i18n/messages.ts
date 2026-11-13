import type { Locale } from '../config';

export type Step = { title: string; text: string };

export type Messages = {
  title: string;
  tagline: string;
  intro: string;
  heroCta: string;
  heroCtaSecondary: string;
  termLines: string[];
  whatTitle: string;
  what: Step[];
  howTitle: string;
  steps: string[];
  shotsTitle: string;
  shots: Step[];
  examplesTitle: string;
  examples: Step[];
  communityTitle: string;
  communityText: string;
  costTitle: string;
  costText: string;
  repoCta: string;
  contribute: string;
  downloadTitle: string;
  detected: string;
  mac: string;
  windows: string;
  linux: string;
  releases: string;
  noticeTitle: string;
  notice: string;
  privacyLink: string;
  privacyTitle: string;
  privacy: string[];
  language: string;
  openSource: string;
  sourceLink: string;
};

/** The texts of the site. Each language has every key; the type checker enforces it. */
export const messages: Record<Locale, Messages> = {
  en: {
    "title": "Jobshell: a local job search agent for developers",
    "tagline": "Find the job postings that fit your CV, on your own computer.",
    "intro": "Jobshell reads your CV, scores public job postings against it, and tells you why each one fits or does not. Built by developers, for developers, and free to read, change and share.",
    "heroCta": "Download",
    "heroCtaSecondary": "See how it works",
    termLines: [
      "$ Jobshell search",
      "  reading CV ............ ok",
      "  postings fetched ..... 538",
      "  kept by your filters .. 114",
      "  ranked by fit ........ 1 strong match"
    ],
    "whatTitle": "What it does",
    "what": [
      { title: "Reads your CV", text: "Upload a PDF, .txt or .md file. The app fills in your headline, skills, seniority, years of experience and languages for you." },
      { title: "Filters what matters", text: "Only postings in the languages you speak, in the work modes and contract types you choose, and that pay within your range." },
      { title: "Explains the fit", text: "For each posting you see the match, and the gaps: what the job asks for that your profile does not show yet." }
    ],
    "howTitle": "How it works",
    "steps": [
      "Upload your CV. Nothing is typed by hand.",
      "Check the profile the app filled in. Change anything that is wrong.",
      "Run the search and read the postings, ranked, with the reasons."
    ],
    "shotsTitle": "Screenshots",
    "shots": [
      { title: "Summary with the missing fields in red, by step", text: "The wizard lists what is still missing, step by step, before you can save." },
      { title: "The profile ready to use", text: "Your profile, as the search will read it. You can edit it at any time." }
    ],
    "examplesTitle": "Examples",
    "examples": [
      { title: "A backend developer looking for remote work in Europe", text: "Writes Rust and Python, five years of experience, speaks English well. Jobshell keeps the English postings in European remote roles and ranks them by how many of their requirements the CV covers." },
      { title: "A frontend developer who wants to switch to a new stack", text: "Knows React well and is learning Svelte. The postings that ask for Svelte appear with the gap written next to them, so you know what to study before you apply." }
    ],
    "communityTitle": "An open source community",
    "communityText": "Jobshell is free and open source. The code is public: read it, use it, report a problem, or send a change. Developers looking for a job are stronger together, and every improvement reaches everyone who uses the project.",
    "costTitle": "Costs",
    "costText": "The project is free today. Analysing a CV and scoring postings use an AI service that charges per request. If the project ever cannot cover those costs, it will ask for a voluntary contribution, clearly and in advance.",
    "repoCta": "Read the code on GitHub",
    "contribute": "Found a bug or have an idea? Open an issue. Want to change something? Send a pull request.",
    "downloadTitle": "Download",
    "detected": "Recommended for your system",
    "mac": "macOS",
    "windows": "Windows",
    "linux": "Linux",
    "releases": "See every version on the releases page",
    "noticeTitle": "First launch",
    "notice": "The builds are not signed yet, so your system may ask you to confirm before the app opens.",
    "privacyLink": "Privacy",
    "privacyTitle": "Privacy",
    "privacy": [
      "This website collects no personal data, sets no cookies and loads no third-party scripts, fonts or trackers, so it needs no cookie banner.",
      "The app keeps your profile, your CV and your search results on your computer.",
      "Your AI provider key is stored in your operating system keychain. Only the Jobshell agent reads it, and it is never written to a file.",
      "When you ask the app to analyse your CV, its text is sent once to the AI provider you configured, for that analysis. During a search, a summary of your profile and each job posting are sent to the same provider to be scored; the CV text is not. Job postings come from public sources, and no account is needed.",
      "Contact: see the issues page of the repository."
    ],
    "language": "Language",
    "openSource": "Free and open source software.",
    "sourceLink": "Source code"
  },
  it: {
    "title": "Jobshell: un agente locale per cercare lavoro da sviluppatore",
    "tagline": "Trova gli annunci che corrispondono al tuo CV, sul tuo computer.",
    "intro": "Jobshell legge il tuo CV, valuta gli annunci pubblici rispetto ad esso e ti dice perché ciascuno corrisponde o no. Fatto da sviluppatori, per sviluppatori, e libero da leggere, modificare e condividere.",
    "heroCta": "Scarica",
    "heroCtaSecondary": "Scopri come funziona",
    termLines: [
      "$ Jobshell search",
      "  lettura del CV ........ ok",
      "  annunci recuperati ... 538",
      "  dopo i filtri ........ 114",
      "  in ordine di match ... 1 corrispondenza forte"
    ],
    "whatTitle": "Cosa fa",
    "what": [
      { title: "Legge il tuo CV", text: "Carichi un file PDF, .txt o .md. L'app compila per te headline, competenze, seniority, anni di esperienza e lingue." },
      { title: "Filtra ciò che conta", text: "Solo annunci nelle lingue che parli, nelle modalità di lavoro e nei contratti che scegli, con una retribuzione nel tuo intervallo." },
      { title: "Spiega la corrispondenza", text: "Per ogni annuncio vedi il match e le lacune: ciò che il lavoro chiede e il tuo profilo non mostra ancora." }
    ],
    "howTitle": "Come funziona",
    "steps": [
      "Carica il tuo CV. Non si scrive nulla a mano.",
      "Controlla il profilo compilato dall'app. Correggi quello che non va.",
      "Avvia la ricerca e leggi gli annunci in ordine, con le ragioni."
    ],
    "shotsTitle": "Screenshot",
    "shots": [
      { title: "Riepilogo con i campi mancanti in rosso, per passo", text: "Il wizard indica cosa manca, passo per passo, prima di poter salvare." },
      { title: "Il profilo pronto all'uso", text: "Il tuo profilo, come lo legge la ricerca. Puoi modificarlo in ogni momento." }
    ],
    "examplesTitle": "Esempi",
    "examples": [
      { title: "Uno sviluppatore backend che cerca lavoro remoto in Europa", text: "Scrive Rust e Python, ha cinque anni di esperienza, parla bene l'inglese. Jobshell tiene gli annunci in inglese per ruoli remoti in Europa e li ordina per quanti requisiti il CV copre." },
      { title: "Uno sviluppatore frontend che vuole cambiare stack", text: "Conosce bene React e sta imparando Svelte. Gli annunci che chiedono Svelte compaiono con la lacuna scritta accanto, così sai cosa studiare prima di candidarti." }
    ],
    "communityTitle": "Una comunità open source",
    "communityText": "Jobshell è gratuito e open source. Il codice è pubblico: leggilo, usalo, segnala un problema o proponi una modifica. Chi cerca lavoro è più forte se è unito, e ogni miglioramento arriva a tutti quelli che usano il progetto.",
    "costTitle": "Costi",
    "costText": "Oggi il progetto è gratuito. Analizzare un CV e valutare gli annunci usano un servizio di intelligenza artificiale che addebita ogni richiesta. Se un giorno il progetto non potesse coprire quelle spese, chiederà un contributo volontario, in modo chiaro e in anticipo.",
    "repoCta": "Leggi il codice su GitHub",
    "contribute": "Hai trovato un bug o un'idea? Apri una issue. Vuoi cambiare qualcosa? Invia una pull request.",
    "downloadTitle": "Scarica",
    "detected": "Consigliato per il tuo sistema",
    "mac": "macOS",
    "windows": "Windows",
    "linux": "Linux",
    "releases": "Vedi tutte le versioni nella pagina delle release",
    "noticeTitle": "Primo avvio",
    "notice": "Le versioni non sono ancora firmate: al primo avvio il sistema potrebbe chiederti di confermare prima di aprire l'app.",
    "privacyLink": "Privacy",
    "privacyTitle": "Privacy",
    "privacy": [
      "Questo sito non raccoglie dati personali, non imposta cookie e non carica script, font o tracker di terze parti: per questo non serve un banner dei cookie.",
      "L'app conserva il tuo profilo, il tuo CV e i risultati della ricerca sul tuo computer.",
      "La chiave del fornitore di AI è conservata nel portachiavi del sistema operativo. La legge solo l'agente di Jobshell e non viene mai scritta in un file.",
      "Quando chiedi all'app di analizzare il CV, il suo testo viene inviato una volta al fornitore di AI che hai configurato, solo per quell'analisi. Durante una ricerca, un riepilogo del profilo e ogni annuncio vengono inviati allo stesso fornitore per essere valutati; il testo del CV no. Gli annunci provengono da fonti pubbliche e non serve nessun account.",
      "Contatti: vedi la pagina delle issue del repository."
    ],
    "language": "Lingua",
    "openSource": "Software libero e open source.",
    "sourceLink": "Codice sorgente"
  },
  es: {
    "title": "Jobshell: un agente local para buscar empleo como desarrollador",
    "tagline": "Encuentra las ofertas que encajan con tu CV, en tu propio ordenador.",
    "intro": "Jobshell lee tu CV, puntúa las ofertas públicas según tu perfil y te dice por qué encaja o no cada una. Hecho por desarrolladores, para desarrolladores, y libre para leer, cambiar y compartir.",
    "heroCta": "Descargar",
    "heroCtaSecondary": "Ver cómo funciona",
    termLines: [
      "$ Jobshell search",
      "  lectura del CV ........ ok",
      "  ofertas recuperadas ... 538",
      "  tras tus filtros ..... 114",
      "  por afinidad ......... 1 coincidencia fuerte"
    ],
    "whatTitle": "Qué hace",
    "what": [
      { title: "Lee tu CV", text: "Subes un archivo PDF, .txt o .md. La app rellena por ti el titular, las competencias, la seniority, los años de experiencia y los idiomas." },
      { title: "Filtra lo que importa", text: "Solo ofertas en los idiomas que hablas, con las modalidades y contratos que eliges, y con un salario dentro de tu rango." },
      { title: "Explica la afinidad", text: "Para cada oferta ves la coincidencia y las carencias: lo que pide el puesto y tu perfil todavía no muestra." }
    ],
    "howTitle": "Cómo funciona",
    "steps": [
      "Sube tu CV. No escribes nada a mano.",
      "Revisa el perfil que la app rellenó. Corrige lo que no esté bien.",
      "Lanza la búsqueda y lee las ofertas ordenadas, con las razones."
    ],
    "shotsTitle": "Capturas",
    "shots": [
      { title: "Resumen con los campos que faltan en rojo, por paso", text: "El asistente indica lo que falta, paso a paso, antes de poder guardar." },
      { title: "El perfil listo para usar", text: "Tu perfil, tal como lo lee la búsqueda. Lo puedes editar en cualquier momento." }
    ],
    "examplesTitle": "Ejemplos",
    "examples": [
      { title: "Un desarrollador backend que busca trabajo remoto en Europa", text: "Escribe Rust y Python, tiene cinco años de experiencia y habla bien inglés. Jobshell mantiene las ofertas en inglés para puestos remotos en Europa y las ordena según cuántos requisitos cubre el CV." },
      { title: "Un desarrollador frontend que quiere cambiar de stack", text: "Domina React y está aprendiendo Svelte. Las ofertas que piden Svelte aparecen con la carencia escrita al lado, así sabes qué estudiar antes de postularte." }
    ],
    "communityTitle": "Una comunidad de código abierto",
    "communityText": "Jobshell es gratuito y de código abierto. El código es público: léelo, úsalo, informa de un problema o propón un cambio. Quien busca trabajo es más fuerte unido, y cada mejora llega a todos los que usan el proyecto.",
    "costTitle": "Costes",
    "costText": "Hoy el proyecto es gratuito. Analizar un CV y puntuar ofertas usa un servicio de inteligencia artificial que cobra por cada petición. Si algún día el proyecto no pudiera cubrir esos gastos, pedirá una contribución voluntaria, de forma clara y con antelación.",
    "repoCta": "Lee el código en GitHub",
    "contribute": "¿Has encontrado un error o tienes una idea? Abre una issue. ¿Quieres cambiar algo? Envía un pull request.",
    "downloadTitle": "Descargar",
    "detected": "Recomendado para tu sistema",
    "mac": "macOS",
    "windows": "Windows",
    "linux": "Linux",
    "releases": "Ver todas las versiones en la página de releases",
    "noticeTitle": "Primer inicio",
    "notice": "Las versiones aún no están firmadas: al primer inicio el sistema puede pedirte que confirmes antes de abrir la app.",
    "privacyLink": "Privacidad",
    "privacyTitle": "Privacidad",
    "privacy": [
      "Este sitio no recoge datos personales, no instala cookies y no carga scripts, fuentes ni rastreadores de terceros: por eso no hace falta un aviso de cookies.",
      "La app guarda tu perfil, tu CV y los resultados de búsqueda en tu ordenador.",
      "La clave de tu proveedor de IA se guarda en el llavero del sistema operativo. La lee solo el agente de Jobshell y nunca se escribe en un archivo.",
      "Cuando pides a la app que analice tu CV, su texto se envía una vez al proveedor de IA que hayas configurado, solo para ese análisis. Durante una búsqueda, un resumen de tu perfil y cada oferta se envían al mismo proveedor para puntuarlas; el texto del CV no. Las ofertas proceden de fuentes públicas y no necesitas cuenta.",
      "Contacto: consulta la página de issues del repositorio."
    ],
    "language": "Idioma",
    "openSource": "Software libre y de código abierto.",
    "sourceLink": "Código fuente"
  }
};

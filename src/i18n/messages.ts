import type { Locale } from '../config';

export type Messages = {
  title: string;
  tagline: string;
  intro: string;
  howTitle: string;
  steps: string[];
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

export const messages: Record<Locale, Messages> = {
  en: {
    title: 'openjob, a local job search agent',
    tagline: 'Find the job postings that fit your CV, on your own computer.',
    intro: 'openjob reads your CV and scores public job postings against it. Your key stays on your computer, and so does your CV text, except when you ask for an analysis: then the text goes to your AI provider. During a search, a summary of your profile and each posting are sent to your AI provider to be scored.',
    howTitle: 'How it works',
    steps: ['Upload your CV (PDF, .txt or .md)', 'Check the profile the app fills in for you', 'Run the search and read the postings, ranked by fit'],
    downloadTitle: 'Download',
    detected: 'Recommended for your system',
    mac: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    releases: 'See every version on the releases page',
    noticeTitle: 'First launch',
    notice: 'The builds are not signed yet, so your system may ask you to confirm before the app opens.',
    privacyLink: 'Privacy',
    privacyTitle: 'Privacy',
    privacy: [
      'This website collects no personal data, sets no cookies and loads no third-party scripts, fonts or trackers, so it needs no cookie banner.',
      'The app keeps your profile, your CV and your search results on your computer.',
      'Your AI provider key is stored in your operating system keychain. Only the openjob agent reads it, and it is never written to a file.',
      'When you ask the app to analyse your CV, its text is sent once to the AI provider you configured, for that analysis. During a search, a summary of your profile and each job posting are sent to the same provider to be scored; the CV text is not. Job postings come from public sources, and no account is needed.',
      'Contact: see the issues page of the repository.',
    ],
    language: 'Language',
    openSource: 'Free and open source software. The source code is on GitHub.',
    sourceLink: 'Source code',
  },
  it: {
    title: 'openjob, un agente locale per la ricerca di lavoro',
    tagline: 'Trova gli annunci che corrispondono al tuo CV, sul tuo computer.',
    intro: "openjob legge il tuo CV e valuta gli annunci pubblici rispetto ad esso. La tua chiave resta sul tuo computer, e così il testo del CV, tranne quando chiedi un'analisi: allora il testo va al tuo fornitore di AI. Durante una ricerca, un riepilogo del profilo e ogni annuncio vengono inviati al tuo fornitore di AI per essere valutati.",
    howTitle: 'Come funziona',
    steps: ['Carica il tuo CV (PDF, .txt o .md)', "Controlla il profilo che l'app compila per te", 'Avvia la ricerca e leggi gli annunci in ordine di corrispondenza'],
    downloadTitle: 'Scarica',
    detected: 'Consigliato per il tuo sistema',
    mac: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    releases: 'Vedi tutte le versioni nella pagina delle release',
    noticeTitle: 'Primo avvio',
    notice: "Le versioni non sono ancora firmate: al primo avvio il sistema potrebbe chiederti di confermare prima di aprire l'app.",
    privacyLink: 'Privacy',
    privacyTitle: 'Privacy',
    privacy: [
      'Questo sito non raccoglie dati personali, non imposta cookie e non carica script, font o tracker di terze parti: per questo non serve un banner dei cookie.',
      "L'app conserva il tuo profilo, il tuo CV e i risultati della ricerca sul tuo computer.",
      "La chiave del fornitore di AI è conservata nel portachiavi del sistema operativo. La legge solo l'agente di openjob e non viene mai scritta in un file.",
      "Quando chiedi all'app di analizzare il CV, il suo testo viene inviato una volta al fornitore di AI che hai configurato, per quella sola analisi. Durante una ricerca, un riepilogo del profilo e ogni annuncio vengono inviati allo stesso fornitore per essere valutati; il testo del CV no. Gli annunci provengono da fonti pubbliche e non serve nessun account.",
      'Contatti: vedi la pagina delle issue del repository.',
    ],
    language: 'Lingua',
    openSource: 'Software libero e open source. Il codice sorgente è su GitHub.',
    sourceLink: 'Codice sorgente',
  },
  es: {
    title: 'openjob, un agente local para buscar empleo',
    tagline: 'Encuentra las ofertas que encajan con tu CV, en tu propio ordenador.',
    intro: 'openjob lee tu CV y puntúa las ofertas públicas según tu perfil. Tu clave se queda en tu ordenador, y también el texto del CV, salvo cuando pides un análisis: entonces el texto va a tu proveedor de IA. Durante una búsqueda, un resumen de tu perfil y cada oferta se envían a tu proveedor de IA para puntuarlas.',
    howTitle: 'Cómo funciona',
    steps: ['Sube tu CV (PDF, .txt o .md)', 'Revisa el perfil que la app rellena por ti', 'Lanza la búsqueda y lee las ofertas ordenadas por afinidad'],
    downloadTitle: 'Descargar',
    detected: 'Recomendado para tu sistema',
    mac: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    releases: 'Ver todas las versiones en la página de releases',
    noticeTitle: 'Primer inicio',
    notice: 'Las versiones aún no están firmadas: al primer inicio el sistema puede pedirte que confirmes antes de abrir la app.',
    privacyLink: 'Privacidad',
    privacyTitle: 'Privacidad',
    privacy: [
      'Este sitio no recoge datos personales, no instala cookies y no carga scripts, fuentes ni rastreadores de terceros: por eso no hace falta un aviso de cookies.',
      'La app guarda tu perfil, tu CV y los resultados de búsqueda en tu ordenador.',
      'La clave de tu proveedor de IA se guarda en el llavero del sistema operativo. La lee solo el agente de openjob y nunca se escribe en un archivo.',
      'Cuando pides a la app que analice tu CV, su texto se envía una vez al proveedor de IA que hayas configurado, solo para ese análisis. Durante una búsqueda, un resumen de tu perfil y cada oferta se envían al mismo proveedor para puntuarlas; el texto del CV no. Las ofertas proceden de fuentes públicas y no necesitas cuenta.',
      'Contacto: consulta la página de issues del repositorio.',
    ],
    language: 'Idioma',
    openSource: 'Software libre y de código abierto. El código fuente está en GitHub.',
    sourceLink: 'Código fuente',
  },
};

import type { Locale, Localized } from "@/lib/i18n"

export type ProjectStatus = "Live" | "Client work" | "In progress" | "University" | "Hackathon"

// A plain string is the same in every language (names, technologies)
type Text = string | Localized

interface ProjectData {
  slug: string
  title: Text
  summary: Localized
  status: ProjectStatus
  role: Localized
  // Prize or recognition, shown as a badge instead of the status
  award?: Localized
  image?: string
  // Extra screenshots shown under the main image on the detail page
  gallery?: { src: string; alt: Localized }[]
  // Short list shown on the project card; defaults to the first stack items
  tags?: string[]
  points: Localized<string[]>
  // Layer names are translated through the dictionary
  stack: { layer: string; items: string[] }[]
  // `source: true` marks a link to the code; its label comes from the dictionary
  links: { label?: string; href: string; source?: true }[]
}

/** A project with every text resolved to one language */
export interface Project {
  slug: string
  title: string
  summary: string
  status: ProjectStatus
  role: string
  award?: string
  image?: string
  gallery: { src: string; alt: string }[]
  tags?: string[]
  points: string[]
  stack: { layer: string; items: string[] }[]
  links: { label?: string; href: string; source?: true }[]
}

const pick = (text: Text, lang: Locale) => (typeof text === "string" ? text : text[lang])

const data: ProjectData[] = [
  {
    slug: "incamp",
    title: "inCamp",
    summary: {
      en: "A matchmaking platform for university students to find teammates, co-founders and small paid tasks.",
      de: "Eine Matching-Plattform, auf der Studierende Teammitglieder, Mitgründer und kleine bezahlte Aufgaben finden.",
    },
    status: "Live",
    role: {
      en: "Full-stack: backend, frontend and deployment",
      de: "Full-Stack: Backend, Frontend und Deployment",
    },
    image: "/incamp.webp",
    gallery: [
      {
        src: "/incamp/onboarding.webp",
        alt: {
          en: "Onboarding: profile, skills and working style used for matching",
          de: "Onboarding: Profil, Skills und Arbeitsstil für das Matching",
        },
      },
      {
        src: "/incamp/profile.webp",
        alt: {
          en: "Public profile with projects, skills and open bounties",
          de: "Öffentliches Profil mit Projekten, Skills und offenen Bounties",
        },
      },
      {
        src: "/incamp/project-dark.webp",
        alt: { en: "Project page in dark theme", de: "Projektseite im dunklen Design" },
      },
      {
        src: "/incamp/post-bounty.webp",
        alt: {
          en: "Posting a bounty: a small paid task",
          de: "Eine Bounty erstellen: eine kleine bezahlte Aufgabe",
        },
      },
    ],
    tags: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "Docker"],
    points: {
      en: [
        "Async FastAPI backend on PostgreSQL. People and projects are matched with semantic search over pgvector embeddings.",
        "Real-time updates over WebSockets with Redis Pub/Sub. Redis also handles caching, rate limiting and short-lived WebSocket auth tickets.",
        "Next.js 16 frontend in four languages (EN, DE, RU, ZH), installable as a PWA, with light and dark themes.",
        "Runs on Docker Compose behind Caddy, which handles HTTPS and routes /api, /ws and /docs. Schema changes go through Alembic migrations.",
        "Transactional email through Brevo in production and Mailpit locally.",
      ],
      de: [
        "Asynchrones FastAPI-Backend auf PostgreSQL. Personen und Projekte werden per semantischer Suche über pgvector-Embeddings zusammengebracht.",
        "Echtzeit-Updates über WebSockets mit Redis Pub/Sub. Redis übernimmt außerdem Caching, Rate Limiting und kurzlebige Tickets für die WebSocket-Authentifizierung.",
        "Next.js-16-Frontend in vier Sprachen (EN, DE, RU, ZH), als PWA installierbar, mit hellem und dunklem Design.",
        "Läuft mit Docker Compose hinter Caddy, das HTTPS übernimmt und /api, /ws und /docs routet. Schemaänderungen laufen über Alembic-Migrationen.",
        "Transaktionale E-Mails über Brevo in Produktion und Mailpit lokal.",
      ],
    },
    stack: [
      { layer: "Backend", items: ["Python", "FastAPI", "SQLAlchemy 2 (async)", "PostgreSQL", "pgvector", "Alembic"] },
      {
        layer: "Frontend",
        items: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "Framer Motion"],
      },
      { layer: "Infrastructure", items: ["Docker Compose", "Caddy", "Redis", "WebSockets", "Brevo"] },
    ],
    links: [{ label: "incamp.online", href: "https://incamp.online" }],
  },
  {
    slug: "raytracer",
    title: { en: "CSG ray tracer", de: "CSG-Raytracer" },
    summary: {
      en: "A C++17 ray tracer that renders JSON scenes built with constructive solid geometry. University team project, graded 20/20 with maximum bonus points.",
      de: "Ein Raytracer in C++17, der JSON-Szenen aus Constructive Solid Geometry rendert. Teamprojekt an der Uni, bewertet mit 20/20 und maximalen Bonuspunkten.",
    },
    status: "University",
    role: {
      en: "Team of three, TU Hamburg, Object Oriented Programming course",
      de: "Dreierteam, TU Hamburg, Kurs Objektorientierte Programmierung",
    },
    image: "/raytracer.webp",
    gallery: [
      {
        src: "/raytracer/mirror.webp",
        alt: {
          en: "Framed mirror with second-order reflections",
          de: "Gerahmter Spiegel mit Reflexionen zweiter Ordnung",
        },
      },
      {
        src: "/raytracer/puddle.webp",
        alt: {
          en: "Glass tori, metal and a puddle with an uneven edge",
          de: "Glas-Tori, Metall und eine Pfütze mit unebenem Rand",
        },
      },
      {
        src: "/raytracer/glass.webp",
        alt: {
          en: "Glass of different thickness refracting a striped floor",
          de: "Glas unterschiedlicher Dicke bricht einen gestreiften Boden",
        },
      },
      {
        src: "/raytracer/neon.webp",
        alt: { en: "Neon tunnel animation built from CSG frames", de: "Neon-Tunnel-Animation aus CSG-Frames" },
      },
    ],
    tags: ["C++17", "CMake", "Eigen", "Docker", "pybind11"],
    points: {
      en: [
        "Everything is a Solid with two methods, intersect(ray) and contains(point). Primitives, boolean operations and transforms all implement it (Composite pattern), so CSG nests without limit and a new primitive only needs those two methods.",
        "Spheres, half-spaces and tori, including a custom quartic solver for the torus. Union, intersection, difference, exclusion and negation reduce to an algebra of sorted ray intervals.",
        "Recursive shading: reflection, refraction by Snell’s law with total internal reflection, shadows, Phong lighting, jittered anti-aliasing. Multithreaded rendering cut the showcase scene from 5.3 s to 1.1 s on 12 cores.",
        "Unit tests for every module check properties rather than magic numbers, e.g. a glass sphere must flip the background upside down. Every JSON scene runs as a regression test in CTest, with AddressSanitizer and UBSan builds.",
        "Multi-stage Docker build pinned by digest that runs the tests with GCC and -Werror during the build, about 360 MB final image running as a non-root user.",
        "Python bindings via pybind11 and ffmpeg scripts for animations, Doxygen API docs and UML class diagrams.",
      ],
      de: [
        "Alles ist ein Solid mit zwei Methoden, intersect(ray) und contains(point). Primitive, boolesche Operationen und Transformationen implementieren sie alle (Composite-Pattern), sodass sich CSG beliebig verschachteln lässt und ein neues Primitiv nur diese zwei Methoden braucht.",
        "Kugeln, Halbräume und Tori, inklusive eines eigenen Lösers für Gleichungen vierten Grades für den Torus. Vereinigung, Schnitt, Differenz, Exklusion und Negation lassen sich auf eine Algebra sortierter Strahlintervalle zurückführen.",
        "Rekursives Shading: Reflexion, Brechung nach dem Snelliusschen Gesetz mit Totalreflexion, Schatten, Phong-Beleuchtung, Jittered Anti-Aliasing. Multithreading senkte die Renderzeit der Showcase-Szene auf 12 Kernen von 5,3 s auf 1,1 s.",
        "Unit-Tests für jedes Modul prüfen Eigenschaften statt magischer Zahlen, z. B. muss eine Glaskugel den Hintergrund auf den Kopf stellen. Jede JSON-Szene läuft als Regressionstest in CTest, mit Builds für AddressSanitizer und UBSan.",
        "Mehrstufiger, per Digest gepinnter Docker-Build, der die Tests mit GCC und -Werror schon beim Bauen ausführt. Das fertige Image hat etwa 360 MB und läuft ohne Root-Rechte.",
        "Python-Bindings über pybind11 und ffmpeg-Skripte für Animationen, Doxygen-API-Dokumentation und UML-Klassendiagramme.",
      ],
    },
    stack: [
      { layer: "Core", items: ["C++17", "Eigen", "nlohmann/json", "std::thread"] },
      { layer: "Build and tests", items: ["CMake", "doctest", "CTest", "AddressSanitizer", "UBSan"] },
      { layer: "Tooling", items: ["Docker", "pybind11", "Python", "ffmpeg", "Doxygen"] },
    ],
    links: [],
  },
  {
    slug: "dreamkit",
    title: "dreamkit",
    summary: {
      en: "A plugin toolkit around Dream Labs’ Dream-1 robotics model: it shows why a robot arm’s attempt failed, recovers from it, tracks what it costs and collects data for fine-tuning. Built in two days at the Berlin Robotics & AI Hackathon.",
      de: "Ein Plugin-Toolkit für das Robotik-Modell Dream-1 von Dream Labs: Es zeigt, warum der Versuch eines Roboterarms gescheitert ist, setzt ihn fort, behält die Kosten im Blick und sammelt Daten für Fine-Tuning. In zwei Tagen beim Berlin Robotics & AI Hackathon entstanden.",
    },
    status: "Hackathon",
    award: { en: "Hackathon winner", de: "Hackathon-Gewinner" },
    role: {
      en: "Team of three, HackLab × BRISA hackathon at CIC Berlin, November 2026. I built the core plugin API, the server, the CLI and the web panel.",
      de: "Dreierteam, HackLab × BRISA Hackathon im CIC Berlin, November 2026. Von mir: die Plugin-API, der Server, die CLI und das Web-Panel.",
    },
    image: "/dreamkit.webp",
    gallery: [
      {
        src: "/dreamkit/live-recovered.webp",
        alt: {
          en: "Live view: a failed attempt recovered without resetting the scene",
          de: "Live-Ansicht: ein gescheiterter Versuch wird fortgesetzt, ohne die Szene zurückzusetzen",
        },
      },
      {
        src: "/dreamkit/history-run.webp",
        alt: {
          en: "History of a 150-attempt run: cost, latency and what each plugin reported",
          de: "Verlauf eines Laufs mit 150 Versuchen: Kosten, Latenz und was jedes Plugin gemeldet hat",
        },
      },
      {
        src: "/dreamkit/plugin-page.webp",
        alt: {
          en: "A plugin’s own page with its settings and results",
          de: "Die eigene Seite eines Plugins mit Einstellungen und Ergebnissen",
        },
      },
      {
        src: "/dreamkit/budget-stop.webp",
        alt: {
          en: "Budget guard sending the arms home before the API credits run out",
          de: "Der Budget Guard schickt die Arme in die Ausgangsposition, bevor die API-Credits ausgehen",
        },
      },
    ],
    tags: ["Python", "FastAPI", "React", "MuJoCo", "LLM vision"],
    points: {
      en: [
        "One line wraps Dream Labs’ client. Plugins then run around every model call and control step in three stages: detect, recover, learn.",
        "A failure monitor names the cause and the second (“dropped the object at 8.8 s”). Recovery continues from where the arm is instead of resetting the scene, and a budget guard stops the run before the API credits run out.",
        "Works in the MuJoCo simulator and on a real robot: with only joint states, gripper and camera feeds it detects what it can and marks the rest as unknown instead of guessing.",
        "FastAPI server and React panel: a live view of the running loop, history with the video at the moment of failure, plugin management and dataset export for fine-tuning in LeRobot format.",
        "A versioned plugin standard with manifests and replay fixtures; dreamkit check validates any plugin, and a pytest suite runs in CI.",
        "Measured on 178 real Dream-1 attempts: 33% success (95% interval 24–45%) and $0.098 per successful attempt, with API outages counted separately from model failures.",
      ],
      de: [
        "Eine Zeile umschließt den Client von Dream Labs. Danach laufen Plugins um jeden Modellaufruf und jeden Steuerschritt, in drei Stufen: erkennen, reagieren, lernen.",
        "Ein Failure Monitor nennt Ursache und Sekunde („Objekt bei 8,8 s fallen gelassen“). Die Recovery macht dort weiter, wo der Arm gerade ist, statt die Szene zurückzusetzen, und ein Budget Guard stoppt den Lauf, bevor die API-Credits ausgehen.",
        "Funktioniert im MuJoCo-Simulator und auf einem echten Roboter: Nur mit Gelenkzuständen, Greifer und Kamerabildern erkennt es, was erkennbar ist, und markiert den Rest als unbekannt, statt zu raten.",
        "FastAPI-Server und React-Panel: Live-Ansicht der laufenden Schleife, Verlauf mit dem Video im Moment des Fehlers, Plugin-Verwaltung und Datensatz-Export im LeRobot-Format für Fine-Tuning.",
        "Ein versionierter Plugin-Standard mit Manifesten und Replay-Fixtures. dreamkit check prüft jedes Plugin, und eine pytest-Suite läuft in der CI.",
        "Gemessen an 178 echten Dream-1-Versuchen: 33 % Erfolg (95-%-Intervall 24–45 %) und 0,098 $ pro erfolgreichem Versuch, wobei API-Ausfälle getrennt von Modellfehlern gezählt werden.",
      ],
    },
    stack: [
      { layer: "Core", items: ["Python", "FastAPI", "MuJoCo", "pytest", "uv"] },
      { layer: "Panel", items: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Recharts"] },
      { layer: "AI and data", items: ["Dream-1 API", "Gemini / Claude vision", "LeRobot datasets"] },
    ],
    links: [{ href: "https://github.com/chlorei/hackathon26", source: true }],
  },
  {
    slug: "relinxr",
    title: "Relinxr",
    summary: {
      en: "A link analytics SaaS: short links with click tracking and a dashboard of who clicked, where and when.",
      de: "Ein Link-Analytics-SaaS: Kurzlinks mit Klick-Tracking und einem Dashboard, das zeigt, wer wann und von wo geklickt hat.",
    },
    status: "Live",
    role: {
      en: "Solo product: design and full-stack development",
      de: "Eigenes Produkt: Design und Full-Stack-Entwicklung",
    },
    image: "/relinxr.webp",
    gallery: [
      {
        src: "/relinxr/overview.webp",
        alt: {
          en: "Overview: totals, clicks over the last 7 days and top countries",
          de: "Übersicht: Gesamtzahlen, Klicks der letzten 7 Tage und Top-Länder",
        },
      },
      {
        src: "/relinxr/project.webp",
        alt: {
          en: "A project: its links, their clicks and settings in one place",
          de: "Ein Projekt: seine Links, ihre Klicks und Einstellungen an einem Ort",
        },
      },
    ],
    points: {
      en: [
        "Link shortening with click tracking, aggregated into dashboard charts of daily clicks and the countries they come from.",
        "Projects group links by campaign, client or release and show their clicks together. Links made without an account move into it on sign-up.",
        "Light and dark themes.",
        "JWT-based authentication and per-user data in MongoDB.",
        "Full UI built from scratch with shadcn/ui components and Recharts.",
      ],
      de: [
        "Kurzlinks mit Klick-Tracking, zusammengefasst in Dashboard-Diagrammen mit täglichen Klicks und Herkunftsländern.",
        "Projekte gruppieren Links nach Kampagne, Kunde oder Release und zeigen ihre Klicks gemeinsam. Ohne Konto erstellte Links wandern bei der Registrierung ins Konto.",
        "Helles und dunkles Design.",
        "JWT-basierte Authentifizierung und nutzerbezogene Daten in MongoDB.",
        "Komplette Oberfläche von Grund auf mit shadcn/ui-Komponenten und Recharts gebaut.",
      ],
    },
    stack: [
      { layer: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"] },
      { layer: "Backend", items: ["Next.js Route Handlers", "MongoDB", "JWT"] },
    ],
    links: [
      { label: "rld.bio", href: "https://rld.bio" },
      { href: "https://github.com/chlorei/https---github.com-chlorei-linklab", source: true },
    ],
  },
  {
    slug: "pokerocheck",
    title: "Pokerocheck",
    summary: {
      en: "Migration of a production React SPA to a server-rendered Next.js app for a client.",
      de: "Migration einer produktiven React-SPA auf eine serverseitig gerenderte Next.js-App für einen Kunden.",
    },
    status: "Client work",
    role: { en: "Frontend developer (freelance)", de: "Frontend-Entwickler (freiberuflich)" },
    image: "/pokerocheck.webp",
    points: {
      en: [
        "Moved the existing single-page app to Next.js with server-side rendering, so pages arrive as HTML and can be indexed.",
        "Rebuilt UI components, routing and state management during the migration.",
      ],
      de: [
        "Die bestehende Single-Page-App auf Next.js mit Server-Side Rendering umgezogen, sodass Seiten als HTML ankommen und indexiert werden können.",
        "UI-Komponenten, Routing und State-Management während der Migration neu aufgebaut.",
      ],
    },
    stack: [{ layer: "Frontend", items: ["Next.js", "React", "TypeScript", "styled-components"] }],
    links: [{ label: "pokerocheck.ru", href: "https://pokerocheck.ru" }],
  },
  {
    slug: "sound-portfolio",
    title: { en: "Sound designer portfolio", de: "Portfolio für einen Sounddesigner" },
    summary: {
      en: "A portfolio site in four languages with a custom audio player.",
      de: "Eine Portfolio-Website in vier Sprachen mit eigenem Audioplayer.",
    },
    status: "Client work",
    role: { en: "Frontend developer (freelance)", de: "Frontend-Entwickler (freiberuflich)" },
    image: "/suo.webp",
    points: {
      en: [
        "Custom audio player built directly on the HTML5 audio API.",
        "EN, RU, ZH and JA versions with fonts switched per language.",
      ],
      de: [
        "Eigener Audioplayer direkt auf der HTML5-Audio-API.",
        "Versionen auf EN, RU, ZH und JA mit eigener Schrift pro Sprache.",
      ],
    },
    stack: [{ layer: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"] }],
    links: [],
  },
  {
    slug: "d1lemma",
    title: "d1lemma",
    summary: {
      en: "An open-source, local-first task manager with a built-in rich-text editor.",
      de: "Ein Open-Source-Taskmanager nach dem Local-First-Prinzip mit eingebautem Rich-Text-Editor.",
    },
    status: "In progress",
    role: { en: "Solo project", de: "Eigenes Projekt" },
    image: "/dilemma.webp",
    points: {
      en: [
        "Tasks and notes are stored locally first, so the app works offline.",
        "Rich-text editor integrated into each task.",
      ],
      de: [
        "Aufgaben und Notizen werden zuerst lokal gespeichert, deshalb funktioniert die App offline.",
        "Rich-Text-Editor in jeder Aufgabe.",
      ],
    },
    stack: [
      { layer: "Frontend", items: ["React", "Redux"] },
      { layer: "Backend", items: ["Node.js"] },
    ],
    links: [],
  },
]

export const projectSlugs = data.map((project) => project.slug)

/** Every project in one language; the first one is shown as the wide featured card */
export function getProjects(lang: Locale): Project[] {
  return data.map((project) => ({
    ...project,
    title: pick(project.title, lang),
    summary: project.summary[lang],
    role: project.role[lang],
    award: project.award?.[lang],
    gallery: (project.gallery ?? []).map((shot) => ({ src: shot.src, alt: shot.alt[lang] })),
    points: project.points[lang],
  }))
}

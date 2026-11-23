import type { Locale } from "@/lib/i18n"
import type { ProjectStatus } from "@/lib/projects"

// Every UI string on the site, per language. Project content lives in lib/projects.ts.
const en = {
  meta: {
    description:
      "Computer Science student at TUHH and full-stack developer in Hamburg. Looking for a Werkstudent position. German C1, English C1.",
    role: "Full-Stack Developer",
    ogLocale: "en_US",
  },
  nav: { projects: "Projects", about: "About", contact: "Contact", main: "Main", language: "Language" },
  cv: {
    download: "Download CV",
    downloadPdf: "Download CV (PDF)",
    // Link to the other language's CV, written in that language
    other: "Lebenslauf auf Deutsch",
  },
  home: {
    available: "Open to Werkstudent roles",
    role: "Full-stack developer",
    intro: "Computer Science student at TUHH. I build web apps end to end, from the database and API to the interface.",
    viewProjects: "View projects",
    portraitAlt: "Portrait of Aleksandr Alekseev",
    factsLabel: "Quick facts",
    facts: {
      studying: { term: "Studying", detail: "B.Sc. Computer Science, TUHH" },
      languages: { term: "Languages", detail: "German C1, English C1" },
      experience: { term: "Experience", detail: "Freelance since 2023" },
      location: { term: "Based in", detail: "Hamburg, Germany" },
    },
    stackHeading: "What I work with",
    stackAreas: { frontend: "Frontend", backend: "Backend", data: "Data & infrastructure" },
  },
  projects: {
    title: "Projects",
    description: "Products and client work: inCamp, Relinxr, Pokerocheck and more.",
    intro: "Products I built and client work I shipped. Open a project to see what I did and what it runs on.",
    viewProject: "View project",
    screenshotOf: "Screenshot of ",
    allProjects: "All projects",
    openSite: "Open site",
    source: "Source",
    whatIBuilt: "What I built",
    techStack: "Tech stack",
    nextProject: "Next project",
    status: {
      Live: "Live",
      "Client work": "Client work",
      "In progress": "In progress",
      University: "University",
      Hackathon: "Hackathon",
    } satisfies Record<ProjectStatus, string>,
    layers: {} as Record<string, string>,
  },
  gallery: {
    open: "Open screenshot: ",
    viewer: "Screenshot viewer",
    close: "Close",
    previous: "Previous screenshot",
    next: "Next screenshot",
  },
  about: {
    title: "About",
    heading: "About me",
    description: "Background, skills, experience and education of Aleksandr Alekseev.",
    intro: [
      "I’m Aleksandr, 20, a Computer Science student at TUHH in Hamburg. I’ve been building for the web since 2023, first as a freelance frontend developer and now across the whole stack.",
      "I build web apps end to end: interfaces in React and Next.js, APIs in FastAPI or Node.js, data in PostgreSQL, MongoDB and Redis, and deployment with Docker. I care about pages that load fast, work for everyone and stay easy to change.",
    ],
    // The last paragraph links to inCamp between `before` and `after`
    latest: {
      before: "My latest product is ",
      after:
        ". I’m looking for a Werkstudent position, up to 20 hours a week, where I can work on a real product alongside my studies.",
    },
    timelineHeading: "Experience and education",
    timeline: [
      {
        period: "November 2026",
        title: "Winner, Berlin Robotics & AI Hackathon",
        place: "HackLab × BRISA, CIC Berlin",
        points: [
          "Built dreamkit in a team of three in two days: a plugin toolkit around Dream Labs’ Dream-1 robotics model that explains failed attempts, recovers from them and collects fine-tuning data.",
        ],
      },
      {
        period: "2025 – 2028",
        title: "B.Sc. Computer Science",
        place: "TUHH, Technische Universität Hamburg",
        points: [],
      },
      {
        period: "2023 – present",
        title: "Full-stack developer, freelance",
        place: "Remote",
        points: [
          "Build web apps for clients end to end, from first requirements to deployment, mostly in React, Next.js and TypeScript.",
          "Move existing React apps to Next.js with server-side rendering, rewriting components, routing and Redux state along the way, so pages load faster and get indexed by search engines.",
          "Improve performance and accessibility, checked with Lighthouse and Core Web Vitals.",
          "Work with clients directly: turn their requests into concrete tasks, agree on scope and deliver on time.",
        ],
      },
      {
        period: "2024 – 2025",
        title: "Studienkolleg, T-Kurs",
        place: "Studienkolleg Hamburg",
        points: ["Mathematics, physics and computer science."],
      },
    ],
    skillsHeading: "Skills",
    skillAreas: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      infrastructure: "Infrastructure",
    },
    languagesHeading: "Languages",
    languages: [
      { name: "German", level: "C1" },
      { name: "English", level: "C1" },
      { name: "Russian", level: "Native" },
    ],
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Aleksandr Alekseev about Werkstudent roles or projects.",
    intro:
      "Hiring a Werkstudent or have a project in mind? Send a message and I’ll reply by email. German or English both work.",
    direct: "Or reach me directly",
    email: "Email",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      sending: "Sending…",
      send: "Send message",
      sent: "Message sent. I’ll reply by email.",
      failed: "Message not sent.",
      retry: "Try again or email",
    },
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn’t exist or was moved. Try the projects page instead.",
    viewProjects: "View projects",
    home: "Go to home page",
  },
}

export type Dictionary = typeof en

const de: Dictionary = {
  meta: {
    description:
      "Informatikstudent an der TUHH und Full-Stack-Entwickler in Hamburg. Auf der Suche nach einer Werkstudentenstelle. Deutsch C1, Englisch C1.",
    role: "Full-Stack-Entwickler",
    ogLocale: "de_DE",
  },
  nav: { projects: "Projekte", about: "Über mich", contact: "Kontakt", main: "Hauptmenü", language: "Sprache" },
  cv: {
    download: "Lebenslauf herunterladen",
    downloadPdf: "Lebenslauf herunterladen (PDF)",
    other: "CV in English",
  },
  home: {
    available: "Offen für Werkstudentenstellen",
    role: "Full-Stack-Entwickler",
    intro:
      "Informatikstudent an der TUHH. Ich entwickle Webanwendungen von Anfang bis Ende, von der Datenbank und API bis zur Oberfläche.",
    viewProjects: "Projekte ansehen",
    portraitAlt: "Porträt von Aleksandr Alekseev",
    factsLabel: "Kurz und knapp",
    facts: {
      studying: { term: "Studium", detail: "B.Sc. Informatik, TUHH" },
      languages: { term: "Sprachen", detail: "Deutsch C1, Englisch C1" },
      experience: { term: "Erfahrung", detail: "Freiberuflich seit 2023" },
      location: { term: "Wohnort", detail: "Hamburg" },
    },
    stackHeading: "Womit ich arbeite",
    stackAreas: { frontend: "Frontend", backend: "Backend", data: "Daten & Infrastruktur" },
  },
  projects: {
    title: "Projekte",
    description: "Eigene Produkte und Kundenprojekte: inCamp, Relinxr, Pokerocheck und mehr.",
    intro:
      "Eigene Produkte und Kundenprojekte. Öffnen Sie ein Projekt, um zu sehen, was ich gemacht habe und womit es läuft.",
    viewProject: "Projekt ansehen",
    screenshotOf: "Screenshot von ",
    allProjects: "Alle Projekte",
    openSite: "Website öffnen",
    source: "Quellcode",
    whatIBuilt: "Was ich gebaut habe",
    techStack: "Tech-Stack",
    nextProject: "Nächstes Projekt",
    status: {
      Live: "Live",
      "Client work": "Kundenprojekt",
      "In progress": "In Arbeit",
      University: "Uni-Projekt",
      Hackathon: "Hackathon",
    },
    layers: {
      Infrastructure: "Infrastruktur",
      Core: "Kern",
      "Build and tests": "Build und Tests",
      Tooling: "Werkzeuge",
      "AI and data": "KI und Daten",
    },
  },
  gallery: {
    open: "Screenshot öffnen: ",
    viewer: "Screenshot-Ansicht",
    close: "Schließen",
    previous: "Vorheriger Screenshot",
    next: "Nächster Screenshot",
  },
  about: {
    title: "Über mich",
    heading: "Über mich",
    description: "Werdegang, Kenntnisse, Erfahrung und Ausbildung von Aleksandr Alekseev.",
    intro: [
      "Ich bin Aleksandr, 20, und studiere Informatik an der TUHH in Hamburg. Seit 2023 entwickle ich fürs Web, zuerst als freiberuflicher Frontend-Entwickler, inzwischen über den gesamten Stack.",
      "Ich baue Webanwendungen von Anfang bis Ende: Oberflächen mit React und Next.js, APIs mit FastAPI oder Node.js, Daten in PostgreSQL, MongoDB und Redis und Deployment mit Docker. Mir ist wichtig, dass Seiten schnell laden, für alle funktionieren und leicht zu ändern bleiben.",
    ],
    latest: {
      before: "Mein neuestes Produkt ist ",
      after:
        ". Ich suche eine Werkstudentenstelle mit bis zu 20 Stunden pro Woche, in der ich neben dem Studium an einem echten Produkt mitarbeiten kann.",
    },
    timelineHeading: "Erfahrung und Ausbildung",
    timeline: [
      {
        period: "November 2026",
        title: "Gewinner, Berlin Robotics & AI Hackathon",
        place: "HackLab × BRISA, CIC Berlin",
        points: [
          "Im Dreierteam in zwei Tagen dreamkit gebaut: ein Plugin-Toolkit für das Robotik-Modell Dream-1 von Dream Labs, das gescheiterte Versuche erklärt, sie fortsetzt und Daten für Fine-Tuning sammelt.",
        ],
      },
      {
        period: "2025 – 2028",
        title: "B.Sc. Informatik",
        place: "TUHH, Technische Universität Hamburg",
        points: [],
      },
      {
        period: "seit 2023",
        title: "Full-Stack-Entwickler, freiberuflich",
        place: "Remote",
        points: [
          "Entwicklung von Webanwendungen für Kunden, von den ersten Anforderungen bis zum Deployment, meist mit React, Next.js und TypeScript.",
          "Migration bestehender React-Apps auf Next.js mit Server-Side Rendering, inklusive Neuaufbau von Komponenten, Routing und Redux-State, damit Seiten schneller laden und von Suchmaschinen indexiert werden.",
          "Verbesserung von Performance und Barrierefreiheit, gemessen mit Lighthouse und Core Web Vitals.",
          "Direkte Zusammenarbeit mit Kunden: Anfragen in konkrete Aufgaben übersetzen, Umfang abstimmen und termingerecht liefern.",
        ],
      },
      {
        period: "2024 – 2025",
        title: "Studienkolleg, T-Kurs",
        place: "Studienkolleg Hamburg",
        points: ["Mathematik, Physik und Informatik."],
      },
    ],
    skillsHeading: "Kenntnisse",
    skillAreas: {
      languages: "Programmiersprachen",
      frontend: "Frontend",
      backend: "Backend",
      data: "Daten",
      infrastructure: "Infrastruktur",
    },
    languagesHeading: "Sprachen",
    languages: [
      { name: "Deutsch", level: "C1" },
      { name: "Englisch", level: "C1" },
      { name: "Russisch", level: "Mutter\u00ADsprache" },
    ],
  },
  contact: {
    title: "Kontakt",
    description: "Kontakt zu Aleksandr Alekseev für Werkstudentenstellen oder Projekte.",
    intro:
      "Sie suchen einen Werkstudenten oder haben ein Projekt im Kopf? Schreiben Sie mir, ich antworte per E-Mail. Gern auf Deutsch oder Englisch.",
    direct: "Oder direkt",
    email: "E-Mail",
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      sending: "Wird gesendet…",
      send: "Nachricht senden",
      sent: "Nachricht gesendet. Ich antworte per E-Mail.",
      failed: "Nachricht nicht gesendet.",
      retry: "Versuchen Sie es erneut oder schreiben Sie an",
    },
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite existiert nicht oder wurde verschoben. Schauen Sie sich stattdessen die Projekte an.",
    viewProjects: "Projekte ansehen",
    home: "Zur Startseite",
  },
}

const dictionaries: Record<Locale, Dictionary> = { en, de }

export function getDictionary(lang: Locale) {
  return dictionaries[lang]
}

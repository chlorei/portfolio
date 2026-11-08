export type ProjectStatus = "Live" | "Client work" | "In progress"

export interface Project {
  slug: string
  title: string
  summary: string
  status: ProjectStatus
  role: string
  image?: string
  // Short list shown on the project card; defaults to the first stack items
  tags?: string[]
  points: string[]
  stack: { layer: string; items: string[] }[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: "incamp",
    title: "inCamp",
    summary: "A matchmaking platform for university students to find teammates, co-founders and small paid tasks.",
    status: "Live",
    role: "Full-stack: backend, frontend and deployment",
    image: "/incamp.webp",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Next.js", "Docker"],
    points: [
      "Async FastAPI backend on PostgreSQL. People and projects are matched with semantic search over pgvector embeddings.",
      "Real-time updates over WebSockets with Redis Pub/Sub. Redis also handles caching, rate limiting and short-lived WebSocket auth tickets.",
      "Next.js 16 frontend in four languages (EN, DE, RU, ZH), installable as a PWA, with light and dark themes.",
      "Runs on Docker Compose behind Caddy, which handles HTTPS and routes /api, /ws and /docs. Schema changes go through Alembic migrations.",
      "Transactional email through Brevo in production and Mailpit locally.",
    ],
    stack: [
      { layer: "Backend", items: ["Python", "FastAPI", "SQLAlchemy 2 (async)", "PostgreSQL", "pgvector", "Alembic"] },
      { layer: "Frontend", items: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "Framer Motion"] },
      { layer: "Infrastructure", items: ["Docker Compose", "Caddy", "Redis", "WebSockets", "Brevo"] },
    ],
    links: [{ label: "incamp.online", href: "https://incamp.online" }],
  },
  {
    slug: "relinxr",
    title: "Relinxr",
    summary: "A link analytics SaaS: short links with click tracking and a dashboard of who clicked, where and when.",
    status: "Live",
    role: "Solo product: design and full-stack development",
    image: "/relinxr.webp",
    points: [
      "Link shortening with click tracking, aggregated into dashboard charts.",
      "JWT-based authentication and per-user data in MongoDB.",
      "Full UI built from scratch with shadcn/ui components and Recharts.",
    ],
    stack: [
      { layer: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"] },
      { layer: "Backend", items: ["Next.js Route Handlers", "MongoDB", "JWT"] },
    ],
    links: [
      { label: "rld.bio", href: "https://rld.bio" },
      { label: "Source", href: "https://github.com/chlorei/https---github.com-chlorei-linklab" },
    ],
  },
  {
    slug: "pokerocheck",
    title: "Pokerocheck",
    summary: "Migration of a production React SPA to a server-rendered Next.js app for a client.",
    status: "Client work",
    role: "Frontend developer (freelance)",
    image: "/pokerocheck.webp",
    points: [
      "Moved the existing single-page app to Next.js with server-side rendering, so pages arrive as HTML and can be indexed.",
      "Rebuilt UI components, routing and state management during the migration.",
    ],
    stack: [{ layer: "Frontend", items: ["Next.js", "React", "TypeScript", "styled-components"] }],
    links: [{ label: "pokerocheck.ru", href: "https://pokerocheck.ru" }],
  },
  {
    slug: "sound-portfolio",
    title: "Sound designer portfolio",
    summary: "A portfolio site in four languages with a custom audio player.",
    status: "Client work",
    role: "Frontend developer (freelance)",
    image: "/suo.webp",
    points: [
      "Custom audio player built directly on the HTML5 audio API.",
      "EN, RU, ZH and JA versions with fonts switched per language.",
    ],
    stack: [{ layer: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"] }],
    links: [],
  },
  {
    slug: "d1lemma",
    title: "d1lemma",
    summary: "An open-source, local-first task manager with a built-in rich-text editor.",
    status: "In progress",
    role: "Solo project",
    image: "/dilemma.webp",
    points: [
      "Tasks and notes are stored locally first, so the app works offline.",
      "Rich-text editor integrated into each task.",
    ],
    stack: [
      { layer: "Frontend", items: ["React", "Redux"] },
      { layer: "Backend", items: ["Node.js"] },
    ],
    links: [],
  },
]

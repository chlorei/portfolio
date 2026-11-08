export type ProjectStatus = "Live" | "Client work" | "In progress" | "University"

export interface Project {
  slug: string
  title: string
  summary: string
  status: ProjectStatus
  role: string
  image?: string
  // Extra screenshots shown under the main image on the detail page
  gallery?: { src: string; alt: string }[]
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
    gallery: [
      { src: "/incamp/onboarding.webp", alt: "Onboarding: profile, skills and working style used for matching" },
      { src: "/incamp/profile.webp", alt: "Public profile with projects, skills and open bounties" },
      { src: "/incamp/project-dark.webp", alt: "Project page in dark theme" },
      { src: "/incamp/post-bounty.webp", alt: "Posting a bounty: a small paid task" },
    ],
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
    slug: "raytracer",
    title: "CSG ray tracer",
    summary: "A C++17 ray tracer that renders JSON scenes built with constructive solid geometry. University team project, graded 20/20 with maximum bonus points.",
    status: "University",
    role: "Team of three, TU Hamburg, Object Oriented Programming course",
    image: "/raytracer.webp",
    gallery: [
      { src: "/raytracer/mirror.webp", alt: "Framed mirror with second-order reflections" },
      { src: "/raytracer/puddle.webp", alt: "Glass tori, metal and a puddle with an uneven edge" },
      { src: "/raytracer/glass.webp", alt: "Glass of different thickness refracting a striped floor" },
      { src: "/raytracer/neon.webp", alt: "Neon tunnel animation built from CSG frames" },
    ],
    tags: ["C++17", "CMake", "Eigen", "Docker", "pybind11"],
    points: [
      "Everything is a Solid with two methods, intersect(ray) and contains(point). Primitives, boolean operations and transforms all implement it (Composite pattern), so CSG nests without limit and a new primitive only needs those two methods.",
      "Spheres, half-spaces and tori, including a custom quartic solver for the torus. Union, intersection, difference, exclusion and negation reduce to an algebra of sorted ray intervals.",
      "Recursive shading: reflection, refraction by Snell’s law with total internal reflection, shadows, Phong lighting, jittered anti-aliasing. Multithreaded rendering cut the showcase scene from 5.3 s to 1.1 s on 12 cores.",
      "Unit tests for every module check properties rather than magic numbers, e.g. a glass sphere must flip the background upside down. Every JSON scene runs as a regression test in CTest, with AddressSanitizer and UBSan builds.",
      "Multi-stage Docker build pinned by digest that runs the tests with GCC and -Werror during the build, about 360 MB final image running as a non-root user.",
      "Python bindings via pybind11 and ffmpeg scripts for animations, Doxygen API docs and UML class diagrams.",
    ],
    stack: [
      { layer: "Core", items: ["C++17", "Eigen", "nlohmann/json", "std::thread"] },
      { layer: "Build and tests", items: ["CMake", "doctest", "CTest", "AddressSanitizer", "UBSan"] },
      { layer: "Tooling", items: ["Docker", "pybind11", "Python", "ffmpeg", "Doxygen"] },
    ],
    links: [],
  },
  {
    slug: "relinxr",
    title: "Relinxr",
    summary: "A link analytics SaaS: short links with click tracking and a dashboard of who clicked, where and when.",
    status: "Live",
    role: "Solo product: design and full-stack development",
    image: "/relinxr.webp",
    gallery: [
      { src: "/relinxr/overview.webp", alt: "Overview: totals, clicks over the last 7 days and top countries" },
      { src: "/relinxr/project.webp", alt: "A project: its links, their clicks and settings in one place" },
    ],
    points: [
      "Link shortening with click tracking, aggregated into dashboard charts of daily clicks and the countries they come from.",
      "Projects group links by campaign, client or release and show their clicks together. Links made without an account move into it on sign-up.",
      "Light and dark themes.",
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

"use client"

import Image from "next/image"

export default function About() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Next.js Route Handlers / API", "MongoDB", "REST APIs", "JWT Auth"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "CI/CD"],
    },
    {
      category: "Design & UX",
      skills: ["UI Design", "Component Architecture", "Accessibility", "Performance optimization", "Mobile-First"],
    },
  ]
  const education = [
    {
      institution: "TUHH — Technische Universität Hamburg",
      degree: "Bachelor in Computer Science",
      period: "2025–2028",
      description: "Ongoing degree program focused on computer science fundamentals and advanced software engineering.",
    },
    {
      institution: "Studienkolleg Hamburg, T-Kurs",
      degree: "Preparatory Technical Track",
      period: "2024–2025",
      description: "Intensive preparation in mathematics, physics, computer science, and engineering fundamentals.",
    },
    {
      institution: "Lyceum No. 3, Irkutsk",
      degree: "Advanced Secondary Education",
      period: "2012–2024",
      description: "Specialized curriculum with emphasis on mathematics and natural sciences.",
    },
  ]

  const experience = [
    {
      role: "Frontend Developer",
      company: "Freelance / Project Work",
      highlights: [
        "Migrated pokerocheck.ru from legacy React SPA to modern Next.js SSR architecture",
        "Improved SEO, performance, and code structure through architectural refactoring",
        "Rebuilt UI components, optimized routing, and refactored state management",
        "Introduced best practices for scalability and maintainability",
      ],
    },
    {
      role: "Indie Developer",
      company: "Personal Projects",
      highlights: [
        "Built d1lemma: open-source task manager with integrated rich-text editor and local-first architecture",
        "Developed Relinxr: SaaS link analytics tool with authentication, dashboard UI, and data aggregation",
        "Designed and shipped utilities and tooling projects using React, TypeScript, Node.js, MongoDB, and Next.js",
      ],
    },
  ]

  const freelanceHighlights = [
    {
      title: "Modernization of Legacy Websites",
      description:
        "Migrated and refactored large production codebases from outdated frontends to cutting-edge technologies (Next.js, React Server Components, SSR), improving SEO rankings, speed, accessibility, and overall maintainability.",
    },
    {
      title: "Performance-First Development",
      description:
        "Optimized page load times by up to 60%, reducing unused bundle size and implementing caching strategies and incremental data fetching.",
    },
    {
      title: "Custom Dashboard & Analytics Tools",
      description:
        "Designed and built interactive dashboards for link analytics and conversion tracking with dynamic charts, filtering, and real-time data aggregation (Relinxr).",
    },
    {
      title: "Secure Authentication & Scalable Architecture",
      description:
        "Implemented role-based access control, secure sessions, and database-driven workflows using MongoDB, Prisma, JWT tokens and NextAuth.",
    },
    {
      title: "UI/UX Design from Scratch",
      description:
        "Created fully responsive UI systems with cohesive design language, component libraries, consistent spacing, animations, and dark/light theme support.",
    },
    {
      title: "Open-Source Tooling & Editors",
      description:
        "Developed an open-source task manager (d1lemma) with a built-in rich-text editor, offline support, and local-first privacy-focused architecture.",
    },
    {
      title: "Client Collaboration & Delivery",
      description:
        "Led technical decisions, consulted on product features, provided prototypes and Figma mockups, ensured smooth deployment to Vercel, and supported long-term maintainability.",
    },
    {
      title: "SEO & Accessibility Enhancements",
      description:
        "Applied semantic HTML, ARIA roles, structured metadata, and server-rendered pages — improving discoverability and inclusive UX.",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About</h1>
          <p className="text-[#A1A1A1]">Learn more about my background and expertise.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Profile Image */}
          <div className="flex items-start justify-center lg:col-span-1">
            <div className="w-full max-w-sm aspect-square rounded-lg border border-[#1F1F1F] bg-[#141414] overflow-hidden shadow-lg">
              <Image
                src="/myPhoto.png"
                alt="Aleksandr Alekseev Developer Photo"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Personal Info & Bio */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Aleksandr Alekseev</h2>
              <p className="text-[#B6F2C1] font-medium">Full-Stack Software Engineer</p>
              <p className="text-[#A1A1A1] leading-relaxed">
                I'm a 19-year-old software engineer based in Hamburg, Germany, passionate about building elegant,
                performant web applications. Currently studying Computer Science at TUHH, I combine academic rigor with
                practical experience in modern web development.
              </p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-2 gap-6 pb-8 border-b border-[#1F1F1F]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#B6F2C1] mb-2">Age</p>
                <p className="text-lg font-medium text-[#FFFFFF]">19</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#B6F2C1] mb-2">Location</p>
                <p className="text-lg font-medium text-[#FFFFFF]">Hamburg, Germany</p>
              </div>
              {/* <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#B6F2C1] mb-2">Nationality</p>
                <p className="text-lg font-medium text-[#FFFFFF]">Russian</p>
              </div> */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#B6F2C1] mb-2">Education</p>
                <p className="text-lg font-medium text-[#FFFFFF]">TUHH</p>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B6F2C1]">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#FFFFFF]">Russian</span>
                  <span className="text-sm text-[#A1A1A1]">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#FFFFFF]">German</span>
                  <span className="text-sm text-[#A1A1A1]">C1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#FFFFFF]">English</span>
                  <span className="text-sm text-[#A1A1A1]">C1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] pt-16 mb-16">
          <h2 className="text-2xl font-bold mb-12">Education & Experience</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B6F2C1] mb-8">Education</h3>
              <div className="space-y-6 relative">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-[#1F1F1F]" />

                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-[#141414] border-2 border-[#B6F2C1] rounded-full" />

                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-[#FFFFFF]">{edu.institution}</h4>
                        <span className="text-xs text-[#A1A1A1] whitespace-nowrap">{edu.period}</span>
                      </div>
                      <p className="text-sm font-medium text-[#B6F2C1]">{edu.degree}</p>
                      <p className="text-sm text-[#A1A1A1] leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B6F2C1] mb-8">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#1F1F1F] bg-[#111111] hover:border-[#B6F2C1] transition-colors duration-200"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#FFFFFF] text-lg">{job.role}</h4>
                        <p className="text-sm text-[#B6F2C1] font-medium">{job.company}</p>
                      </div>

                      <ul className="space-y-3">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-sm text-[#A1A1A1] leading-relaxed">
                            <span className="text-[#B6F2C1] mt-0.5 flex-shrink-0">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Freelance & Professional Experience Section */}
        <div className="border-t border-[#1F1F1F] pt-16">
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold">Freelance & Professional Experience</h2>
            <p className="text-[#A1A1A1]">Frontend & Full-Stack Developer — Freelance / Remote</p>
            <p className="text-sm text-[#B6F2C1] font-medium">2023 — Present</p>
          </div>

          <div className="mb-12 p-6 rounded-lg border border-[#1F1F1F] bg-[#111111]">
            <p className="text-[#A1A1A1] leading-relaxed">
              Worked with startups, personal brands, and small businesses to design and deliver modern, high-performance
              web solutions. Consistently focused on product quality, user experience, and measurable business outcomes.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-6 mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B6F2C1] mb-8">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {freelanceHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#1F1F1F] bg-[#141414] hover:border-[#B6F2C1] transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#FFFFFF] group-hover:text-[#B6F2C1] transition-colors duration-200">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-[#A1A1A1] leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities Summary */}
          <div className="p-8 rounded-lg border border-[#B6F2C1]/20 bg-[#B6F2C1]/5">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B6F2C1]">Core Capabilities</h3>
              <p className="text-[#A1A1A1] leading-relaxed">
                Delivered clean codebases, realistic deadlines, product-oriented thinking, business-focused
                problem-solving, and strong communication with clients. Each project is approached with attention to
                detail, scalability, and long-term maintainability.
              </p>
            </div>
          </div>
        </div>



        {/* Skills Section */}
        <div className="border-t border-[#1F1F1F] pt-16">
          <h2 className="text-2xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#B6F2C1]">{group.category}</h3>
                <ul className="space-y-2">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-[#A1A1A1] hover:text-[#FFFFFF] transition-colors duration-200">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

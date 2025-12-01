"use client"

import Image from "next/image"

export default function About() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Redux", "Material UI"],
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

  return (
    <main className="min-h-screen bg-background pt-32">
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
                alt="Aleksandr Alekseev - Developer Photo"
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#B6F2C1] mb-2">Nationality</p>
                <p className="text-lg font-medium text-[#FFFFFF]">Russian</p>
              </div>
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

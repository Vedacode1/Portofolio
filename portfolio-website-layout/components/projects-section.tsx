"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js featuring real-time inventory management and seamless checkout experience.",
    image: "/ecommerce-platform-dashboard-modern-design.jpg",
    tags: ["Next.js", "React", "Tailwind"],
    alt: "Modern e-commerce platform dashboard showing product management interface with analytics and inventory tracking",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with interactive charts, user management, and real-time data updates for a B2B SaaS application.",
    image: "/saas-analytics-dashboard-with-charts.jpg",
    tags: ["React", "TypeScript", "API Integration"],
    alt: "SaaS analytics dashboard displaying interactive charts, user metrics, and real-time data visualization",
  },
  {
    title: "Design System",
    description:
      "Comprehensive component library and design system for enterprise applications with full documentation.",
    image: "/design-system-library.png",
    tags: ["Storybook", "Components", "Documentation"],
    alt: "Design system component library showcasing reusable UI components with design tokens and documentation",
  },
  {
    title: "Mobile App Landing",
    description:
      "High-converting landing page for a mobile app that increased signups by 340% through optimized UX and messaging.",
    image: "/mobile-app-landing-page-conversion.jpg",
    tags: ["Landing Page", "Conversion", "Responsive"],
    alt: "Mobile app landing page with compelling hero section, feature showcase, and clear call-to-action buttons",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            A selection of recent work showcasing my expertise and approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

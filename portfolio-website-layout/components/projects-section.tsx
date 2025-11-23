import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js featuring real-time inventory management and seamless checkout experience.",
    image: "/ecommerce-platform-dashboard-modern-design.jpg",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with interactive charts, user management, and real-time data updates for a B2B SaaS application.",
    image: "/saas-analytics-dashboard-with-charts.jpg",
    tags: ["React", "TypeScript", "API Integration"],
  },
  {
    title: "Design System",
    description:
      "Comprehensive component library and design system for enterprise applications with full documentation.",
    image: "/design-system-library.png",
    tags: ["Storybook", "Components", "Documentation"],
  },
  {
    title: "Mobile App Landing",
    description:
      "High-converting landing page for a mobile app that increased signups by 340% through optimized UX and messaging.",
    image: "/mobile-app-landing-page-conversion.jpg",
    tags: ["Landing Page", "Conversion", "Responsive"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-balance">
            A selection of recent work showcasing my expertise and approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
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

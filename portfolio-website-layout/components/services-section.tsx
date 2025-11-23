import { Code2, Zap, Palette } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks like React, Next.js, and TypeScript for optimal performance.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "High-converting landing pages designed to showcase your product and turn visitors into customers.",
  },
  {
    icon: Palette,
    title: "UI Fixes & Polish",
    description: "Refine and improve existing interfaces with attention to detail and user experience best practices.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-xl text-muted-foreground text-balance">
            I specialize in creating modern, accessible web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

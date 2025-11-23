export function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Crafting Modern Web Experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
              I'm a freelance frontend developer specializing in building beautiful, performant, and accessible web
              applications that drive results.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-border">
              <img
                src="/frontend-developer-workspace-modern.jpg"
                alt="Frontend developer workspace"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

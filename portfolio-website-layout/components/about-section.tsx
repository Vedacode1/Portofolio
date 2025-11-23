"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center order-1 md:order-1">
            <div className="w-full max-w-md md:max-w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-border relative overflow-hidden">
              <Image
                src="/professional-developer-portrait.png"
                alt="Professional portrait of a frontend developer in a modern workspace"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center order-2 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">About Me</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              I'm a passionate frontend developer with 5+ years of experience building web applications that users love.
              I specialize in creating performant, accessible interfaces using modern web technologies.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              My approach combines technical excellence with a deep understanding of user experience design. I'm
              committed to writing clean, maintainable code and staying current with industry best practices.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me contributing to open source projects, writing about web development,
              or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

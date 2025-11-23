"use client"

import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance max-[420px]:text-3xl">
              Crafting Modern Web Experiences
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed text-balance">
              I'm a freelance frontend developer specializing in building beautiful, performant, and accessible web
              applications that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors text-center"
              >
                View Work
              </Link>
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="w-full max-w-md md:max-w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-border relative overflow-hidden">
              <Image
                src="/frontend-developer-workspace-modern.jpg"
                alt="Modern frontend developer workspace with multiple monitors showing code and design tools"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

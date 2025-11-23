"use client"

import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance">
            Have a project in mind? I'd love to hear about it and discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <form action="https://formsubmit.co/your@email.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New contact form submission!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-6 md:space-y-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-base sm:text-lg text-foreground hover:text-accent transition-colors break-all"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="p-3 bg-card border border-border rounded-lg hover:border-accent hover:text-accent transition-all"
                    aria-label="Send Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I typically respond to inquiries within 24 hours. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

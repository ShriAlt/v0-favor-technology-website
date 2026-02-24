import { Mail, Phone } from "lucide-react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Favor", href: "#why-favor" },
  { label: "Results", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  "Mobile App Development",
  "Web App Development",
  "SEO Optimization",
  "Google & Meta Ads",
  "Social Media Marketing",
  "Brand Identity & Media",
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  F
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Favor
              </span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Your all-in-one innovation hub. Apps. Digital Marketing. Media.
              Driving growth for modern businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/918122347028"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:ceo@favorad.in"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ceo@favorad.in"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                ceo@favorad.in
              </a>
              <a
                href="https://wa.me/918122347028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                +91 8122347028
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Favor. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            Innovate. Market. Inspire.
          </p>
        </div>
      </div>
    </footer>
  )
}

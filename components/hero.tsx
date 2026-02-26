"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      {/* Subtle accent glow */}
      <div className="animate-glow-pulse absolute -right-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Technology-Powered Growth Partner
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance leading-[1.1]">
          We Engineer Growth{" "}
          <span className="text-accent">Through Systems</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-4 text-lg font-medium tracking-wide text-foreground/70 md:text-xl">
          High-Code Web Applications. Omnichannel Marketing. AI Automation.
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-base text-muted-foreground/80 leading-relaxed md:text-lg">
          Favor combines production-grade web engineering with full-funnel
          performance marketing to help ambitious brands scale predictably
          and profitably.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-lg"
          >
            View Plans
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-secondary/70"
          >
            <MessageCircle size={16} />
            Book Strategy Call
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-px rounded-2xl border border-border/50 bg-border/20 overflow-hidden">
          {[
            { value: "200+", label: "Campaigns Managed" },
            { value: "3-6X", label: "Avg ROAS Delivered" },
            { value: "11+", label: "Active Client Partners" },
            { value: "13+", label: "Platforms Covered" },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 min-w-[140px] bg-background/80 px-6 py-5 text-center backdrop-blur-sm">
              <p className="text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] tracking-wider text-muted-foreground uppercase md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
